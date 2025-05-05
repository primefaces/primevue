/**
 *
 * FormField is a helper component that provides validation and tracking for form fields.
 *
 * [Live Demo](https://www.primevue.org/forms/)
 *
 * @module formfield
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import { Component, VNode } from 'vue';
import type { PassThroughOptions } from '../types';

export declare type FormFieldPassThroughOptionType = FormFieldPassThroughAttributes | ((options: FormFieldPassThroughMethodOptions) => FormFieldPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface FormFieldPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: FormFieldProps;
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
 * @see {@link FormFieldProps.pt}
 */
export interface FormFieldPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FormFieldPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface FormFieldPassThroughAttributes {
    [key: string]: any;
}

/**
 * Resolver options for Form component.
 */
export interface FormFieldResolverOptions {
    /**
     * The value of the form field.
     */
    value: any;
    /**
     * The name of the form field.
     */
    name: string | undefined;
}

/**
 * Defines valid properties in Form component.
 */
export interface FormFieldProps {
    /**
     * The name of the form field.
     */
    name?: string | undefined;
    /**
     * A function that resolves validation logic.
     * @param {FormResolverOptions} e - Resolver options
     */
    resolver?: (e: FormFieldResolverOptions) => any | undefined;
    /**
     * The initial value for the form field.
     */
    initialValue?: any;
    /**
     * Whether to validate the form field when the value change.
     */
    validateOnValueUpdate?: boolean | undefined;
    /**
     * Whether to validate the form field when it loses focus (on blur).
     */
    validateOnBlur?: boolean | undefined;
    /**
     * Whether to validate the form field immediately after the form is mounted.
     */
    validateOnMount?: boolean | undefined;
    /**
     * Whether to validate the form field when the form is submitted.
     */
    validateOnSubmit?: boolean | undefined;
    /**
     * Use to change the HTML tag of root element.
     * @defaultValue DIV
     */
    as?: string | Component | undefined;
    /**
     * When enabled, it changes the default rendered element for the one passed as a child element.
     * @defaultValue false
     */
    asChild?: boolean | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {FormPassThroughOptions}
     */
    pt?: PassThrough<FormFieldPassThroughOptions>;
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
export interface FormFieldSlots {
    /**
     * Default content slot.
     * @param {Object} scope - default slot's params.
     */
    default: (scope: {
        /**
         * @todo
         */
        props: any;
        /**
         * The value of the form field.
         */
        value: any;
        /**
         * Whether the form field has been touched.
         * @defaultValue false
         */
        touched: boolean;
        /**
         * Whether the form field has been modified.
         * @defaultValue false
         */
        dirty: boolean;
        /**
         * Whether the form field has not been modified.
         * @defaultValue true
         */
        pristine: boolean;
        /**
         * Whether the form field is valid.
         * @defaultValue true
         */
        valid: boolean;
        /**
         * Whether the form field is invalid.
         * @defaultValue false
         */
        invalid: boolean;
        /**
         * The first error message of the form field.
         */
        error: any;
        /**
         * All error messages of the form field.
         * @defaultValue []
         */
        errors: any[];
    }) => VNode[];
}

/**
 * Defines valid emits in Form component.
 */
export interface FormFieldEmitsOptions {}

export declare type FormEmits = EmitFn<FormFieldEmitsOptions>;

/**
 * **PrimeVue - FormField**
 *
 * _FormField is a helper component that provides validation and tracking for form fields._
 *
 * [Live Demo](https://www.primevue.org/forms/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const FormField: DefineComponent<FormFieldProps, FormFieldSlots, FormEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        FormField: DefineComponent<FormFieldProps, FormFieldSlots, FormEmits>;
    }
}

export default FormField;
