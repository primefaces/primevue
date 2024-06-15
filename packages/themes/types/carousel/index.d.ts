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
         * Indicator list of root
         */
        indicatorList?: {
            /**
             * Indicator list padding of root
             *
             * @designToken carousel.indicator.list.padding
             */
            padding?: string;
            /**
             * Indicator list gap of root
             *
             * @designToken carousel.indicator.list.gap
             */
            gap?: string;
        };
        /**
         * Indicator of root
         */
        indicator?: {
            /**
             * Indicator width of root
             *
             * @designToken carousel.indicator.width
             */
            width?: string;
            /**
             * Indicator height of root
             *
             * @designToken carousel.indicator.height
             */
            height?: string;
            /**
             * Indicator border radius of root
             *
             * @designToken carousel.indicator.border.radius
             */
            borderRadius?: string;
            /**
             * Indicator focus ring of root
             */
            focusRing?: {
                /**
                 * Indicator focus ring width of root
                 *
                 * @designToken carousel.indicator.focus.ring.width
                 */
                width?: string;
                /**
                 * Indicator focus ring style of root
                 *
                 * @designToken carousel.indicator.focus.ring.style
                 */
                style?: string;
                /**
                 * Indicator focus ring color of root
                 *
                 * @designToken carousel.indicator.focus.ring.color
                 */
                color?: string;
                /**
                 * Indicator focus ring offset of root
                 *
                 * @designToken carousel.indicator.focus.ring.offset
                 */
                offset?: string;
                /**
                 * Indicator focus ring shadow of root
                 *
                 * @designToken carousel.indicator.focus.ring.shadow
                 */
                shadow?: string;
            };
        };
        /**
         * Transition duration of root
         *
         * @designToken carousel.transition.duration
         */
        transitionDuration?: string;
    };
    /**
     * Used to pass tokens of the indicator section
     */
    indicator?: {
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
