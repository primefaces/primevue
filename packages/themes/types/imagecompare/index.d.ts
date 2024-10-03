/**
 *
 * ImageCompare Design Tokens
 *
 * [Live Demo](https://www.primevue.org/imagecompare/)
 *
 * @module themes/imagecompare
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface ImageCompareDesignTokens extends ColorSchemeDesignToken<ImageCompareDesignTokens> {
    /**
     * Used to pass tokens of the handle section
     */
    handle?: {
        /**
         * Size of handle
         *
         * @designToken imagecompare.handle.size
         */
        size?: string;
        /**
         * Background of handle
         *
         * @designToken imagecompare.handle.background
         */
        background?: string;
        /**
         * Border of handle
         */
        border?: {
            /**
             * Border width of handle
             *
             * @designToken imagecompare.handle.border.width
             */
            width?: string;
            /**
             * Border style of handle
             *
             * @designToken imagecompare.handle.border.style
             */
            style?: string;
            /**
             * Border color of handle
             *
             * @designToken imagecompare.handle.border.color
             */
            color?: string;
            /**
             * Border radius of handle
             *
             * @designToken imagecompare.handle.border.radius
             */
            radius?: string;
        };
        /**
         * Transition duration of handle
         *
         * @designToken imagecompare.handle.transition.duration
         */
        transitionDuration?: string;
        /**
         * Focus ring of handle
         */
        focusRing?: {
            /**
             * Focus ring width of handle
             *
             * @designToken imagecompare.handle.focus.ring.width
             */
            width?: string;
            /**
             * Focus ring style of handle
             *
             * @designToken imagecompare.handle.focus.ring.style
             */
            style?: string;
            /**
             * Focus ring color of handle
             *
             * @designToken imagecompare.handle.focus.ring.color
             */
            color?: string;
            /**
             * Focus ring offset of handle
             *
             * @designToken imagecompare.handle.focus.ring.offset
             */
            offset?: string;
            /**
             * Focus ring shadow of handle
             *
             * @designToken imagecompare.handle.focus.ring.shadow
             */
            shadow?: string;
        };
    };
}
