/**
 *
 * CascadeSelect Design Tokens
 *
 * [Live Demo](https://www.primevue.org/cascadeselect/)
 *
 * @module themes/cascadeselect
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface CascadeSelectDesignTokens extends ColorSchemeDesignToken<CascadeSelectDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: {
        /**
         * Background of root
         *
         * @designToken cascadeselect.background
         */
        background?: string;
        /**
         * Disabled background of root
         *
         * @designToken cascadeselect.disabled.background
         */
        disabledBackground?: string;
        /**
         * Filled background of root
         *
         * @designToken cascadeselect.filled.background
         */
        filledBackground?: string;
        /**
         * Filled hover background of root
         *
         * @designToken cascadeselect.filled.hover.background
         */
        filledHoverBackground?: string;
        /**
         * Filled focus background of root
         *
         * @designToken cascadeselect.filled.focus.background
         */
        filledFocusBackground?: string;
        /**
         * Border color of root
         *
         * @designToken cascadeselect.border.color
         */
        borderColor?: string;
        /**
         * Hover border color of root
         *
         * @designToken cascadeselect.hover.border.color
         */
        hoverBorderColor?: string;
        /**
         * Focus border color of root
         *
         * @designToken cascadeselect.focus.border.color
         */
        focusBorderColor?: string;
        /**
         * Invalid border color of root
         *
         * @designToken cascadeselect.invalid.border.color
         */
        invalidBorderColor?: string;
        /**
         * Color of root
         *
         * @designToken cascadeselect.color
         */
        color?: string;
        /**
         * Disabled color of root
         *
         * @designToken cascadeselect.disabled.color
         */
        disabledColor?: string;
        /**
         * Placeholder color of root
         *
         * @designToken cascadeselect.placeholder.color
         */
        placeholderColor?: string;
        /**
         * Invalid placeholder color of root
         *
         * @designToken cascadeselect.invalid.placeholder.color
         */
        invalidPlaceholderColor?: string;
        /**
         * Shadow of root
         *
         * @designToken cascadeselect.shadow
         */
        shadow?: string;
        /**
         * Padding x of root
         *
         * @designToken cascadeselect.padding.x
         */
        paddingX?: string;
        /**
         * Padding y of root
         *
         * @designToken cascadeselect.padding.y
         */
        paddingY?: string;
        /**
         * Border radius of root
         *
         * @designToken cascadeselect.border.radius
         */
        borderRadius?: string;
        /**
         * Focus ring of root
         */
        focusRing?: {
            /**
             * Focus ring width of root
             *
             * @designToken cascadeselect.focus.ring.width
             */
            width?: string;
            /**
             * Focus ring style of root
             *
             * @designToken cascadeselect.focus.ring.style
             */
            style?: string;
            /**
             * Focus ring color of root
             *
             * @designToken cascadeselect.focus.ring.color
             */
            color?: string;
            /**
             * Focus ring offset of root
             *
             * @designToken cascadeselect.focus.ring.offset
             */
            offset?: string;
            /**
             * Focus ring shadow of root
             *
             * @designToken cascadeselect.focus.ring.shadow
             */
            shadow?: string;
        };
        /**
         * Transition duration of root
         *
         * @designToken cascadeselect.transition.duration
         */
        transitionDuration?: string;
        /**
         * Sm of root
         */
        sm?: {
            /**
             * Sm font size of root
             *
             * @designToken cascadeselect.sm.font.size
             */
            fontSize?: string;
            /**
             * Sm padding x of root
             *
             * @designToken cascadeselect.sm.padding.x
             */
            paddingX?: string;
            /**
             * Sm padding y of root
             *
             * @designToken cascadeselect.sm.padding.y
             */
            paddingY?: string;
        };
        /**
         * Lg of root
         */
        lg?: {
            /**
             * Lg font size of root
             *
             * @designToken cascadeselect.lg.font.size
             */
            fontSize?: string;
            /**
             * Lg padding x of root
             *
             * @designToken cascadeselect.lg.padding.x
             */
            paddingX?: string;
            /**
             * Lg padding y of root
             *
             * @designToken cascadeselect.lg.padding.y
             */
            paddingY?: string;
        };
    };
    /**
     * Used to pass tokens of the dropdown section
     */
    dropdown?: {
        /**
         * Width of dropdown
         *
         * @designToken cascadeselect.dropdown.width
         */
        width?: string;
        /**
         * Color of dropdown
         *
         * @designToken cascadeselect.dropdown.color
         */
        color?: string;
    };
    /**
     * Used to pass tokens of the overlay section
     */
    overlay?: {
        /**
         * Background of overlay
         *
         * @designToken cascadeselect.overlay.background
         */
        background?: string;
        /**
         * Border color of overlay
         *
         * @designToken cascadeselect.overlay.border.color
         */
        borderColor?: string;
        /**
         * Border radius of overlay
         *
         * @designToken cascadeselect.overlay.border.radius
         */
        borderRadius?: string;
        /**
         * Color of overlay
         *
         * @designToken cascadeselect.overlay.color
         */
        color?: string;
        /**
         * Shadow of overlay
         *
         * @designToken cascadeselect.overlay.shadow
         */
        shadow?: string;
    };
    /**
     * Used to pass tokens of the list section
     */
    list?: {
        /**
         * Padding of list
         *
         * @designToken cascadeselect.list.padding
         */
        padding?: string;
        /**
         * Gap of list
         *
         * @designToken cascadeselect.list.gap
         */
        gap?: string;
        /**
         * Mobile indent of list
         *
         * @designToken cascadeselect.list.mobile.indent
         */
        mobileIndent?: string;
    };
    /**
     * Used to pass tokens of the option section
     */
    option?: {
        /**
         * Focus background of option
         *
         * @designToken cascadeselect.option.focus.background
         */
        focusBackground?: string;
        /**
         * Selected background of option
         *
         * @designToken cascadeselect.option.selected.background
         */
        selectedBackground?: string;
        /**
         * Selected focus background of option
         *
         * @designToken cascadeselect.option.selected.focus.background
         */
        selectedFocusBackground?: string;
        /**
         * Color of option
         *
         * @designToken cascadeselect.option.color
         */
        color?: string;
        /**
         * Focus color of option
         *
         * @designToken cascadeselect.option.focus.color
         */
        focusColor?: string;
        /**
         * Selected color of option
         *
         * @designToken cascadeselect.option.selected.color
         */
        selectedColor?: string;
        /**
         * Selected focus color of option
         *
         * @designToken cascadeselect.option.selected.focus.color
         */
        selectedFocusColor?: string;
        /**
         * Padding of option
         *
         * @designToken cascadeselect.option.padding
         */
        padding?: string;
        /**
         * Border radius of option
         *
         * @designToken cascadeselect.option.border.radius
         */
        borderRadius?: string;
        /**
         * Icon of option
         */
        icon?: {
            /**
             * Icon color of option
             *
             * @designToken cascadeselect.option.icon.color
             */
            color?: string;
            /**
             * Icon focus color of option
             *
             * @designToken cascadeselect.option.icon.focus.color
             */
            focusColor?: string;
            /**
             * Icon size of option
             *
             * @designToken cascadeselect.option.icon.size
             */
            size?: string;
        };
    };
    /**
     * Used to pass tokens of the clear icon section
     */
    clearIcon?: {
        /**
         * Color of clear icon
         *
         * @designToken cascadeselect.clear.icon.color
         */
        color?: string;
    };
}
