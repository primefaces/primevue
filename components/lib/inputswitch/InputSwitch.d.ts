/**
 *
 * InputSwitch is used to select a boolean value.
 *
 * [Live Demo](https://www.primevue.org/inputswitch/)
 *
 * @module inputswitch
 *
 */
import { InputHTMLAttributes } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in InputSwitch component.
 */
export interface InputSwitchProps {
    /**
     * Specifies whether a inputswitch should be checked or not.
     * @defaultValue false
     */
    modelValue?: boolean | string | undefined;
    /**
     * Value in checked state.
     * @defaultValue true
     */
    trueValue?: any;
    /**
     * Value in unchecked state.
     * @defaultValue false
     */
    falseValue?: any;
    /**
     * 	Identifier of the underlying input element.
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

export interface InputSwitchSlots {}

/**
 * Defines valid emits in InputSwitch component.
 */
export interface InputSwitchEmits {
    /**
     * Emitted when the value changes.
     * @param {boolean} value - New value.
     */
    'update:modelValue'(value: boolean): void;
    /**
     * Callback to invoke on click.
     * @param {Event} event - Browser event.
     */
    click(event: Event): void;
    /**
     * Callback to invoke on value change.
     * @param {Event} event - Browser event.
     */
    change(event: Event): void;
    /**
     * Callback to invoke on value change.
     * @param {boolean} value - New value.
     */
    input(value: boolean): void;
}

/**
 * **PrimeVue - InputSwitch**
 *
 * _InputSwitch is used to select a boolean value._
 *
 * [Live Demo](https://www.primevue.org/inputswitch/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class InputSwitch extends ClassComponent<InputSwitchProps, InputSwitchSlots, InputSwitchEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        InputSwitch: GlobalComponentConstructor<InputSwitch>;
    }
}

export default InputSwitch;
