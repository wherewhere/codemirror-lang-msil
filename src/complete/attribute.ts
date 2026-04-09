import type { CompletionContext } from "@codemirror/autocomplete";
import type { SyntaxNode } from "@lezer/common";
import { classAttr, fieldAttr, eventAttr, propAttr, methodAttr, implAttr, paramAttr, asmAttr, exptAttr, manresAttr } from "./keywords/attribute";
import { classExtendsDecl, callConv, tls, secAction } from "./keywords/others";
import { typeOptions } from "./keywords/type";
import { findPrevSibling } from "./helpers";

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
                    return {
                        from: node.from,
                        options: classAttr.concat({
                            label: "extern",
                            type: "keyword"
                        })
                    };
                case "nested":
                    return {
                        from: prevSibling.from,
                        options: classAttr
                    };
            }
            if (findPrevSibling(prevSibling, ["ClassName"])) {
                return {
                    from: node.from,
                    options: classExtendsDecl
                };
            }
        }
    }
    return {
        from: node.from,
        options: classAttr
    };
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
                return {
                    from: node.from,
                    options: [{
                        label: "type",
                        type: "keyword"
                    }, {
                        label: "constraint",
                        type: "keyword"
                    }]
                };
            case ".interfaceimpl":
                return {
                    from: node.from,
                    options: [{
                        label: "type",
                        type: "keyword"
                    }]
                };
        }
    }
}

export function fieldAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return {
        from,
        options: fieldAttr.concat(typeOptions)
    };
}

export function eventAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return {
        from,
        options: eventAttr.concat(typeOptions)
    };
}

export function propAttrBody(node: SyntaxNode) {
    switch (node.prevSibling?.name) {
        case "Keyword":
            return {
                from: node.from,
                options: propAttr.concat(callConv)
            };
        case "CallingConvention":
            return {
                from: node.from,
                options: callConv
            };
    }
}

export function methodAttrBody(node: SyntaxNode) {
    switch (node.prevSibling?.name) {
        case "Keyword":
        case "MethodAttribute":
            return {
                from: node.from,
                options: methodAttr.concat(callConv, typeOptions)
            };
        case "CallingConvention":
            return {
                from: node.from,
                options: callConv.concat(typeOptions)
            };
        case "MethodArguments":
        case "ImplementationAttribute":
            return {
                from: node.from,
                options: implAttr
            };
    }
}

export function paramAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return {
        from,
        options: paramAttr
    };
}

export function dataAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return {
        from,
        options: tls
    };
}

export function securityAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return {
        from,
        options: secAction
    };
}

export function assemblyAttrBody(node: SyntaxNode, context: CompletionContext) {
    const prevSibling = node.prevSibling;
    if (prevSibling) {
        const code = context.state.sliceDoc(prevSibling.from, prevSibling.to);
        if (code === ".assembly") {
            return {
                from: node.from,
                options: asmAttr.concat({
                    label: "extern",
                    type: "keyword"
                })
            };
        }
    }
    return {
        from: node.from,
        options: asmAttr
    };
}

export function assemblyRefAttrBody(node: SyntaxNode, context: CompletionContext) {
    const prevSibling = node.prevSibling;
    switch (prevSibling?.name) {
        case "AssemblyName":
            return {
                from: node.from,
                options: [{
                    label: "as",
                    type: "keyword"
                }]
            };
        case "Keyword":
            const code = context.state.sliceDoc(prevSibling.from, prevSibling.to);
            if (code === "as") {
                return;
            }
    }
    return {
        from: node.from,
        options: asmAttr
    };
}

export function assemblyBodyAttrBody(node: SyntaxNode, context: CompletionContext) {
    const prevSibling = node.prevSibling;
    if (prevSibling) {
        const code = context.state.sliceDoc(prevSibling.from, prevSibling.to);
        if (code === ".hash") {
            return {
                from: node.from,
                options: [{
                    label: "algorithm",
                    type: "keyword"
                }]
            };
        }
    }
}

export function exptAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return {
        from,
        options: exptAttr
    };
}

export function manifestResAttrBody(node: SyntaxNode) {
    if (node.prevSibling?.name === "IdentifierName") {
        return {
            from: node.from,
            options: [{
                label: "as",
                type: "keyword"
            }]
        };
    }
    return {
        from: node.from,
        options: manresAttr
    };
}