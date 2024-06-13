
/**
 *
 * OverlayBadge Design Tokens
 *
 * [Live Demo](https://www.primevue.org/overlaybadge/)
 *
 * @module themes/overlaybadge
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface OverlayBadgeDesignTokens extends ColorSchemeDesignToken<OverlayBadgeDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Outline of root
    */
    outline?: {
        
    /**
    * Outline width of root
    *
    * @designToken overlaybadge.outline.width
    */
    width?: string;
    /**
    * Outline color of root
    *
    * @designToken overlaybadge.outline.color
    */
    color?: string;
    };
    }
}
