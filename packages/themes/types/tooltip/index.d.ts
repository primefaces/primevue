
/**
 *
 * Tooltip Design Tokens
 *
 * [Live Demo](https://www.primevue.org/tooltip/)
 *
 * @module themes/tooltip
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface TooltipDesignTokens extends ColorSchemeDesignToken<TooltipDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Max width of root
    *
    * @designToken tooltip.max.width
    */
    maxWidth?: string;
    /**
    * Gutter of root
    *
    * @designToken tooltip.gutter
    */
    gutter?: string;
    /**
    * Shadow of root
    *
    * @designToken tooltip.shadow
    */
    shadow?: string;
    /**
    * Padding of root
    *
    * @designToken tooltip.padding
    */
    padding?: string;
    /**
    * Border radius of root
    *
    * @designToken tooltip.border.radius
    */
    borderRadius?: string;
    /**
    * Background of root
    *
    * @designToken tooltip.background
    */
    background?: string;
    /**
    * Color of root
    *
    * @designToken tooltip.color
    */
    color?: string;
    }
}
