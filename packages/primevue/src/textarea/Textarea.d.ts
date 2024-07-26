/**
 *
 * Textarea is a multi-line text input element.
 *
 * [Live Demo](https://www.primevue.org/textarea/)
 *
 * @module textarea
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, Nullable, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { TextareaHTMLAttributes } from 'vue';

export declare type TextareaPassThroughOptionType = TextareaPassThroughAttributes | ((options: TextareaPassThroughMethodOptions) => TextareaPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TextareaPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: TextareaProps;
    /**
     * Defines current options.
     */
    context: TextareaContext;
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
 * Custom passthrough(pt) options.
 * @see {@link TextareaProps.pt}
 */
export interface TextareaPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TextareaPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface TextareaPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current options in Textarea component.
 */
export interface TextareaContext {
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
 * Defines valid properties in Textarea component. In addition to these, all properties of TextareaHTMLAttributes can be used in this component.
 * @extends TextareaHTMLAttributes
 */
export interface TextareaProps extends TextareaHTMLAttributes {
    /**
     * Value of the component.
     */
    modelValue?: Nullable<string>;
    /**
     * When present, height of textarea changes as being typed.
     * @defaultValue false
     */
    autoResize?: boolean | undefined;
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
     * Spans 100% width of the container when enabled.
     * @defaultValue null
     */
    fluid?: boolean | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {TextareaPassThroughOptions}
     */
    pt?: PassThrough<TextareaPassThroughOptions>;
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
 * Defines valid slots in Textarea component.
 */
export interface TextareaSlots {}

/**
 * Defines valid emits in Textarea component.
 */
export interface TextareaEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {string} value - New value.
     */
    'update:modelValue': (value: string) => void;
}

export declare type TextareaEmits = EmitFn<TextareaEmitsOptions>;

/**
 * **PrimeVue - Textarea**
 *
 * _Textarea is a multi-line text input element._
 *
 * [Live Demo](https://www.primevue.org/textarea/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Textarea: DefineComponent<TextareaProps, TextareaSlots, TextareaEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Textarea: GlobalComponentConstructor<TextareaProps, TextareaSlots, TextareaEmits>;
    }
}

export default Textarea;
