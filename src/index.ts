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
        Delim: continuedIndent({ except: /^\s*(?:case\b|default:)/ })
      }),
      foldNodeProp.add({
        Delim: foldInside
      }),
      styleTags({
        "Keyword ContextualKeyword SimpleType": t.keyword,
        BooleanLiteral: t.bool,
        NullLiteral: t.null,
        "IntegerLiteral ByteLiteral": t.integer,
        RealLiteral: t.float,
        'QSTRING SQSTRING': t.string,
        "LineComment BlockComment": t.comment,

        ". .. : Astrisk Slash % + - ++ -- Not ~ << & | ^ && || < > <= >= == NotEq = += -= *= SlashEq %= &= |= ^= ? ?? ??= =>":
          t.operator,

        "P_DEFINE P_UNDEF P_IFDEF P_IFNDEF P_ELSE P_ENDIF P_INCLUDE P_LINE": t.definitionKeyword,

        TypeIdentifier: t.typeName,
        "ArgumentName AttrsNamedArg": t.variableName,
        ConstName: t.constant(t.variableName),

        //Ident: t.name,
        MethodName: t.function(t.variableName),
        ParamName: [t.emphasis, t.variableName],
        FieldName: t.variableName,
        PropertyName: t.propertyName,

        "( )": t.paren,
        "{ }": t.brace,
        "[ ]": t.squareBracket
      })
    ]
  }),
  languageData: {
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    closeBrackets: { brackets: ["(", "[", "{", '"', "'"] },
    indentOnInput: /^\s*((\)|\]|\})$|(else|else\s+if|catch|finally|case)\b|default:)/
  }
});

export function msil() {
  return new LanguageSupport(msilLanguage);
}
