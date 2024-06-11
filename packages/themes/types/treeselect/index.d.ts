
/**
 *
 * TreeSelect Design Tokens
 *
 * [Live Demo](https://www.primevue.org/treeselect/)
 *
 * @module themes/treeselect
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface TreeSelectDesignTokens extends ColorSchemeDesignToken<TreeSelectDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken treeselect.background
    */
    background?: string;
    /**
    * Disabled background of root
    *
    * @designToken treeselect.disabled.background
    */
    disabledBackground?: string;
    /**
    * Filled background of root
    *
    * @designToken treeselect.filled.background
    */
    filledBackground?: string;
    /**
    * Filled focus background of root
    *
    * @designToken treeselect.filled.focus.background
    */
    filledFocusBackground?: string;
    /**
    * Border color of root
    *
    * @designToken treeselect.border.color
    */
    borderColor?: string;
    /**
    * Hover border color of root
    *
    * @designToken treeselect.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Focus border color of root
    *
    * @designToken treeselect.focus.border.color
    */
    focusBorderColor?: string;
    /**
    * Invalid border color of root
    *
    * @designToken treeselect.invalid.border.color
    */
    invalidBorderColor?: string;
    /**
    * Color of root
    *
    * @designToken treeselect.color
    */
    color?: string;
    /**
    * Disabled color of root
    *
    * @designToken treeselect.disabled.color
    */
    disabledColor?: string;
    /**
    * Placeholder color of root
    *
    * @designToken treeselect.placeholder.color
    */
    placeholderColor?: string;
    /**
    * Shadow of root
    *
    * @designToken treeselect.shadow
    */
    shadow?: string;
    /**
    * Padding x of root
    *
    * @designToken treeselect.padding.x
    */
    paddingX?: string;
    /**
    * Padding y of root
    *
    * @designToken treeselect.padding.y
    */
    paddingY?: string;
    /**
    * Border radius of root
    *
    * @designToken treeselect.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of root
    */
    focusRing?: {
        
    /**
    * Focus ring width of root
    *
    * @designToken treeselect.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of root
    *
    * @designToken treeselect.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of root
    *
    * @designToken treeselect.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of root
    *
    * @designToken treeselect.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of root
    *
    * @designToken treeselect.focus.ring.shadow
    */
    shadow?: string;
    };
    /**
    * Transition duration of root
    *
    * @designToken treeselect.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the dropdown section
    */
    dropdown?: {
        
    /**
    * Width of dropdown
    *
    * @designToken treeselect.dropdown.width
    */
    width?: string;
    /**
    * Color of dropdown
    *
    * @designToken treeselect.dropdown.color
    */
    color?: string;
    }
    /**
    * Used to pass tokens of the overlay section
    */
    overlay?: {
        
    /**
    * Background of overlay
    *
    * @designToken treeselect.overlay.background
    */
    background?: string;
    /**
    * Border color of overlay
    *
    * @designToken treeselect.overlay.border.color
    */
    borderColor?: string;
    /**
    * Border radius of overlay
    *
    * @designToken treeselect.overlay.border.radius
    */
    borderRadius?: string;
    /**
    * Color of overlay
    *
    * @designToken treeselect.overlay.color
    */
    color?: string;
    /**
    * Shadow of overlay
    *
    * @designToken treeselect.overlay.shadow
    */
    shadow?: string;
    }
    /**
    * Used to pass tokens of the tree section
    */
    tree?: {
        
    /**
    * Padding of tree
    *
    * @designToken treeselect.tree.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the empty message section
    */
    emptyMessage?: {
        
    /**
    * Padding of empty message
    *
    * @designToken treeselect.empty.message.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the chip section
    */
    chip?: {
        
    /**
    * Border radius of chip
    *
    * @designToken treeselect.chip.border.radius
    */
    borderRadius?: string;
    }
}
