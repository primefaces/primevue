/**
 *
 * Chip Design Tokens
 *
 * [Live Demo](https://www.primevue.org/chip/)
 *
 * @module themes/chip
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface ChipDesignTokens extends ColorSchemeDesignToken<ChipDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: {
        /**
         * Border radius of root
         *
         * @designToken chip.border.radius
         */
        borderRadius?: string;
        /**
         * Padding x of root
         *
         * @designToken chip.padding.x
         */
        paddingX?: string;
        /**
         * Padding y of root
         *
         * @designToken chip.padding.y
         */
        paddingY?: string;
        /**
         * Gap of root
         *
         * @designToken chip.gap
         */
        gap?: string;
        /**
         * Transition duration of root
         *
         * @designToken chip.transition.duration
         */
        transitionDuration?: string;
        /**
         * Background of root
         *
         * @designToken chip.background
         */
        background?: string;
        /**
         * Color of root
         *
         * @designToken chip.color
         */
        color?: string;
    };
    /**
     * Used to pass tokens of the image section
     */
    image?: {
        /**
         * Width of image
         *
         * @designToken chip.image.width
         */
        width?: string;
        /**
         * Height of image
         *
         * @designToken chip.image.height
         */
        height?: string;
    };
    /**
     * Used to pass tokens of the icon section
     */
    icon?: {
        /**
         * Size of icon
         *
         * @designToken chip.icon.size
         */
        size?: string;
        /**
         * Color of icon
         *
         * @designToken chip.icon.color
         */
        color?: string;
    };
    /**
     * Used to pass tokens of the remove icon section
     */
    removeIcon?: {
        /**
         * Focus ring of remove icon
         */
        focusRing?: {
            /**
             * Focus ring width of remove icon
             *
             * @designToken chip.remove.icon.focus.ring.width
             */
            width?: string;
            /**
             * Focus ring style of remove icon
             *
             * @designToken chip.remove.icon.focus.ring.style
             */
            style?: string;
            /**
             * Focus ring color of remove icon
             *
             * @designToken chip.remove.icon.focus.ring.color
             */
            color?: string;
            /**
             * Focus ring offset of remove icon
             *
             * @designToken chip.remove.icon.focus.ring.offset
             */
            offset?: string;
            /**
             * Focus ring shadow of remove icon
             *
             * @designToken chip.remove.icon.focus.ring.shadow
             */
            shadow?: string;
        };
        /**
         * Color of remove icon
         *
         * @designToken chip.remove.icon.color
         */
        color?: string;
    };
}
