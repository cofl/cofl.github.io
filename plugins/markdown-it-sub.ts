// from https://www.npmjs.com/package/markdown-it-sub-alt
import type { PluginSimple } from 'markdown-it';
import type StateInline from 'markdown-it/lib/rules_inline/state_inline';
const UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
const TILDE_CHARCODE = '~'.charCodeAt(0);
const BANG_CHARCODE = '!'.charCodeAt(0);

function subscript(state: StateInline, silent: boolean): boolean {
    if (silent)
        return false;
    const start = state.pos;
    const max = state.posMax;

    if (state.src.charCodeAt(start) !== TILDE_CHARCODE)
        return false;
    if (state.src.charCodeAt(start + 1) !== BANG_CHARCODE)
        return false;
    if (start + 3 >= max)
        return false;

    let found = false;
    state.pos = start + 2;
    while (state.pos < max) {
        if (state.src.charCodeAt(state.pos) === TILDE_CHARCODE) {
            found = true;
            break;
        }

        state.md.inline.skipToken(state);
    }

    if (!found || start + 2 === state.pos) {
        state.pos = start;
        return false;
    }

    const content = state.src.slice(start + 2, state.pos);

    // don't allow unescaped newlines inside
    if (content.match(/(^|[^\\])(\\\\)*[\n]/)) {
        state.pos = start;
        return false;
    }

    // found!
    state.posMax = state.pos;
    state.pos = start + 2;

    // Earlier we checked !silent, but this implementation does not need it
    let token = state.push('sub_open', 'sub', 1);
    token.markup = '~';

    token = state.push('text', '', 0);
    token.content = content.replace(UNESCAPE_RE, '$1');

    token = state.push('sub_close', 'sub', -1);
    token.markup = '~';

    state.pos = state.posMax + 1;
    state.posMax = max;
    return true;
}

export default ((md => md.inline.ruler.after('emphasis', 'sub', subscript)) as PluginSimple);
