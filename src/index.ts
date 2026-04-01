import { parser as msilParser } from "./syntax.grammar";
import {
  LRLanguage,
  LanguageSupport,
  indentNodeProp,
  foldNodeProp,
  foldInside,
  continuedIndent,
} from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";

export const parser = msilParser;

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
        "Keyword SimpleType OpCode": t.keyword,
        BooleanLiteral: t.bool,
        NullLiteral: t.null,
        "IntegerLiteral ByteLiteral": t.integer,
        RealLiteral: t.float,
        'QSTRING SQSTRING': t.string,
        LineComment: t.lineComment,
        BlockComment: t.blockComment,

        ". : Astrisk Slash + - Not & | =": t.operator,

        PP_Directive: t.definitionKeyword,

        "Identifier TypeIdentifier": t.typeName,
        AssemblyName: [t.strong, t.name],
        ModuleName: t.name,
        NamespaceName: t.namespace,
        ClassName: t.className,
        "ArgumentName FieldName": t.variableName,
        ConstName: t.constant(t.variableName),

        MethodName: t.function(t.variableName),
        ParamName: [t.emphasis, t.variableName],
        "PropertyName EventName": t.propertyName,
        LabelName: t.labelName,

        "( )": t.paren,
        "{ }": t.brace,
        "[ ]": t.squareBracket,
        "< >": t.angleBracket,
      })
    ]
  }),
  languageData: {
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    closeBrackets: { brackets: ['(', '[', '{', '"', '\'', '<'] },
    indentOnInput: /^\s*((\)|\]|\})$|(catch|finally)\b)/
  }
});

export function msil() {
  return new LanguageSupport(msilLanguage);
}

export { msilTooltip } from "./tooltip";