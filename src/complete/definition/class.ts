import type { Method } from "./method";
import { GenericMember, type Accessibility } from "./member";
import type { Assembly } from "./assembly";
import type { Namespace } from "./namespace";
import type { Field } from "./field";
import type { IHasMembers, IHasFullyQualifiedString } from "./constraints";

type ClassOwner = Assembly | Namespace | Class;
type ClassMembers = {
    readonly fields: readonly Field[],
    readonly methods: readonly Method[],
    readonly classes: readonly Class[],
};

export class Class extends GenericMember<ClassOwner, "class"> implements IHasMembers, IHasFullyQualifiedString {
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

    get fullyQualifiedName() {
        let result = this.name;
        const owner = this.owner;
        if (owner) {
            switch (owner.kind) {
                case "class":
                    result = `${owner.fullyQualifiedName}/${result}`;
                    break;
                case "namespace":
                    result = `${owner.fullyQualifiedName}.${result}`;
                    break;
                case "assembly":
                    if (owner.name) {
                        result = `[${owner.name}]${result}`;
                    }
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
        if (this.isSealed) {
            results += "sealed ";
        }
        results += `class ${this.name}`;
        if (this.typeParameters) {
            results += `<${this.typeParameters.join(", ")}>`;
        }
        return results;
    }

    toFullyQualifiedString() {
        let results = this.fullyQualifiedName;
        if (this.typeParameters) {
            results += `<${this.typeParameters.join(", ")}>`;
        }
        return results;
    }
}