import { GenericMember, type Accessibility } from "./member";
import type { Assembly } from "./assembly";
import type { Namespace } from "./namespace";
import type { Class } from "./class";
import type { IHasFullyQualifiedString } from "./constraints";

type MethodOwner = Assembly | Namespace | Class;

export class Method extends GenericMember<MethodOwner, "method"> implements IHasFullyQualifiedString {
    constructor(
        name: string,
        isStatic: boolean,
        readonly isFinal: boolean,
        readonly isVirtual: boolean,
        isAbstract: boolean,
        accessModifier: Accessibility,
        readonly parameters: string[],
        readonly returnType: string,
        typeParameters?: string[],
        owner?: MethodOwner) {
        super("method", name, isStatic, isAbstract, accessModifier, typeParameters, owner);
    }

    get fullyQualifiedName() {
        let result = this.name;
        const owner = this.owner;
        if (owner) {
            switch (owner.kind) {
                case "class":
                    result = `${owner.fullyQualifiedName}::${result}`;
                    break;
                case "namespace":
                    // For now the .namespace will not effect the name of fields and methods
                    // result = `${owner.fullyQualifiedName}.${result}`;
                    break;
            }
        }
        return result;
    }

    override toString() {
        let results = '';
        if (this.accessibility) {
            results += `${this.accessibility} `;
        }
        if (this.isAbstract) {
            results += "abstract ";
        }
        if (this.isFinal) {
            results += "final ";
        }
        if (this.isVirtual) {
            results += "virtual ";
        }
        if (this.returnType) {
            results += `${this.returnType} `;
        }
        results += `method ${this.name}`;
        if (this.typeParameters) {
            results += `<${this.typeParameters.join(", ")}>`;
        }
        return `${results}(${this.parameters.join(", ")})`;
    }

    toFullyQualifiedString() {
        let results = '';
        if (!this.isStatic) {
            results += "instance ";
        }
        results += `${this.returnType} ${this.fullyQualifiedName}`;
        if (this.typeParameters) {
            results += `<${this.typeParameters.join(", ")}>`;
        }
        return `${results}(${this.parameters.join(", ")})`;
    }
}