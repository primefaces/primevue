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
     * Used to pass tokens of the mask section
     */
    loaderMask?: {
        /**
         * Background of loader mask
         *
         * @designToken virtualscroller.loader.mask.background
         */
        background?: string;
        /**
         * Color of loader mask
         *
         * @designToken virtualscroller.loader.mask.color
         */
        color?: string;
    };
    /**
     * Used to pass tokens of the loader icon section
     */
    loaderIcon?: {
        /**
         * Size of the loader icon
         *
         * @designToken virtualscroller.loader.icon.size
         */
        size?: string;
    };
}
