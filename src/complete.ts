import { type CompletionContext, type CompletionResult } from "@codemirror/autocomplete";
import { syntaxTree } from "@codemirror/language";
import { SyntaxNode } from "@lezer/common";
import { memberDecl, classMemberDecl } from "./keywords";

function findDescendant(node: SyntaxNode, nodes: readonly string[]) {
    for (let pos: SyntaxNode | null = node; pos; pos = pos.parent) {
        if (nodes.indexOf(pos.name) > -1) { return pos; }
        if (pos.type.isTop) { break; }
    }
}

function isAtRoot(node: SyntaxNode, nodes: readonly string[]) {
    if (nodes.indexOf(node.name) > -1) { return node; }
    let parent = node.parent;
    if (parent) {
        if (nodes.indexOf(parent.name) > -1) {
            return parent;
        }
        else if (node.name === '.' && parent.name === '⚠') {
            parent = parent.parent;
            if (parent && nodes.indexOf(parent.name) > -1) {
                return parent;
            }
        }
    }
    return null;
}

export function autocomplete(context: CompletionContext): CompletionResult | null {
    let node = syntaxTree(context.state).resolveInner(context.pos, -1);
    if (context.state.sliceDoc(node.from, node.to).startsWith('.')) {
        let delim = isAtRoot(node, ["Delim"]);
        function memberBody() {
            return {
                from: node.from,
                options: memberDecl
            };
        }
        if (delim) {
            switch (delim.parent?.name) {
                case "Namespace":
                    return memberBody();
                case "Class":
                    return {
                        from: node.from,
                        options: classMemberDecl
                    }
            }
        }
        else if (isAtRoot(node, ["START"])) {
            return memberBody();
        }
    }
    return null;
}