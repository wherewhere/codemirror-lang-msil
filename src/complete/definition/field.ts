import type { Assembly } from "./assembly";
import type { Namespace } from "./namespace";
import type { Class } from "./class";

export class Field {
    constructor(
        public readonly name: string,
        public readonly type: string,
        public readonly owner?: Assembly | Namespace | Class) { }
}
