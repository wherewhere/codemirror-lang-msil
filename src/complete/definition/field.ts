import { Member, type Accessibility } from "./member";
import type { Assembly } from "./assembly";
import type { Namespace } from "./namespace";
import type { Class } from "./class";

type FieldOwner = Assembly | Namespace | Class;

export class Field extends Member<FieldOwner, "field"> {
    constructor(
        name: string,
        isStatic: boolean,
        readonly isLiteral: boolean,
        accessModifier: Accessibility,
        readonly type: string,
        owner?: FieldOwner) {
        super("field", name, isStatic, accessModifier, owner);
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
        return results += `${this.type} ${this.name}`;
    }
}
