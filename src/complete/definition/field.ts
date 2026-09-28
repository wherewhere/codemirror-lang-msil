import { Member, type Accessibility } from "./member";
import type { Assembly } from "./assembly";
import type { Namespace } from "./namespace";
import type { Class } from "./class";
import type { IHasFullyQualifiedString } from "./constraints";

type FieldOwner = Assembly | Namespace | Class;

export class Field extends Member<FieldOwner, "field"> implements IHasFullyQualifiedString {
    constructor(
        name: string,
        isStatic: boolean,
        readonly isLiteral: boolean,
        accessModifier: Accessibility,
        readonly type: string,
        owner?: FieldOwner) {
        super("field", name, isStatic, accessModifier, owner);
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
        if (this.isStatic) {
            results += "static ";
        }
        if (this.isLiteral) {
            results += "literal ";
        }
        return `${results}${this.type} ${this.name}`;
    }

    toFullyQualifiedString() {
        let results = '';
        if (!this.isStatic) {
            results += "instance ";
        }
        return `${results}${this.type} ${this.fullyQualifiedName}`;
    }
}
