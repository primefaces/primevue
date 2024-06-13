
/**
 *
 * InputChips Design Tokens
 *
 * [Live Demo](https://www.primevue.org/inputchips/)
 *
 * @module themes/inputchips
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface InputChipsDesignTokens extends ColorSchemeDesignToken<InputChipsDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken inputchips.background
    */
    background?: string;
    /**
    * Disabled background of root
    *
    * @designToken inputchips.disabled.background
    */
    disabledBackground?: string;
    /**
    * Filled background of root
    *
    * @designToken inputchips.filled.background
    */
    filledBackground?: string;
    /**
    * Filled focus background of root
    *
    * @designToken inputchips.filled.focus.background
    */
    filledFocusBackground?: string;
    /**
    * Border color of root
    *
    * @designToken inputchips.border.color
    */
    borderColor?: string;
    /**
    * Hover border color of root
    *
    * @designToken inputchips.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Focus border color of root
    *
    * @designToken inputchips.focus.border.color
    */
    focusBorderColor?: string;
    /**
    * Invalid border color of root
    *
    * @designToken inputchips.invalid.border.color
    */
    invalidBorderColor?: string;
    /**
    * Color of root
    *
    * @designToken inputchips.color
    */
    color?: string;
    /**
    * Disabled color of root
    *
    * @designToken inputchips.disabled.color
    */
    disabledColor?: string;
    /**
    * Placeholder color of root
    *
    * @designToken inputchips.placeholder.color
    */
    placeholderColor?: string;
    /**
    * Shadow of root
    *
    * @designToken inputchips.shadow
    */
    shadow?: string;
    /**
    * Padding x of root
    *
    * @designToken inputchips.padding.x
    */
    paddingX?: string;
    /**
    * Padding y of root
    *
    * @designToken inputchips.padding.y
    */
    paddingY?: string;
    /**
    * Border radius of root
    *
    * @designToken inputchips.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of root
    */
    focusRing?: {
        
    /**
    * Focus ring width of root
    *
    * @designToken inputchips.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of root
    *
    * @designToken inputchips.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of root
    *
    * @designToken inputchips.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of root
    *
    * @designToken inputchips.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of root
    *
    * @designToken inputchips.focus.ring.shadow
    */
    shadow?: string;
    };
    /**
    * Transition duration of root
    *
    * @designToken inputchips.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the chip section
    */
    chip?: {
        
    /**
    * Border radius of chip
    *
    * @designToken inputchips.chip.border.radius
    */
    borderRadius?: string;
    /**
    * Focus background of chip
    *
    * @designToken inputchips.chip.focus.background
    */
    focusBackground?: string;
    /**
    * Color of chip
    *
    * @designToken inputchips.chip.color
    */
    color?: string;
    }
}
