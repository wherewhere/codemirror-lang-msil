import type { CompletionContext } from "@codemirror/autocomplete";
import type { SyntaxNode } from "@lezer/common";
import { typarAttrib, paramAttr } from "./keywords/attribute";
import { fieldInit } from "./keywords/others";
import { variantType, nativeType, typeOptions } from "./keywords/type";
import { getCompletion } from "./helpers";

export function initOptionBody({ from }: Pick<SyntaxNode, "from">) {
    return getCompletion(from, fieldInit);
}

export function marshalClauseBody(node: SyntaxNode, context: CompletionContext) {
    const prevSibling = node.prevSibling;
    if (prevSibling?.name === "Keyword") {
        const code = context.state.sliceDoc(prevSibling.from, prevSibling.to);
        if (code === "safearray") {
            return getCompletion(node.from, variantType);
        }
    }
    else {
        const prevSibling = node.parent?.prevSibling;
        if (prevSibling?.name === "MarshalClause") {
            const delim = node.parent?.prevSibling?.getChild("Delim");
            if (delim) {
                const keyword = delim.getChild("MarshalBlob")?.lastChild;
                if (keyword) {
                    const code = context.state.sliceDoc(keyword.from, keyword.to);
                    if (code === "safearray") {
                        return getCompletion(node.from, variantType);
                    }
                }
                if (delim.lastChild?.name === ')') {
                    return;
                }
            }
        }
    }
    return getCompletion(node.from, nativeType);
}

export function typeParamBody(node: SyntaxNode, context: CompletionContext) {
    return getCompletion(node.from, typarAttrib);
}

export function sigArgsBody(node: SyntaxNode, context: CompletionContext) {
    switch (node.prevSibling?.name) {
        case "Type":
            return getCompletion(node.from, [{
                label: "marshal",
                type: "keyword"
            }]);
        case "MarshalClause":
            return;
        default:
            return getCompletion(node.from, paramAttr.concat(typeOptions));
    }
}