import type { Method } from "./method";
import type { Assembly } from "./assembly";
import type { Namespace } from "./namespace";
import type { Field } from "./field";

export class Class {
    readonly fields: Field[] = [];
    readonly methods: Method[] = [];
    readonly classes: Class[] = [];
    constructor(
        public readonly name: string,
        public readonly typeParameters: string[],
        public readonly owner?: Assembly | Namespace | Class) { }
}