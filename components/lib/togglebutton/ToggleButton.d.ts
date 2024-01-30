/**
 *
 * ToggleButton is used to select a boolean value using a button.
 *
 * [Live Demo](https://www.primevue.org/togglebutton/)
 *
 * @module togglebutton
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type ToggleButtonPassThroughOptionType = ToggleButtonPassThroughAttributes | ((options: ToggleButtonPassThroughMethodOptions) => ToggleButtonPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ToggleButtonPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ToggleButtonProps;
    /**
     * Defines current inline state.
     */
    state: ToggleButtonState;
    /**
     * Defines current options.
     */
    context: ToggleButtonContext;
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
 * @see {@link ToggleButtonProps.pt}
 */
export interface ToggleButtonPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToggleButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: ToggleButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the box's DOM element.
     */
    box?: ToggleButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: ToggleButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: ToggleButtonPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ToggleButtonPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in ToggleButton component.
 */
export interface ToggleButtonState {
    [key: string]: any;
}

/**
 * Defines current options in ToggleButton component.
 */
export interface ToggleButtonContext {
    /**
     * Current highlighted state as a boolean.
     * @defaultValue false
     */
    active: boolean;
    /**
     * Current disabled state as a boolean.
     * @defaultValue false
     */
    disabled: boolean;
}

/**
 * Defines valid properties in ToggleButton component.
 */
export interface ToggleButtonProps {
    /**
     * Value of the component.
     * @defaultValue false
     */
    modelValue?: boolean | undefined;
    /**
     * Icon for the on state.
     * @deprecated since v3.27.0. Use 'icon' slot.
     */
    onIcon?: string | undefined;
    /**
     * Icon for the off state.
     * @deprecated since v3.27.0. Use 'icon' slot.
     */
    offIcon?: string | undefined;
    /**
     * Label for the on state.
     * @defaultValue yes
     */
    onLabel?: string | undefined;
    /**
     * Label for the off state.
     * @defaultValue no
     */
    offLabel?: string | undefined;
    /**
     * Position of the icon.
     * @defaultValue left
     */
    iconPos?: 'left' | 'right' | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     */
    invalid?: boolean | undefined;
    /**
     * When present, it specifies that the element should be disabled.
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
    tabindex?: string | undefined;
    /**
     * 	Identifier of the focus input to match a label defined for the chips.
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
     * @type {ToggleButtonPassThroughOptions}
     */
    pt?: PassThrough<ToggleButtonPassThroughOptions>;
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
 * Defines valid slots in ToggleButton component.
 */
export interface ToggleButtonSlots {
    /**
     * Custom icon template.
     * @param {Object} scope - icon slot's params.
     */
    icon(scope: {
        /**
         * Current value
         */
        value: any;
        /**
         * Icon style class
         */
        class: any;
    }): VNode[];
}

/**
 * Defines valid emits in ToggleButton component.
 */
export interface ToggleButtonEmits {
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
 * **PrimeVue - ToggleButton**
 *
 * _ToggleButton is used to select a boolean value using a button._
 *
 * [Live Demo](https://www.primevue.org/togglebutton/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class ToggleButton extends ClassComponent<ToggleButtonProps, ToggleButtonSlots, ToggleButtonEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ToggleButton: GlobalComponentConstructor<ToggleButton>;
    }
}

export default ToggleButton;
