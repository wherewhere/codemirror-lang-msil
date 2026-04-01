import { hoverTooltip } from "@codemirror/view";
import { syntaxTree } from "@codemirror/language";
import instructions from "./instructions";

export function msilTooltip(options?: Parameters<typeof hoverTooltip>[1]) {
    return hoverTooltip(function (view, pos) {
        let node = syntaxTree(view.state).resolveInner(pos);
        if (node.name !== "OpCode") {
            const parent = node.parent;
            if (parent?.name === "OpCode") {
                node = parent;
            }
            else {
                return null;
            }
        }
        const text = view.state.sliceDoc(node.from, node.to) as keyof typeof instructions;
        if (text) {
            const desc = instructions[text];
            if (desc) {
                return {
                    pos,
                    create() {
                        const dom = document.createElement("div")
                        dom.classList.add("cm-msil-hover-infotip");
                        const name = document.createElement("span");
                        name.className = "tok-keyword";
                        name.textContent = text;
                        const description = document.createElement("div");
                        description.className = "cm-msil-hover-infotip-description";
                        description.textContent = desc;
                        dom.appendChild(name);
                        dom.appendChild(description);
                        return { dom };
                    }
                };
            }
        }
        return null;
    }, options);
}