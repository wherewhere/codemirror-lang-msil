import { parser } from "./syntax.grammar";
import {
    LRLanguage,
    LanguageSupport,
    indentNodeProp,
    foldNodeProp,
    foldInside,
    continuedIndent,
} from "@codemirror/language";
import { styleTags, tags } from "@lezer/highlight";

const opcodeSelector = "OpCode OpCode.Variable OpCode.Int32 OpCode.Int64 OpCode.Real OpCode.Branch OpCode.Method OpCode.Field OpCode.Type OpCode.String OpCode.Signature OpCode.Token OpCode.Switch";

export const msilLanguage = LRLanguage.define({
    parser: parser.configure({
        props: [
            indentNodeProp.add({
                Delim: continuedIndent()
            }),
            foldNodeProp.add({
                Delim: foldInside
            }),
            styleTags({
                "Keyword SimpleType": tags.keyword,
                BooleanLiteral: tags.bool,
                NullLiteral: tags.null,
                "IntegerLiteral ByteLiteral": tags.integer,
                RealLiteral: tags.float,
                'QSTRING SQSTRING': tags.string,
                LineComment: tags.lineComment,
                BlockComment: tags.blockComment,

                "Astrisk + - Not & | < > =": tags.operator,
                ". : Slash ::": tags.separator,

                PP_Directive: tags.definitionKeyword,
                MacroName: tags.macroName,

                "Identifier IdentifierName": tags.typeName,
                AssemblyName: [tags.strong, tags.moduleKeyword],
                ModuleName: tags.moduleKeyword,
                NamespaceName: tags.namespace,
                ClassName: tags.className,
                "ArgumentName FieldName": tags.variableName,
                "ConstName DataName": tags.constant(tags.variableName),

                MethodName: tags.function(tags.variableName),
                ParamName: [tags.emphasis, tags.variableName],
                "PropertyName EventName": tags.propertyName,
                LabelName: tags.labelName,

                "( )": tags.paren,
                "{ }": tags.brace,
                "[ ]": tags.squareBracket,

                [opcodeSelector]: tags.special(tags.keyword)
            })
        ]
    }),
    languageData: {
        commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
        closeBrackets: { brackets: ['(', '[', '{', '"', '\'', '<'] },
        indentOnInput: /^\s*((\)|\]|\})$|(catch|finally)\b)/
    }
});

import { msilCompletion } from "./complete";
import { msilTooltip } from "./tooltip";

type Options = {
    autocomplete?: {
    },
    tooltip?: {
        render?: Parameters<typeof msilTooltip>[0],
        options?: Exclude<Parameters<typeof msilTooltip>[1], undefined>
    }
};

export function msil({ tooltip }: Options = {}) {
    return [
        new LanguageSupport(msilLanguage, msilLanguage.data.of({ autocomplete: msilCompletion })),
        msilTooltip(tooltip?.render, tooltip?.options)
    ] as const;
}