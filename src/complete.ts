import type { CompletionContext } from "@codemirror/autocomplete";
import type { SyntaxNode } from "@lezer/common";
import { syntaxTree } from "@codemirror/language";
import { methodScopeBlock } from "./complete/scope";
import { getCompletion, isAtRoot } from "./complete/helpers";
import { assemblyBody, assemblyRefBody, classBody, dataBody, eventBody, exptypeBody, manifestResBody, memberBody, methodBody, propBody } from "./complete/body";
import { classAttrBody, fieldAttrBody, eventAttrBody, propAttrBody, methodAttrBody, dataAttrBody, securityAttrBody, assemblyAttrBody, assemblyRefAttrBody, exptAttrBody, manifestResAttrBody, classBodyAttrBody, paramAttrBody, assemblyBodyAttrBody } from "./complete/attribute";
import { typeParamBody, marshalClauseBody, initOptionBody, sigArgsBody } from "./complete/others";
import { typeSpecBody } from "./complete/type";
import { dotCustom, extern, keyword, marshal } from "./complete/keywords/store";
import { typeOptions } from "./complete/keywords/type";

function getAttrCompletion(node: SyntaxNode, parent: SyntaxNode | null, context: CompletionContext) {
    switch (parent?.name) {
        case "Module":
            return getCompletion(node.from, [{
                label: extern,
                type: keyword
            }]);
        case "Class":
            return classAttrBody(node, context);
        case "Field":
            if (node.prevSibling?.name === "Type") {
                const prevSibling = node.prevSibling;
                if (prevSibling.lastChild?.name === '⚠') {
                    return getCompletion(prevSibling.from, typeOptions);
                }
                break;
            }
            return fieldAttrBody(node);
        case "Event":
            return eventAttrBody(node);
        case "Property":
            return propAttrBody(node);
        case "Method":
            switch (node.name) {
                case "MethodName":
                    switch (node.prevSibling?.name) {
                        case "Type":
                            const prevSibling = node.prevSibling;
                            if (prevSibling.lastChild?.name === '⚠') {
                                return getCompletion(prevSibling.from, typeOptions);
                            }
                            else {
                                return getCompletion(node.from, [{
                                    label: marshal,
                                    type: keyword
                                }]);
                            }
                        case "MarshalClause":
                            return marshalClauseBody(node, context);
                    }
                    break;
                default:
                    return methodAttrBody(node);
            }
        case "Data":
            return dataAttrBody(node);
        case "Security":
            return securityAttrBody(node);
        case "File":
            return getCompletion(node.from, [{
                label: "nometadata",
                type: keyword
            }, {
                label: "alignment",
                type: keyword
            }]);
        case "Assembly":
            return assemblyAttrBody(node, context);
        case "AssemblyReference":
            return assemblyRefAttrBody(node, context);
        case "Export":
            return exptAttrBody(node);
        case "ManifestResource":
            return manifestResAttrBody(node);
        case "Type":
            return getCompletion(parent.from, typeOptions);
        case "InitOption":
            return initOptionBody(node);
        case "SignatureArgument":
            return sigArgsBody(node, context);
        case "MarshalBlob":
            return marshalClauseBody(node, context);
        case "Braces":
            if (parent.parent) {
                const grand = parent.parent;
                switch (grand.name) {
                    case "Class":
                        return classBodyAttrBody(node, context);
                    case "Method":
                    case "MethodScopeBlock":
                        return methodScopeBlock(node, context);
                    case "Data":
                        return dataBody(node.from);
                    case "ParameterAttribute":
                        return paramAttrBody(node);
                    case "Assembly":
                        return assemblyBodyAttrBody(node, context);
                }
            }
            break;
        case "Parens":
            if (parent.parent) {
                const grand = parent.parent;
                switch (grand.name) {
                    case "MethodArguments":
                    case "LocalVariables":
                        return sigArgsBody(node, context);
                    case "MarshalClause":
                        return marshalClauseBody(node, context);
                }
            }
            break;
        case "Chevrons":
            if (parent.parent) {
                const grand = parent.parent;
                switch (grand.name) {
                    case "TypeParametersClause":
                        return typeParamBody(node, context);
                }
            }
            break;
    }
}

/** The options for configuring MSIL completion. */
export type CompletionOptions = object;

/**
 * The MSIL completion.
 * @param context - The completion context provided by CodeMirror, containing information about the current state of the editor and the position of the cursor.
 * @returns The completion result based on the current context in the MSIL code.
 */
export function msilCompletion(context: CompletionContext) {
    if (context.aborted) { return; }
    const tree = syntaxTree(context.state);
    const node = tree.resolveInner(context.pos, -1);
    if (context.state.sliceDoc(context.pos - 1, context.pos) === ' ') {
        const lastChild = node.lastChild;
        if (lastChild?.to === context.pos) {
            return getAttrCompletion(lastChild, node, context);
        }
        return;
    }
    if (node.parent?.type?.is("OpCode") || node.prevSibling?.name === "Instrction") {
        const result = methodScopeBlock(node, context);
        if (result) {
            return result;
        }
    }
    const code = context.state.sliceDoc(node.from, node.to);
    if (code.startsWith('.') || code.startsWith('#')) {
        let delim = isAtRoot(node, "Delim");
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
        else if (isAtRoot(node, "CompilationUnit")) {
            return memberBody(node.from);
        }
        else if (isAtRoot(node, "TypeDefine")) {
            return getCompletion(node.from, [{
                label: dotCustom,
                type: keyword
            }]);
        }
        else if (isAtRoot(node, "ArgumentName")) {
            return typeParamBody(node, context);
        }
        else if (isAtRoot(node, "Method")) {
            let parent = node;
            if (parent.parent?.name === '⚠') {
                parent = parent.parent;
            }
            switch (parent.prevSibling?.name) {
                case "Type":
                case "MarshalClause":
                    return getCompletion(node.from, [{
                        label: ".ctor",
                        type: keyword
                    }, {
                        label: ".cctor",
                        type: keyword
                    }]);
            }
        }
    }
    else if (code.match(/^\w/)) {
        if (isAtRoot(node, "Class")) {
            return classAttrBody(node, context);
        }
        else if (isAtRoot(node, "ClassName")) {
            return typeSpecBody(node, context);
        }
        return getAttrCompletion(node, node.parent, context);
    }
}