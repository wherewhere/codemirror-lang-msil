export type SymbolKind = "assembly" | "namespace" | "class" | "field" | "method";

export class Symbol<T extends SymbolKind = SymbolKind> implements Object {
    constructor(
        readonly kind: T,
        readonly name: string) { }
    toString() {
        return `${this.kind}: ${this.name}`;
    }
}