import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface InputMaskProps {
    /**
     * Value of the component.
     */
    modelValue?: string | undefined;
    /**
     * Placeholder character in mask, default is underscore.
     * Default value is '_'.
     */
    slotChar?: string | undefined;
    /**
     * Mask pattern.
     */
    mask?: string | undefined;
    /**
     * Clears the incomplete value on blur.
     * Default value is true.
     */
    autoClear?: boolean | undefined;
    /**
     * Defines if model sets the raw unmasked value to bound value or the formatted mask value.
     */
    unmask?: boolean | undefined;
}

export interface InputMaskSlots {
}

export declare type InputMaskEmits = {
    /**
     * Emitted when the value changes.
     * @param {string} value - New value.
     */
    'update:modelValue': (value: string) => void;
    /**
     * Callback to invoke when the component receives focus.
     */
    'focus': (event: Event) => void;
    /**
     * Callback to invoke when the component loses focus.
     */
    'blur': (event: Event) => void;
    /**
     * Callback to invoke when a key is pressed.
     */
    'keydown': (event: Event) => void;
    /**
     * Callback to invoke when a key that produces a character value is pressed down.
     */
    'keypress': (event: Event) => void;
    /**
     * Callback to invoke when the user has initiated a 'paste' action through the browser's user interface.
     */
    'paste': (event: Event) => void;
    /**
     * Callback to invoke when the mask is completed.
     */
    'complete': (event: Event) => void;
}

declare class InputMask extends ClassComponent<InputMaskProps, InputMaskSlots, InputMaskEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        InputMask: GlobalComponentConstructor<InputMask>
    }
}

/**
 *
 * InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.
 *
 * Demos:
 *
 * - [InputMask](https://www.primefaces.org/primevue/showcase/#/inputmask)
 *
 */
export default InputMask;
