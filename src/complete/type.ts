import type { CompletionContext } from "@codemirror/autocomplete";
import type { SyntaxNode } from "@lezer/common";
import { securityAttrBody } from "./attribute";

export function typeSpecBody(node: SyntaxNode, context: CompletionContext) {
    const parent = node.parent?.parent;
    switch (parent?.name) {
        case "TypeSpec":
            const prevSibling = parent.prevSibling;
            switch (prevSibling?.name) {
                case "Keyword":
                    const code = context.state.sliceDoc(prevSibling.from, prevSibling.to);
                    if (code === ".override") {
                        const result = typeBody(node, context);
                        result.options.push({
                            label: "method",
                            type: "keyword"
                        });
                        return result;
                    }
                case '⚠':
                    if (parent.parent?.name === "Security") {
                        return securityAttrBody(node);
                    }
            }
        case "Type":
            return typeBody(node, context);
    }
}

import { typeOptions } from "./keywords/type";
import { getCompletion } from "./helpers";

function typeBody(node: SyntaxNode, context: CompletionContext) {
    return getCompletion(node.from, typeOptions);
}