import type { Namespace } from "./namespace";
import type { Class } from "./class";
import type { Field } from "./field";
import type { Method } from "./method";

export class Assembly {
    readonly namespaces: Namespace[] = [];
    readonly classes: Class[] = [];
    readonly fields: Field[] = [];
    readonly methods: Method[] = [];
    constructor(public readonly name: string) { }
}