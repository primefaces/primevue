/**
 *
 * InputText renders a text field to enter data.
 *
 * [Live Demo](https://www.primevue.org/inputtext/)
 *
 * @module inputtext
 *
 */
import type { DefineComponent, DesignToken, EmitFn, Nullable, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { InputHTMLAttributes } from 'vue';

export declare type InputTextPassThroughOptionType<T = any> = InputTextPassThroughAttributes | ((options: InputTextPassThroughMethodOptions<T>) => InputTextPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface InputTextPassThroughMethodOptions<T = any> {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: InputTextProps;
    /**
     * Defines current options.
     */
    context: InputTextContext;
    /**
     * Defines parent instance.
     */
    parent: T;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link InputTextProps.pt}
 */
export interface InputTextPassThroughOptions<T = any> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputTextPassThroughOptionType<T>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface InputTextPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current options in InputText component.
 */
export interface InputTextContext {
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
 * Defines valid properties in InputText component.
 */
export interface InputTextProps extends Omit<InputHTMLAttributes, 'size'> {
    /**
     * Value of the component.
     */
    modelValue?: Nullable<string>;
    /**
     * The default value for the input when not controlled by `modelValue`.
     */
    defaultValue?: Nullable<string>;
    /**
     * The name attribute for the element, typically used in form submissions.
     */
    name?: string | undefined;
    /**
     * Defines the size of the component.
     */
    size?: 'small' | 'large' | undefined | null;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     */
    invalid?: boolean | undefined | null;
    /**
     * Specifies the input variant of the component.
     * @defaultValue outlined
     */
    variant?: 'outlined' | 'filled' | undefined | null;
    /**
     * Spans 100% width of the container when enabled.
     * @defaultValue null
     */
    fluid?: boolean | undefined | null;
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
     * @type {InputTextPassThroughOptions}
     */
    pt?: PassThrough<InputTextPassThroughOptions>;
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
 * Defines valid slots in InputText component.
 */
export interface InputTextSlots {}

/**
 * Defines valid emits in InputText component.
 */
export interface InputTextEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {string} value - New value.
     */
    'update:modelValue'(value: string | undefined): void;
    /**
     * Emitted when the value changes in uncontrolled mode.
     * @param {string} value - New value.
     */
    'value-change'(value: string | undefined): void;
}

export declare type InputTextEmits = EmitFn<InputTextEmitsOptions>;

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
 *
 */
declare const InputText: DefineComponent<InputTextProps, InputTextSlots, InputTextEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        InputText: DefineComponent<InputTextProps, InputTextSlots, InputTextEmits>;
    }
}

export default InputText;
