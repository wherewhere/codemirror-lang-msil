import * as store from "./store";
import { getCompletions } from "./helpers";

const compControl = [store.hashDefine, store.hashUndef, store.hashIfdef, store.hashIfndef, store.hashElse, store.hashEndif, store.hashInclude] as const;
export const memberDecl = getCompletions([store.dotClass, ".namespace", store.dotMethod, store.dotField, store.dotData, ".vtable", ".vtfixup", ...store.esHead, store.dotFile, store.dotAssembly, ".mresource", ".module", store.dotPermission, store.dotPermissionset, store.dotCustom, ".subsystem", ".corflags", ".imagebase", ".stackreserve", store.dotLanguage, ".typedef", ...compControl, ".typelist", ".mscorlib"]);
export const classMemberDecl = getCompletions([store.dotMethod, store.dotClass, ".event", ".property", store.dotField, store.dotData, store.dotPermission, store.dotPermissionset, ...store.esHead, store.dotCustom, ".size", ".pack", store.dotExport, store.dotOverride, store.dotLanguage, ...compControl, store.dotParam, ".interfaceimpl"]);
export const eventMemberDecl = getCompletions([".addon", ".removeon", ".fire", store.dotOther, ...store.esHead, store.dotCustom, store.dotLanguage, ...compControl]);
export const propMemberDecl = getCompletions([".set", ".get", store.dotOther, store.dotCustom, ...store.esHead, store.dotLanguage, ...compControl]);
export const methodMemberDecl = getCompletions([".emitbyte", ".try", ".maxstack", ".locals", ".entrypoint", ".zeroinit", store.dotData, store.dotPermission, store.dotPermissionset, ...store.esHead, store.dotLanguage, store.dotCustom, ...compControl, store.dotExport, ".vtentry", store.dotOverride, store.dotParam]);
export const assemblyMemberDecl = getCompletions([store.dotHash, store.dotPermission, store.dotPermissionset, store.dotPublickey, store.dotVer, store.dotLocale, store.dotCustom, ...compControl]);
export const assemblyRefMemberDecl = getCompletions([store.dotHash, store.dotPublickey, store.dotVer, store.dotLocale, store.dotCustom, ...compControl, ".publickeytoken"]);
export const exptypeMemberDecl = getCompletions([store.dotFile, store.dotClass, store.dotAssembly, ".mdtoken", store.dotCustom, ...compControl]);
export const manifestResMemberDecl = getCompletions([store.dotFile, store.dotAssembly, store.dotCustom, ...compControl]);