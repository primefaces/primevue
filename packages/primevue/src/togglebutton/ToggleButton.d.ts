/**
 *
 * ToggleButton is used to select a boolean value using a button.
 *
 * [Live Demo](https://www.primevue.org/togglebutton/)
 *
 * @module togglebutton
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type ToggleButtonPassThroughOptionType<T = any> = ToggleButtonPassThroughAttributes | ((options: ToggleButtonPassThroughMethodOptions<T>) => ToggleButtonPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ToggleButtonPassThroughMethodOptions<T = any> {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ToggleButtonProps;
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
    parent: T;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ToggleButtonProps.pt}
 */
export interface ToggleButtonPassThroughOptions<T = any> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToggleButtonPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: ToggleButtonPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: ToggleButtonPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: ToggleButtonPassThroughOptionType<T>;
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
     */
    onIcon?: string | undefined;
    /**
     * Icon for the off state.
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
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
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
     * Custom content such as icons, images and text can be placed inside the button via the default slot.
     */
    default(): VNode[];
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
export interface ToggleButtonEmitsOptions {
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

export declare type ToggleButtonEmits = EmitFn<ToggleButtonEmitsOptions>;

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
declare const ToggleButton: DefineComponent<ToggleButtonProps, ToggleButtonSlots, ToggleButtonEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        ToggleButton: GlobalComponentConstructor<ToggleButtonProps, ToggleButtonSlots, ToggleButtonEmits>;
    }
}

export default ToggleButton;
