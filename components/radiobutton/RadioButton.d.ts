/**
 *
 * RadioButton is an extension to standard radio button element with theming.
 *
 * [Live Demo](https://www.primevue.org/radiobutton/)
 *
 * @module radiobutton
 *
 */
import { InputHTMLAttributes } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in RadioButton component.
 */
export interface RadioButtonProps {
    /**
     * Value of the checkbox.
     */
    value?: any;
    /**
     * Value binding of the checkbox.
     */
    modelValue?: any;
    /**
     * Name of the input element.
     */
    name?: string | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: object | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: string | object | undefined;
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

export interface RadioButtonSlots {}

/**
 * Defines valid emits in RadioButton component.
 */
export interface RadioButtonEmits {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any): void;
    /**
     * Callback to invoke on radio button click.
     * @param {Event} event - Browser event.
     */
    click(event: Event): void;
    /**
     * Callback to invoke on radio button value change.
     * @param {Event} event - Browser event.
     */
    change(event: Event): void;
}

/**
 * **PrimeVue - RadioButton**
 *
 * _RadioButton is an extension to standard radio button element with theming._
 *
 * [Live Demo](https://www.primevue.org/radiobutton/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class RadioButton extends ClassComponent<RadioButtonProps, RadioButtonSlots, RadioButtonEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        RadioButton: GlobalComponentConstructor<RadioButton>;
    }
}

export default RadioButton;
