/**
 *
 * ToggleButton is used to select a boolean value using a button.
 *
 * [Live Demo](https://www.primevue.org/togglebutton/)
 *
 * @module togglebutton
 *
 */
import { InputHTMLAttributes } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in ToggleButton component.
 */
export interface ToggleButtonProps {
    /**
     * Value of the component.
     * @defaultValue false
     */
    modelValue?: boolean | undefined;
    /**
     * Icon for the on state.
     */
    onIcon?: string | undefined;
    /**
     * Icon for the off state.
     */
    offIcon?: string | undefined;
    /**
     * Label for the on state.
     * @defaultValue yes
     */
    onLabel?: string | undefined;
    /**
     * Label for the off state.
     * @defaultValue no
     */
    offLabel?: string | undefined;
    /**
     * Position of the icon.
     * @defaultValue left
     */
    iconPos?: 'left' | 'right' | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: string | undefined;
    /**
     * 	Identifier of the focus input to match a label defined for the chips.
     */
    inputId?: string | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: string | object | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: object | undefined;
    /**
     * Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: InputHTMLAttributes | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    'aria-label'?: string | undefined;
}

/**
 * Defines valid slots in ToggleButton component.
 */
export interface ToggleButtonSlots {}

/**
 * Defines valid emits in ToggleButton component.
 */
export interface ToggleButtonEmits {
    /**
     * Emitted when the value changes.
     * @param {boolean} value - New value.
     */
    'update:modelValue'(value: boolean): void;
    /**
     * Callback to invoke on value change.
     * @param {Event} event - Browser event.
     */
    change(event: Event): void;
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     */
    focus(event: Event): void;
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     */
    blur(event: Event): void;
}

/**
 * **PrimeVue - ToggleButton**
 *
 * _ToggleButton is used to select a boolean value using a button._
 *
 * [Live Demo](https://www.primevue.org/togglebutton/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class ToggleButton extends ClassComponent<ToggleButtonProps, ToggleButtonSlots, ToggleButtonEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ToggleButton: GlobalComponentConstructor<ToggleButton>;
    }
}

export default ToggleButton;
