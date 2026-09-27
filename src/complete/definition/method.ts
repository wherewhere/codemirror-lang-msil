import type { Assembly } from "./assembly";
import type { Namespace } from "./namespace";
import type { Class } from "./class";

export class Method {
    constructor(
        public readonly name: string,
        public readonly typeParameters: string[],
        public readonly parameters: string[],
        public readonly returnType: string,
        public readonly owner?: Assembly | Namespace | Class) { }
}