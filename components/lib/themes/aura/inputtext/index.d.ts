/**
 *
 * InputText renders a text field to enter data.
 *
 * [Live Demo](https://www.primevue.org/inputtext/)
 *
 * @module aura/inputtext
 *
 */
import { ColorSchemeDesignToken } from '..';

/**
 * Defines all sections of design tokens
 */
export namespace InputTextDesignToken {
    /**
     * Tokens of the root section
     */
    export interface Root {
        /**
         * Background of an input field
         *
         * @designToken inputtext.background
         */
        background?: string;
        /**
         * Background of an input field when disabled
         *
         * @designToken inputtext.disabled.background
         */
        disabledBackground?: string;
        /**
         * Background of an input field when filled mode
         *
         * @designToken inputtext.filled.background
         */
        filledBackground?: string;
        /**
         * Background of an input field on the focus state of filled mode
         *
         * @designToken inputtext.filled.focus.background
         */
        filledFocusBackground?: string;
        /**
         * Border color of an input field
         *
         * @designToken inputtext.border.color
         */
        borderColor?: string;
        /**
         * Border color of an input field on the hover state
         *
         * @designToken inputtext.hover.border.color
         */
        hoverBorderColor?: string;
        /**
         * Border color of an input field on the focus state
         *
         * @designToken inputtext.focus.border.color
         */
        focusBorderColor?: string;
        /**
         * Border color of an input field when invalid
         *
         * @designToken inputtext.invalid.border.color
         */
        invalidBorderColor?: string;
        /**
         * Color of an input field
         *
         * @designToken inputtext.color
         */
        color?: string;
        /**
         * Color of an input field when disabled
         *
         * @designToken inputtext.disabled.color
         */
        disabledColor?: string;
        /**
         * Placeholder color of an input field
         *
         * @designToken inputtext.placeholder.color
         */
        placeholderColor?: string;
        /**
         * Shadow of an input field
         *
         * @designToken inputtext.shadow
         */
        shadow?: string;
        /**
         * Padding right and left of an input field
         *
         * @designToken inputtext.padding.x
         */
        paddingX?: string;
        /**
         * Padding top and bottom of an input field
         *
         * @designToken inputtext.padding.y
         */
        paddingY?: string;
        /**
         * Border radius of an input field
         *
         * @designToken inputtext.border.radius
         */
        borderRadius?: string;
        /**
         * Outline of an input field on the focus state
         */
        focusRing?: {
            /**
             * Outline width of an input field on the focus state
             *
             * @designToken inputtext.focus.ring.width
             */
            width?: string;
            /**
             * Outline style of an input field on the focus state
             *
             * @designToken inputtext.focus.ring.style
             */
            style?: string;
            /**
             * Outline color of an input field on the focus state
             *
             * @designToken inputtext.focus.ring.color
             */
            color?: string;
            /**
             * Outline offset of an input field on the focus state
             *
             * @designToken inputtext.focus.ring.offset
             */
            offset?: string;
            /**
             * Shadow of an input field on the focus state
             *
             * @designToken inputtext.focus.ring.shadow
             */
            shadow?: string;
        };
    }
}

/**
 * **PrimeVue - InputText**
 *
 * _InputText renders a text field to enter data._
 *
 * [Live Demo](https://www.primevue.org/inputtext/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group DesignTokens
 */
export interface InputTextDesignTokens extends ColorSchemeDesignToken<InputTextDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: InputTextDesignToken.Root;
}
