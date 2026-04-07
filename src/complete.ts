import type { CompletionContext } from "@codemirror/autocomplete";
import type { SyntaxNode } from "@lezer/common";
import {
    memberDecl,
    classMemberDecl,
    eventMemberDecl,
    propMemberDecl,
    methodMemberDecl,
    assemblyMemberDecl,
    assemblyRefMemberDecl,
    exptypeMemberDecl,
    manifestResMemberDecl
} from "./keywords";

function findPrevSibling(node: SyntaxNode, nodes: readonly string[]) {
    for (let pos: SyntaxNode | null = node; pos; pos = pos.prevSibling) {
        if (nodes.indexOf(pos.name) > -1) { return pos; }
        if (pos.type.isTop) { break; }
    }
}

function isAtRoot(node: SyntaxNode, nodes: readonly string[]) {
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

function memberBody(from: number) {
    return {
        from,
        options: memberDecl
    };
}

function classBody(from: number) {
    return {
        from,
        options: classMemberDecl
    };
}

function eventBody(from: number) {
    return {
        from,
        options: eventMemberDecl
    };
}

function propBody(from: number) {
    return {
        from,
        options: propMemberDecl
    };
}

function methodBody(from: number) {
    return {
        from,
        options: methodMemberDecl
    };
}

function assemblyBody(from: number) {
    return {
        from,
        options: assemblyMemberDecl
    };
}

function assemblyRefBody(from: number) {
    return {
        from,
        options: assemblyRefMemberDecl
    };
}

function exptypeBody(from: number) {
    return {
        from,
        options: exptypeMemberDecl
    };
}

function manifestResBody(from: number) {
    return {
        from,
        options: manifestResMemberDecl
    };
}

import {
    classAttr,
    classExtendsDecl,
    fieldAttr,
    fieldInit,
    eventAttr,
    propAttr,
    methodAttr,
    implAttr,
    callConv,
    typarAttrib,
    paramAttr,
    tls,
    secAction,
    asmAttr,
    exptAttr,
    manresAttr
} from "./keywords";

function classAttrBody(node: SyntaxNode, context: CompletionContext) {
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

function classBodyAttrBody(node: SyntaxNode, context: CompletionContext) {
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

import {
    type,
    simpleType,
    nativeType,
    variantType
} from "./keywords";
const typeOptions = type.concat(simpleType);

function fieldAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return {
        from,
        options: fieldAttr.concat(typeOptions)
    };
}

function eventAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return {
        from,
        options: eventAttr.concat(typeOptions)
    };
}

function propAttrBody(node: SyntaxNode) {
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

function initOptionBody({ from }: Pick<SyntaxNode, "from">) {
    return {
        from,
        options: fieldInit
    };
}

function methodAttrBody(node: SyntaxNode) {
    switch (node.prevSibling?.name) {
        case "Keyword":
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

function paramAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return {
        from,
        options: paramAttr
    };
}

function marshalClauseBody(node: SyntaxNode, context: CompletionContext) {
    const prevSibling = node.prevSibling;
    if (prevSibling?.name === "Keyword") {
        const code = context.state.sliceDoc(prevSibling.from, prevSibling.to);
        if (code === "safearray") {
            return {
                from: node.from,
                options: variantType
            }
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
                        return {
                            from: node.from,
                            options: variantType
                        }
                    }
                }
                if (delim.lastChild?.name === ')') {
                    return;
                }
            }
        }
    }
    return {
        from: node.from,
        options: nativeType
    };
}

function typeParamBody(node: SyntaxNode, context: CompletionContext) {
    return {
        from: node.from,
        options: typarAttrib
    }
}

function sigArgsBody(node: SyntaxNode, context: CompletionContext) {
    switch (node.prevSibling?.name) {
        case "Type":
            return {
                from: node.from,
                options: [{
                    label: "marshal",
                    type: "keyword"
                }]
            };
        case "MarshalClause":
            return;
        default:
            return {
                from: node.from,
                options: paramAttr.concat(typeOptions)
            };
    }
}

function dataAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return {
        from,
        options: tls
    };
}

function securityAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return {
        from,
        options: secAction
    };
}

function assemblyAttrBody(node: SyntaxNode, context: CompletionContext) {
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

function assemblyRefAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return {
        from,
        options: asmAttr
    };
}

function assemblyBodyAttrBody(node: SyntaxNode, context: CompletionContext) {
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

function exptAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return {
        from,
        options: exptAttr
    };
}

function manifestResAttrBody({ from }: Pick<SyntaxNode, "from">) {
    return {
        from,
        options: manresAttr
    };
}

import { sehClause } from "./keywords";
import { opcodes } from "./instructions";

