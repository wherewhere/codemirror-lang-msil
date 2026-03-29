# CodeMirror IL Language Support

A CodeMirror extension that provides IL syntax highlighting and language support.


### Usage

```ts
import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { msil } from 'codemirror-lang-msil';
import { basicSetup } from 'codemirror';

new EditorView({
  state: EditorState.create({
    doc: `
.assembly A
{
}

.class public auto ansi abstract sealed beforefieldinit C
    extends System.Object
{
    .method public hidebysig static
        void M () cil managed
    {
        .maxstack 8

        ret
    }
}
`,
    extensions: [basicSetup, msil()],
  }),
  parent: document.querySelector('#editor'),
});
```