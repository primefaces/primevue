
/**
 *
 * BlockUI Design Tokens
 *
 * [Live Demo](https://www.primevue.org/blockui/)
 *
 * @module themes/blockui
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface BlockUIDesignTokens extends ColorSchemeDesignToken<BlockUIDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Border radius of root
    *
    * @designToken blockui.border.radius
    */
    borderRadius?: string;
    }
}
