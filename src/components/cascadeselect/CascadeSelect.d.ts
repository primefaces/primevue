import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type CascadeSelectOptionLabelType = string | ((data: any) => string) | undefined;

type CascadeSelectOptionValueType = string | ((data: any) => any) | undefined;

type CascadeSelectOptionChildrenType = string[] | string | ((data: any) => any[]) | undefined;

type CascadeSelectAppendToType = 'body' | 'self' | string | undefined;

export interface CascadeSelectChangeEvent {
    /**
     * Original event.
     */
    originalEvent: Event;
    /**
     * Selected option value.
     */
    value: any;
}

/**
 * @extends CascadeSelectChangeEvent
 */
export interface CascadeSelectChangeGroupEvent extends CascadeSelectChangeEvent { }

export interface CascadeSelectProps {
    /**
     * Value of the component.
     */
    modelValue?: any | undefined;
    /**
     * An array of selectitems to display as the available options.
     */
    options?: any[] | undefined;
    /**
     * Property name or getter function to use as the label of an option.
     * @see CascadeSelectOptionLabelType
     */
    optionLabel?: CascadeSelectOptionLabelType;
    /**
     * Property name or getter function to use as the value of an option, defaults to the option itself when not defined.
     * @see CascadeSelectOptionValueType
     */
    optionValue?: CascadeSelectOptionValueType;
    /**
     * Property name or getter function to use as the label of an option group.
     * @see CascadeSelectOptionLabelType
     */
    optionGroupLabel?: CascadeSelectOptionLabelType;
    /**
     * Property name or getter function to retrieve the items of a group.
     * @see CascadeSelectOptionChildrenType
     */
    optionGroupChildren?: CascadeSelectOptionChildrenType;
    /**
     * Default text to display when no option is selected.
     */
    placeholder?: string | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * A property to uniquely identify an option.
     */
    dataKey?: string | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: string | undefined;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledBy?: string | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are 'body' for document body and 'self' for the element itself.
     * @see CascadeSelectAppendToType
     * Default value is 'body'.
     */
    appendTo?: CascadeSelectAppendToType;
    /**
     * Style class of the overlay panel.
     */
    panelClass?: any;
    /**
     * Whether the dropdown is in loading state.
     */
    loading?: boolean | undefined;
    /**
     * Icon to display in loading state.
     * Default value is 'pi pi-spinner pi-spin'.
     */
    loadingIcon?: string | undefined;
}

export interface CascadeSelectSlots {
    /**
     * Custom content for each option.
     * @param {Object} scope - option slot's params.
     */
    option: (scope: {
        /**
         * Option instance
         */
        option: any;
    }) => VNode[];
    /**
     * Custom value template.
     * @param {CascadeSelectValueSlot} scope - value slot's params.
     */
    value: (scope: {
        /**
         * Value of the component
         */
        value: any;
        /**
         * Placeholder text to show
         */
        placeholder: string;
    }) => VNode[];
    /**
     * Custom indicator template.
     */
    indicator: () => VNode[];
}

export declare type CascadeSelectEmits = {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue': (value: any) => void;
    /**
     * Callback to invoke on value change.
     * @param { CascadeSelectChangeEvent } event - Custom change event.
     */
    'change': (event: CascadeSelectChangeEvent) => void;
    /**
     * Callback to invoke when a group changes.
     * @param { CascadeSelectChangeGroupEvent } event - Custom change event.
     */
    'change-group': (event: CascadeSelectChangeGroupEvent) => void;
    /**
     * Callback to invoke before the overlay is shown.
     */
    'before-show': () => void;
    /**
     * Callback to invoke before the overlay is hidden.
     */
    'before-hide': () => void;
    /**
     * Callback to invoke when the overlay is shown.
     */
    'show': () => void;
    /**
     * Callback to invoke when the overlay is hidden.
     */
    'hide': () => void;
}

declare class CascadeSelect extends ClassComponent<CascadeSelectProps, CascadeSelectSlots, CascadeSelectEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        CascadeSelect: GlobalComponentConstructor<CascadeSelect>
    }
}

/**
 *
 * CascadeSelect displays a nested structure of options.
 *
 * Demos:
 *
 * - [CascadeSelect](https://www.primefaces.org/primevue/showcase/#/cascadeselect)
 *
 */
export default CascadeSelect;
