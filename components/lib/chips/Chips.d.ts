/**
 *
 * Chips groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/chips/)
 *
 * @module chips
 *
 */
import { InputHTMLAttributes, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type ChipsPassThroughOptionType = ChipsPassThroughAttributes | ((options: ChipsPassThroughMethodOptions) => ChipsPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ChipsPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ChipsProps;
    /**
     * Defines current inline state.
     */
    state: ChipsState;
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
 * Custom add event.
 * @see {@link ChipsEmits.add}
 */
export interface ChipsAddEvent {
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
 * @see {@link ChipsEmits.remove}
 * @extends ChipsAddEvent
 */
export interface ChipsRemoveEvent extends ChipsAddEvent {}

/**
 * Custom passthrough(pt) options.
 * @see {@link ChipsProps.pt}
 */
export interface ChipsPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ChipsPassThroughOptionType;
    /**
     * Used to pass attributes to the container's DOM element.
     */
    container?: ChipsPassThroughOptionType;
    /**
     * Used to pass attributes to the token's DOM element.
     */
    token?: ChipsPassThroughOptionType;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: ChipsPassThroughOptionType;
    /**
     * Used to pass attributes to the remove token icon's DOM element.
     */
    removeTokenIcon?: ChipsPassThroughOptionType;
    /**
     * Used to pass attributes to the input token's DOM element.
     */
    inputToken?: ChipsPassThroughOptionType;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: ChipsPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ChipsPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Chips component.
 */
export interface ChipsState {
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
 * Defines valid properties in Chips component.
 */
export interface ChipsProps {
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
     * Used to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     * @deprecated since v3.26.0. Use 'pt' property instead.
     */
    inputProps?: InputHTMLAttributes | undefined;
    /**
     * Icon to display in chip remove action.
     * @deprecated since v3.27.0. Use 'removetokenicon' slot.
     */
    removeTokenIcon?: string | undefined;
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
     * Used to pass attributes to DOM elements inside the component.
     * @type {ChipsPassThroughOptions}
     */
    pt?: PassThrough<ChipsPassThroughOptions>;
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
 * Defines valid slots in Chips slots.
 */
export interface ChipsSlots {
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
     * Custom remove token icon template.
     * @param {Object} scope - remove token icon slot's params.
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
         * Remove token icon function.
         * @param {Event} event - Browser event
         * @deprecated since v3.39.0. Use 'removeCallback' property instead.
         */
        onClick: (event: Event, index: number) => void;
        /**
         * Remove token icon function.
         * @param {Event} event - Browser event
         */
        removeCallback: (event: Event, index: number) => void;
    }): VNode[];
}
/**
 * Defines valid emits in Chips component.
 */
export interface ChipsEmits {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any[]): void;
    /**
     * Callback to invoke when a chip is added.
     * @param {ChipsAddEvent} event - Custom add event.
     */
    add(event: ChipsAddEvent): void;
    /**
     * Callback to invoke when a chip is removed.
     * @param {ChipsRemoveEvent} event - Custom remove event.
     */
    remove(event: ChipsRemoveEvent): void;
}

/**
 * **PrimeVue - Chips**
 *
 * _Chips is used to enter multiple values on an input field._
 *
 * [Live Demo](https://www.primevue.org/chips/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Chips extends ClassComponent<ChipsProps, ChipsSlots, ChipsEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Chips: GlobalComponentConstructor<Chips>;
    }
}

export default Chips;
