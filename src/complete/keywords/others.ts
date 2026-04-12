import * as store from "./store";
import { getCompletions } from "./helpers";

export const esHead = getCompletions(store.esHead);
export const classExtendsDecl = getCompletions(["extends", "implements"]);
export const fieldSerInit = getCompletions(store.fieldSerInit);
export const fieldInit = getCompletions((store.fieldSerInit as readonly string[]).concat("nullref"));
export const callConv = getCompletions(["instance", store.explicit, "default", "vararg", store.unmanaged, "cdecl", "stdcall", "thiscall", "fastcall", "callconv"]);
export const sehClause = getCompletions(["catch", "filter", "finally", "fault"]);
export const tls = getCompletions(["tls", store.cil]);
export const secAction = getCompletions(["request", "demand", "assert", "deny", "permitonly", "linkcheck", "inheritcheck", "reqmin", "reqopt", "reqrefuse", "prejitgrant", "prejitdeny", "noncasdemand", "noncaslinkdemand", "noncasinheritance"]);