/**
 *
 * InputSwitch is used to select a boolean value.
 *
 * [Live Demo](https://www.primevue.org/inputswitch/)
 *
 * @module inputswitch
 *
 */
import { InputHTMLAttributes } from 'vue';
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
     * Defines current inline state.
     */
    state: InputSwitchState;
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
     * Used to pass attributes to the slider's DOM element.
     */
    slider?: InputSwitchPassThroughOptionType;
    /**
     * Used to pass attributes to the hidden input wrapper's DOM element.
     */
    hiddenInputWrapper?: InputSwitchPassThroughOptionType;
    /**
     * Used to pass attributes to the hidden input's DOM element.
     */
    hiddenInput?: InputSwitchPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks
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
 * Defines current inline state in InputSwitch component.
 */
export interface InputSwitchState {
    /**
     * Current focus state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
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
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
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
     * Used to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: InputHTMLAttributes | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    'aria-label'?: string | undefined;
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
     * Callback to invoke on click.
     * @param {Event} event - Browser event.
     */
    click(event: Event): void;
    /**
     * Callback to invoke on value change.
     * @param {Event} event - Browser event.
     */
    change(event: Event): void;
    /**
     * Callback to invoke on value change.
     * @param {boolean} value - New value.
     */
    input(value: boolean): void;
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

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        InputSwitch: GlobalComponentConstructor<InputSwitch>;
    }
}

export default InputSwitch;
