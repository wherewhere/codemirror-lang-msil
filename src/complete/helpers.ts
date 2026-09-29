import type { SyntaxNode } from "@lezer/common";
import type { Completion } from "@codemirror/autocomplete";

export function findPrevSibling(node: SyntaxNode | null, name: string) {
    for (let pos = node; pos; pos = pos.prevSibling) {
        if (pos.type?.is(name)) { return pos; }
    }
}

export function isAtRoot(node: SyntaxNode, name: string) {
    if (node.type?.is(name)) { return node; }
    let parent = node.parent;
    if (parent) {
        if (parent.name === '⚠') {
            parent = parent.parent;
            if (parent?.type?.is(name)) {
                return parent;
            }
        }
        else if (parent.type?.is(name)) {
            return parent;
        }
    }
    return null;
}

export function getCompletion<T extends Completion>(from: number, options: T[]) {
    return {
        from,
        options
    };
}