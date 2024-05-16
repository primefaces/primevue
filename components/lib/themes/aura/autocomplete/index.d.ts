/**
 *
 * AutoComplete is an input component that provides real-time suggestions while being typed.
 *
 * [Live Demo](https://www.primevue.org/autocomplete/)
 *
 * @module aura/autocomplete
 *
 */
import { ColorSchemeDesignToken } from '..';

/**
 * **PrimeVue - AutoComplete**
 *
 * _AutoComplete is an input component that provides real-time suggestions while being typed._
 *
 * [Live Demo](https://www.primevue.org/autocomplete/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group DesignTokens
 *
 */
export interface AutoCompleteDesignTokens extends ColorSchemeDesignToken<AutoCompleteDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root: {
        background?: string;
        disabledBackground?: string;
        filledBackground?: string;
        filledFocusBackground?: string;
        borderColor?: string;
        hoverBorderColor?: string;
        focusBorderColor?: string;
        invalidBorderColor?: string;
        color?: string;
        disabledColor?: string;
        placeholderColor?: string;
        shadow?: string;
        paddingX?: string;
        paddingY?: string;
        borderRadius?: string;
        focusRing: {
            width?: string;
            style?: string;
            color?: string;
            offset?: string;
            shadow?: string;
        };
    };
    overlay: {
        background?: string;
        borderColor?: string;
        borderRadius?: string;
        color?: string;
        shadow?: string;
    };
    list: {
        padding?: string;
        gap?: string;
    };
    option: {
        focusBackground?: string;
        selectedBackground?: string;
        selectedFocusBackground?: string;
        color?: string;
        focusColor?: string;
        selectedColor?: string;
        selectedFocusColor?: string;
        padding?: string;
        borderRadius?: string;
    };
    optionGroup: {
        background?: string;
        color?: string;
        fontWeight?: string;
        padding?: string;
    };
    dropdown: {
        width?: string;
        borderColor?: string;
        hoverBorderColor?: string;
        activeBorderColor?: string;
        borderRadius?: string;
        focusRing: {
            width?: string;
            style?: string;
            color?: string;
            offset?: string;
            shadow?: string;
        };
        background?: string;
        hoverBackground?: string;
        /**
         *
         * @designToken autocomplete.dropdown.active.background
         */
        activeBackground?: string;
        color?: string;
        hoverColor?: string;
        activeColor?: string;
    };
    chip: {
        borderRadius?: string;
    };
    emptyMessage: {
        /**
         *
         * @designToken autocomplete.empty.message.padding
         */
        padding?: string;
    };
}
