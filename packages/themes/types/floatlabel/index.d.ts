/**
 *
 * FloatLabel Design Tokens
 *
 * [Live Demo](https://www.primevue.org/floatlabel/)
 *
 * @module themes/floatlabel
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface FloatLabelDesignTokens extends ColorSchemeDesignToken<FloatLabelDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: {
        /**
         * Color of root
         *
         * @designToken floatlabel.color
         */
        color?: string;
        /**
         * Focus color of root
         *
         * @designToken floatlabel.focus.color
         */
        focusColor?: string;
        /**
         * Active color of root
         *
         * @designToken floatlabel.active.color
         */
        activeColor?: string;
        /**
         * Invalid color of root
         *
         * @designToken floatlabel.invalid.color
         */
        invalidColor?: string;
        /**
         * Transition duration of root
         *
         * @designToken floatlabel.transition.duration
         */
        transitionDuration?: string;
        /**
         * Position x of root
         *
         * @designToken floatlabel.position.x
         */
        positionX?: string;
        /**
         * Position y of root
         *
         * @designToken floatlabel.position.y
         */
        positionY?: string;
        /**
         * Font weight of root
         *
         * @designToken floatlabel.font.weight
         */
        fontWeight?: string;
        /**
         * Active of root
         */
        active?: {
            /**
             * Active font size of root
             *
             * @designToken floatlabel.active.font.size
             */
            fontSize?: string;
            /**
             * Active font weight of root
             *
             * @designToken floatlabel.active.font.weight
             */
            fontWeight?: string;
        };
    };
    /**
     * Used to pass tokens of the over section
     */
    over?: {
        /**
         * Active of over
         */
        active?: {
            /**
             * Active top of over
             *
             * @designToken floatlabel.over.active.top
             */
            top?: string;
        };
    };
    /**
     * Used to pass tokens of the in section
     */
    in?: {
        /**
         * Input of in
         */
        input?: {
            /**
             * Input padding top of in
             *
             * @designToken floatlabel.in.input.padding.top
             */
            paddingTop?: string;
            /**
             * Input padding bottom of in
             *
             * @designToken floatlabel.in.input.padding.bottom
             */
            paddingBottom?: string;
        };
        /**
         * Active of in
         */
        active?: {
            /**
             * Active top of in
             *
             * @designToken floatlabel.in.active.top
             */
            top?: string;
        };
    };
    /**
     * Used to pass tokens of the on section
     */
    on?: {
        /**
         * Border radius of on
         *
         * @designToken floatlabel.on.border.radius
         */
        borderRadius?: string;
        /**
         * Active of on
         */
        active?: {
            /**
             * Active background of on
             *
             * @designToken floatlabel.on.active.background
             */
            background?: string;
            /**
             * Active padding of on
             *
             * @designToken floatlabel.on.active.padding
             */
            padding?: string;
        };
    };
}
