import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
 * @extends ChipsAddEvent
 */
export interface ChipsRemoveEvent extends ChipsAddEvent { }

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
     */
    addOnBlur?: boolean | undefined;
    /**
     * Whether to allow duplicate values or not.
     * Default value is true.
     */
    allowDuplicate?: boolean | undefined;
    /**
     * Separator char to add an item when pressed in addition to the enter key. Currently only possible value is ','
     */
    separator?: string | undefined;
    /**
     * 	Identifier of the focus input to match a label defined for the chips.
     */
    inputId?: string | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: any | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: any | undefined;
    /**
     * Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: HTMLInputElement | undefined;
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

export interface ChipsSlots {
    /**
     * Custom chip template.
     * @param {Object} scope - chip slot's params.
     */
    chip: (scope: {
        /**
         * Value of the component
         */
        value: any;
    }) => VNode[];
}

export declare type ChipsEmits = {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue': (value: any[]) => void;
    /**
     * Callback to invoke when a chip is added.
     * @param {ChipsAddEvent} event - Custom add event.
     */
    'add': (event: ChipsAddEvent) => void;
    /**
     * Callback to invoke when a chip is removed.
     * @param {ChipsRemoveEvent} event - Custom remove event.
     */
    'remove': (event: ChipsRemoveEvent) => void;
}

declare class Chips extends ClassComponent<ChipsProps, ChipsSlots, ChipsEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Chips: GlobalComponentConstructor<Chips>
    }
}

/**
 *
 * Chips is used to enter multiple values on an input field.
 *
 * Demos:
 *
 * - [Chips](https://www.primefaces.org/primevue/showcase/#/chips)
 *
 */
export default Chips;
