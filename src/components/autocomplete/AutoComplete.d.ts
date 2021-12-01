import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { VirtualScrollerProps, VirtualScrollerItemOptions } from '../virtualscroller';

type AutoCompleteFieldType = string | ((data: any) => string) | undefined;

type AutoCompleteDropdownMode = 'blank' | 'current' | undefined;

type AutoCompleteAppendTo = 'body' | 'self' | string | undefined;

export interface AutoCompleteItemSelectEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Selected item
     */
    value: any;
}

/**
 * @extends AutoCompleteItemSelectEvent
 */
export interface AutoCompleteItemUnselectEvent extends AutoCompleteItemSelectEvent { }

export interface AutoCompleteDropdownClickEvent {
    /**
     * Browser mouse event
     */
    originalEvent: MouseEvent;
    /**
     * Current value of the input field
     */
    query: string;
}

export interface AutoCompleteCompleteEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Value to search with
     */
    query: string;
}

export interface AutoCompleteProps {
    /**
     * Value of the component.
     */
    modelValue?: any;
    /**
     * An array of suggestions to display.
     */
    suggestions?: any[];
    /**
     * Property name or getter function of a suggested object to resolve and display.
     * @type {AutoCompleteFieldType}
     */
    field?: AutoCompleteFieldType;
    /**
     * Property name or getter function to use as the label of an option group.
     */
    optionGroupLabel?: string | undefined;
    /**
     * Property name or getter function that refers to the children options of option group.
     */
    optionGroupChildren?: string | undefined;
    /**
     * Maximum height of the suggestions panel.
     * Default value is '200px'.
     */
    scrollHeight?: string | undefined;
    /**
     * Displays a button next to the input field when enabled.
     */
    dropdown?: boolean | undefined;
    /**
     * Specifies the behavior dropdown button. Default 'blank' mode sends an empty string and 'current' mode sends the input value.
     * @see AutoCompleteDropdownMode
     * Default value is 'blank'.
     */
    dropdownMode?: AutoCompleteDropdownMode;
    /**
     * Highlights automatically the first item of the dropdown to be selected.
     */
    autoHighlight?: boolean | undefined;
    /**
     * Specifies if multiple values can be selected.
     */
    multiple?: boolean | undefined;
    /**
     * Minimum number of characters to initiate a search.
     * Default value is 1.
     */
    minLength?: number | undefined;
    /**
     * Delay between keystrokes to wait before sending a query.
     * Default value is 300.
     */
    delay?: number | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * Special keywords are 'body' for document body and 'self' for the element itself.
     * Default value is body.
     */
    appendTo?: AutoCompleteAppendTo;
    /**
     * When present, autocomplete clears the manual input if it does not match of the suggestions to force only accepting values from the suggestions.
     */
    forceSelection?: boolean;
    /**
     * Whether to run a query when input receives focus.
     */
    completeOnFocus?: boolean | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: any;
    /**
     * Style class of the input field.
     */
    inputClass?: string;
    /**
     * Inline style of the component.
     */
    class?: any;
    /**
     * Style class of the component input field.
     */
    style?: any;
    /**
     * Style class of the overlay panel.
     */
    panelClass?: string;
    /**
     * Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.
     * @see VirtualScroller.VirtualScrollerProps
     */
    virtualScrollerOptions?: VirtualScrollerProps;
}

export interface AutoCompleteSlots {
    /**
     * Custom content for each item.
     * @param {Object} scope - item slot's params.
     */
    item: (scope: {
        /**
         * Option instance
         */
        item: any;
        /**
         * Index of the option
         */
        index: number;
    }) => VNode[];
    /**
     * Custom option group template.
     * @param {Object} scope - option group slot's params.
     */
    optiongroup: (scope: {
        /**
         * Option instance
         */
        item: any;
        /**
         * Index of the option
         */
        index: number;
    }) => VNode[];
    /**
     * Custom header template of panel.
     * @param {Object} scope - header slot's params.
     */
    header: (scope: {
        /**
         * Value of the component
         */
        value: any;
        /**
         * Displayed options
         */
        suggestions: any[];
    }) => VNode[];
    /**
     * Custom footer template of panel.
     * @param {Object} scope - footer slot's params.
     */
    footer: (scope: {
        /**
         * Value of the component
         */
        value: any;
        /**
         * Displayed options
         */
        suggestions: any[];
    }) => VNode[];
    /**
     * Custom chip template.
     * @param {Object} scope - chip slot's params.
     */
    chip: (scope: {
        /**
         * A value in the selection
         */
        value: any;
    }) => VNode[];
    /**
     * Custom panel template.
     * @param {Object} scope - content slot's params.
     */
    content: (scope: {
        /**
         * An array of objects to display for virtualscroller
         */
        items: any;
        /**
         * Style class of the component
         */
        styleClass: string;
        /**
         * Referance of the content
         * @param {HTMLElement} el - Element of 'ref' property
         */
        contentRef(el: any): void;
        /**
         * Options of the items
         * @param {number} index - Rendered index
         * @return {@link VirtualScroller.VirtualScrollerItemOptions}
         */
        getItemOptions(index: number): VirtualScrollerItemOptions;
    }) => VNode[];
    /**
     * Custom loader template.
     * @param {Object} scope - loader slot's params.
     */
    loader: (scope: {
        /**
         * Options of the loader items for virtualscroller
         */
        options: any[];
    }) => VNode[];
}

export declare type AutoCompleteEmits = {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue': (value: any) => void;
    /**
     * Callback to invoke when a suggestion is selected.
     * @param {AutoCompleteItemSelectEvent} event - Custom item select event.
     */
    'item-select': (event: AutoCompleteItemSelectEvent) => void;
    /**
     * Callback to invoke when a selected value is removed.
     * @param {AutoCompleteItemUnselectEvent} event - Custom item unselect event.
     */
    'item-unselect': (event: AutoCompleteItemUnselectEvent) => void;
    /**
     * Callback to invoke to when dropdown button is clicked.
     * @param {AutoCompleteDropdownClickEvent} event - Custom dropdown click event.
     */
    'dropdown-click': (event: AutoCompleteDropdownClickEvent) => void;
    /**
     * Callback to invoke to search for suggestions.
     * @param {AutoCompleteCompleteEvent} event - Custom complete event.
     */
    'complete': (event: AutoCompleteCompleteEvent) => void;
    /**
     * Callback to invoke when input is cleared by the user.
     */
    'clear': () => void;
}

declare class AutoComplete extends ClassComponent<AutoCompleteProps, AutoCompleteSlots, AutoCompleteEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        AutoComplete: GlobalComponentConstructor<AutoComplete>
    }
}

/**
 *
 * AutoComplete is an input component that provides real-time suggestions when being typed.
 *
 * Demos:
 *
 * - [AutoComplete](https://www.primefaces.org/primevue/showcase/#/autocomplete)
 *
 */
export default AutoComplete;
