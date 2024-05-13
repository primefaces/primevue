/**
 *
 * InputText renders a text field to enter data.
 *
 * [Live Demo](https://www.primevue.org/inputtext/)
 *
 * @module nora/inputtext
 *
 */

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
export interface InputTextDesignTokens {
    /**
     * Used to pass tokens of the root section
     */
    root?: InputTextDesignToken.Root;
}
