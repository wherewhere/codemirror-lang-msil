import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { basicSetup } from 'codemirror';
import { indentUnit } from '@codemirror/language';
import { indentWithTab } from '@codemirror/commands';
import { msil, parser } from '../dist/';
import { printTree } from './print-lezer-tree';
import { oneDark } from '@codemirror/theme-one-dark';

const doc = '';

new EditorView({
    state: EditorState.create({
        doc,
        extensions: [
            basicSetup,
            msil(),
            oneDark,
            keymap.of([indentWithTab]),
            indentUnit.of('    '),
            EditorView.lineWrapping,
            EditorView.updateListener.of(e => {
                if (e.docChanged) {
                    const doc = e.state.doc.toString();
                    console.log(printTree(parser.parse(doc), doc));
                }
            })],
    }),
    parent: document.querySelector('#editor')!,
});

console.log(printTree(parser.parse(doc), doc));
