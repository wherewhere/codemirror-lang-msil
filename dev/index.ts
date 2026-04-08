import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { basicSetup } from 'codemirror';
import { indentUnit } from '@codemirror/language';
import { indentWithTab } from '@codemirror/commands';
import { msil, parser, msilTooltip } from '../dist/';
import { printTree } from './print-lezer-tree';
import { oneDark } from '@codemirror/theme-one-dark';

const doc = `.assembly _
{
    .custom instance void [System.Private.CoreLib]System.Runtime.CompilerServices.CompilationRelaxationsAttribute::.ctor(int32) = (
        01 00 08 00 00 00 00 00
    )
    .custom instance void [System.Private.CoreLib]System.Runtime.CompilerServices.RuntimeCompatibilityAttribute::.ctor() = (
        01 00 01 00 54 02 16 57 72 61 70 4e 6f 6e 45 78
        63 65 70 74 69 6f 6e 54 68 72 6f 77 73 01
    )
    .custom instance void [System.Private.CoreLib]System.Diagnostics.DebuggableAttribute::.ctor(valuetype [System.Private.CoreLib]System.Diagnostics.DebuggableAttribute/DebuggingModes) = (
        01 00 02 00 00 00 00 00
    )
    .permissionset reqmin = (
        2e 01 80 92 53 79 73 74 65 6d 2e 53 65 63 75 72
        69 74 79 2e 50 65 72 6d 69 73 73 69 6f 6e 73 2e
        53 65 63 75 72 69 74 79 50 65 72 6d 69 73 73 69
        6f 6e 41 74 74 72 69 62 75 74 65 2c 20 53 79 73
        74 65 6d 2e 50 72 69 76 61 74 65 2e 43 6f 72 65
        4c 69 62 2c 20 56 65 72 73 69 6f 6e 3d 35 2e 30
        2e 30 2e 30 2c 20 43 75 6c 74 75 72 65 3d 6e 65
        75 74 72 61 6c 2c 20 50 75 62 6c 69 63 4b 65 79
        54 6f 6b 65 6e 3d 37 63 65 63 38 35 64 37 62 65
        61 37 37 39 38 65 15 01 54 02 10 53 6b 69 70 56
        65 72 69 66 69 63 61 74 69 6f 6e 01
    )
    .hash algorithm 0x00008004 // SHA1
    .ver 0:0:0:0
}

.class private auto ansi '<Module>'
{
} // end of class <Module>

.class public auto ansi beforefieldinit C
    extends [System.Private.CoreLib]System.Object
{
    // Methods
    .method public hidebysig 
        instance void M () cil managed 
    {
        // Method begins at RVA 0x2050
        // Code size 1 (0x1)
        .maxstack 8

        IL_0000: ret
    } // end of method C::M

    .method public hidebysig specialname rtspecialname 
        instance void .ctor () cil managed 
    {
        // Method begins at RVA 0x2052
        // Code size 7 (0x7)
        .maxstack 8

        IL_0000: ldarg.0
        IL_0001: call instance void [System.Private.CoreLib]System.Object::.ctor()
        IL_0006: ret
    } // end of method C::.ctor

} // end of class C
`;

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
      }),
      msilTooltip()
    ],
  }),
  parent: document.querySelector('#editor')!,
});

syntax.textContent = printTree(parser.parse(doc), doc);
