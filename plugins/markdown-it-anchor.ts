import type { PluginWithOptions } from 'markdown-it';
import type StateCore from 'markdown-it/lib/rules_core/state_core';

const slugify = (s: string) => encodeURIComponent(String(s).trim().toLowerCase().replace(/[^\w- ]+/g, '').replace(/\s+/g, '-'));
const renderPermalink = (slug: string, opts: Required<AnchorOptions>, state: StateCore, idx: number) => {
    const space = () => Object.assign(new state.Token('text', '', 0), { content: ' ' })

    const linkTokens = [
        Object.assign(new state.Token('link_open', 'a', 1), {
            attrs: [
                ['class', opts.permalinkClass],
                ['href', opts.permalinkHref(slug, state)],
                ['aria-hidden', 'true']
            ]
        }),
        Object.assign(new state.Token('html_block', '', 0), { content: opts.permalinkSymbol }),
        new state.Token('link_close', 'a', -1)
    ];

    if (!state.tokens[idx + 1]!.children)
        state.tokens[idx + 1]!.children = [];
    if (opts.permalinkBefore) {
        linkTokens.push(space());
        state.tokens[idx + 1]!.children!.unshift(...linkTokens);
    } else {
        linkTokens.unshift(space());
        state.tokens[idx + 1]!.children!.push(...linkTokens);
    }
};

const uniqueSlug = (slug: string, slugs: Record<string, boolean>): string => {
    let uniq = slug;
    let i = 2;
    while (uniq in slugs)
        uniq = `${slug}-${i++}`;
    slugs[uniq] = true;
    return uniq;
};

const isLevelSelectedNumber = (selection: HeaderLevel) => (level: number) => level >= selection;
const isLevelSelectedArray = (selection: HeaderLevel[]) => (level: number) => (selection as number[]).includes(level);

type HeaderLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type AnchorOptions = {
    level?: HeaderLevel | HeaderLevel[],
    slugify?: (s: string) => string,
    permalink?: boolean,
    renderPermalink?: (slug: string, opts: Required<AnchorOptions>, state: StateCore, idx: number) => void,
    permalinkClass?: string,
    permalinkSymbol?: string,
    permalinkBefore?: boolean,
    permalinkHref?: (slug: string, state?: StateCore) => string
};
const defaults: Required<AnchorOptions> = {
    level: 1,
    slugify,
    permalink: false,
    renderPermalink,
    permalinkClass: 'header-anchor',
    permalinkSymbol: '¶',
    permalinkBefore: false,
    permalinkHref: slug => `#${slug}`
};
const anchor: PluginWithOptions<AnchorOptions> = (md, opts) => {
    const options = { ...defaults, ...opts };

    const isLevelSelected = Array.isArray(options.level)
        ? isLevelSelectedArray(options.level)
        : isLevelSelectedNumber(options.level)

    md.core.ruler.push('anchor', state => {
        const slugs: Record<string, boolean> = {};
        const tokens = state.tokens;
        const validTokens = tokens
            .filter(token => token.type === 'heading_open' && isLevelSelected(Number(token.tag.charAt(1))));
        for (const token of validTokens) {
            const index = tokens.indexOf(token);
            // Aggregate the next token children text.
            const title = tokens[index + 1]!.children!
                .filter(token => token.type === 'text' || token.type === 'code_inline')
                .reduce((acc, t) => acc + t.content, '');

            let slug = token.attrGet('id')

            if (slug == null) {
                slug = uniqueSlug(options.slugify(title), slugs);
                token.attrPush(['id', slug]);
            }

            if (options.permalink) {
                options.renderPermalink(slug, options, state, index);
            }
        }
        return true;
    })
};

export default anchor;
