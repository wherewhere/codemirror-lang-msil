import type { Completion, CompletionContext } from "@codemirror/autocomplete";
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

function findDescendant(node: SyntaxNode, nodes: readonly string[]) {
    for (let pos: SyntaxNode | null = node; pos; pos = pos.parent) {
        if (nodes.indexOf(pos.name) > -1) { return pos; }
        if (pos.type.isTop) { break; }
    }
}

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
    classNestAttr,
    classExtendsDecl
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
            const code = context.state.sliceDoc(prevSibling.from, prevSibling.to);
            if (code === "nested") {
                return {
                    from: node.from,
                    options: classNestAttr
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
    else if (node.name === '⚠') {
        if (node.parent?.name === "ClassName") {
            return {
                from: node.from,
                options: classExtendsDecl
            };
        }
    }
    return {
        from: node.from,
        options: classAttr
    };
}

import { opcodes } from "./instructions";

function methodScopeBlock(node: SyntaxNode, context: CompletionContext) {
    function getCode() {
        if (node.parent?.name === "OpCode") {
            return context.state.sliceDoc(node.parent.from, node.parent.to).trimEnd();
        }
        else if (node.prevSibling?.name === "Instrction") {
            const prevSibling = node.prevSibling;
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
    const result: Completion[] = [];
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
    }
    else if (code.match(/^\w/)) {
        if (isAtRoot(node, ["Class", "ClassName"])) {
            return classAttrBody(node, context);
        }
        const parent = node.parent;
        if (parent?.name === "Delim" &&
            (parent.parent?.name === "Method" || parent.parent?.name === "MethodScopeBlock")) {
            return methodScopeBlock(node, context);
        }
    }
}