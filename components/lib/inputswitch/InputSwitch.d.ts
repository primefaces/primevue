/**
 *
 * InputSwitch is used to select a boolean value.
 *
 * [Live Demo](https://www.primevue.org/inputswitch/)
 *
 * @module inputswitch
 *
 */
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type InputSwitchPassThroughOptionType = InputSwitchPassThroughAttributes | ((options: InputSwitchPassThroughMethodOptions) => InputSwitchPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface InputSwitchPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: InputSwitchProps;
    /**
     * Defines current options.
     */
    context: InputSwitchContext;
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
 * @see {@link InputSwitchProps.pt}
 */
export interface InputSwitchPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputSwitchPassThroughOptionType;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: InputSwitchPassThroughOptionType;
    /**
     * Used to pass attributes to the slider's DOM element.
     */
    slider?: InputSwitchPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface InputSwitchPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in InputSwitch component.
 */
export interface InputSwitchProps {
    /**
     * Specifies whether a inputswitch should be checked or not.
     * @defaultValue false
     */
    modelValue?: boolean | string | undefined;
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
     * Used to pass attributes to DOM elements inside the component.
     * @type {InputSwitchPassThroughOptions}
     */
    pt?: PassThrough<InputSwitchPassThroughOptions>;
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
 * Defines current options in InputSwitch component.
 */
export interface InputSwitchContext {
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

export interface InputSwitchSlots {}

/**
 * Defines valid emits in InputSwitch component.
 */
export interface InputSwitchEmits {
    /**
     * Emitted when the value changes.
     * @param {boolean} value - New value.
     */
    'update:modelValue'(value: boolean): void;
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

/**
 * **PrimeVue - InputSwitch**
 *
 * _InputSwitch is used to select a boolean value._
 *
 * [Live Demo](https://www.primevue.org/inputswitch/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class InputSwitch extends ClassComponent<InputSwitchProps, InputSwitchSlots, InputSwitchEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        InputSwitch: GlobalComponentConstructor<InputSwitch>;
    }
}

export default InputSwitch;
