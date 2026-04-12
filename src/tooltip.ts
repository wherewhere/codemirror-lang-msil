import { hoverTooltip, type TooltipView } from "@codemirror/view";
import { syntaxTree } from "@codemirror/language";
import { getInstruction } from "./complete/keywords/instructions";

type tokenType = "keyword";
type titleInfo = { title: string, type: tokenType };
type hoverRender = (info: titleInfo, description: string) => TooltipView;

export function hoverRender({ title, type }: titleInfo, description: string) {
    const dom = document.createElement("div")
    dom.classList.add("cm-msil-hover-infotip");
    const name = document.createElement("span");
    name.className = `tok-${type}`;
    name.textContent = title;
    const subname = document.createElement("div");
    subname.className = "cm-msil-hover-infotip-description";
    subname.textContent = description;
    dom.appendChild(name);
    dom.appendChild(subname);
    return { dom };
}

export function msilTooltip(render: hoverRender = hoverRender, options?: Parameters<typeof hoverTooltip>[1]) {
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
        const code = view.state.sliceDoc(node.from, node.to);
        const opcode = getInstruction(code);
        if (opcode) {
            const desc = opcode.info;
            if (desc) {
                return {
                    pos,
                    create() {
                        return render({ title: code, type: "keyword" }, desc);
                    }
                };
            }
        }
        return null;
    }, options);
}