function methodScopeBlock(node: SyntaxNode, context: CompletionContext) {
    const prevSibling = node.prevSibling;
    switch (prevSibling?.name) {
        case "SEHBlock":
            const name = prevSibling.lastChild?.prevSibling?.name;
            if (name === "TryBlock" || name === "SEHClause") {
                return {
                    from: node.from,
                    options: sehClause
                };
            }
            break;
        case '⚠':
            const prev = prevSibling.prevSibling;
            if (prev?.name === "Keyword") {
                const code = context.state.sliceDoc(prev.from, prev.to);
                switch (code) {
                    case ".locals":
                        return {
                            from: node.from,
                            options: [{
                                label: "init",
                                type: "keyword"
                            }]
                        };
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
                }
            }
            break;
    }
    function getCode() {
        if (node.parent?.name === "OpCode") {
            return context.state.sliceDoc(node.parent.from, node.parent.to).trimEnd();
        }
        else if (prevSibling?.name === "Instrction") {
            if (prevSibling.firstChild?.name === "OpCode") {
                const firstChild = prevSibling.firstChild;
                if (firstChild.nextSibling?.name === '⚠') {
                    const code = context.state.sliceDoc(firstChild.from, firstChild.to);
                    if (!code.match(/\s/)) {
                        return code.trimEnd() + context.state.sliceDoc(node.from, node.to);
                    }
                }
                else if (firstChild.lastChild?.name !== '⚠') {
                    return context.state.sliceDoc(node.from, node.to);
                }
            }
        }
        else {
            return context.state.sliceDoc(node.from, node.to);
        }
    }
    const code = getCode();
    if (!code?.match(/^\w/)) {
        return;
    }
    const parts = code.split('.');
    type opcode = Omit<Record<string, object | undefined>, "desc"> & { desc?: string };
    let opcode = opcodes as opcode;
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (part in opcode) {
            opcode = opcode[part] as opcode;
        }
        else if (i !== parts.length - 1) {
            return;
        }
    }
    const result: { label: string; type: string; info?: string }[] = [];
    for (const key in opcode) {
        if (key === "desc") {
            continue;
        }
        const { desc } = opcode[key] as { desc?: string };
        result.push({
            label: key,
            type: key.match(/^[mM]?[0-8]$/) ? "constant" : "keyword",
            info: desc
        });
    }
    if (result.length) {
        return {
            from: node.name === '.' ? node.to : node.from,
            options: result
        };
    }
}

function typeSpecBody(node: SyntaxNode, context: CompletionContext) {
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

function typeBody(node: SyntaxNode, context: CompletionContext) {
    return {
        from: node.from,
        options: typeOptions
    }
}

import { syntaxTree } from "@codemirror/language";

export function autocomplete(context: CompletionContext) {
    const node = syntaxTree(context.state).resolveInner(context.pos, -1);
    if (node.parent?.name === "OpCode" || node.prevSibling?.name === "Instrction") {
        const result = methodScopeBlock(node, context);
        if (result) {
            return result;
        }
    }
    const code = context.state.sliceDoc(node.from, node.to);
    if (code.startsWith('.') || code.startsWith('#')) {
        let delim = isAtRoot(node, ["Delim"]);
        if (delim) {
            switch (delim.parent?.name) {
                case "Namespace":
                    return memberBody(node.from);
                case "Class":
                    return classBody(node.from);
                case "Event":
                    return eventBody(node.from);
                case "Property":
                    return propBody(node.from);
                case "Method":
                case "MethodScopeBlock":
                    return methodBody(node.from);
                case "Assembly":
                    return assemblyBody(node.from);
                case "AssemblyReference":
                    return assemblyRefBody(node.from);
                case "ExportType":
                    return exptypeBody(node.from);
                case "ManifestResource":
                    return manifestResBody(node.from);
            }
        }
        else if (isAtRoot(node, ["CompilationUnit"])) {
            return memberBody(node.from);
        }
        else if (isAtRoot(node, ["ArgumentName"])) {
            return typeParamBody(node, context);
        }
    }
    else if (code.match(/^\w/)) {
        if (isAtRoot(node, ["Class"])) {
            console.log(node);
            return classAttrBody(node, context);
        }
        else if (isAtRoot(node, ["ClassName"])) {
            return typeSpecBody(node, context);
        }
        const parent = node.parent;
        switch (parent?.name) {
            case "Module":
                return {
                    from: node.from,
                    options: [{
                        label: "extern",
                        type: "keyword"
                    }]
                };
            case "Field":
                return fieldAttrBody(node);
            case "Event":
                return eventAttrBody(node);
            case "Property":
                return propAttrBody(node);
            case "Method":
                return methodAttrBody(node);
            case "Data":
                return dataAttrBody(node);
            case "Security":
                return securityAttrBody(node);
            case "File":
                return {
                    from: node.from,
                    options: [{
                        label: "nometadata",
                        type: "keyword"
                    }, {
                        label: "alignment",
                        type: "keyword"
                    }]
                };
            case "Assembly":
                return assemblyAttrBody(node, context);
            case "AssemblyReference":
                return assemblyRefAttrBody(node);
            case "Export":
                return exptAttrBody(node);
            case "ManifestResource":
                return manifestResAttrBody(node);
            case "MethodName":
                switch (parent.prevSibling?.name) {
                    case "Type":
                        return {
                            from: node.from,
                            options: [{
                                label: "marshal",
                                type: "keyword"
                            }]
                        };
                    case "MarshalClause":
                        return marshalClauseBody(node, context);
                }
                break;
            case "InitOption":
                return initOptionBody(node);
            case "SignatureArgument":
                return sigArgsBody(node, context);
            case "MarshalBlob":
                return marshalClauseBody(node, context);
            case "Delim":
                const grand = parent.parent;
                if (grand) {
                    switch (grand.name) {
                        case "Class":
                            return classBodyAttrBody(node, context);
                        case "Method":
                        case "MethodScopeBlock":
                            return methodScopeBlock(node, context);
                        case "MethodArguments":
                        case "LocalVariables":
                            return sigArgsBody(node, context);
                        case "MarshalClause":
                            return marshalClauseBody(node, context);
                        case "TypeParametersClause":
                            return typeParamBody(node, context);
                        case "ParameterAttribute":
                            return paramAttrBody(node);
                        case "Assembly":
                            return assemblyBodyAttrBody(node, context);
                    }
                }
                break;
        }
    }
}