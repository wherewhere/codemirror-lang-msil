import { syntaxTree } from "@codemirror/language";
import type { EditorState, Text } from "@codemirror/state";
import type { SyntaxNode } from "@lezer/common";

import { Assembly } from "./definition/assembly";
import { Namespace } from "./definition/namespace";
import { Class } from "./definition/class";
import { Field } from "./definition/field";
import { Method } from "./definition/method";

import { public_, private_, family, assembly, famandassem, famorassem, privatescope } from "./keywords/store";

const accessibilities = [public_, private_, family, assembly, famandassem, famorassem, privatescope] as const;

function getModifiers(node: SyntaxNode, attributeName: string, doc: Text) {
    return node.getChildren(attributeName).flatMap(x => doc.sliceString(x.from, x.to).trim().split(/\s+/));
}

function getAccessibility(modifiers: string[], $default: typeof accessibilities[number] = privatescope) {
    return accessibilities.find(x => modifiers.includes(x)) ?? $default;
}

function createAssembly(node: SyntaxNode | null, doc: Text) {
    if (node) {
        const nameNode = node.getChild("AssemblyName");
        if (nameNode) {
            const name = doc.sliceString(nameNode.from, nameNode.to);
            return new Assembly(name);
        }
    }
    return new Assembly("<unnamed>");
}

function getNamespaceMembers(node: SyntaxNode | null, doc: Text, owner?: Assembly | Namespace) {
    if (node) {
        return {
            namespaces: node.getChildren("Namespace").map(n => createNamespace(n, doc, owner)).filter(x => !!x),
            classes: node.getChildren("Class").map(n => createClass(n, doc, owner)).filter(x => !!x),
            fields: node.getChildren("Field").map(n => createField(n, doc, owner)).filter(x => !!x),
            methods: node.getChildren("Method").map(n => createMethod(n, doc, owner)).filter(x => !!x),
        };
    }
}

function createNamespace(node: SyntaxNode | null, doc: Text, owner?: Assembly | Namespace) {
    if (node) {
        const nameNode = node.getChild("NamespaceName");
        if (nameNode) {
            const name = doc.sliceString(nameNode.from, nameNode.to);
            const $namespace = new Namespace(name, owner);
            $namespace.members = getNamespaceMembers(node.getChild("Braces"), doc, $namespace);
            return $namespace;
        }
    }
    return new Namespace("<unnamed>", owner);
}

function createTypeParameters(node: SyntaxNode | null, doc: Text) {
    if (node) {
        const typeParameterNodes = node.getChild("Chevrons")?.getChildren("ArgumentName") ?? [];
        return typeParameterNodes.map(n => doc.sliceString(n.from, n.to));
    }
}

function createField(node: SyntaxNode | null, doc: Text, owner?: Assembly | Namespace | Class) {
    if (node) {
        const nameNode = node.getChild("FieldOrConstName");
        const typeNode = node.getChild("Type");
        if (nameNode && typeNode) {
            const modifiers = getModifiers(node, "FieldAttribute", doc);
            const name = doc.sliceString(nameNode.from, nameNode.to);
            const type = doc.sliceString(typeNode.from, typeNode.to);
            return new Field(name, modifiers.includes("static"), modifiers.includes("literal"), getAccessibility(modifiers), type, owner);
        }
    }
}

function createArgument(node: SyntaxNode | null, doc: Text) {
    if (node) {
        const parameterNodes = node.getChild("Parens")?.getChildren("SignatureArgument") ?? [];
        return parameterNodes.map(n => doc.sliceString(n.from, n.to));
    }
    return [];
}

function createMethod(node: SyntaxNode | null, doc: Text, owner?: Assembly | Namespace | Class) {
    if (node) {
        const nameNode = node.getChild("MethodName");
        const parameterNodes = node.getChild("MethodArguments");
        const returnTypeNode = node.getChild("Type");
        if (nameNode && parameterNodes && returnTypeNode) {
            const name = doc.sliceString(nameNode.from, nameNode.to);
            const modifiers = getModifiers(node, "MethodAttribute", doc);
            const parameters = createArgument(parameterNodes, doc);
            const returnType = doc.sliceString(returnTypeNode.from, returnTypeNode.to);
            const typeParameters = createTypeParameters(node.getChild("TypeParametersClause"), doc);
            return new Method(
                name,
                modifiers.includes("static"),
                modifiers.includes("final"),
                modifiers.includes("virtual"),
                modifiers.includes("abstract"),
                getAccessibility(modifiers),
                parameters,
                returnType,
                typeParameters,
                owner
            );
        }
    }
}

function getClassMembers(node: SyntaxNode | null, doc: Text, owner?: Class) {
    if (node) {
        return {
            fields: node.getChildren("Field").map(n => createField(n, doc, owner)).filter(x => !!x),
            methods: node.getChildren("Method").map(n => createMethod(n, doc, owner)).filter(x => !!x),
            classes: node.getChildren("Class").map(n => createClass(n, doc, owner)).filter(x => !!x),
        }
    }
}

function createClass(node: SyntaxNode | null, doc: Text, owner?: Assembly | Namespace | Class) {
    if (node) {
        const nameNode = node.getChild("ClassName");
        if (nameNode) {
            const name = doc.sliceString(nameNode.from, nameNode.to);
            const typeParameters = createTypeParameters(node.getChild("TypeParametersClause"), doc);
            const modifiers = getModifiers(node, "ClassAttribute", doc);
            const $class = new Class(
                name,
                modifiers.includes("abstract"),
                modifiers.includes("sealed"),
                getAccessibility(modifiers, private_),
                typeParameters,
                owner
            );
            $class.members = getClassMembers(node.getChild("Braces"), doc, $class);
            return $class;
        }
    }
}

export function getCurrentAssembly(state: EditorState) {
    const doc = state.doc;
    const root = syntaxTree(state).topNode;
    const assembly = createAssembly(root.getChild("Assembly"), doc);
    assembly.members = getNamespaceMembers(root, doc, assembly);
    return assembly;
}

export type * from "./definition/symbol";
export type * from "./definition/member";
export {
    Assembly,
    Namespace,
    Class,
    Field,
    Method
}