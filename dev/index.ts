import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { basicSetup } from 'codemirror';
import { indentUnit } from '@codemirror/language';
import { indentWithTab } from '@codemirror/commands';
import { msil, parser } from '../dist/';
import { printTree } from './print-lezer-tree';
import { oneDark } from '@codemirror/theme-one-dark';

const doc = '';
const syntax = document.createElement('pre');
syntax.className = 'ͼo';
document.getElementById('syntax')!.appendChild(syntax);

new EditorView({
    state: EditorState.create({
        doc,
        extensions: [
            basicSetup,
            msil(),
            oneDark,
            keymap.of([indentWithTab]),
            indentUnit.of('    '),
            EditorView.updateListener.of(e => {
                if (e.docChanged) {
                    const doc = e.state.doc.toString();
                    syntax.textContent = printTree(parser.parse(doc), doc);
                }
            })],
    }),
    parent: document.querySelector('#editor')!,
});

syntax.textContent = printTree(parser.parse(doc), doc);
