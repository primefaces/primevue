/**
 *
 * InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.
 *
 * [Live Demo](https://www.primevue.org/inputmask/)
 *
 * @module inputmask
 *
 */
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type InputMaskPassThroughOptionType = InputMaskPassThroughAttributes | null | undefined;

/**
 * Custom passthrough(pt) options.
 * @see {@link InputMaskProps.pt}
 */
export interface InputMaskPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: InputMaskPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface InputMaskPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in InputMask component.
 */
export interface InputMaskProps {
    /**
     * Value of the component.
     */
    modelValue?: string | undefined;
    /**
     * Placeholder character in mask, default is underscore.
     * @defaultValue _
     */
    slotChar?: string | undefined;
    /**
     * Mask pattern.
     */
    mask?: string | undefined;
    /**
     * Clears the incomplete value on blur.
     * @defaultValue true
     */
    autoClear?: boolean | undefined;
    /**
     * Defines if model sets the raw unmasked value to bound value or the formatted mask value.
     * @defaultValue false
     */
    unmask?: boolean | undefined;
    /**
     * Whether the items are clickable or not.
     * @defaultValue false
     */
    readonly?: boolean | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {InputMaskPassThroughOptions}
     */
    pt?: InputMaskPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

export interface InputMaskSlots {}

/**
 * Defines valid emits in InputMask component.
 */
export interface InputMaskEmits {
    /**
     * Emitted when the value changes.
     * @param {string} value - New value.
     */
    'update:modelValue'(value: string): void;
    /**
     * Callback to invoke when the component receives focus.
     */
    focus(event: Event): void;
    /**
     * Callback to invoke when the component loses focus.
     */
    blur(event: Event): void;
    /**
     * Callback to invoke when a key is pressed.
     */
    keydown(event: Event): void;
    /**
     * Callback to invoke when a key that produces a character value is pressed down.
     */
    keypress: (event: Event) => void;
    /**
     * Callback to invoke when the user has initiated a 'paste' action through the browser's user interface.
     */
    paste: (event: Event) => void;
    /**
     * Callback to invoke when the mask is completed.
     */
    complete: (event: Event) => void;
}

/**
 * **PrimeVue - InputMask**
 *
 * _InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone._
 *
 * [Live Demo](https://www.primevue.org/inputmask/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class InputMask extends ClassComponent<InputMaskProps, InputMaskSlots, InputMaskEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        InputMask: GlobalComponentConstructor<InputMask>;
    }
}

export default InputMask;
