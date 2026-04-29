import type { Text } from "@codemirror/state";
import type { SyntaxNode, Tree } from "@lezer/common";
import type { EditorView } from "@codemirror/view";
import { indentUnit as indentUnitFacet, syntaxTree } from "@codemirror/language";

const OPEN_CHARS = [123, 40, 91, 60];   // { ( [ <
function isDelim(node: SyntaxNode, source: Text) {
    if (node.name !== "Delim") {
        return false;
    }

    if (node.to - node.from < 2) {
        return false;
    }

    const openChar = source.sliceString(node.from, node.from + 1).charCodeAt(0);
    return OPEN_CHARS.includes(openChar);
}

function getDepth(source: Text, offset: number, tree: Tree) {
    let node: SyntaxNode | null = tree.resolveInner(offset, 1);
    let depth = 0;

    while (node) {
        if (isDelim(node, source) && offset > node.from && offset <= node.to - 1) {
            depth++;
        }
        node = node.parent;
    }

    return depth;
}

function shouldIncreaseIndentOnLineBreak(source: Text, offset: number, tree: Tree, trimmed: string) {
    let node = tree.resolveInner(offset, 1);
    if (!node.parent || node.name === "Delim") { return false; }

    while (node.parent.name !== "Delim") {
        const temp = node;
        node = node.parent;
        if (!node.parent) {
            node = temp;
            break;
        }
    }
    if (node.name === "Delim") { return false; }

    const currentLine = source.lineAt(offset).number;
    const startLine = source.lineAt(node.from).number;
    if (startLine >= currentLine) { return false; }

    if (node.name === "SEHBlock" && /^(catch|filter|finally|fault)\b/.test(trimmed)) {
        return false;
    }

    return true;
}

export type FormatOptions = {
    indentUnit?: string
};

const CLOSE_CHARS = [125, 41, 93, 62];  // } ) ] >
export function msilFormatter({ indentUnit }: FormatOptions = {}) {
    return function (target: EditorView) {
        const state = target.state;
        const doc = state.doc;
        const tree = syntaxTree(state);
        if (!tree.type.is("msil")) { return false; }

        const resolvedIndentUnit = indentUnit || state.facet(indentUnitFacet);
        const changes: { from: number; to: number; insert: string }[] = [];

        for (let i = 1; i <= doc.lines; i++) {
            const lineInfo = doc.line(i);
            const line = lineInfo.text;
            const trimmedRight = line.trimEnd();
            const trimmed = trimmedRight.trimStart();

            if (trimmed.length === 0) {
                if (line.length > 0) {
                    changes.push({ from: lineInfo.from, to: lineInfo.to, insert: '' });
                }
                continue;
            }

            const firstNonWhitespace = line.search(/\S/);
            const currentIndentLen = firstNonWhitespace < 0 ? line.length : firstNonWhitespace;
            const lineOffset = lineInfo.from + currentIndentLen;
            let depth = getDepth(doc, lineOffset, tree);
            if (shouldIncreaseIndentOnLineBreak(doc, lineOffset, tree, trimmed)) {
                depth++;
            }
            if (CLOSE_CHARS.includes(trimmed.charCodeAt(0))) {
                depth = Math.max(0, depth - 1);
            }
            const requiredIndent = resolvedIndentUnit.repeat(depth);

            const currentIndent = line.slice(0, currentIndentLen);
            if (currentIndent !== requiredIndent) {
                if (requiredIndent.length > currentIndent.length && requiredIndent.endsWith(currentIndent)) {
                    const missingPrefix = requiredIndent.substring(0, requiredIndent.length - currentIndent.length);
                    changes.push({ from: lineInfo.from, to: lineInfo.from, insert: missingPrefix });
                }
                else {
                    let commonPrefixLen = 0;
                    const minLen = Math.min(currentIndent.length, requiredIndent.length);
                    while (commonPrefixLen < minLen && currentIndent.charCodeAt(commonPrefixLen) === requiredIndent.charCodeAt(commonPrefixLen)) {
                        commonPrefixLen++;
                    }

                    changes.push({
                        from: lineInfo.from + commonPrefixLen,
                        to: lineInfo.from + currentIndent.length,
                        insert: requiredIndent.substring(commonPrefixLen)
                    });
                }
            }

            if (line.length > trimmedRight.length) {
                changes.push({ from: lineInfo.from + trimmedRight.length, to: lineInfo.to, insert: '' });
            }
        }

        if (changes.length) {
            target.dispatch({ changes, userEvent: "format.msil" });
        }
        return true;
    };
}