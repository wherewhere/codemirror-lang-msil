import type { Symbol, MemberBase, Assembly } from "../dist";

type DefinitionNode = {
    label: string;
    children: DefinitionNode[];
};

interface IHasMembers {
    members?: Record<string, MemberBase<Symbol>[]>;
}

function* readMembers(members?: Record<string, MemberBase<Symbol>[]>) {
    if (typeof members === "object") {
        for (const key in members) {
            const member = members[key];
            if (Array.isArray(member)) {
                for (const item of member) {
                    yield createNode(item);
                }
            }
        }
    }
}

function isIHasMembers(symbol: Symbol): symbol is Symbol & IHasMembers {
    return "members" in symbol;
}

function createNode(symbol: Symbol): DefinitionNode {
    return {
        label: symbol.toString(),
        children: isIHasMembers(symbol) ? [...readMembers(symbol.members)] : []
    };
}

function appendNode(lines: string[], node: DefinitionNode, prefix: string, last: boolean) {
    lines.push(`${prefix}${last ? "└─ " : "├─ "}${node.label}`);
    const childPrefix = `${prefix}${last ? "   " : "│  "}`;
    node.children.forEach((child, index) => appendNode(lines, child, childPrefix, index === node.children.length - 1));
}

export function printAssembly(assembly: Assembly) {
    const root: DefinitionNode = createNode(assembly);
    const lines = [root.label];
    root.children.forEach((child, index) => appendNode(lines, child, '', index === root.children.length - 1));
    return lines.join('\n');
}
