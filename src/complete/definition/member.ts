import { Symbol, type SymbolKind } from "./symbol";

export type Accessibility = "public" | "private" | "family" | "assembly" | "famandassem" | "famorassem" | "privatescope";

export class MemberBase<TOwner extends Symbol<SymbolKind>, TKind extends SymbolKind = Exclude<SymbolKind, "assembly">> extends Symbol<TKind> {
    constructor(
        kind: TKind,
        name: string,
        public readonly owner?: TOwner) {
        super(kind, name);
    }
}

export class Member<TOwner extends Symbol<SymbolKind>, TKind extends SymbolKind = Exclude<SymbolKind, "assembly" | "namespace">> extends MemberBase<TOwner, TKind> {
    constructor(
        kind: TKind,
        name: string,
        readonly isStatic: boolean,
        readonly accessibility: Accessibility,
        owner?: TOwner) {
        super(kind, name, owner);
    }
}

export class GenericMember<TOwner extends Symbol<SymbolKind>, TKind extends SymbolKind = "class" | "method"> extends Member<TOwner, TKind> {
    constructor(
        kind: TKind,
        name: string,
        isStatic: boolean,
        readonly isAbstract: boolean,
        accessibility: Accessibility,
        readonly typeParameters?: string[],
        owner?: TOwner) {
        super(kind, name, isStatic, accessibility, owner);
    }
}