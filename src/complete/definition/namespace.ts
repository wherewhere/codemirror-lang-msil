import type { Assembly } from "./assembly";
import type { Class } from "./class";
import type { Field } from "./field";
import type { Method } from "./method";

export class Namespace {
    readonly namespaces: Namespace[] = [];
    readonly classes: Class[] = [];
    readonly fields: Field[] = [];
    readonly methods: Method[] = [];
    constructor(
        public readonly name: string,
        public readonly owner?: Assembly | Namespace) { }
}