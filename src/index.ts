import { parser } from "./syntax.grammar";
export { parser };

import {
  LRLanguage,
  LanguageSupport,
  indentNodeProp,
  foldNodeProp,
  foldInside,
  continuedIndent,
} from "@codemirror/language";
import { styleTags, tags } from "@lezer/highlight";
import { autocomplete } from "./complete";

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
        "Keyword SimpleType OpCode": tags.keyword,
        BooleanLiteral: tags.bool,
        NullLiteral: tags.null,
        "IntegerLiteral ByteLiteral": tags.integer,
        RealLiteral: tags.float,
        'QSTRING SQSTRING': tags.string,
        LineComment: tags.lineComment,
        BlockComment: tags.blockComment,

        ". : Astrisk Slash + - Not & | =": tags.operator,

        PP_Directive: tags.definitionKeyword,

        "Identifier TypeIdentifier": tags.typeName,
        AssemblyName: [tags.strong, tags.name],
        ModuleName: tags.name,
        NamespaceName: tags.namespace,
        ClassName: tags.className,
        "ArgumentName FieldName": tags.variableName,
        ConstName: tags.constant(tags.variableName),

        MethodName: tags.function(tags.variableName),
        ParamName: [tags.emphasis, tags.variableName],
        "PropertyName EventName": tags.propertyName,
        LabelName: tags.labelName,

        "( )": tags.paren,
        "{ }": tags.brace,
        "[ ]": tags.squareBracket,
        "< >": tags.angleBracket,
      })
    ]
  }),
  languageData: {
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    closeBrackets: { brackets: ['(', '[', '{', '"', '\'', '<'] },
    indentOnInput: /^\s*((\)|\]|\})$|(catch|finally)\b)/,
    autocomplete: autocomplete
  }
});

export function msil() {
  return new LanguageSupport(msilLanguage);
}

export * from "./tooltip";