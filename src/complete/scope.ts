import type { CompletionContext } from "@codemirror/autocomplete";
import type { SyntaxNode } from "@lezer/common";
import { getInstruction } from "./keywords/instructions";
import { typeOptions } from "./keywords/type";
import { callConv, sehClause } from "./keywords/others";
import { keyword, type } from "./keywords/store";
import { getCompletion } from "./helpers";

import {
    getCurrentAssembly,
    isIHasMembers,
    isIHasFullyQualifiedString,
    type MemberBase,
    type Assembly,
    type Symbol,
    type SymbolKind
} from "./definition";

function* readMembers(members: Record<string, readonly MemberBase<Symbol>[]> | undefined, predicate: (item: MemberBase<Symbol>) => boolean): Iterable<MemberBase<Symbol>> {
    if (typeof members === "object") {
        for (const key in members) {
            const member = members[key];
            if (Array.isArray(member)) {
                for (const item of member) {
                    if (predicate(item)) {
                        yield item;
                    }
                    if (isIHasMembers(item)) {
                        yield* readMembers(item.members, predicate);
                    }
                }
            }
        }
    }
}

function filterByKind<T extends SymbolKind>(assembly: Assembly, kind: T) {
    return readMembers(assembly.members, item => item.kind === kind) as Iterable<MemberBase<Symbol<T>>>;
}

function getMethodCompletions(context: CompletionContext) {
    const methods = [...filterByKind(getCurrentAssembly(context.state), "method")];
    const seen = new Set<string>();
    return methods.flatMap(symbol => {
        if (!(isIHasFullyQualifiedString(symbol))) { return []; }
        const label = symbol.toFullyQualifiedString();
        if (seen.has(label)) { return []; }
        seen.add(label);
        return [{ label, info: symbol.toString(), type: "function" }];
    });
}

export function methodScopeBlock(node: SyntaxNode, context: CompletionContext) {
    const prevSibling = node.prevSibling;
    switch (prevSibling?.name) {
        case "SEHBlock":
            const name = prevSibling.lastChild?.prevSibling?.name;
            if (name === "TryBlock" || name === "SEHClause") {
                return getCompletion(node.from, sehClause.concat({
                    label: "to",
                    type: keyword
                }));
            }
            break;
        case "Delim":
            if (prevSibling.prevSibling) {
                const prev = prevSibling.prevSibling;
                const code = context.state.sliceDoc(prev.from, prev.to);
                if (code === ".export") {
                    return getCompletion(node.from, [{
                        label: "as",
                        type: keyword
                    }]);
                }
            }
            break;
        case "Instrction":
            let opcode = prevSibling.getChild("OpCode.Method");
            if (opcode) {
                const methodCompletions = getMethodCompletions(context);
                const nextSibling = opcode.nextSibling;
                if (nextSibling?.name === "MethodRef") {
                    const firstChild = nextSibling.firstChild;
                    if (firstChild?.name === "CallingConvention" && firstChild.nextSibling?.name === '⚠') {
                        return getCompletion(node.from, callConv.concat(typeOptions, methodCompletions));
                    }
                    break;
                }
                else {
                    return getCompletion(node.from, callConv.concat({
                        label: "mdtoken",
                        type: keyword
                    }, typeOptions, methodCompletions));
                }
            }
            break;
        case '⚠':
            const prev = prevSibling.prevSibling;
            switch (prev?.name) {
                case "Keyword":
                    const code = context.state.sliceDoc(prev.from, prev.to);
                    switch (code) {
                        case ".locals":
                            return getCompletion(node.from, [{
                                label: "init",
                                type: keyword
                            }]);
                        case ".param":
                            return getCompletion(node.from, [{
                                label: type,
                                type: keyword
                            }, {
                                label: "constraint",
                                type: keyword
                            }]);
                        case "method":
                            return getCompletion(node.from, callConv.concat({
                                label: "mdtoken",
                                type: keyword
                            }, typeOptions));
                    }
                case "CallingConvention":
                    return getCompletion(node.from, callConv.concat(typeOptions));
            }
            break;
    }
    function getCode() {
        if (node.parent?.type?.is("OpCode")) {
            return context.state.sliceDoc(node.parent.from, node.parent.to).trimEnd();
        }
        else if (prevSibling?.name === "Instrction") {
            const firstChild = prevSibling.firstChild;
            if (firstChild?.type?.is("OpCode")) {
                if (firstChild.lastChild?.name === '⚠') {
                    const code = context.state.sliceDoc(firstChild.from, firstChild.to);
                    if (!code.match(/\s/)) {
                        return code.trimEnd() + context.state.sliceDoc(node.from, node.to);
                    }
                }
                return context.state.sliceDoc(node.from, node.to);
            }
        }
        else {
            return context.state.sliceDoc(node.from, node.to);
        }
    }
    const opcode = getInstruction(getCode());
    if (!opcode) { return; }
    const result: { label: string, info?: string, type: string }[] = [];
    for (const key in opcode) {
        if (key === "info") {
            continue;
        }
        const item = opcode[key];
        if (item) {
            const info = item.info;
            if (info) {
                if (!info.reserved) {
                    result.push({
                        label: info.prefix ? key + '.' : key,
                        info: info.tooltip,
                        type: info.type || keyword
                    });
                }
            }
            else {
                result.push({
                    label: key,
                    type: keyword
                });
            }
        }
    }
    if (result.length) {
        return getCompletion(node.name === '.' ? node.to : node.from, result);
    }
}