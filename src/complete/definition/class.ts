import type { Method } from "./method";
import { GenericMember, type Accessibility } from "./member";
import type { Assembly } from "./assembly";
import type { Namespace } from "./namespace";
import type { Field } from "./field";

type ClassOwner = Assembly | Namespace | Class;
type ClassMembers = {
    readonly fields: readonly Field[],
    readonly methods: readonly Method[],
    readonly classes: readonly Class[],
};

export class Class extends GenericMember<ClassOwner, "class"> {
    members?: ClassMembers;
    constructor(
        name: string,
        isAbstract: boolean,
        readonly isSealed: boolean,
        accessibility: Accessibility,
        readonly typeParameters?: string[],
        owner?: ClassOwner) {
        super("class", name, isSealed && isAbstract, isAbstract, accessibility, typeParameters, owner);
    }
    override toString() {
        let results = '';
        if (this.accessibility) {
            results += `${this.accessibility} `;
        }
        if (this.isAbstract) {
            results += "abstract ";
        }
        if (this.isSealed) {
            results += "sealed ";
        }
        results += `class ${this.name}`;
        if (this.typeParameters) {
            results += `<${this.typeParameters.join(", ")}>`;
        }
        return results;
    }
}