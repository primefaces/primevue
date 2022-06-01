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
     * Style class of the component input field.
     */
    class?: any;
    /**
     * Inline style of the component.
     */
    style?: any;
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
