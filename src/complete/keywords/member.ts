import { compControl, esHead } from "./others";

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