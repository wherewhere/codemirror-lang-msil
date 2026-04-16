import type { SyntaxNode } from "@lezer/common";

export function findPrevSibling(node: SyntaxNode | null, name: string) {
    for (let pos = node; pos; pos = pos.prevSibling) {
        if (pos.name === name) { return pos; }
    }
}

export function isAtRoot(node: SyntaxNode, name: string) {
    if (node.name === name) { return node; }
    let parent = node.parent;
    if (parent) {
        if (parent.name === '⚠') {
            parent = parent.parent;
            if (parent?.name === name) {
                return parent;
            }
        }
        else if (parent.name === name) {
            return parent;
        }
    }
    return null;
}

export function getCompletion(from: number, options: { label: string, info?: string, type: string }[]) {
    return {
        from,
        options
    };
}