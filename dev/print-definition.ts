import type { Assembly, Namespace, Class, Field, Method } from "../dist";

type DefinitionNode = {
    label: string;
    children: DefinitionNode[];
};

function typeParameters(parameters: string[]) {
    return parameters.length ? `<${parameters.join(", ")}>` : "";
}

function fieldNode(field: Field): DefinitionNode {
    return {
        label: `Field ${field.name}: ${field.type}`,
        children: []
    };
}

function methodNode(method: Method): DefinitionNode {
    return {
        label: `Method ${method.name}${typeParameters(method.typeParameters)}(${method.parameters.join(", ")}): ${method.returnType}`,
        children: []
    };
}

function classNode($class: Class): DefinitionNode {
    return {
        label: `Class ${$class.name}${typeParameters($class.typeParameters)}`,
        children: [
            ...$class.fields.map(fieldNode),
            ...$class.methods.map(methodNode),
            ...$class.classes.map(classNode)
        ]
    };
}

function namespaceNode(namespace: Namespace): DefinitionNode {
    return {
        label: `Namespace ${namespace.name}`,
        children: [
            ...namespace.fields.map(fieldNode),
            ...namespace.methods.map(methodNode),
            ...namespace.classes.map(classNode),
            ...namespace.namespaces.map(namespaceNode)
        ]
    };
}

function appendNode(lines: string[], node: DefinitionNode, prefix: string, last: boolean) {
    lines.push(`${prefix}${last ? "└─ " : "├─ "}${node.label}`);
    const childPrefix = `${prefix}${last ? "   " : "│  "}`;
    node.children.forEach((child, index) => appendNode(lines, child, childPrefix, index === node.children.length - 1));
}

export function printAssembly(assembly: Assembly) {
    const root: DefinitionNode = {
        label: `Assembly ${assembly.name || "<unnamed>"}`,
        children: [
            ...assembly.namespaces.map(namespaceNode),
            ...assembly.fields.map(fieldNode),
            ...assembly.methods.map(methodNode),
            ...assembly.classes.map(classNode)
        ]
    };
    const lines = [root.label];
    root.children.forEach((child, index) => appendNode(lines, child, "", index === root.children.length - 1));
    return lines.join("\n");
}
