/**
 *
 * Checkbox is an extension to standard checkbox element with theming.
 *
 * [Live Demo](https://www.primevue.org/checkbox/)
 *
 * @module checkbox
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type CheckboxPassThroughOptionType = CheckboxPassThroughAttributes | ((options: CheckboxPassThroughMethodOptions) => CheckboxPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface CheckboxPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: CheckboxProps;
    /**
     * Defines current inline state.
     */
    state: CheckboxState;
    /**
     * Defines current options.
     */
    context: CheckboxContext;
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
 * @see {@link CheckboxProps.pt}
 */
export interface CheckboxPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CheckboxPassThroughOptionType;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: CheckboxPassThroughOptionType;
    /**
     * Used to pass attributes to the box's DOM element.
     */
    box?: CheckboxPassThroughOptionType;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: CheckboxPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface CheckboxPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Checkbox component.
 */
export interface CheckboxState {
    [key: string]: any;
}

/**
 * Defines valid properties in Checkbox component.
 */
export interface CheckboxProps {
    /**
     * Value of the checkbox.
     */
    value?: any;
    /**
     * Value binding of the checkbox.
     */
    modelValue?: any;
    /**
     * The default value for the input when not controlled by `modelValue`.
     */
    defaultValue?: any;
    /**
     * Name of the input element.
     */
    name?: string | undefined;
    /**
     * Allows to select a boolean value instead of multiple values.
     * @default false
     */
    binary?: boolean;
    /**
     * When present, it specifies input state as indeterminate.
     * @default false
     */
    indeterminate?: boolean | undefined;
    /**
     * Defines the size of the component.
     */
    size?: 'small' | 'large' | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     */
    invalid?: boolean | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Specifies the input variant of the component.
     * @defaultValue outlined
     */
    variant?: 'outlined' | 'filled' | undefined;
    /**
     * When present, it specifies that an input field is read-only.
     * @default false
     */
    readonly?: boolean | undefined;
    /**
     * When present, it specifies that the element is required.
     * @default false
     */
    required?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | undefined;
    /**
     * Value in checked state.
     * @default true
     */
    trueValue?: any;
    /**
     * Value in unchecked state.
     * @default false
     */
    falseValue?: any;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: object | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: string | object | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
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
     * @type {CheckboxPassThroughOptions}
     */
    pt?: PassThrough<CheckboxPassThroughOptions>;
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
 * Defines current options in Checkbox component.
 */
export interface CheckboxContext {
    /**
     * Current checked state of the item as a boolean.
     * @defaultValue false
     */
    checked: boolean;
    /**
     * Current indeterminate state of the item as a boolean.
     * @defaultValue false
     */
    indeterminate: boolean;
    /**
     * Current disabled state of the item as a boolean.
     * @defaultValue false
     */
    disabled: boolean;
}

/**
 * Defines valid slots in Checkbox component.
 */
export interface CheckboxSlots {
    /**
     * Custom icon template.
     * @param {Object} scope - icon slot's params.
     */
    icon(scope: {
        /**
         * State of the checkbox.
         */
        checked: boolean;
        /**
         * Indeterminate state of the checkbox.
         */
        indeterminate?: boolean | undefined;
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
}

/**
 * Defines valid emits in Checkbox component.
 */
export interface CheckboxEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any): void;
    /**
     * Emitted when the "indeterminate" changes.
     * @param {false} value - New value.
     */
    'update:indeterminate'(value: false): void;
    /**
     * Emitted when the value changes in uncontrolled mode.
     * @param {*} value - New value.
     */
    'value-change'(value: any): void;
    /**
     * Callback to invoke on value change.
     * @param {Event} event - Browser event.
     */
    change(event: Event): void;
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

export declare type CheckboxEmits = EmitFn<CheckboxEmitsOptions>;

/**
 * **PrimeVue - Checkbox**
 *
 * _Accordion groups a collection of contents in tabs._
 *
 * [Live Demo](https://www.primevue.org/checkbox/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Checkbox: DefineComponent<CheckboxProps, CheckboxSlots, CheckboxEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Checkbox: DefineComponent<CheckboxProps, CheckboxSlots, CheckboxEmits>;
    }
}

export default Checkbox;
