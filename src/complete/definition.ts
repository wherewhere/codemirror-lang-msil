import { syntaxTree } from "@codemirror/language";
import type { EditorState, Text } from "@codemirror/state";
import type { SyntaxNode } from "@lezer/common";

import { Assembly } from "./definition/assembly";
import { Namespace } from "./definition/namespace";
import { Class } from "./definition/class";
import { Field } from "./definition/field";
import { Method } from "./definition/method";

function createAssembly(node: SyntaxNode | null, doc: Text) {
    if (node) {
        const nameNode = node.getChild("AssemblyName");
        if (nameNode) {
            const name = doc.sliceString(nameNode.from, nameNode.to);
            return new Assembly(name);
        }
    }
    return new Assembly('');
}

function createNamespace(node: SyntaxNode | null, doc: Text, owner?: Assembly | Namespace) {
    if (node) {
        const nameNode = node.getChild("NamespaceName");
        if (nameNode) {
            const name = doc.sliceString(nameNode.from, nameNode.to);
            const $namespace = new Namespace(name, owner);
            const body = node.getChild("Braces");
            if (body) {
                $namespace.namespaces.push(...body.getChildren("Namespace").map(n => createNamespace(n, doc, $namespace)).filter(x => !!x));
                $namespace.classes.push(...body.getChildren("Class").map(n => createClass(n, doc, $namespace)).filter(x => !!x));
                $namespace.fields.push(...body.getChildren("Field").map(n => createField(n, doc, $namespace)).filter(x => !!x));
                $namespace.methods.push(...body.getChildren("Method").map(n => createMethod(n, doc, $namespace)).filter(x => !!x));
            }
            return $namespace;
        }
    }
    return new Namespace('', owner);
}

function createTypeParameters(node: SyntaxNode | null, doc: Text) {
    if (node) {
        const typeParameterNodes = node.getChild("Chevrons")?.getChildren("ArgumentName") ?? [];
        return typeParameterNodes.map(n => doc.sliceString(n.from, n.to));
    }
    return [];
}

function createField(node: SyntaxNode | null, doc: Text, owner?: Assembly | Namespace | Class) {
    if (node) {
        const nameNode = node.getChild("FieldName");
        const typeNode = node.getChild("Type");
        if (nameNode && typeNode) {
            const name = doc.sliceString(nameNode.from, nameNode.to);
            const type = doc.sliceString(typeNode.from, typeNode.to);
            return new Field(name, type, owner);
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
            const typeParameters = createTypeParameters(node.getChild("TypeParametersClause"), doc);
            const parameters = createArgument(parameterNodes, doc);
            const returnType = doc.sliceString(returnTypeNode.from, returnTypeNode.to);
            return new Method(name, typeParameters, parameters, returnType, owner);
        }
    }
}

function createClass(node: SyntaxNode | null, doc: Text, owner?: Assembly | Namespace | Class) {
    if (node) {
        const nameNode = node.getChild("ClassName");
        if (nameNode) {
            const name = doc.sliceString(nameNode.from, nameNode.to);
            const typeParameters = createTypeParameters(node.getChild("TypeParametersClause"), doc);
            const $class = new Class(name, typeParameters, owner);
            const body = node.getChild("Braces");
            if (body) {
                $class.fields.push(...body.getChildren("Field").map(n => createField(n, doc, $class)).filter(x => !!x));
                $class.methods.push(...body.getChildren("Method").map(n => createMethod(n, doc, $class)).filter(x => !!x));
                $class.classes.push(...body.getChildren("Class").map(n => createClass(n, doc, $class)).filter(x => !!x));
            }
            return $class;
        }
    }
}

export function getCurrentAssembly(state: EditorState) {
    const doc = state.doc;
    const root = syntaxTree(state).topNode;
    const assembly = createAssembly(root.getChild("Assembly"), doc);
    assembly.namespaces.push(...root.getChildren("Namespace").map(n => createNamespace(n, doc, assembly)).filter(x => !!x));
    assembly.classes.push(...root.getChildren("Class").map(n => createClass(n, doc, assembly)).filter(x => !!x));
    assembly.fields.push(...root.getChildren("Field").map(n => createField(n, doc, assembly)).filter(x => !!x));
    assembly.methods.push(...root.getChildren("Method").map(n => createMethod(n, doc, assembly)).filter(x => !!x));
    return assembly;
}

export {
    Assembly,
    Namespace,
    Class,
    Field,
    Method
}