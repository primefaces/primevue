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
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
     * Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: InputHTMLAttributes | undefined;
    /**
     * Icon to display in chip remove action.
     * @defaultValue pi pi-times-circle
     */
    removeTokenIcon?: string | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * Placeholder text for the input.
     */
    placeholder?: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    'aria-label'?: string | undefined;
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
