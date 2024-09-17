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
         * Font weight of root
         *
         * @designToken floatlabel.font.weight
         */
        fontWeight?: string;
        /**
         * Focus of root
         */
        focus?: {
            /**
             * Focus top of root
             *
             * @designToken floatlabel.focus.top
             */
            top?: string;
            /**
             * Focus font size of root
             *
             * @designToken floatlabel.focus.font.size
             */
            fontSize?: string;
            /**
             * Focus font weight of root
             *
             * @designToken floatlabel.focus.font.weight
             */
            fontWeight?: string;
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
        };
        /**
         * Focus of in
         */
        focus?: {
            /**
             * Focus top of in
             *
             * @designToken floatlabel.in.focus.top
             */
            top?: string;
        };
    };
    /**
     * Used to pass tokens of the on section
     */
    on?: {
        /**
         * Input of on
         */
        input?: {
            /**
             * Input padding top of on
             *
             * @designToken floatlabel.on.input.padding.top
             */
            paddingTop?: string;
            /**
             * Input padding bottom of on
             *
             * @designToken floatlabel.on.input.padding.bottom
             */
            paddingBottom?: string;
        };
        /**
         * Focus of on
         */
        focus?: {
            /**
             * Focus background of on
             *
             * @designToken floatlabel.on.focus.background
             */
            background?: string;
            /**
             * Focus padding of on
             *
             * @designToken floatlabel.on.focus.padding
             */
            padding?: string;
        };
    };
}
