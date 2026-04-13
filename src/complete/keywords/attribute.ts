import * as store from "./store";
import { getCompletions } from "./helpers";

const modifiers = [store.public_, store.private_] as const;
const nestedModifiers = [
    `${store.nested} ${store.public_}`,
    `${store.nested} ${store.private_}`,
    `${store.nested} ${store.family}`,
    `${store.nested} ${store.assembly}`,
    `${store.nested} ${store.famandassem}`,
    `${store.nested} ${store.famorassem}`
] as const;
export const classAttr = getCompletions([...modifiers, store.value, "enum", store.interface_, "sealed", store.abstract, "auto", "sequential", store.explicit, "extended", store.ansi, "unicode", "autochar", "import", "serializable", store.windowsruntime, ...nestedModifiers, "beforefieldinit", store.specialname, store.rtspecialname, store.flags]);
export const fieldAttr = getCompletions([store.static_, ...modifiers, store.family, "initonly", store.rtspecialname, store.specialname, "marshal", store.assembly, store.famandassem, store.famorassem, store.privatescope, "literal", "notserialized", store.flags]);
export const eventAttr = getCompletions([store.rtspecialname, store.specialname]);
export const propAttr = eventAttr;
export const methodAttr = getCompletions([store.static_, ...modifiers, store.family, "final", store.specialname, "virtual", "strict", store.abstract, store.assembly, store.famandassem, store.famorassem, store.privatescope, "hidebysig", "newslot", store.rtspecialname, "unmanagedexp", "reqsecobj", store.flags, "pinvokeimpl"]);
export const typarAttrib = getCompletions(["+", "-", store.class_, store.valuetype, "byreflike", ".ctor", store.flags]);
export const paramAttr = getCompletions(["in", "out", "opt"]);
export const implAttr = getCompletions([store.native, store.cil, "optil", "managed", store.unmanaged, "forwardref", "preservesig", "runtime", "internalcall", "synchronized", "noinlining", "aggressiveinlining", "nooptimization", "aggressiveoptimization", "async", store.flags]);
export const asmAttr = getCompletions(["retargetable", store.windowsruntime, "noplatform", "legacy library", store.cil, "x86", "amd64", "arm", "arm64"]);
export const exptAttr = getCompletions([store.private_, store.public_, "forwarder", ...nestedModifiers]);
export const manresAttr = getCompletions(modifiers);