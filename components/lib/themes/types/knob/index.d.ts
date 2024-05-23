/**
 *
 * Knob Design Tokens
 *
 * [Live Demo](https://www.primevue.org/knob/)
 *
 * @module themes/knob
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface KnobDesignTokens extends ColorSchemeDesignToken<KnobDesignTokens> {
    /**
     * Used to pass tokens of the value section
     */
    value?: {
        /**
         * Background of value
         *
         * @designToken knob.value.background
         */
        background?: string;
    };
    /**
     * Used to pass tokens of the range section
     */
    range?: {
        /**
         * Background of range
         *
         * @designToken knob.range.background
         */
        background?: string;
    };
    /**
     * Used to pass tokens of the text section
     */
    text?: {
        /**
         * Color of text
         *
         * @designToken knob.text.color
         */
        color?: string;
    };
}
