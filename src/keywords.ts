export const compControl = [{
    label: "#define",
    type: "keyword"
}, {
    label: "#undef",
    type: "keyword"
}, {
    label: "#ifdef",
    type: "keyword"
}, {
    label: "#ifndef",
    type: "keyword"
}, {
    label: "#else",
    type: "keyword"
}, {
    label: "#endif",
    type: "keyword"
}, {
    label: "#include",
    type: "keyword"
}];

export const esHead = [{
    label: ".line",
    type: "keyword"
}, {
    label: "#line",
    type: "keyword"
}];

export const memberDecl = [{
    label: ".class",
    type: "keyword"
}, {
    label: ".namespace",
    type: "keyword"
}, {
    label: ".method",
    type: "keyword"
}, {
    label: ".field",
    type: "keyword"
}, {
    label: ".data",
    type: "keyword"
}, {
    label: ".vtable",
    type: "keyword"
}, {
    label: ".vtfixup",
    type: "keyword"
}, ...esHead, {
    label: ".file",
    type: "keyword"
}, {
    label: ".assembly",
    type: "keyword"
}, {
    label: ".mresource",
    type: "keyword"
}, {
    label: ".module",
    type: "keyword"
}, {
    label: ".permission",
    type: "keyword"
}, {
    label: ".permissionset",
    type: "keyword"
}, {
    label: ".custom",
    type: "keyword"
}, {
    label: ".subsystem",
    type: "keyword"
}, {
    label: ".corflags",
    type: "keyword"
}, {
    label: ".imagebase",
    type: "keyword"
}, {
    label: ".stackreserve",
    type: "keyword"
}, {
    label: ".language",
    type: "keyword"
}, {
    label: ".typedef",
    type: "keyword"
}, ...compControl, {
    label: ".typelist",
    type: "keyword"
}, {
    label: ".mscorlib",
    type: "keyword"
}];

export const classAttr = [{
    label: "public",
    type: "keyword"
}, {
    label: "private",
    type: "keyword"
}, {
    label: "value",
    type: "keyword"
}, {
    label: "enum",
    type: "keyword"
}, {
    label: "interface",
    type: "keyword"
}, {
    label: "sealed",
    type: "keyword"
}, {
    label: "abstract",
    type: "keyword"
}, {
    label: "auto",
    type: "keyword"
}, {
    label: "sequential",
    type: "keyword"
}, {
    label: "explicit",
    type: "keyword"
}, {
    label: "extended",
    type: "keyword"
}, {
    label: "ansi",
    type: "keyword"
}, {
    label: "unicode",
    type: "keyword"
}, {
    label: "autochar",
    type: "keyword"
}, {
    label: "import",
    type: "keyword"
}, {
    label: "serializable",
    type: "keyword"
}, {
    label: "windowsruntime",
    type: "keyword"
}, {
    label: "nested public",
    type: "keyword"
}, {
    label: "nested private",
    type: "keyword"
}, {
    label: "nested family",
    type: "keyword"
}, {
    label: "nested assembly",
    type: "keyword"
}, {
    label: "nested famandassem",
    type: "keyword"
}, {
    label: "nested famorassem",
    type: "keyword"
}, {
    label: "beforefieldinit",
    type: "keyword"
}, {
    label: "specialname",
    type: "keyword"
}, {
    label: "rtspecialname",
    type: "keyword"
}, {
    label: "flags",
    type: "keyword"
}];

export const classExtendsDecl = [{
    label: "extends",
    type: "keyword"
}, {
    label: "implements",
    type: "keyword"
}];

export const classMemberDecl = [{
    label: ".method",
    type: "keyword"
}, {
    label: ".class",
    type: "keyword"
}, {
    label: ".event",
    type: "keyword"
}, {
    label: ".property",
    type: "keyword"
}, {
    label: ".field",
    type: "keyword"
}, {
    label: ".data",
    type: "keyword"
}, {
    label: ".permission",
    type: "keyword"
}, {
    label: ".permissionset",
    type: "keyword"
}, ...esHead, {
    label: ".custom",
    type: "keyword"
}, {
    label: ".size",
    type: "keyword"
}, {
    label: ".pack",
    type: "keyword"
}, {
    label: ".export",
    type: "keyword"
}, {
    label: ".override",
    type: "keyword"
}, {
    label: ".language",
    type: "keyword"
}, ...compControl, {
    label: ".param",
    type: "keyword"
}, {
    label: ".interfaceimpl",
    type: "keyword"
}];

