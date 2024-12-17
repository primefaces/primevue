/**
 *
 * ToggleSwitch is used to select a boolean value.
 *
 * [Live Demo](https://www.primevue.org/toggleswitch/)
 *
 * @module toggleswitch
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type ToggleSwitchPassThroughOptionType = ToggleSwitchPassThroughAttributes | ((options: ToggleSwitchPassThroughMethodOptions) => ToggleSwitchPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ToggleSwitchPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ToggleSwitchProps;
    /**
     * Defines current options.
     */
    context: ToggleSwitchContext;
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
 * @see {@link ToggleSwitchProps.pt}
 */
export interface ToggleSwitchPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToggleSwitchPassThroughOptionType;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: ToggleSwitchPassThroughOptionType;
    /**
     * Used to pass attributes to the slider's DOM element.
     */
    slider?: ToggleSwitchPassThroughOptionType;
    /**
     * Used to pass attributes to the handle's DOM element.
     */
    handle?: ToggleSwitchPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ToggleSwitchPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in ToggleSwitch component.
 */
export interface ToggleSwitchProps {
    /**
     * Specifies whether a toggleswitch should be checked or not.
     * @defaultValue false
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
     * Value in checked state.
     * @defaultValue true
     */
    trueValue?: any;
    /**
     * Value in unchecked state.
     * @defaultValue false
     */
    falseValue?: any;
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
     * @default false
     */
    readonly?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | undefined;
    /**
     * 	Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: string | object | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: object | undefined;
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
     * @type {ToggleSwitchPassThroughOptions}
     */
    pt?: PassThrough<ToggleSwitchPassThroughOptions>;
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
 * Defines current options in ToggleSwitch component.
 */
export interface ToggleSwitchContext {
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

export interface ToggleSwitchSlots {
    /**
     * Custom handle template.
     * @param {Object} scope - handle slot's params.
     */
    handle(scope: {
        /**
         * Current checked state of the item as a boolean.
         */
        checked: boolean;
    }): VNode[];
}

/**
 * Defines valid emits in ToggleSwitch component.
 */
export interface ToggleSwitchEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {boolean} value - New value.
     */
    'update:modelValue'(value: boolean): void;
    /**
     * Emitted when the value changes in uncontrolled mode.
     * @param {boolean} value - New value.
     */
    'value-change'(value: boolean): void;
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

export declare type ToggleSwitchEmits = EmitFn<ToggleSwitchEmitsOptions>;

/**
 * **PrimeVue - ToggleSwitch**
 *
 * _ToggleSwitch is used to select a boolean value._
 *
 * [Live Demo](https://www.primevue.org/toggleswitch/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const ToggleSwitch: DefineComponent<ToggleSwitchProps, ToggleSwitchSlots, ToggleSwitchEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        ToggleSwitch: DefineComponent<ToggleSwitchProps, ToggleSwitchSlots, ToggleSwitchEmits>;
    }
}

export default ToggleSwitch;
