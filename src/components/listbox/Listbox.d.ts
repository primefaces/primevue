import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { VirtualScrollerProps, VirtualScrollerItemOptions } from '../virtualscroller';


type ListboxOptionLabelType = string | ((data: any) => string) | undefined;

type ListboxOptionValueType = string | ((data: any) => any) | undefined;

type ListboxOptionDisabledType = string | ((data: any) => boolean) | undefined;

type ListboxOptionChildrenType = string | ((data: any) => any[]) | undefined;

type ListboxFilterMatchModeType = 'contains' | 'startsWith' | 'endsWith' | undefined;

export interface ListboxChangeEvent {
    /**
     * Original event
     */
    originalEvent: Event;
    /**
     * Selected option value
     */
    value: any;
}

export interface ListboxFilterEvent {
    /**
     * Original event
     */
    originalEvent: Event;
    /**
     * Filter value
     */
    value: string;
}

export interface ListboxProps {
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
    optionLabel?: ListboxOptionLabelType;
    /**
     * Property name or getter function to use as the value of an option, defaults to the option itself when not defined.
     */
    optionValue?: ListboxOptionValueType;
    /**
     * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
     */
    optionDisabled?: ListboxOptionDisabledType;
    /**
     * Property name or getter function to use as the label of an option group.
     */
    optionGroupLabel?: ListboxOptionLabelType;
    /**
     * Property name or getter function that refers to the children options of option group.
     */
    optionGroupChildren?: ListboxOptionChildrenType;
    /**
     * Inline style of inner list element.
     */
    listStyle?: string | undefined;
    /**
     * When specified, disables the component.
     */
    disabled?: boolean | undefined;
    /**
     * A property to uniquely identify an option.
     */
    dataKey?: string | undefined;
    /**
     * When specified, allows selecting multiple values.
     */
    multiple?: boolean | undefined;
    /**
     * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually.
     * On touch enabled devices, metaKeySelection is turned off automatically.
     * Default value is true.
     */
    metaKeySelection?: boolean | undefined;
    /**
     * When specified, displays a filter input at header.
     */
    filter?: boolean | undefined;
    /**
     * Placeholder text to show when filter input is empty.
     */
    filterPlaceholder?: string | undefined;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     */
    filterLocale?: string | undefined;
    /**
     * Defines the filtering algorithm to use when searching the options.
     * @see ListboxFilterMatchModeType
     * Default value is 'contains'.
     */
    filterMatchMode?: ListboxFilterMatchModeType;
    /**
     * Fields used when filtering the options, defaults to optionLabel.
     */
    filterFields?: string[] | undefined;
    /**
     * Uses to pass all properties of the HTMLInputElement to the filter input inside the component.
     */
    filterInputProps?: HTMLInputElement | undefined;
    /**
     * Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.
     * @see VirtualScroller.VirtualScrollerProps
     */
    virtualScrollerOptions?: VirtualScrollerProps;
    /**
     * Whether to focus on the first visible or selected element.
     * Default value is true.
     */
    autoOptionFocus?: boolean | undefined;
    /**
     * Text to be displayed in hidden accessible field when filtering returns any results. Defaults to value from PrimeVue locale configuration.
     * Default value is '{0} results are available'.
     */
    filterMessage?: string | undefined;
    /**
     * Text to be displayed in hidden accessible field when options are selected. Defaults to value from PrimeVue locale configuration.
     * Default value is '{0} items selected'.
     */
    selectionMessage?: string | undefined;
    /**
     * Text to be displayed in hidden accessible field when any option is not selected. Defaults to value from PrimeVue locale configuration.
     * Default value is 'No selected item'.
     */
    emptySelectionMessage?: string | undefined;
    /**
     * Text to display when filtering does not return any results. Defaults to value from PrimeVue locale configuration.
     * Default value is 'No results found'.
     */
    emptyFilterMessage?: string | undefined;
    /**
     * Text to display when there are no options available. Defaults to value from PrimeVue locale configuration.
     * Default value is 'No results found'.
     */
    emptyMessage?: string | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | string | undefined;
    /**
     * Defines a string value that labels an interactive element.
     */
    "aria-label"?: string | undefined;
    /**
     * Identifier of the underlying input element.
     */
    "aria-labelledby"?: string | undefined;
}

export interface ListboxSlots {
    /**
     * Custom header template.
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
        options: any[];
    }) => VNode[];
    /**
     * Custom footer template.
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
        options: any[];
    }) => VNode[];
    /**
     * Custom option template.
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
    /**
     * Custom optiongroup template.
     * @param {Object} scope - optiongroup slot's params.
     */
    optiongroup: (scope: {
        /**
         * Option instance
         */
        option: any;
        /**
         * Index of the option
         */
        index: number;
    }) => VNode[];
    /**
     * Custom emptyfilter template.
     */
    emptyfilter: () => VNode[];
    /**
     * Custom empty template.
     */
    empty: () => VNode[];
    /**
     * Custom content template.
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

export declare type ListboxEmits = {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue': (value: any) => void;
    /**
     * Callback to invoke on value change.
     * @param {ListboxChangeEvent} event - Custom change event.
     */
    'change': (event: ListboxChangeEvent) => void;
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     */
    'focus': (event: Event) => void;
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     */
    'blur': (event: Event) => void;
    /**
     * Callback to invoke on filter input.
     * @param {ListboxFilterEvent} event - Custom filter event.
     */
    'filter': (event: ListboxFilterEvent) => void;
}

declare class Listbox extends ClassComponent<ListboxProps, ListboxSlots, ListboxEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Listbox: GlobalComponentConstructor<Listbox>
    }
}

/**
 *
 * Listbox is used to select one or more values from a list of items.
 *
 * Demos:
 *
 * - [Listbox](https://www.primefaces.org/primevue/showcase/#/listbox)
 *
 */
export default Listbox;
