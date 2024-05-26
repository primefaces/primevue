/**
 *
 * RadioButton Design Tokens
 *
 * [Live Demo](https://www.primevue.org/radiobutton/)
 *
 * @module themes/radiobutton
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface RadioButtonDesignTokens extends ColorSchemeDesignToken<RadioButtonDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: {
        /**
         * Width of root
         *
         * @designToken radiobutton.width
         */
        width?: string;
        /**
         * Height of root
         *
         * @designToken radiobutton.height
         */
        height?: string;
        /**
         * Background of root
         *
         * @designToken radiobutton.background
         */
        background?: string;
        /**
         * Checked background of root
         *
         * @designToken radiobutton.checked.background
         */
        checkedBackground?: string;
        /**
         * Checked hover background of root
         *
         * @designToken radiobutton.checked.hover.background
         */
        checkedHoverBackground?: string;
        /**
         * Disabled background of root
         *
         * @designToken radiobutton.disabled.background
         */
        disabledBackground?: string;
        /**
         * Filled background of root
         *
         * @designToken radiobutton.filled.background
         */
        filledBackground?: string;
        /**
         * Border color of root
         *
         * @designToken radiobutton.border.color
         */
        borderColor?: string;
        /**
         * Hover border color of root
         *
         * @designToken radiobutton.hover.border.color
         */
        hoverBorderColor?: string;
        /**
         * Focus border color of root
         *
         * @designToken radiobutton.focus.border.color
         */
        focusBorderColor?: string;
        /**
         * Checked border color of root
         *
         * @designToken radiobutton.checked.border.color
         */
        checkedBorderColor?: string;
        /**
         * Checked hover border color of root
         *
         * @designToken radiobutton.checked.hover.border.color
         */
        checkedHoverBorderColor?: string;
        /**
         * Checked focus border color of root
         *
         * @designToken radiobutton.checked.focus.border.color
         */
        checkedFocusBorderColor?: string;
        /**
         * Invalid border color of root
         *
         * @designToken radiobutton.invalid.border.color
         */
        invalidBorderColor?: string;
        /**
         * Shadow of root
         *
         * @designToken radiobutton.shadow
         */
        shadow?: string;
        /**
         * Focus ring of root
         */
        focusRing?: {
            /**
             * Focus ring width of root
             *
             * @designToken radiobutton.focus.ring.width
             */
            width?: string;
            /**
             * Focus ring style of root
             *
             * @designToken radiobutton.focus.ring.style
             */
            style?: string;
            /**
             * Focus ring color of root
             *
             * @designToken radiobutton.focus.ring.color
             */
            color?: string;
            /**
             * Focus ring offset of root
             *
             * @designToken radiobutton.focus.ring.offset
             */
            offset?: string;
            /**
             * Focus ring shadow of root
             *
             * @designToken radiobutton.focus.ring.shadow
             */
            shadow?: string;
        };
        /**
         * Transition duration of root
         *
         * @designToken radiobutton.transition.duration
         */
        transitionDuration?: string;
    };
    /**
     * Used to pass tokens of the icon section
     */
    icon?: {
        /**
         * Size of icon
         *
         * @designToken radiobutton.icon.size
         */
        size?: string;
        /**
         * Checked color of icon
         *
         * @designToken radiobutton.icon.checked.color
         */
        checkedColor?: string;
        /**
         * Checked hover color of icon
         *
         * @designToken radiobutton.icon.checked.hover.color
         */
        checkedHoverColor?: string;
        /**
         * Disabled color of icon
         *
         * @designToken radiobutton.icon.disabled.color
         */
        disabledColor?: string;
    };
}
