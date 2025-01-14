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
         * Color 1 of root
         *
         * @designToken progressspinner.color.one
         */
        colorOne?: string;
        /**
         * Color 2 of root
         *
         * @designToken progressspinner.color.two
         */
        colorTwo?: string;
        /**
         * Color 3 of root
         *
         * @designToken progressspinner.color.three
         */
        colorThree?: string;
        /**
         * Color 4 of root
         *
         * @designToken progressspinner.color.four
         */
        colorFour?: string;
    };
}