export const fieldAttr = [{
    label: "static",
    type: "keyword"
}, {
    label: "public",
    type: "keyword"
}, {
    label: "private",
    type: "keyword"
}, {
    label: "family",
    type: "keyword"
}, {
    label: "initonly",
    type: "keyword"
}, {
    label: "rtspecialname",
    type: "keyword"
}, {
    label: "specialname",
    type: "keyword"
}, {
    label: "marshal",
    type: "keyword"
}, {
    label: "assembly",
    type: "keyword"
}, {
    label: "famandassem",
    type: "keyword"
}, {
    label: "famorassem",
    type: "keyword"
}, {
    label: "privatescope",
    type: "keyword"
}, {
    label: "literal",
    type: "keyword"
}, {
    label: "notserialized",
    type: "keyword"
}, {
    label: "flags",
    type: "keyword"
}];

export const fieldSerInit = [{
    label: "float32",
    type: "keyword"
}, {
    label: "float64",
    type: "keyword"
}, {
    label: "int64",
    type: "keyword"
}, {
    label: "int32",
    type: "keyword"
}, {
    label: "int16",
    type: "keyword"
}, {
    label: "int8",
    type: "keyword"
}, {
    label: "unsigned int64",
    type: "keyword"
}, {
    label: "unsigned int32",
    type: "keyword"
}, {
    label: "unsigned int16",
    type: "keyword"
}, {
    label: "unsigned int8",
    type: "keyword"
}, {
    label: "uint64",
    type: "keyword"
}, {
    label: "uint32",
    type: "keyword"
}, {
    label: "uint16",
    type: "keyword"
}, {
    label: "uint8",
    type: "keyword"
}, {
    label: "char",
    type: "keyword"
}, {
    label: "bool",
    type: "keyword"
}, {
    label: "bytearray",
    type: "keyword"
}];

export const fieldInit = fieldSerInit.concat([{
    label: "nullref",
    type: "keyword"
}]);

export const eventAttr = [{
    label: "rtspecialname",
    type: "keyword"
}, {
    label: "specialname",
    type: "keyword"
}];

export const eventMemberDecl = [{
    label: ".addon",
    type: "keyword"
}, {
    label: ".removeon",
    type: "keyword"
}, {
    label: ".fire",
    type: "keyword"
}, {
    label: ".other",
    type: "keyword"
}, ...esHead, {
    label: ".custom",
    type: "keyword"
}, {
    label: ".language",
    type: "keyword"
}, ...compControl];

export const propAttr = [{
    label: "rtspecialname",
    type: "keyword"
}, {
    label: "specialname",
    type: "keyword"
}];

export const propMemberDecl = [{
    label: ".set",
    type: "keyword"
}, {
    label: ".get",
    type: "keyword"
}, {
    label: ".other",
    type: "keyword"
}, {
    label: ".custom",
    type: "keyword"
}, ...esHead, {
    label: ".language",
    type: "keyword"
}, ...compControl];

export const methodAttr = [{
    label: "static",
    type: "keyword"
}, {
    label: "public",
    type: "keyword"
}, {
    label: "private",
    type: "keyword"
}, {
    label: "family",
    type: "keyword"
}, {
    label: "final",
    type: "keyword"
}, {
    label: "specialname",
    type: "keyword"
}, {
    label: "virtual",
    type: "keyword"
}, {
    label: "strict",
    type: "keyword"
}, {
    label: "abstract",
    type: "keyword"
}, {
    label: "assembly",
    type: "keyword"
}, {
    label: "famandassem",
    type: "keyword"
}, {
    label: "famorassem",
    type: "keyword"
}, {
    label: "privatescope",
    type: "keyword"
}, {
    label: "hidebysig",
    type: "keyword"
}, {
    label: "newslot",
    type: "keyword"
}, {
    label: "rtspecialname",
    type: "keyword"
}, {
    label: "unmanagedexp",
    type: "keyword"
}, {
    label: "reqsecobj",
    type: "keyword"
}, {
    label: "flags",
    type: "keyword"
}, {
    label: "pinvokeimpl",
    type: "keyword"
}];

export const callConv = [{
    label: "instance",
    type: "keyword"
}, {
    label: "explicit",
    type: "keyword"
}, {
    label: "default",
    type: "keyword"
}, {
    label: "vararg",
    type: "keyword"
}, {
    label: "unmanaged",
    type: "keyword"
}, {
    label: "cdecl",
    type: "keyword"
}, {
    label: "stdcall",
    type: "keyword"
}, {
    label: "thiscall",
    type: "keyword"
}, {
    label: "fastcall",
    type: "keyword"
}, {
    label: "callconv",
    type: "keyword"
}];

export const paramAttr = [{
    label: "in",
    type: "keyword"
}, {
    label: "out",
    type: "keyword"
}, {
    label: "opt",
    type: "keyword"
}];

