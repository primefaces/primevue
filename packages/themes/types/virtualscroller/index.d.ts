/**
 *
 * VirtualScroller Design Tokens
 *
 * [Live Demo](https://www.primevue.org/virtualscroller/)
 *
 * @module themes/virtualscroller
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface VirtualScrollerDesignTokens extends ColorSchemeDesignToken<VirtualScrollerDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    mask?: {
        /**
         * Background of mask
         *
         * @designToken mask.background
         */
        background?: string;
        /**
         * Color of mask
         *
         * @designToken mask.color
         */
        color?: string;
    };
}
