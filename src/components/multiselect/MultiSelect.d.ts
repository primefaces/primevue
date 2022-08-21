import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { VirtualScrollerProps, VirtualScrollerItemOptions } from '../virtualscroller';

type MultiSelectOptionLabelType = string | ((data: any) => string) | undefined;

type MultiSelectOptionValueType = string | ((data: any) => any) | undefined;

type MultiSelectOptionDisabledType = string | ((data: any) => boolean) | undefined;

type MultiSelectOptionChildrenType = string | ((data: any) => any[]) | undefined;

type MultiSelectFilterMatchModeType = 'contains' | 'startsWith' | 'endsWith' | undefined;

type MultiSelectAppendToType = 'body' | 'self' | string | undefined | HTMLElement;

type MultiSelectDisplayType = 'comma' | 'chip' | undefined;

export interface MultiSelectChangeEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Selected option value
     */
    value: any;
}

export interface MultiSelectAllChangeEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Whether all data is selected.
     */
    checked: boolean;
}

export interface MultiSelectFilterEvent {
    /**
     * Original event
     */
    originalEvent: Event;
    /**
     * Filter value
     */
    value: string;
}

export interface MultiSelectProps {
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
    optionLabel?: MultiSelectOptionLabelType;
    /**
     * Property name or getter function to use as the value of an option, defaults to the option itself when not defined.
     */
    optionValue?: MultiSelectOptionValueType;
    /**
     * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
     */
    optionDisabled?: MultiSelectOptionDisabledType;
    /**
     * Property name or getter function to use as the label of an option group.
     */
    optionGroupLabel?: MultiSelectOptionLabelType;
    /**
     * Property name or getter function that refers to the children options of option group.
     */
    optionGroupChildren?: MultiSelectOptionChildrenType;
    /**
     * Height of the viewport, a scrollbar is defined if height of list exceeds this value.
     * Default value is '200px'.
     */
    scrollHeight?: string | undefined;
    /**
     * Label to display when there are no selections.
     */
    placeholder?: string | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: HTMLInputElement | undefined;
    /**
     * Inline style of the overlay panel.
     */
    panelStyle?: any;
    /**
     * Style class of the overlay panel.
     */
    panelClass?: any;
    /**
     * Uses to pass all properties of the HTMLDivElement to the overlay panel.
     */
    panelProps?: HTMLDivElement | undefined;
    /**
     * Uses to pass all properties of the HTMLInputElement to the filter input inside the overlay panel.
     */
    filterInputProps?: HTMLInputElement | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the clear button inside the overlay panel.
     */
    closeButtonProps?: HTMLButtonElement | undefined;
    /**
     * A property to uniquely identify an option.
     */
    dataKey?: string | undefined;
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
     * @see MultiSelectFilterMatchModeType
     * Default value is 'contains'.
     */
    filterMatchMode?: MultiSelectFilterMatchModeType;
    /**
     * Fields used when filtering the options, defaults to optionLabel.
     */
    filterFields?: string[] | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are 'body' for document body and 'self' for the element itself.
     * @see MultiSelectAppendToType
     * Default value is 'body'.
     */
    appendTo?: MultiSelectAppendToType;
    /**
     * Defines how the selected items are displayed.
     * @see MultiSelectDisplayType
     * Default value is 'comma'.
     */
    display?: MultiSelectDisplayType;
    /**
     * Label to display after exceeding max selected labels.
     * Default value is '{0} items selected'.
     */
    selectedItemsLabel?: string | undefined;
    /**
     * Decides how many selected item labels to show at most.
     */
    maxSelectedLabels?: number | undefined;
    /**
     * Maximum number of selectable items.
     */
    selectionLimit?: number | undefined;
    /**
     * Whether to show the header checkbox to toggle the selection of all items at once.
     * Default value is true.
     */
    showToggleAll?: boolean | undefined;
    /**
     * Whether the multiselect is in loading state.
     */
    loading?: boolean | undefined;
    /**
     * Icon to display in loading state.
     * Default value is 'pi pi-spinner pi-spin'.
     */
    loadingIcon?: string | undefined;
    /**
     * Whether all data is selected.
     */
    selectAll?: boolean | undefined;
    /**
     * Clears the filter value when hiding the dropdown.
     */
    resetFilterOnHide?: boolean;
    /**
     * Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.
     * @see VirtualScroller.VirtualScrollerProps
     */
    virtualScrollerOptions?: VirtualScrollerProps;
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
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

export interface MultiSelectSlots {
    /**
     * Custom value template.
     * @param {Object} scope - value slot's params.
     */
    value: (scope: {
        /**
         * Value of the component
         */
        value: any;
        /**
         * Placeholder prop value
         */
        placeholder: string;
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
     * Custom indicator template.
     */
    indicator: () => VNode[];
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
     * Custom option group template.
     * @param {Object} scope - option group slot's params.
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

export declare type MultiSelectEmits = {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue': (value: any) => void;
    /**
     * Callback to invoke on value change.
     * @param {MultiSelectChangeEvent} event - Custom change event.
     */
    'change': (event: MultiSelectChangeEvent) => void;
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
    /**
     * Callback to invoke on filter input.
     * @param {MultiSelectFilterEvent} event - Custom filter event.
     */
    'filter': (event: MultiSelectFilterEvent) => void;
    /**
     * Callback to invoke when all data is selected.
     * @param {MultiSelectAllChangeEvent} event - Custom select all change event.
     */
    'selectall-change': (event: MultiSelectAllChangeEvent) => void;
}

declare class MultiSelect extends ClassComponent<MultiSelectProps, MultiSelectSlots, MultiSelectEmits> {
    /**
     * Shows the overlay.
     * @param {boolean} [isFocus] - Decides whether to focus on the component. Default value is false.
     *
     * @memberof MultiSelect
     */
    show: (isFocus?: boolean) => void;
    /**
     * Hides the overlay.
     * @param {boolean} [isFocus] - Decides whether to focus on the component. Default value is false.
     *
     * @memberof MultiSelect
     */
    hide: (isFocus?: boolean) => void;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        MultiSelect: GlobalComponentConstructor<MultiSelect>
    }
}

/**
 *
 * MultiSelect is used to multiple values from a list of options.
 *
 * Demos:
 *
 * - [MultiSelect](https://www.primefaces.org/primevue/showcase/#/multiselect)
 *
 */
export default MultiSelect;
