import { Viper, ViperContext, ViperPageData, ViperPluginType } from '@cofl/viper';
import { ViperFileExportPlugin, ViperFileImportPlugin } from '@cofl/viper-file';
import { ViperMarkdownIt } from '@cofl/viper-markdown-it';
import { ViperSassPlugin } from '@cofl/viper-sass';
import { prettyPrint } from '@cofl/viper-print-tree';
import { ViperPugPlugin } from '@cofl/viper-pug';
import { lookup } from 'mime-types';
import { load as loadYaml } from 'js-yaml';

// @ts-ignore
import decorate from 'markdown-it-decorate';
// @ts-ignore
import footnote from 'markdown-it-footnote';
// @ts-ignore
import multimdTable from 'markdown-it-multimd-table';
// @ts-ignore
import deflist from 'markdown-it-deflist';

import tocGenerator from './plugins/toc-generator';
import directoryHelper from './plugins/directory-helper';
import mdSub from './plugins/markdown-it-sub';
import anchors from './plugins/markdown-it-anchor';

const JSON_CONTENT_TYPE = lookup('.json') || void function () { throw `Could not find content type for .json files` }() as never;
const YAML_CONTENT_TYPE = lookup('.yaml') || void function () { throw `Could not find content type for .yaml files` }() as never;
const HTML_CONTENT_TYPE = lookup('.html') || void function () { throw `Could not find content type for .html files` }() as never;
void async function () {
    const viper = await new Viper({
        'directory-template': 'directory.pug'
    })
        .inject(directoryHelper)
        .inject(tocGenerator)
        .use(new ViperFileImportPlugin(`${__dirname}/source/contents`))
        .use({
            type: ViperPluginType.Page,
            process(page: ViperPageData, context: ViperContext) {
                if (page.contentType !== JSON_CONTENT_TYPE)
                    return;
                const data = context.getMetadata(page);
                const ownData = JSON.parse(page.content.toString(context.getEncoding(page, 'utf-8')));
                if (!(data.template || ownData.template))
                    return;
                page.contentType = HTML_CONTENT_TYPE;
                page.content = Buffer.from("");
                page.ownMetadata = ownData;
                page.route = page.route.replace(/\.json$/i, '.html');
            }
        })
        .use({
            type: ViperPluginType.Page,
            process(page: ViperPageData, context: ViperContext) {
                if (page.contentType !== YAML_CONTENT_TYPE)
                    return;
                const data = context.getMetadata(page);
                if (!data['compile-to-json'])
                    return;
                page.contentType = JSON_CONTENT_TYPE;
                page.content = Buffer.from(JSON.stringify(loadYaml(page.content.toString(context.getEncoding(page, 'utf-8')))));
                page.route = page.route.replace(/\.yaml$/i, '.json');
            }
        })
        .use(new ViperMarkdownIt({
            presetName: 'default',
            options: {
                html: true,
                linkify: true
            }
        })
            .use(mdSub)
            .use(decorate)
            .use(footnote)
            .use(multimdTable)
            .use(anchors, { permalink: true, permalinkClass: 'fa fa-link link-icon', permalinkSymbol: '' })
            .use(deflist)
        )
        .use(new ViperSassPlugin())
        .use(new ViperPugPlugin(`${__dirname}/templates`))
        .use(new ViperFileExportPlugin(`${__dirname}/docs`))
        .build();
    console.log(prettyPrint(viper));
}();
