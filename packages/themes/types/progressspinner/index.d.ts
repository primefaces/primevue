
/**
 *
 * ProgressSpinner Design Tokens
 *
 * [Live Demo](https://www.primevue.org/progressspinner/)
 *
 * @module themes/progressspinner
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface ProgressSpinnerDesignTokens extends ColorSchemeDesignToken<ProgressSpinnerDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Color.1 of root
    *
    * @designToken progressspinner.color.1
    */
    'color.1'?: string;
    /**
    * Color.2 of root
    *
    * @designToken progressspinner.color.2
    */
    'color.2'?: string;
    /**
    * Color.3 of root
    *
    * @designToken progressspinner.color.3
    */
    'color.3'?: string;
    /**
    * Color.4 of root
    *
    * @designToken progressspinner.color.4
    */
    'color.4'?: string;
    }
}
