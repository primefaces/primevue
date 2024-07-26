/**
 *
 * Carousel Design Tokens
 *
 * [Live Demo](https://www.primevue.org/carousel/)
 *
 * @module themes/carousel
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface CarouselDesignTokens extends ColorSchemeDesignToken<CarouselDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: {
        /**
         * Transition duration of root
         *
         * @designToken carousel.transition.duration
         */
        transitionDuration?: string;
    };
    /**
     * Used to pass tokens of the content section
     */
    content?: {
        /**
         * Gap of content
         *
         * @designToken carousel.content.gap
         */
        gap?: string;
    };
    /**
     * Used to pass tokens of the indicator list section
     */
    indicatorList?: {
        /**
         * Padding of indicator list
         *
         * @designToken carousel.indicator.list.padding
         */
        padding?: string;
        /**
         * Gap of indicator list
         *
         * @designToken carousel.indicator.list.gap
         */
        gap?: string;
    };
    /**
     * Used to pass tokens of the indicator section
     */
    indicator?: {
        /**
         * Width of indicator
         *
         * @designToken carousel.indicator.width
         */
        width?: string;
        /**
         * Height of indicator
         *
         * @designToken carousel.indicator.height
         */
        height?: string;
        /**
         * Border radius of indicator
         *
         * @designToken carousel.indicator.border.radius
         */
        borderRadius?: string;
        /**
         * Focus ring of indicator
         */
        focusRing?: {
            /**
             * Focus ring width of indicator
             *
             * @designToken carousel.indicator.focus.ring.width
             */
            width?: string;
            /**
             * Focus ring style of indicator
             *
             * @designToken carousel.indicator.focus.ring.style
             */
            style?: string;
            /**
             * Focus ring color of indicator
             *
             * @designToken carousel.indicator.focus.ring.color
             */
            color?: string;
            /**
             * Focus ring offset of indicator
             *
             * @designToken carousel.indicator.focus.ring.offset
             */
            offset?: string;
            /**
             * Focus ring shadow of indicator
             *
             * @designToken carousel.indicator.focus.ring.shadow
             */
            shadow?: string;
        };
        /**
         * Background of indicator
         *
         * @designToken carousel.indicator.background
         */
        background?: string;
        /**
         * Hover background of indicator
         *
         * @designToken carousel.indicator.hover.background
         */
        hoverBackground?: string;
        /**
         * Active background of indicator
         *
         * @designToken carousel.indicator.active.background
         */
        activeBackground?: string;
    };
}
