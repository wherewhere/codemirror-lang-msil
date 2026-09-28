import type { Symbol } from "./symbol";
import type { MemberBase } from "./member";

export interface IHasMembers {
    members?: Record<string, readonly MemberBase<Symbol>[]>;
}

export interface IHasFullyQualifiedString {
    toFullyQualifiedString(): string;
}

export function isIHasMembers<T extends Symbol>(symbol: T): symbol is T & IHasMembers {
    return "members" in symbol;
}

export function isIHasFullyQualifiedString<T extends Symbol>(symbol: T): symbol is T & IHasFullyQualifiedString {
    return typeof (symbol as any).toFullyQualifiedString === "function";
}
