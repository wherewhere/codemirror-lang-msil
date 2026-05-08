import { hoverTooltip, type TooltipView } from "@codemirror/view";
import { syntaxTree } from "@codemirror/language";
import { getInstruction } from "./complete/keywords/instructions";
import { keyword } from "./complete/keywords/store";

/** The type of tokens used in MSIL tooltips. */
type tokenType = typeof keyword;

/** The information about the MSIL instruction or element being hovered over, including its title and token type. */
type titleInfo = {
    /** The title of the MSIL instruction or element being hovered over. */
    title: string,
    /** The token type of the MSIL instruction or element being hovered over. */
    type: tokenType
};

/** The function type for rendering MSIL tooltips. */
type hoverRender = (info: titleInfo, description: string) => TooltipView;

/**
 * The default render function for MSIL tooltips.
 * @param description - The description text to be displayed in the tooltip, providing additional information about the MSIL instruction or element being hovered over.
 * @returns An object containing a DOM element that represents the content of the tooltip, which includes the title (the MSIL instruction or element name) styled according to its token type, and a description providing more details about it.
 */
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

/** The options for configuring MSIL tooltips. */
export type TooltipOptions = {
    /** The function used to render the tooltip content. */
    render?: Parameters<typeof msilTooltip>[0],
    /** Additional options for the tooltip. */
    options?: Parameters<typeof msilTooltip>[1]
};

/**
 * Gets MSIL tooltip support.
 * @param render - The function used to render the tooltip content. If not provided, the default {@link hoverRender} function will be used.
 * @param options - Additional options for the tooltip, such as styling or behavior configurations.
 * @returns A tooltip source that can be used in the MSIL language support to provide informative tooltips when hovering over MSIL instructions or elements in the editor. The tooltip will display the name of the instruction or element along with a description, styled according to its token type.
 */
export function msilTooltip(render: hoverRender = hoverRender, options?: Parameters<typeof hoverTooltip>[1]) {
    return hoverTooltip(function (view, pos) {
        let node = syntaxTree(view.state).resolveInner(pos);
        if (!node.type.is("OpCode")) {
            const parent = node.parent;
            if (parent?.type?.is("OpCode")) {
                node = parent;
            }
            else {
                return null;
            }
        }
        const code = view.state.sliceDoc(node.from, node.to);
        const opcode = getInstruction(code);
        if (opcode) {
            const desc = opcode.info?.tooltip;
            if (desc) {
                return {
                    pos,
                    create() {
                        return render({ title: code, type: keyword }, desc);
                    }
                };
            }
        }
        return null;
    }, options);
}