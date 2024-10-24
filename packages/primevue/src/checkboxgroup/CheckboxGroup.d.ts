/**
 *
 * CheckboxGroup is a component that groups multiple checkboxes, allowing users to select one or more options.
 *
 * [Live Demo](https://www.primevue.org/checkbox/)
 *
 * @module checkboxgroup
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type CheckboxGroupPassThroughOptionType = CheckboxGroupPassThroughAttributes | ((options: CheckboxGroupPassThroughMethodOptions) => CheckboxGroupPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface CheckboxGroupPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: CheckboxGroupProps;
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
 * @see {@link FloatLabelProps.pt}
 */
export interface CheckboxGroupPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CheckboxGroupPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface CheckboxGroupPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in CheckboxGroup component.
 */
export interface CheckboxGroupProps {
    /**
     * Value binding of the checkboxes.
     */
    modelValue?: any;
    /**
     * Default values of the checkboxes in uncontrolled mode.
     */
    defaultValue?: any;
    /**
     * Name of the input elements.
     */
    name?: string | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     */
    invalid?: boolean | undefined;
    /**
     * Used to set form control options.
     */
    formControl?: any;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {CheckboxGroupPassThroughOptions}
     */
    pt?: PassThrough<CheckboxGroupPassThroughOptions>;
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
 * Defines valid slots in CheckboxGroup component.
 */
export interface CheckboxGroupSlots {
    /**
     * Default content slot.
     */
    default: () => VNode[];
}

/**
 * Defines valid emits in CheckboxGroup component.
 */
export interface CheckboxGroupEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any): void;
    /**
     * Emitted when the value changes in uncontrolled mode.
     * @param {*} value - New value.
     */
    'value-change'(value: any): void;
}

export declare type CheckboxGroupEmits = EmitFn<CheckboxGroupEmitsOptions>;

/**
 * **PrimeVue - CheckboxGroup**
 *
 * _CheckboxGroup is a component that groups multiple checkboxes, allowing users to select one or more options._
 *
 * [Live Demo](https://www.primevue.org/checkbox/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const CheckboxGroup: DefineComponent<CheckboxGroupProps, CheckboxGroupSlots, CheckboxGroupEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        CheckboxGroup: DefineComponent<CheckboxGroupProps, CheckboxGroupSlots, CheckboxGroupEmits>;
    }
}

export default CheckboxGroup;
