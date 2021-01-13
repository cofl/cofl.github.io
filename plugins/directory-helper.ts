import { routeName, ViperContext, ViperDirectoryData, ViperItemType } from '@cofl/viper';
import type { ViperPugPageContext } from '@cofl/viper-pug';

export function titleCase(str: string): string {
    return str.replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.slice(1));
}

function getDirectoryListingUrl(ctx: ViperPugPageContext, directory: ViperDirectoryData): string | null {
    if (ctx.context.options['directory-template'])
        return directory.children.find(a => {
            const data = ctx.context.getMetadata(a);
            return data['template'] === ctx.context.options['directory-template'];
        })?.route || null;
    return null;
}

export interface DirectoryListing {
    name: string,
    title: string,
    isPage: boolean,
    route: string | null,
    id: string,
    children: DirectoryListing[] | null
}

export default function (ctx: ViperContext) {
    ctx.directory = {
        parentLink(ctx: ViperPugPageContext, default_: string | null = null): string | null {
            if (ctx.data.uplink)
                return ctx.data.uplink;
            if (ctx.context.options['directory-template'])
                return ctx.context
                    .siblings(ctx.page)
                    .find(a => ctx.context.getMetadata(a).template === ctx.context.options['directory-template'])?.route
                    || default_;
            return default_;
        },
        parentName(ctx: ViperPugPageContext): string {
            const parent = ctx.context.parent(ctx.page);
            if (parent) {
                const data = ctx.context.getMetadata(parent);
                return data.title || titleCase(routeName(parent.route)) || 'root';
            }
            return 'root';
        },
        listing: function _listing(ctx: ViperPugPageContext) {
            let number = 1;
            function get(item: ViperDirectoryData): DirectoryListing[] {
                return item.children
                    .filter(a => {
                        const data = ctx.context.getMetadata(a);
                        if (ctx.context.options['directory-template']
                            && ctx.context.options['directory-template'] === data['template'])
                            return false;
                        if (data['directory-exclude'])
                            return false;
                        return true;
                    })
                    .map(a => {
                        const name = routeName(a.route);
                        const data = ctx.context.getMetadata(a);
                        return {
                            name,
                            title: data.title || titleCase(name),
                            isPage: a.itemType === ViperItemType.Page,
                            route: (a.itemType === ViperItemType.Page ? a.route : getDirectoryListingUrl(ctx, a as ViperDirectoryData))?.replace(/\/index\.html?$/i, '/') || null,
                            id: `item${number++}`,
                            children: a.itemType === ViperItemType.Page ? null : get(a as ViperDirectoryData)
                        };
                    });
            }
            const parent = ctx.context.parent(ctx.page);
            if (!parent)
                return [];
            return get(parent);
        }
    };
    ctx.titleCase = titleCase;
}
