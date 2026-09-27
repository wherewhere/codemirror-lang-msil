import { Symbol } from "./symbol";
import type { Namespace } from "./namespace";
import type { Class } from "./class";
import type { Field } from "./field";
import type { Method } from "./method";

type AssemblyMembers = {
    readonly namespaces: readonly Namespace[],
    readonly classes: readonly Class[],
    readonly fields: readonly Field[],
    readonly methods: readonly Method[],
};

export class Assembly extends Symbol<"assembly"> {
    members?: AssemblyMembers;
    constructor(name: string) {
        super("assembly", name);
    }
    override toString() {
        return `assembly ${this.name}`;
    }
}