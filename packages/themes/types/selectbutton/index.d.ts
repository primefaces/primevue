
/**
 *
 * SelectButton Design Tokens
 *
 * [Live Demo](https://www.primevue.org/selectbutton/)
 *
 * @module themes/selectbutton
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface SelectButtonDesignTokens extends ColorSchemeDesignToken<SelectButtonDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Border radius of root
    *
    * @designToken selectbutton.border.radius
    */
    borderRadius?: string;
    /**
    * Invalid border color of root
    *
    * @designToken selectbutton.invalid.border.color
    */
    invalidBorderColor?: string;
    }
}
