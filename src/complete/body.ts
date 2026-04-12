import { getCompletion } from "./helpers";
import { memberDecl, classMemberDecl, eventMemberDecl, propMemberDecl, methodMemberDecl, assemblyMemberDecl, assemblyRefMemberDecl, exptypeMemberDecl, manifestResMemberDecl } from "./keywords/member";

export function memberBody(from: number) {
    return getCompletion(from, memberDecl);
}

export function classBody(from: number) {
    return getCompletion(from, classMemberDecl);
}

export function eventBody(from: number) {
    return getCompletion(from, eventMemberDecl);
}

export function propBody(from: number) {
    return getCompletion(from, propMemberDecl);
}

export function methodBody(from: number) {
    return getCompletion(from, methodMemberDecl);
}

export function assemblyBody(from: number) {
    return getCompletion(from, assemblyMemberDecl);
}

export function assemblyRefBody(from: number) {
    return getCompletion(from, assemblyRefMemberDecl);
}

export function exptypeBody(from: number) {
    return getCompletion(from, exptypeMemberDecl);
}

export function manifestResBody(from: number) {
    return getCompletion(from, manifestResMemberDecl);
}