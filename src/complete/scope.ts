import type { CompletionContext } from "@codemirror/autocomplete";
import type { SyntaxNode } from "@lezer/common";
import { opcodes } from "./keywords/instructions";
import { sehClause } from "./keywords/others";

export function methodScopeBlock(node: SyntaxNode, context: CompletionContext) {
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
        case "Delim":
            if (prevSibling.prevSibling) {
                const prev = prevSibling.prevSibling;
                const code = context.state.sliceDoc(prev.from, prev.to);
                if (code === ".export") {
                    return {
                        from: node.from,
                        options: [{
                            label: "as",
                            type: "keyword"
                        }]
                    };
                }
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
    type opcode = Record<string, object | undefined> & { info?: string, type?: string };
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
    const result: { label: string, info?: string, type: string }[] = [];
    for (const key in opcode) {
        if (key === "info" || key === "type") {
            continue;
        }
        const { info, type } = opcode[key] as { info?: string, type?: string };
        result.push({
            label: key,
            info: info,
            type: type || "keyword"
        });
    }
    if (result.length) {
        return {
            from: node.name === '.' ? node.to : node.from,
            options: result
        };
    }
}