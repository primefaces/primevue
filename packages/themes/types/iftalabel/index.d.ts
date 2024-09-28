/**
 *
 * IftaLabel Design Tokens
 *
 * [Live Demo](https://www.primevue.org/iftalabel/)
 *
 * @module themes/iftalabel
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface IftaLabelDesignTokens extends ColorSchemeDesignToken<IftaLabelDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: {
        /**
         * Color of root
         *
         * @designToken iftalabel.color
         */
        color?: string;
        /**
         * Focus color of root
         *
         * @designToken iftalabel.focus.color
         */
        focusColor?: string;
        /**
         * Invalid color of root
         *
         * @designToken iftalabel.invalid.color
         */
        invalidColor?: string;
        /**
         * Transition duration of root
         *
         * @designToken iftalabel.transition.duration
         */
        transitionDuration?: string;
        /**
         * Position x of root
         *
         * @designToken iftalabel.position.x
         */
        positionX?: string;
        /**
         * Top of root
         *
         * @designToken iftalabel.top
         */
        top?: string;
        /**
         * Font size of root
         *
         * @designToken iftalabel.font.size
         */
        fontSize?: string;
        /**
         * Font weight of root
         *
         * @designToken iftalabel.font.weight
         */
        fontWeight?: string;
    };
    /**
     * Used to pass tokens of the input section
     */
    input?: {
        /**
         * Padding top of input
         *
         * @designToken iftalabel.input.padding.top
         */
        paddingTop?: string;
        /**
         * Padding bottom of input
         *
         * @designToken iftalabel.input.padding.bottom
         */
        paddingBottom?: string;
    };
}
