import * as store from "./store";
import { getCompletions } from "./helpers";

const uints = [store.uint8, store.uint16, store.uint32, store.uint64] as const;
const uintsAndStrings = [`${store.unsigned} ${store.int8}`, `${store.unsigned} ${store.int16}`, `${store.unsigned} ${store.int32}`, `${store.unsigned} ${store.int64}`, ...uints, store.decimal, store.date, store.bstr, store.lpstr, store.lpwstr] as const;
const numbers = [store.bool, store.int8, store.int16, store.int32, store.int64, store.float32, store.float64] as const;
export const type = getCompletions([store.class_, store.valuetype, store.object, "pinned", "typedref", store.void_, `${store.value} ${store.class_}`, `${store.native} ${store.unsigned} ${store.int}`, `${store.native} ${store.uint}`]);
export const simpleType = getCompletions([store.char, "string", ...numbers, store.unsigned, ...uints]);
export const typeOptions = type.concat(simpleType);
export const nativeType = getCompletions(["custom", `${store.fixed} sysstring`, `${store.fixed} array`, store.variant, store.currency, "syschar", store.void_, ...numbers, store.error, `${store.unsigned} ${store.int}`, ...uintsAndStrings, "lptstr", "objectref", store.iunknown, store.idispatch, store.interface_, store.struct, store.safearray, store.int, store.uint, `${store.nested} ${store.struct}`, "byvalstr", `${store.ansi} ${store.bstr}`, "tbstr", `${store.variant} ${store.bool}`, "method", "as any", "lpstruct"]);
export const variantType = getCompletions(["null", store.variant, store.currency, store.void_, ...numbers, ...uintsAndStrings, store.iunknown, store.idispatch, store.safearray, store.int, `${store.unsigned} ${store.int}`, store.uint, store.error, "hresult", "carray", "userdefined", "record", "filetime", store.blob, "stream", "storage", `streamed_${store.object}`, `stored_${store.object}`, `${store.blob}_${store.object}`, "cf", "clsid"]);