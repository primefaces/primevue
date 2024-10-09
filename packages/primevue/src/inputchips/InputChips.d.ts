/**
 *
 * InputChips groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/inputchips/)
 *
 * @module inputchips
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { ChipPassThroughOptions } from 'primevue/chip';
import type { PassThroughOptions } from 'primevue/passthrough';
import { InputHTMLAttributes, VNode } from 'vue';

export declare type InputChipsPassThroughOptionType = InputChipsPassThroughAttributes | ((options: InputChipsPassThroughMethodOptions) => InputChipsPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface InputChipsPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: InputChipsProps;
    /**
     * Defines current inline state.
     */
    state: InputChipsState;
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
 * Custom shared passthrough(pt) option method.
 */
export interface InputChipsSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: InputChipsProps;
    /**
     * Defines current inline state.
     */
    state: InputChipsState;
}

/**
 * Custom add event.
 * @see {@link InputChipsEmitsOptions.add}
 */
export interface InputChipsAddEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Added/Removed item value.
     */
    value: any;
}

/**
 * Custom remove event.
 * @see {@link InputChipsEmitsOptions.remove}
 * @extends InputChipsAddEvent
 */
export interface InputChipsRemoveEvent extends InputChipsAddEvent {}

/**
 * Custom passthrough(pt) options.
 * @see {@link InputChipsProps.pt}
 */
export interface InputChipsPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputChipsPassThroughOptionType;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: InputChipsPassThroughOptionType;
    /**
     * Used to pass attributes to the chip's DOM element.
     */
    chipItem?: InputChipsPassThroughOptionType;
    /**
     * Used to pass attributes to the Chip component.
     * @see {@link ChipPassThroughOptions}
     */
    pcChip?: ChipPassThroughOptions<InputChipsSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the chip icon's DOM element.
     */
    chipIcon?: InputChipsPassThroughOptionType;
    /**
     * Used to pass attributes to the input item's DOM element.
     */
    inputItem?: InputChipsPassThroughOptionType;
    /**
     * Used to pass attributes to the input item field's DOM element.
     */
    inputItemField?: InputChipsPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface InputChipsPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in InputChips component.
 */
export interface InputChipsState {
    /**
     * Current id state as a string.
     */
    id: string;
    /**
     * Current input value as a string.
     */
    inputValue: string;
    /**
     * Current focused state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Current focused item index state as a number.
     */
    focusedIndex: number;
}

/**
 * Defines valid properties in InputChips component.
 */
export interface InputChipsProps {
    /**
     * Value of the component.
     */
    modelValue?: any[];
    /**
     * Maximum number of entries allowed.
     */
    max?: number | undefined;
    /**
     * Whether to add an item when the input loses focus.
     * @defaultValue false
     */
    addOnBlur?: boolean | undefined;
    /**
     * Whether to allow duplicate values or not.
     * @defaultValue true
     */
    allowDuplicate?: boolean | undefined;
    /**
     * Separator char to add an item when pressed in addition to the enter key.
     */
    separator?: string | any;
    /**
     * 	Identifier of the focus input to match a label defined for the inputchips.
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
     * Icon to display in chip remove action.
     */
    removeTokenIcon?: string | undefined;
    /**
     * Icon to display in chip remove action.
     */
    chipIcon?: string | undefined;
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
     * Specifies the input variant of the component.
     * @defaultValue outlined
     */
    variant?: 'outlined' | 'filled' | undefined;
    /**
     * Placeholder text for the input.
     */
    placeholder?: string | undefined;
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
     * @type {InputChipsPassThroughOptions}
     */
    pt?: PassThrough<InputChipsPassThroughOptions>;
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
 * Defines valid slots in InputChips slots.
 */
export interface InputChipsSlots {
    /**
     * Custom chip template.
     * @param {Object} scope - chip slot's params.
     */
    chip(scope: {
        /**
         * Value of the component
         */
        value: any;
    }): VNode[];
    /**
     * @deprecated since v4.0. Use 'chipicon' slot.
     * Custom chip icon template.
     * @param {Object} scope - chip icon slot's params.
     */
    removetokenicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
        /**
         * Index of the token.
         */
        index: number;
        /**
         * chip icon function.
         * @param {Event} event - Browser event
         */
        removeCallback: (event: Event, index: number) => void;
    }): VNode[];
    /**
     * Custom chip icon template.
     * @param {Object} scope - chip icon slot's params.
     */
    chipicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
        /**
         * Index of the token.
         */
        index: number;
        /**
         * chip icon function.
         * @param {Event} event - Browser event
         */
        removeCallback: (event: Event, index: number) => void;
    }): VNode[];
}
/**
 * Defines valid emits in InputChips component.
 */
export interface InputChipsEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any[]): void;
    /**
     * Callback to invoke when a chip is added.
     * @param {InputChipsAddEvent} event - Custom add event.
     */
    add(event: InputChipsAddEvent): void;
    /**
     * Callback to invoke when a chip is removed.
     * @param {InputChipsRemoveEvent} event - Custom remove event.
     */
    remove(event: InputChipsRemoveEvent): void;
}

export declare type InputChipsEmits = EmitFn<InputChipsEmitsOptions>;

/**
 * **PrimeVue - InputChips**
 *
 * _InputChips is used to enter multiple values on an input field._
 *
 * [Live Demo](https://www.primevue.org/inputchips/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const InputChips: DefineComponent<InputChipsProps, InputChipsSlots, InputChipsEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        InputChips: DefineComponent<InputChipsProps, InputChipsSlots, InputChipsEmits>;
    }
}

export default InputChips;
