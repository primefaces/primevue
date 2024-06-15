/**
 *
 * Checkbox Design Tokens
 *
 * [Live Demo](https://www.primevue.org/checkbox/)
 *
 * @module themes/checkbox
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface CheckboxDesignTokens extends ColorSchemeDesignToken<CheckboxDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: {
        /**
         * Border radius of root
         *
         * @designToken checkbox.border.radius
         */
        borderRadius?: string;
        /**
         * Width of root
         *
         * @designToken checkbox.width
         */
        width?: string;
        /**
         * Height of root
         *
         * @designToken checkbox.height
         */
        height?: string;
        /**
         * Background of root
         *
         * @designToken checkbox.background
         */
        background?: string;
        /**
         * Checked background of root
         *
         * @designToken checkbox.checked.background
         */
        checkedBackground?: string;
        /**
         * Checked hover background of root
         *
         * @designToken checkbox.checked.hover.background
         */
        checkedHoverBackground?: string;
        /**
         * Disabled background of root
         *
         * @designToken checkbox.disabled.background
         */
        disabledBackground?: string;
        /**
         * Filled background of root
         *
         * @designToken checkbox.filled.background
         */
        filledBackground?: string;
        /**
         * Border color of root
         *
         * @designToken checkbox.border.color
         */
        borderColor?: string;
        /**
         * Hover border color of root
         *
         * @designToken checkbox.hover.border.color
         */
        hoverBorderColor?: string;
        /**
         * Focus border color of root
         *
         * @designToken checkbox.focus.border.color
         */
        focusBorderColor?: string;
        /**
         * Checked border color of root
         *
         * @designToken checkbox.checked.border.color
         */
        checkedBorderColor?: string;
        /**
         * Checked hover border color of root
         *
         * @designToken checkbox.checked.hover.border.color
         */
        checkedHoverBorderColor?: string;
        /**
         * Checked focus border color of root
         *
         * @designToken checkbox.checked.focus.border.color
         */
        checkedFocusBorderColor?: string;
        /**
         * Invalid border color of root
         *
         * @designToken checkbox.invalid.border.color
         */
        invalidBorderColor?: string;
        /**
         * Shadow of root
         *
         * @designToken checkbox.shadow
         */
        shadow?: string;
        /**
         * Focus ring of root
         */
        focusRing?: {
            /**
             * Focus ring width of root
             *
             * @designToken checkbox.focus.ring.width
             */
            width?: string;
            /**
             * Focus ring style of root
             *
             * @designToken checkbox.focus.ring.style
             */
            style?: string;
            /**
             * Focus ring color of root
             *
             * @designToken checkbox.focus.ring.color
             */
            color?: string;
            /**
             * Focus ring offset of root
             *
             * @designToken checkbox.focus.ring.offset
             */
            offset?: string;
            /**
             * Focus ring shadow of root
             *
             * @designToken checkbox.focus.ring.shadow
             */
            shadow?: string;
        };
        /**
         * Transition duration of root
         *
         * @designToken checkbox.transition.duration
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
         * @designToken checkbox.icon.size
         */
        size?: string;
        /**
         * Color of icon
         *
         * @designToken checkbox.icon.color
         */
        color?: string;
        /**
         * Checked color of icon
         *
         * @designToken checkbox.icon.checked.color
         */
        checkedColor?: string;
        /**
         * Checked hover color of icon
         *
         * @designToken checkbox.icon.checked.hover.color
         */
        checkedHoverColor?: string;
        /**
         * Disabled color of icon
         *
         * @designToken checkbox.icon.disabled.color
         */
        disabledColor?: string;
    };
}
