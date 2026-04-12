import type { CompletionContext } from "@codemirror/autocomplete";
import type { SyntaxNode } from "@lezer/common";
import { classAttr, fieldAttr, eventAttr, propAttr, methodAttr, implAttr, paramAttr, asmAttr, exptAttr, manresAttr } from "./keywords/attribute";
import { classExtendsDecl, callConv, tls, secAction } from "./keywords/others";
import { typeOptions } from "./keywords/type";
import { findPrevSibling, getCompletion } from "./helpers";

export function classAttrBody(node: SyntaxNode, context: CompletionContext) {
    if (node.parent?.name === '⚠') {
        node = node.parent;
    }
    let prevSibling = node.prevSibling;
    if (prevSibling) {
        if (prevSibling.name === '⚠') {
            prevSibling = prevSibling.prevSibling;
        }
        if (prevSibling) {
            const code = context.state.sliceDoc(prevSibling.from, prevSibling.to).trimEnd();
            switch (code) {
                case ".class":
                    return getCompletion(node.from, classAttr.concat({
                        label: "extern",
                        type: "keyword"
                    }));
                case "nested":
                    return getCompletion(prevSibling.from, classAttr);
            }
            if (findPrevSibling(prevSibling, ["ClassName"])) {
                return getCompletion(node.from, classExtendsDecl);
            }
        }
    }
    return getCompletion(node.from, classAttr);
}

export function classBodyAttrBody(node: SyntaxNode, context: CompletionContext) {
    let prevSibling = node.prevSibling;
    if (prevSibling?.name === '⚠') {
        prevSibling = prevSibling.prevSibling;
    }
    if (prevSibling?.name === "Keyword") {
        const code = context.state.sliceDoc(prevSibling.from, prevSibling.to);
        switch (code) {
            case ".param":
                return getCompletion(node.from, [{
                    label: "type",
                    type: "keyword"
                }, {
                    label: "constraint",
                    type: "keyword"
                }]);
            case ".interfaceimpl":
                return getCompletion(node.from, [{
                    label: "type",
                    type: "keyword"
                }]);
        }
    }
}

export function fieldAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return getCompletion(from, fieldAttr.concat(typeOptions));
}

export function eventAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return getCompletion(from, eventAttr.concat(typeOptions));
}

export function propAttrBody(node: SyntaxNode) {
    switch (node.prevSibling?.name) {
        case "Keyword":
            return getCompletion(node.from, propAttr.concat(callConv));
        case "CallingConvention":
            return getCompletion(node.from, callConv);
    }
}

export function methodAttrBody(node: SyntaxNode) {
    switch (node.prevSibling?.name) {
        case "Keyword":
        case "MethodAttribute":
            return getCompletion(node.from, methodAttr.concat(callConv, typeOptions));
        case "CallingConvention":
            return getCompletion(node.from, callConv.concat(typeOptions));
        case "MethodArguments":
        case "ImplementationAttribute":
            return getCompletion(node.from, implAttr);
    }
}

export function paramAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return getCompletion(from, paramAttr);
}

export function dataAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return getCompletion(from, tls);
}

export function securityAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return getCompletion(from, secAction);
}

export function assemblyAttrBody(node: SyntaxNode, context: CompletionContext) {
    const prevSibling = node.prevSibling;
    if (prevSibling) {
        const code = context.state.sliceDoc(prevSibling.from, prevSibling.to);
        if (code === ".assembly") {
            return getCompletion(node.from, asmAttr.concat({
                label: "extern",
                type: "keyword"
            }));
        }
    }
    return getCompletion(node.from, asmAttr);
}

export function assemblyRefAttrBody(node: SyntaxNode, context: CompletionContext) {
    const prevSibling = node.prevSibling;
    switch (prevSibling?.name) {
        case "AssemblyName":
            return getCompletion(node.from, [{
                label: "as",
                type: "keyword"
            }]);
        case "Keyword":
            const code = context.state.sliceDoc(prevSibling.from, prevSibling.to);
            if (code === "as") {
                return;
            }
    }
    return getCompletion(node.from, asmAttr);
}

export function assemblyBodyAttrBody(node: SyntaxNode, context: CompletionContext) {
    const prevSibling = node.prevSibling;
    if (prevSibling) {
        const code = context.state.sliceDoc(prevSibling.from, prevSibling.to);
        if (code === ".hash") {
            return getCompletion(node.from, [{
                label: "algorithm",
                type: "keyword"
            }]);
        }
    }
}

export function exptAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return getCompletion(from, exptAttr);
}

export function manifestResAttrBody(node: SyntaxNode) {
    if (node.prevSibling?.name === "IdentifierName") {
        return getCompletion(node.from, [{
            label: "as",
            type: "keyword"
        }]);
    }
    return getCompletion(node.from, manresAttr);
}