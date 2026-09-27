import { MemberBase } from "./member";
import type { Assembly } from "./assembly";
import type { Class } from "./class";
import type { Field } from "./field";
import type { Method } from "./method";

type NamespaceOwner = Assembly | Namespace;
type NamespaceMembers = {
    readonly namespaces: readonly Namespace[],
    readonly classes: readonly Class[],
    readonly fields: readonly Field[],
    readonly methods: readonly Method[],
};

export class Namespace extends MemberBase<NamespaceOwner, "namespace"> {
    members?: NamespaceMembers;
    constructor(
        name: string,
        owner?: NamespaceOwner) {
        super("namespace", name, owner);
    }
    override toString() {
        return `namespace ${this.name}`;
    }
}