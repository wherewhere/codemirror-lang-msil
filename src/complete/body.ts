import { memberDecl, classMemberDecl, eventMemberDecl, propMemberDecl, methodMemberDecl, assemblyMemberDecl, assemblyRefMemberDecl, exptypeMemberDecl, manifestResMemberDecl } from "./keywords/member";

export function memberBody(from: number) {
    return {
        from,
        options: memberDecl
    };
}

export function classBody(from: number) {
    return {
        from,
        options: classMemberDecl
    };
}

export function eventBody(from: number) {
    return {
        from,
        options: eventMemberDecl
    };
}

export function propBody(from: number) {
    return {
        from,
        options: propMemberDecl
    };
}

export function methodBody(from: number) {
    return {
        from,
        options: methodMemberDecl
    };
}

export function assemblyBody(from: number) {
    return {
        from,
        options: assemblyMemberDecl
    };
}

export function assemblyRefBody(from: number) {
    return {
        from,
        options: assemblyRefMemberDecl
    };
}

export function exptypeBody(from: number) {
    return {
        from,
        options: exptypeMemberDecl
    };
}

export function manifestResBody(from: number) {
    return {
        from,
        options: manifestResMemberDecl
    };
}