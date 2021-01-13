import type { ViperContext } from '@cofl/viper';
import type { ViperPugPageData } from '@cofl/viper-pug';
import type { DirectoryListing } from './directory-helper';
import { parse, Node, NodeType, HTMLElement } from 'node-html-parser';

type TocElement = { link: string, text: string };
type Toc = (TocElement | string | Toc)[];
type NonEmpty<T extends any[]> = T extends Array<infer U> ? T & { 0: U } : never;

function isHtmlElement(node: Node): node is HTMLElement {
    return node.nodeType === NodeType.ELEMENT_NODE;
}

function *findAllElementsInOrder(node: Node, tags: string[]): Generator<HTMLElement, void, unknown> {
    tags = tags.map(a => a.toLowerCase());
    const queue = [ node ].filter(isHtmlElement);
    while(queue.length > 0){
        const current = queue.shift()!;
        if(current.rawTagName && tags.includes(current.rawTagName.toLowerCase()))
            yield current;
        queue.unshift(...current.childNodes.filter(isHtmlElement));
    }
}

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
                stack[stack.length - 1]!.push('<hr>');
            }
            for (const element of findAllElementsInOrder(root, [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'])) {
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
                stack[stack.length - 1]!.push('<hr>');
                footer.setAttribute('class', 'toc-footer');
                footer.removeAttribute('id');
                stack[stack.length - 1]!.push(footer.outerHTML);
            }
            return stack.pop()!;
        },
        directory: function _directory(listing: DirectoryListing[], level = 1): Toc {
            const stack: Toc = [];
            listing.filter(a => !a.isPage).forEach(a => {
                stack.push({
                    link: `#${a.id}`,
                    text: a.title
                });
                if (level <= 4 && a.children != null) {
                    let i = _directory(a.children, level + 1);
                    if (i.length > 0)
                        stack.push(i);
                }
            });
            return stack;
        }
    }
}
