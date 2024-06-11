
/**
 *
 * Inplace Design Tokens
 *
 * [Live Demo](https://www.primevue.org/inplace/)
 *
 * @module themes/inplace
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface InplaceDesignTokens extends ColorSchemeDesignToken<InplaceDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Padding of root
    *
    * @designToken inplace.padding
    */
    padding?: string;
    /**
    * Border radius of root
    *
    * @designToken inplace.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of root
    */
    focusRing?: {
        
    /**
    * Focus ring width of root
    *
    * @designToken inplace.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of root
    *
    * @designToken inplace.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of root
    *
    * @designToken inplace.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of root
    *
    * @designToken inplace.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of root
    *
    * @designToken inplace.focus.ring.shadow
    */
    shadow?: string;
    };
    /**
    * Transition duration of root
    *
    * @designToken inplace.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the display section
    */
    display?: {
        
    /**
    * Hover background of display
    *
    * @designToken inplace.display.hover.background
    */
    hoverBackground?: string;
    /**
    * Hover color of display
    *
    * @designToken inplace.display.hover.color
    */
    hoverColor?: string;
    }
}
