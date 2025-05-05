/**
 *
 * InputOtp is used to enter one time passwords.
 *
 * [Live Demo](https://www.primevue.org/inputotp/)
 *
 * @module inputotp
 *
 */
import type { DefineComponent, DesignToken, EmitFn, HintedString, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { InputTextPassThroughOptions } from 'primevue/inputtext';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type InputOtpPassThroughOptionType = InputOtpPassThroughAttributes | ((options: InputOtpPassThroughMethodOptions) => InputOtpPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface InputOtpPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: InputOtpProps;
    /**
     * Defines current inline state.
     */
    state: InputOtpState;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom change event.
 * @see {@link InputOtpEmitsOptions.change}
 */
export interface InputOtpChangeEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Value of the input
     */
    value: string;
}

/**
 * Custom shared passthrough(pt) option method.
 */
export interface InputOtpSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: InputOtpProps;
    /**
     * Defines current inline state.
     */
    state: InputOtpState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link InputOtpProps.pt}
 */
export interface InputOtpPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputOtpPassThroughOptionType;
    /**
     * Used to pass attributes to the InputText component.
     * @see {@link InputTextPassThroughOptions}
     */
    pcInputText?: InputTextPassThroughOptions<InputOtpSharedPassThroughMethodOptions>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface InputOtpPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in InputOtp component.
 */
export interface InputOtpState {
    /**
     * Array of input tokens
     */
    tokens: string[] | number[];
}

/**
 * InputOtp attr options
 */
export interface InputOtpTemplateAttrsOptions {
    /**
     * Input token value
     */
    value: string;
}

/**
 * InputOtp templating events
 */
export interface InputOtpTemplateEvents {
    /**
     * Input event
     * @param {Event} event - Browser event
     */
    input: (event: Event) => void;
    /**
     * Keydown event
     * @param {Event} event - Browser event
     */
    keydown: (event: Event) => void;
    /**
     * Focus event
     * @param {Event} event - Browser event
     */
    focus: (event: Event) => void;
    /**
     * Blur event
     * @param {Event} event - Browser event
     */
    blur: (event: Event) => void;
    /**
     * Paste event
     * @param {Event} event - Browser event
     */
    paste: (event: Event) => void;
}

/**
 * Defines valid properties in InputOtp component.
 */
export interface InputOtpProps {
    /**
     * Specifies whether a inputotp should be checked or not.
     * @defaultValue null
     */
    modelValue?: boolean | string | undefined;
    /**
     * The default value for the input when not controlled by `modelValue`.
     */
    defaultValue?: boolean | string | undefined;
    /**
     * The name attribute for the element, typically used in form submissions.
     */
    name?: string | undefined;
    /**
     * Defines the size of the component.
     */
    size?: HintedString<'small' | 'large'> | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     */
    invalid?: boolean | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that an input field is read-only.
     * @defaultValue false
     */
    readonly?: boolean | undefined;
    /**
     * Specifies the input variant of the component.
     * @defaultValue null
     */
    variant?: HintedString<'outlined' | 'filled'> | undefined | null;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | undefined;
    /**
     * Number of characters to initiate.
     * @defaultValue 4
     */
    length?: number | undefined;
    /**
     * Mask pattern.
     * @defaultValue false
     */
    mask?: boolean | undefined;
    /**
     * When present, it specifies that an input field is integer-only.
     * @defaultValue false
     */
    integerOnly?: boolean | undefined;
    /**
     * Form control object, typically used for handling validation and form state.
     */
    formControl?: Record<string, any> | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {InputOtpPassThroughOptions}
     */
    pt?: PassThrough<InputOtpPassThroughOptions>;
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
 *
 */
export interface InputOtpSlots {
    /**
     * Default content slot.
     */
    default(scope: {
        /**
         * Events of the component
         * @param {number} index - Index of the input field
         * @return {InputOtpTemplateEvents}
         */
        events: (index: number) => InputOtpTemplateEvents;
        /**
         * Attributes of the component
         * @param {number} index - Index of the input field
         * @return {InputOtpTemplateAttrsOptions}
         */
        attrs: (index: number) => InputOtpTemplateAttrsOptions;
        /**
         * Index of the input field
         */
        index: number;
    }): VNode[];
}

/**
 * Defines valid emits in InputOtp component.
 */
export interface InputOtpEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {string} value - New value.
     */
    'update:modelValue'(value: string): void;
    /**
     * Emitted when the value changes in uncontrolled mode.
     * @param {string} value - New value.
     */
    'value-change'(value: string): void;
    /**
     * Callback to invoke on value change.
     * @param {InputOtpChangeEvent} event - Custom change event.
     */
    change(event: InputOtpChangeEvent): void;
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

export declare type InputOtpEmits = EmitFn<InputOtpEmitsOptions>;

/**
 * **PrimeVue - InputOtp**
 *
 * _InputOtp  is used to enter one time passwords._
 *
 * [Live Demo](https://www.primevue.org/inputotp/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const InputOtp: DefineComponent<InputOtpProps, InputOtpSlots, InputOtpEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        InputOtp: DefineComponent<InputOtpProps, InputOtpSlots, InputOtpEmits>;
    }
}

export default InputOtp;