export const implAttr = [{
    label: "native",
    type: "keyword"
}, {
    label: "cil",
    type: "keyword"
}, {
    label: "optil",
    type: "keyword"
}, {
    label: "managed",
    type: "keyword"
}, {
    label: "unmanaged",
    type: "keyword"
}, {
    label: "forwardref",
    type: "keyword"
}, {
    label: "preservesig",
    type: "keyword"
}, {
    label: "runtime",
    type: "keyword"
}, {
    label: "internalcall",
    type: "keyword"
}, {
    label: "synchronized",
    type: "keyword"
}, {
    label: "noinlining",
    type: "keyword"
}, {
    label: "aggressiveinlining",
    type: "keyword"
}, {
    label: "nooptimization",
    type: "keyword"
}, {
    label: "aggressiveoptimization",
    type: "keyword"
}, {
    label: "async",
    type: "keyword"
}, {
    label: "flags",
    type: "keyword"
}];

export const methodMemberDecl = [{
    label: ".emitbyte",
    type: "keyword"
}, {
    label: ".try",
    type: "keyword"
}, {
    label: ".maxstack",
    type: "keyword"
}, {
    label: ".locals",
    type: "keyword"
}, {
    label: ".entrypoint",
    type: "keyword"
}, {
    label: ".zeroinit",
    type: "keyword"
}, {
    label: ".data",
    type: "keyword"
}, {
    label: ".permission",
    type: "keyword"
}, {
    label: ".permissionset",
    type: "keyword"
}, ...esHead, {
    label: ".language",
    type: "keyword"
}, {
    label: ".custom",
    type: "keyword"
}, ...compControl, {
    label: ".export",
    type: "keyword"
}, {
    label: ".vtentry",
    type: "keyword"
}, {
    label: ".override",
    type: "keyword"
}, {
    label: ".param",
    type: "keyword"
}];

export const assemblyMemberDecl = [{
    label: ".hash",
    type: "keyword"
}, {
    label: ".permission",
    type: "keyword"
}, {
    label: ".permissionset",
    type: "keyword"
}, {
    label: ".publickey",
    type: "keyword"
}, {
    label: ".ver",
    type: "keyword"
}, {
    label: ".locale",
    type: "keyword"
}, {
    label: ".custom",
    type: "keyword"
}, ...compControl];

export const assemblyRefMemberDecl = [{
    label: ".hash",
    type: "keyword"
}, {
    label: ".publickey",
    type: "keyword"
}, {
    label: ".ver",
    type: "keyword"
}, {
    label: ".locale",
    type: "keyword"
}, {
    label: ".custom",
    type: "keyword"
}, ...compControl, {
    label: ".publickeytoken",
    type: "keyword"
}];

export const exptypeMemberDecl = [{
    label: ".file",
    type: "keyword"
}, {
    label: ".class",
    type: "keyword"
}, {
    label: ".assembly",
    type: "keyword"
}, {
    label: ".mdtoken",
    type: "keyword"
}, {
    label: ".custom",
    type: "keyword"
}, ...compControl];

export const manifestResMemberDecl = [{
    label: ".file",
    type: "keyword"
}, {
    label: ".assembly",
    type: "keyword"
}, {
    label: ".custom",
    type: "keyword"
}, ...compControl];

export const type = [{
    label: "class",
    type: "keyword"
}, {
    label: "valuetype",
    type: "keyword"
}, {
    label: "object",
    type: "keyword"
}, {
    label: "pinned",
    type: "keyword"
}, {
    label: "typedref",
    type: "keyword"
}, {
    label: "void",
    type: "keyword"
}, {
    label: "value class",
    type: "keyword"
}, {
    label: "native unsigned int",
    type: "keyword"
}, {
    label: "native uint",
    type: "keyword"
}];

export const simpleType = [{
    label: "char",
    type: "keyword"
}, {
    label: "string",
    type: "keyword"
}, {
    label: "bool",
    type: "keyword"
}, {
    label: "int8",
    type: "keyword"
}, {
    label: "int16",
    type: "keyword"
}, {
    label: "int32",
    type: "keyword"
}, {
    label: "int64",
    type: "keyword"
}, {
    label: "float32",
    type: "keyword"
}, {
    label: "float64",
    type: "keyword"
}, {
    label: "unsigned",
    type: "keyword"
}, {
    label: "uint8",
    type: "keyword"
}, {
    label: "uint16",
    type: "keyword"
}, {
    label: "uint32",
    type: "keyword"
}, {
    label: "uint64",
    type: "keyword"
}];

