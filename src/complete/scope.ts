import type { CompletionContext } from "@codemirror/autocomplete";
import type { SyntaxNode } from "@lezer/common";
import { getInstruction } from "./keywords/instructions";
import { typeOptions } from "./keywords/type";
import { callConv, sehClause } from "./keywords/others";
import { keyword, type } from "./keywords/store";
import { getCompletion } from "./helpers";

export function methodScopeBlock(node: SyntaxNode, context: CompletionContext) {
    const prevSibling = node.prevSibling;
    switch (prevSibling?.name) {
        case "SEHBlock":
            const name = prevSibling.lastChild?.prevSibling?.name;
            if (name === "TryBlock" || name === "SEHClause") {
                return getCompletion(node.from, sehClause);
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
                const nextSibling = opcode.nextSibling;
                if (nextSibling?.name === "MethodRef") {
                    const firstChild = nextSibling.firstChild;
                    if (firstChild?.name === "CallingConvention" && firstChild.nextSibling?.name === '⚠') {
                        return getCompletion(node.from, callConv.concat(typeOptions));
                    }
                    break;
                }
                else {
                    return getCompletion(node.from, callConv.concat({
                        label: "mdtoken",
                        type: keyword
                    }, typeOptions));
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
        if (node.parent?.name?.startsWith("OpCode")) {
            return context.state.sliceDoc(node.parent.from, node.parent.to).trimEnd();
        }
        else if (prevSibling?.name === "Instrction") {
            if (prevSibling.firstChild?.name?.startsWith("OpCode")) {
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
    const opcode = getInstruction(getCode());
    if (!opcode) { return; }
    const result: { label: string, info?: string, type: string }[] = [];
    for (const key in opcode) {
        if (key === "info" || key === "type") {
            continue;
        }
        const { info, type } = opcode[key] as { info?: string, type?: string };
        result.push({
            label: key,
            info: info,
            type: type || keyword
        });
    }
    if (result.length) {
        return getCompletion(node.name === '.' ? node.to : node.from, result);
    }
}