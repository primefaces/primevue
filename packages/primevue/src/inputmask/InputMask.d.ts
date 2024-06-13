/**
 *
 * InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.
 *
 * [Live Demo](https://www.primevue.org/inputmask/)
 *
 * @module inputmask
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { InputTextPassThroughOptions } from 'primevue/inputtext';
import type { PassThroughOptions } from 'primevue/passthrough';

export declare type InputMaskPassThroughOptionType = InputMaskPassThroughAttributes | ((options: InputMaskPassThroughMethodOptions) => InputMaskPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface InputMaskPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: InputMaskProps;
    /**
     * Defines current options.
     */
    context: InputMaskContext;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom shared passthrough(pt) option method.
 */
export interface InputMaskSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: InputMaskProps;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link InputMaskProps.pt}
 */
export interface InputMaskPassThroughOptions {
    /**
     * Used to pass attributes to the InputText component.
     * @see {@link InputTextPassThroughOptions}
     */
    root?: InputTextPassThroughOptions<InputMaskSharedPassThroughMethodOptions>;
    /**
     * Used to manage all lifecycle hooks.
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
 * Defines current options in InputMask component.
 */
export interface InputMaskContext {
    /**
     * Current filled state of the component as a boolean.
     * @defaultValue false
     */
    filled: boolean;
    /**
     * Current disabled state of the component as a boolean.
     * @defaultValue false
     */
    disabled: boolean;
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
     * Placeholder text for the input.
     */
    placeholder?: string | undefined;
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
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     */
    invalid?: boolean | undefined;
    /**
     * Specifies the input variant of the component.
     * @defaultValue outlined
     */
    variant?: 'outlined' | 'filled' | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {InputMaskPassThroughOptions}
     */
    pt?: PassThrough<InputMaskPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in InputMask component.
 */
export interface InputMaskSlots {}

/**
 * Defines valid emits in InputMask component.
 */
export interface InputMaskEmitsOptions {
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

export declare type InputMaskEmits = EmitFn<InputMaskEmitsOptions>;

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
declare const InputMask: DefineComponent<InputMaskProps, InputMaskSlots, InputMaskEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        InputMask: GlobalComponentConstructor<InputMaskProps, InputMaskSlots, InputMaskEmits>;
    }
}

export default InputMask;