export const nativeType = [{
    label: "custom",
    type: "keyword"
}, {
    label: "fixed sysstring",
    type: "keyword"
}, {
    label: "fixed array",
    type: "keyword"
}, {
    label: "variant",
    type: "keyword"
}, {
    label: "currency",
    type: "keyword"
}, {
    label: "syschar",
    type: "keyword"
}, {
    label: "void",
    type: "keyword"
}, {
    label: "bool",
    type: "keyword"
}, {
    label: "int8",
    type: "keyword"
}, {
    label: "int16",
    type: "keyword"
}, {
    label: "int32",
    type: "keyword"
}, {
    label: "int64",
    type: "keyword"
}, {
    label: "float32",
    type: "keyword"
}, {
    label: "float64",
    type: "keyword"
}, {
    label: "error",
    type: "keyword"
}, {
    label: "unsigned int",
    type: "keyword"
}, {
    label: "unsigned int8",
    type: "keyword"
}, {
    label: "unsigned int16",
    type: "keyword"
}, {
    label: "unsigned int32",
    type: "keyword"
}, {
    label: "unsigned int64",
    type: "keyword"
}, {
    label: "uint8",
    type: "keyword"
}, {
    label: "uint16",
    type: "keyword"
}, {
    label: "uint32",
    type: "keyword"
}, {
    label: "uint64",
    type: "keyword"
}, {
    label: "decimal",
    type: "keyword"
}, {
    label: "date",
    type: "keyword"
}, {
    label: "bstr",
    type: "keyword"
}, {
    label: "lpstr",
    type: "keyword"
}, {
    label: "lpwstr",
    type: "keyword"
}, {
    label: "lptstr",
    type: "keyword"
}, {
    label: "objectref",
    type: "keyword"
}, {
    label: "iunknown",
    type: "keyword"
}, {
    label: "idispatch",
    type: "keyword"
}, {
    label: "interface",
    type: "keyword"
}, {
    label: "struct",
    type: "keyword"
}, {
    label: "safearray",
    type: "keyword"
}, {
    label: "int",
    type: "keyword"
}, {
    label: "uint",
    type: "keyword"
}, {
    label: "nested struct",
    type: "keyword"
}, {
    label: "byvalstr",
    type: "keyword"
}, {
    label: "ansi bstr",
    type: "keyword"
}, {
    label: "tbstr",
    type: "keyword"
}, {
    label: "variant bool",
    type: "keyword"
}, {
    label: "method",
    type: "keyword"
}, {
    label: "as any",
    type: "keyword"
}, {
    label: "lpstruct",
    type: "keyword"
}];

export const variantType = [{
    label: "null",
    type: "keyword"
}, {
    label: "variant",
    type: "keyword"
}, {
    label: "currency",
    type: "keyword"
}, {
    label: "void",
    type: "keyword"
}, {
    label: "bool",
    type: "keyword"
}, {
    label: "int8",
    type: "keyword"
}, {
    label: "int16",
    type: "keyword"
}, {
    label: "int32",
    type: "keyword"
}, {
    label: "int64",
    type: "keyword"
}, {
    label: "float32",
    type: "keyword"
}, {
    label: "float64",
    type: "keyword"
}, {
    label: "unsigned int8",
    type: "keyword"
}, {
    label: "unsigned int16",
    type: "keyword"
}, {
    label: "unsigned int32",
    type: "keyword"
}, {
    label: "unsigned int64",
    type: "keyword"
}, {
    label: "uint8",
    type: "keyword"
}, {
    label: "uint16",
    type: "keyword"
}, {
    label: "uint32",
    type: "keyword"
}, {
    label: "uint64",
    type: "keyword"
}, {
    label: "decimal",
    type: "keyword"
}, {
    label: "date",
    type: "keyword"
}, {
    label: "bstr",
    type: "keyword"
}, {
    label: "lpstr",
    type: "keyword"
}, {
    label: "lpwstr",
    type: "keyword"
}, {
    label: "iunknown",
    type: "keyword"
}, {
    label: "idispatch",
    type: "keyword"
}, {
    label: "safearray",
    type: "keyword"
}, {
    label: "int",
    type: "keyword"
}, {
    label: "unsigned int",
    type: "keyword"
}, {
    label: "uint",
    type: "keyword"
}, {
    label: "error",
    type: "keyword"
}, {
    label: "hresult",
    type: "keyword"
}, {
    label: "carray",
    type: "keyword"
}, {
    label: "userdefined",
    type: "keyword"
}, {
    label: "record",
    type: "keyword"
}, {
    label: "filetime",
    type: "keyword"
}, {
    label: "blob",
    type: "keyword"
}, {
    label: "stream",
    type: "keyword"
}, {
    label: "storage",
    type: "keyword"
}, {
    label: "streamed_object",
    type: "keyword"
}, {
    label: "stored_object",
    type: "keyword"
}, {
    label: "blob_object",
    type: "keyword"
}, {
    label: "cf",
    type: "keyword"
}, {
    label: "clsid",
    type: "keyword"
}]