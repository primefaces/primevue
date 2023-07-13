/**
 *
 * Textarea is a multi-line text input element.
 *
 * [Live Demo](https://www.primevue.org/textarea/)
 *
 * @module textarea
 *
 */
import { TextareaHTMLAttributes } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type TextareaPassThroughOptionType = TextareaPassThroughAttributes | ((options: TextareaPassThroughMethodOptions) => TextareaPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TextareaPassThroughMethodOptions {
    instance: any;
    props: TextareaProps;
    context: TextareaContext;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link TextareaProps.pt}
 */
export interface TextareaPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: TextareaPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
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
    modelValue?: string | undefined;
    /**
     * When present, height of textarea changes as being typed.
     * @defaultValue false
     */
    autoResize?: boolean | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {TextareaPassThroughOptions}
     */
    pt?: TextareaPassThroughOptions;
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
export interface TextareaEmits {
    /**
     * Emitted when the value changes.
     * @param {string} value - New value.
     */
    'update:modelValue': (value: string) => void;
}

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
declare class Textarea extends ClassComponent<TextareaProps, TextareaSlots, TextareaEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Textarea: GlobalComponentConstructor<Textarea>;
    }
}

export default Textarea;
