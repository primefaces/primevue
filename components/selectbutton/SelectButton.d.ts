import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type SelectButtonOptionLabelType = string | ((data: any) => string) | undefined;

type SelectButtonOptionValueType = string | ((data: any) => any) | undefined;

type SelectButtonOptionDisabledType = string | ((data: any) => boolean) | undefined;

export interface SelectButtonChangeEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Single value or an array of values that are selected.
     */
    value: any;
}

export interface SelectButtonProps {
    /**
     * Value of the component.
     */
    modelValue?: any;
    /**
     * An array of selectitems to display as the available options.
     */
    options?: any[] | undefined;
    /**
     * Property name or getter function to use as the label of an option.
     */
    optionLabel?: SelectButtonOptionLabelType;
    /**
     * Property name or getter function to use as the value of an option, defaults to the option itself when not defined.
     */
    optionValue?: SelectButtonOptionValueType;
    /**
     * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
     */
    optionDisabled?: SelectButtonOptionDisabledType;
    /**
     * When specified, allows selecting multiple values.
     */
    multiple?: boolean | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * A property to uniquely identify an option.
     */
    dataKey?: string | undefined;
    /**
     * Whether selection can be cleared.
     */
    unselectable?: boolean | undefined;
    /**
     * Identifier of the underlying element.
     */
    "aria-labelledby"?: string | undefined;
}

export interface SelectButtonSlots {
    /**
     * Custom content for each option.
     * @param {Object} scope - option slot's params.
     */
    option: (scope: {
        /**
         * Option instance
         */
        option: any;
        /**
         * Index of the option
         */
        index: number;
    }) => VNode[];
}

export declare type SelectButtonEmits = {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue': (value: any) => void;
    /**
     * Callback to invoke on value change.
     * @param {SelectButtonChangeEvent} event - Custom change event.
     */
    'change': (event: SelectButtonChangeEvent) => void;
    /**
     * Callback to invoke on focus.
     * @param {SelectButtonChangeEvent} event - Browser event.
     */
    'focus': (event: Event) => void;
    /**
     * Callback to invoke on blur.
     * @param {Event} event - Browser event.
     */
    'blur': (event: Event) => void;
}

declare class SelectButton extends ClassComponent<SelectButtonProps, SelectButtonSlots, SelectButtonEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SelectButton: GlobalComponentConstructor<SelectButton>
    }
}

/**
 *
 * SelectButton is a form component to choose a value from a list of options using button elements.
 *
 * Demos:
 *
 * - [SelectButton](https://www.primefaces.org/primevue/showcase/#/selectbutton)
 *
 */
export default SelectButton;
