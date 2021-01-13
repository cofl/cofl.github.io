import type { ViperContext } from '@cofl/viper';
import type { ViperPugPageData } from '@cofl/viper-pug';
import { parse } from 'node-html-parser';
import { DirectoryListing, titleCase } from './directory-helper';

type TocElement = { link: string, text: string };
type Toc = (TocElement | string | Toc)[];
type NonEmpty<T extends any[]> = T extends Array<infer U> ? T & { 0: U } : never;
export default function (ctx: ViperContext) {
    ctx.tocGenerator = {
        tocList: (page: ViperPugPageData): Toc => {
            const root = parse(page.content);
            const stack: NonEmpty<Toc[]> = [[]];
            let currentLevel = 1;
            const header = root.querySelector('#toc-header');
            if (header) {
                header.setAttribute('class', 'toc-header');
                header.removeAttribute('id');
                stack[stack.length - 1]!.push(header.outerHTML);
                stack[stack.length - 1]!.push('<hr/>');
            }
            for (const element of root.querySelectorAll('h1,h2,h3,h4,h5,h6')) {
                if (!element.hasAttribute('id'))
                    continue;
                if (/\bno-toc-link\b/.test(element.getAttribute('class') || ''))
                    continue;
                const level = parseInt(element.tagName.charAt(1));
                while (level > currentLevel) {
                    stack.push([]);
                    currentLevel += 1;
                }
                while (level < currentLevel) {
                    const top = stack.pop()!;
                    stack[stack.length - 1]!.push(top);
                    currentLevel -= 1;
                }
                stack[stack.length - 1]!.push({
                    link: `#${element.getAttribute('id')}`,
                    text: element.innerText.trim()
                });
            }
            while (stack.length > 1) {
                const top = stack.pop()!;
                stack[stack.length - 1]!.push(top);
            }
            const footer = root.querySelector('#toc-footer')
            if (footer) {
                stack[stack.length - 1]!.push('<hr/>');
                footer.setAttribute('class', 'toc-footer');
                footer.removeAttribute('id');
                stack[stack.length - 1]!.push(footer.outerHTML);
            }
            return stack.pop()!;
        },
        directory: function _directory(listing: DirectoryListing[], level = 1): Toc {
            const stack: Toc = [];
            listing.filter(it => !it.isPage).forEach(it => {
                stack.push({
                    link: "#" + it.id,
                    text: titleCase(it.name)
                });
                if (level <= 4 && it.children != null) {
                    let i = _directory(it.children, level + 1);
                    if (i.length > 0)
                        stack.push(i);
                }
            });
            return stack;
        }
    }
}
