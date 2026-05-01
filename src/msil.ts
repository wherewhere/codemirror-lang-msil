import { parser } from "./syntax.grammar";
import {
    LRLanguage,
    LanguageSupport,
    LanguageDescription,
    indentNodeProp,
    foldNodeProp,
    foldInside,
    continuedIndent,
} from "@codemirror/language";
import { styleTags, tags } from "@lezer/highlight";

export const msilLanguage = LRLanguage.define({
    parser: parser.configure({
        props: [
            indentNodeProp.add({
                Instrction: continuedIndent(),
                Declaration: continuedIndent({ except: /^\s*{/ }),
                Delim: continuedIndent({ except: /^\s*[\)\]\}]/ }),
                SEHBlock: continuedIndent({ except: /^\s*({|(catch|filter|finally|fault)\b)/ })
            }),
            foldNodeProp.add({
                Delim: foldInside,
                BlockComment(tree) { return { from: tree.from + 2, to: tree.to - 2 } }
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

                OpCode: tags.special(tags.keyword),

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
                "[ ]": tags.squareBracket
            })
        ]
    }),
    languageData: {
        commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
        closeBrackets: { brackets: ['(', '[', '{', '"', '\'', '<'] },
        indentOnInput: /^\s*([\)\]\}]$|(catch|filter|finally|fault)\b)/
    }
});

import { msilCompletion, type CompletionOptions } from "./complete";
import { msilTooltip, type TooltipOptions } from "./tooltip";

export type Options = {
    autocomplete?: CompletionOptions,
    tooltip?: TooltipOptions
};

export function msil({ tooltip }: Options = {}) {
    return new LanguageSupport(msilLanguage, [
        msilLanguage.data.of({
            autocomplete: msilCompletion
        }),
        msilTooltip(tooltip?.render, tooltip?.options)
    ]);
}

export function msilData(options?: Options) {
    return LanguageDescription.of({
        name: "IL",
        alias: ["msil", "cil"],
        extensions: ["il"],
        support: msil(options)
    });
}