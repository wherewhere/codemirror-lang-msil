import { GenericMember, type Accessibility } from "./member";
import type { Assembly } from "./assembly";
import type { Namespace } from "./namespace";
import type { Class } from "./class";

type MethodOwner = Assembly | Namespace | Class;

export class Method extends GenericMember<MethodOwner, "method"> {
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
        return results + `(${this.parameters.join(", ")})`;
    }
}