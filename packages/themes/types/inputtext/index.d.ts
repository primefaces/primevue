
/**
 *
 * InputText Design Tokens
 *
 * [Live Demo](https://www.primevue.org/inputtext/)
 *
 * @module themes/inputtext
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface InputTextDesignTokens extends ColorSchemeDesignToken<InputTextDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken inputtext.background
    */
    background?: string;
    /**
    * Disabled background of root
    *
    * @designToken inputtext.disabled.background
    */
    disabledBackground?: string;
    /**
    * Filled background of root
    *
    * @designToken inputtext.filled.background
    */
    filledBackground?: string;
    /**
    * Filled focus background of root
    *
    * @designToken inputtext.filled.focus.background
    */
    filledFocusBackground?: string;
    /**
    * Border color of root
    *
    * @designToken inputtext.border.color
    */
    borderColor?: string;
    /**
    * Hover border color of root
    *
    * @designToken inputtext.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Focus border color of root
    *
    * @designToken inputtext.focus.border.color
    */
    focusBorderColor?: string;
    /**
    * Invalid border color of root
    *
    * @designToken inputtext.invalid.border.color
    */
    invalidBorderColor?: string;
    /**
    * Color of root
    *
    * @designToken inputtext.color
    */
    color?: string;
    /**
    * Disabled color of root
    *
    * @designToken inputtext.disabled.color
    */
    disabledColor?: string;
    /**
    * Placeholder color of root
    *
    * @designToken inputtext.placeholder.color
    */
    placeholderColor?: string;
    /**
    * Shadow of root
    *
    * @designToken inputtext.shadow
    */
    shadow?: string;
    /**
    * Padding x of root
    *
    * @designToken inputtext.padding.x
    */
    paddingX?: string;
    /**
    * Padding y of root
    *
    * @designToken inputtext.padding.y
    */
    paddingY?: string;
    /**
    * Border radius of root
    *
    * @designToken inputtext.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of root
    */
    focusRing?: {
        
    /**
    * Focus ring width of root
    *
    * @designToken inputtext.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of root
    *
    * @designToken inputtext.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of root
    *
    * @designToken inputtext.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of root
    *
    * @designToken inputtext.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of root
    *
    * @designToken inputtext.focus.ring.shadow
    */
    shadow?: string;
    };
    /**
    * Transition duration of root
    *
    * @designToken inputtext.transition.duration
    */
    transitionDuration?: string;
    /**
    * Sm of root
    */
    sm?: {
        
    /**
    * Sm font size of root
    *
    * @designToken inputtext.sm.font.size
    */
    fontSize?: string;
    /**
    * Sm padding x of root
    *
    * @designToken inputtext.sm.padding.x
    */
    paddingX?: string;
    /**
    * Sm padding y of root
    *
    * @designToken inputtext.sm.padding.y
    */
    paddingY?: string;
    };
    /**
    * Lg of root
    */
    lg?: {
        
    /**
    * Lg font size of root
    *
    * @designToken inputtext.lg.font.size
    */
    fontSize?: string;
    /**
    * Lg padding x of root
    *
    * @designToken inputtext.lg.padding.x
    */
    paddingX?: string;
    /**
    * Lg padding y of root
    *
    * @designToken inputtext.lg.padding.y
    */
    paddingY?: string;
    };
    }
}
