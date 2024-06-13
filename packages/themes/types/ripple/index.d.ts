
/**
 *
 * Ripple Design Tokens
 *
 * [Live Demo](https://www.primevue.org/ripple/)
 *
 * @module themes/ripple
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface RippleDesignTokens extends ColorSchemeDesignToken<RippleDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken ripple.background
    */
    background?: string;
    }
}
