import { ExternalTokenizer } from "@lezer/lr";
import { dotIdentifier } from "./syntax.grammar.terms";

const CHAR_DOT = 46;
const CHAR_0 = 48;
const CHAR_9 = 57;
const CHAR_A = 65;
const CHAR_Z = 90;
const CHAR_UNDERSCORE = 95;
const CHAR_LOWER_A = 97;
const CHAR_LOWER_Z = 122;
const CHAR_BACKTICK = 96;

const DOT_BOUNDARY_CHARS = new Set<number>([
	123, // {
	125, // }
	40,  // (
	41,  // )
	91,  // [
	93,  // ]
	44,  // ,
	60,  // <
	62   // >
]);

function isWhitespace(c: number) {
	return c === 32 || c === 9 || c === 10 || c === 13;
}

function isDotBoundaryBefore(c: number) {
	if (c < 0) { return true; }
	if (isWhitespace(c)) { return true; }
	return DOT_BOUNDARY_CHARS.has(c);
}

function isIdStart(c: number) {
	return (c >= CHAR_A && c <= CHAR_Z) || (c >= CHAR_LOWER_A && c <= CHAR_LOWER_Z) || c === CHAR_UNDERSCORE;
}

function isIdContinue(c: number) {
	return isIdStart(c) || (c >= CHAR_0 && c <= CHAR_9) || c === CHAR_BACKTICK;
}

// Contextual tokenizer for dot-prefixed directive identifiers (.class, .namespace, …).
// contextual: true means it only runs when the parser state explicitly expects
// a dotIdentifier token, so it does NOT compete with the plain '.' separator
// inside dottedName rules.
export const dotTokens = new ExternalTokenizer(input => {
	if (input.next !== CHAR_DOT) { return; }

	const prev = input.peek(-1);
	if (!isDotBoundaryBefore(prev)) { return; }

	let offset = 1;
	let first = input.peek(offset);
	if (!isIdStart(first)) { return; }

	while (isIdContinue(first)) {
		offset++;
		first = input.peek(offset);
	}

	for (let i = 0; i < offset; i++) {
		input.advance();
	}
	input.acceptToken(dotIdentifier);
}, { contextual: true });
