/**
 *
 * InputText renders a text field to enter data.
 *
 * [Live Demo](https://www.primevue.org/inputtext/)
 *
 * @module inputtext
 *
 */
import { InputHTMLAttributes } from 'vue';
import { ClassComponent, GlobalComponentConstructor, Nullable } from '../ts-helpers';

/**
 * Defines valid properties in InputText component.
 */
export interface InputTextProps extends InputHTMLAttributes {
    /**
     * Value of the component.
     */
    modelValue?: Nullable<string>;
}

/**
 * Defines valid slots in InputText component.
 */
export interface InputTextSlots {}

/**
 * Defines valid emits in InputText component.
 */
export interface InputTextEmits {
    /**
     * Emitted when the value changes.
     * @param {string} value - New value.
     */
    'update:modelValue'(value: string | undefined): void;
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
 * @group Component
 */
declare class InputText extends ClassComponent<InputTextProps, InputTextSlots, InputTextEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        InputText: GlobalComponentConstructor<InputText>;
    }
}

export default InputText;
