/**
 *
 * RadioButton is an extension to standard radio button element with theming.
 *
 * [Live Demo](https://www.primevue.org/radiobutton/)
 *
 * @module radiobutton
 *
 */
import type { DefineComponent, DesignToken, EmitFn, HintedString, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';

export declare type RadioButtonPassThroughOptionType = RadioButtonPassThroughAttributes | ((options: RadioButtonPassThroughMethodOptions) => RadioButtonPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface RadioButtonPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: RadioButtonProps;
    /**
     * Defines current inline state.
     */
    state: RadioButtonState;
    /**
     * Defines current options.
     */
    context: RadioButtonContext;
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
 * @see {@link RadioButtonProps.pt}
 */
export interface RadioButtonPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: RadioButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: RadioButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the box's DOM element.
     */
    box?: RadioButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: RadioButtonPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface RadioButtonPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in RadioButton component.
 */
export interface RadioButtonState {
    [key: string]: any;
}

/**
 * Defines valid properties in RadioButton component.
 */
export interface RadioButtonProps {
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
     * Allows to select a boolean value.
     * @default false
     */
    binary?: boolean;
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
     * Specifies the input variant of the component.
     * @defaultValue null
     */
    variant?: HintedString<'outlined' | 'filled'> | undefined | null;
    /**
     * When present, it specifies that an input field is read-only.
     * @default false
     */
    readonly?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | undefined;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: object | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: string | object | undefined;
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
     * @type {RadioButtonPassThroughOptions}
     */
    pt?: PassThrough<RadioButtonPassThroughOptions>;
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
 * Defines current options in RadioButton component.
 */
export interface RadioButtonContext {
    /**
     * Current checked state of the item as a boolean.
     * @defaultValue false
     */
    checked: boolean;
    /**
     * Current disabled state of the item as a boolean.
     * @defaultValue false
     */
    disabled: boolean;
}

export interface RadioButtonSlots {}

/**
 * Defines valid emits in RadioButton component.
 */
export interface RadioButtonEmitsOptions {
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
    /**
     * Callback to invoke on radio button value change.
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

export declare type RadioButtonEmits = EmitFn<RadioButtonEmitsOptions>;

/**
 * **PrimeVue - RadioButton**
 *
 * _RadioButton is an extension to standard radio button element with theming._
 *
 * [Live Demo](https://www.primevue.org/radiobutton/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const RadioButton: DefineComponent<RadioButtonProps, RadioButtonSlots, RadioButtonEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        RadioButton: DefineComponent<RadioButtonProps, RadioButtonSlots, RadioButtonEmits>;
    }
}

export default RadioButton;
