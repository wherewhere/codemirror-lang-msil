import type { CompletionContext } from "@codemirror/autocomplete";
import { syntaxTree } from "@codemirror/language";
import { methodScopeBlock } from "./complete/scope";
import { isAtRoot } from "./complete/helpers";
import { assemblyBody, assemblyRefBody, classBody, eventBody, exptypeBody, manifestResBody, memberBody, methodBody, propBody } from "./complete/body";
import { classAttrBody, fieldAttrBody, eventAttrBody, propAttrBody, methodAttrBody, dataAttrBody, securityAttrBody, assemblyAttrBody, assemblyRefAttrBody, exptAttrBody, manifestResAttrBody, classBodyAttrBody, paramAttrBody, assemblyBodyAttrBody } from "./complete/attribute";
import { typeParamBody, marshalClauseBody, initOptionBody, sigArgsBody } from "./complete/others";
import { typeSpecBody } from "./complete/type";

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
        else if (isAtRoot(node, ["TypeDefine"])) {
            return {
                from: node.from,
                options: [{
                    label: ".custom",
                    type: "keyword"
                }]
            }
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
                return assemblyRefAttrBody(node, context);
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