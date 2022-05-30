import { InputHTMLAttributes } from 'vue';
import { ClassComponent, GlobalComponentConstructor, Nullable } from '../ts-helpers';

export interface InputTextProps extends InputHTMLAttributes {
    /**
     * Value of the component.
     */
    modelValue?: Nullable<string>;
}

export interface InputTextSlots {
}

export declare type InputTextEmits = {
    /**
     * Emitted when the value changes.
     * @param {string} value - New value.
     */
    'update:modelValue': (value: string | undefined) => void;
}

declare class InputText extends ClassComponent<InputTextProps, InputTextSlots, InputTextEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        InputText: GlobalComponentConstructor<InputText>
    }
}

/**
 *
 * InputText renders a text field to enter data.
 *
 * Demos:
 *
 * - [InputText](https://www.primefaces.org/primevue/showcase/#/inputtext)
 *
 */
export default InputText;
