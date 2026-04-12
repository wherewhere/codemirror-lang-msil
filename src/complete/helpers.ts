import type { SyntaxNode } from "@lezer/common";

export function findPrevSibling(node: SyntaxNode, nodes: readonly string[]) {
    for (let pos: SyntaxNode | null = node; pos; pos = pos.prevSibling) {
        if (nodes.indexOf(pos.name) > -1) { return pos; }
        if (pos.type.isTop) { break; }
    }
}

export function isAtRoot(node: SyntaxNode, nodes: readonly string[]) {
    if (nodes.indexOf(node.name) > -1) { return node; }
    let parent = node.parent;
    if (parent) {
        if (parent.name === '⚠') {
            parent = parent.parent;
            if (parent && nodes.indexOf(parent.name) > -1) {
                return parent;
            }
        }
        else if (nodes.indexOf(parent.name) > -1) {
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