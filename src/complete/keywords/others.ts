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

export const classExtendsDecl = [{
    label: "extends",
    type: "keyword"
}, {
    label: "implements",
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

export const sehClause = [{
    label: "catch",
    type: "keyword"
}, {
    label: "filter",
    type: "keyword"
}, {
    label: "finally",
    type: "keyword"
}, {
    label: "fault",
    type: "keyword"
}];

export const tls = [{
    label: "tls",
    type: "keyword"
}, {
    label: "cil",
    type: "keyword"
}];

export const secAction = [{
    label: "request",
    type: "keyword"
}, {
    label: "demand",
    type: "keyword"
}, {
    label: "assert",
    type: "keyword"
}, {
    label: "deny",
    type: "keyword"
}, {
    label: "permitonly",
    type: "keyword"
}, {
    label: "linkcheck",
    type: "keyword"
}, {
    label: "inheritcheck",
    type: "keyword"
}, {
    label: "reqmin",
    type: "keyword"
}, {
    label: "reqopt",
    type: "keyword"
}, {
    label: "reqrefuse",
    type: "keyword"
}, {
    label: "prejitgrant",
    type: "keyword"
}, {
    label: "prejitdeny",
    type: "keyword"
}, {
    label: "noncasdemand",
    type: "keyword"
}, {
    label: "noncaslinkdemand",
    type: "keyword"
}, {
    label: "noncasinheritance",
    type: "keyword"
}];