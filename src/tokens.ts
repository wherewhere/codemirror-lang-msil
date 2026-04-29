import { ExternalTokenizer, type InputStream } from "@lezer/lr";
import { dotIdentifier, identifier } from "./syntax.grammar.terms";

function isWhitespace(c: number) {
	return c === 32 	//  
		|| c === 9 		// \t
		|| c === 10 	// \n
		|| c === 13; 	// \r
}

function isDotBoundaryBefore(c: number) {
	if (c < 0) { return true; }
	if (isWhitespace(c)) { return true; }
	return c === 123	// {
		|| c === 125   	// }
		|| c === 40    	// (
		|| c === 41    	// )
		|| c === 91    	// [
		|| c === 93    	// ]
		|| c === 44    	// ,
		|| c === 58    	// :
		|| c === 60    	// <
		|| c === 62;   	// >
}

function isLetter(c: number) {
	return (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
}

function peekCodePoint(input: InputStream, offset: number) {
	const first = input.peek(offset);
	if (first < 0) {
		return { codePoint: first, size: 1 };
	}

	if (first >= 0xD800 && first <= 0xDBFF) {
		const second = input.peek(offset + 1);
		if (second >= 0xDC00 && second <= 0xDFFF) {
			const codePoint = ((first - 0xD800) << 10) + (second - 0xDC00) + 0x10000;
			return { codePoint, size: 2 };
		}
	}

	return { codePoint: first, size: 1 };
}

const LETTER_MASK = 1;
const DIGIT_MASK = 2;
const codePointClassCache = new Map<number, number>();

const UNICODE_LETTER_RE = /^\p{L}$/u;
const UNICODE_DECIMAL_DIGIT_RE = /^\p{Nd}$/u;

function getUnicodeType(codePoint: number) {
	if (codePoint < 0) {
		return 0;
	}
	let mask = codePointClassCache.get(codePoint);
	if (mask === undefined) {
		mask = 0;
		const char = String.fromCodePoint(codePoint);
		if (UNICODE_LETTER_RE.test(char)) {
			mask |= LETTER_MASK;
		}
		if (UNICODE_DECIMAL_DIGIT_RE.test(char)) {
			mask |= DIGIT_MASK;
		}
		codePointClassCache.set(codePoint, mask);
	}
	return mask;
}


function isIdentifierFirst(codePoint: number) {
	switch (codePoint) {
		case 36: 	// $
		case 64: 	// @
		case 95: 	// _
			return true;
		default:
			return !!(getUnicodeType(codePoint) & LETTER_MASK);
	}
}


function isIdentifierNext(codePoint: number) {
	switch (codePoint) {
		case 95:	// _
		case 35: 	// #
		case 36: 	// $
		case 64: 	// @
		case 63: 	// ?
		case 96: 	// `
			return true;
		default:
			const type = getUnicodeType(codePoint);
			return !!(type & LETTER_MASK) || !!(type & DIGIT_MASK);
	}
}


// Contextual tokenizer for dot-prefixed directive identifiers (.class, .namespace, .ctor, …).
// contextual: true means it only runs when the parser state explicitly expects
// a dotIdentifier token, so it does NOT compete with the plain '.' separator
// inside dottedName rules.
export const dotTokens = new ExternalTokenizer(input => {
	if (input.next !== 46) { return; }

	const prev = input.peek(-1);
	if (!isDotBoundaryBefore(prev)) { return; }

	let offset = 1;
	let first = input.peek(offset);
	if (!isLetter(first)) { return; }

	while (isLetter(first)) {
		offset++;
		first = input.peek(offset);
	}

	for (let i = 0; i < offset; i++) {
		input.advance();
	}
	input.acceptToken(dotIdentifier);
}, { contextual: true });

export const idTokens = new ExternalTokenizer(input => {
	let offset = 0;

	while (true) {
		const ch = input.peek(offset);
		if (ch === 37 || ch === 126) {
			offset++;
			continue;
		}
		break;
	}

	const first = peekCodePoint(input, offset);
	if (!isIdentifierFirst(first.codePoint)) {
		return;
	}
	offset += first.size;

	while (true) {
		const next = peekCodePoint(input, offset);
		if (!isIdentifierNext(next.codePoint)) {
			break;
		}
		offset += next.size;
	}

	for (let i = 0; i < offset; i++) {
		input.advance();
	}
	input.acceptToken(identifier);
});
