/**
 *
 * Form provides validation functionality and manages form state.
 *
 * [Live Demo](https://www.primevue.org/form/)
 *
 * @module form
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import { VNode } from 'vue';

/**
 * From primevue/passthrough/index.d.ts
 */
export declare type PassThroughMergePropsType = ((...args: any) => object | undefined) | boolean | undefined;

export interface PassThroughOptions {
    mergeSections?: boolean | undefined;
    mergeProps?: PassThroughMergePropsType;
}

export declare type FormPassThroughOptionType = FormPassThroughAttributes | ((options: FormPassThroughMethodOptions) => FormPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface FormPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: FormProps;
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
 * @see {@link FormProps.pt}
 */
export interface FormPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FormPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface FormPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in Form component.
 */
export interface FormProps {
    /**
     * A function that resolves validation logic.
     */
    resolver?: (values: Record<string, any>) => Promise<Record<string, any>> | Record<string, any> | undefined;
    /**
     * The initial values for the form fields.
     */
    initialValues?: Record<string, any> | undefined;
    /**
     * Whether to validate the form fields when the values change.
     * @defaultValue true
     */
    validateOnValueUpdate?: boolean | string[] | undefined;
    /**
     * Whether to validate the form fields when they lose focus (on blur).
     * @defaultValue false
     */
    validateOnBlur?: boolean | string[] | undefined;
    /**
     * Whether to validate the form fields immediately after the form is mounted.
     * @defaultValue false
     */
    validateOnMount?: boolean | string[] | undefined;
    /**
     * Whether to validate the form fields when the form is submitted.
     * @defaultValue true
     */
    validateOnSubmit?: boolean | string[] | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {FormPassThroughOptions}
     */
    pt?: PassThrough<FormPassThroughOptions>;
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
 * Defines valid slots in Form component.
 */
export interface FormSlots {
    /**
     * Default content slot.
     */
    default: () => VNode[];
}

/**
 * Defines valid emits in Form component.
 */
export interface FormEmitsOptions {
    /**
     * Emitted when the form is submitted.
     * @param {Event} event - Original DOM event.
     */
    submit: (event: Event) => void;
}

export declare type FormEmits = EmitFn<FormEmitsOptions>;

/**
 * **PrimeVue - Form**
 *
 * _Form provides validation functionality and manages form state._
 *
 * [Live Demo](https://www.primevue.org/form/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Form: DefineComponent<FormProps, FormSlots, FormEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Form: DefineComponent<FormProps, FormSlots, FormEmits>;
    }
}

export default Form;
