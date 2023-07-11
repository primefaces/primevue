/**
 *
 * ListBox is used to select one or more values from a list of items.
 *
 * [Live Demo](https://www.primevue.org/listbox/)
 *
 * @module listbox
 *
 */
import { InputHTMLAttributes, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { VirtualScrollerItemOptions, VirtualScrollerPassThroughOptionType, VirtualScrollerProps } from '../virtualscroller';

export declare type ListboxPassThroughOptionType = ListboxPassThroughAttributes | ((options: ListboxPassThroughMethodOptions) => ListboxPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ListboxPassThroughMethodOptions {
    instance: any;
    props: ListboxProps;
    state: ListboxState;
    context: ListboxContext;
}

/**
 * Custom change event.
 * @see {@link ListboxEmits.change}
 */
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

/**
 * Custom filter event.
 * @see {@link ListboxEmits.filter}
 */
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

/**
 * Custom passthrough(pt) options.
 * @see {@link ListboxProps.pt}
 */
export interface ListboxPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: ListboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the header's DOM element.
     */
    header?: ListboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the filter container's DOM element.
     */
    filterContainer?: ListboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the filter input's DOM element.
     */
    filterInput?: ListboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the filter icon's DOM element.
     */
    filterIcon?: ListboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the wrapper's DOM element.
     */
    wrapper?: ListboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the VirtualScroller component.
     * @see {@link VirtualScrollerPassThroughOptionType}
     */
    virtualScroller?: VirtualScrollerPassThroughOptionType;
    /**
     * Uses to pass attributes to the list's DOM element.
     */
    list?: ListboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the item group's DOM element.
     */
    itemGroup?: ListboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the item's DOM element.
     */
    item?: ListboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the emptyMessage's DOM element.
     */
    emptyMessage?: ListboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the hidden first focusable element's DOM element.
     */
    hiddenFirstFocusableEl?: ListboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the hidden filter result's DOM element.
     */
    hiddenFilterResult?: ListboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the hidden selected message's DOM element.
     */
    hiddenSelectedMessage?: ListboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the hidden last focusable element's DOM element.
     */
    hiddenLastFocusableEl?: ListboxPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ListboxPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Listbox component.
 */
export interface ListboxState {
    /**
     * Current id state as a string.
     */
    id: string;
    /**
     * Current focused state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Current filter value state as a string.
     */
    filterValue: string;
    /**
     * Current focused item index as a number.
     * @defaultValue -1
     */
    focusedOptionIndex: number;
}

/**
 * Defines current options in Listbox component.
 */
export interface ListboxContext {
    /**
     * Current selection state of the item as a boolean.
     * @defaultValue false
     */
    selected: boolean;
    /**
     * Current focus state of the item as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Current disabled state of the item as a boolean.
     * @defaultValue false
     */
    disabled: boolean;
}

/**
 * Defines valid properties in Listbox component.
 */
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
    optionLabel?: string | ((data: any) => string) | undefined;
    /**
     * Property name or getter function to use as the value of an option, defaults to the option itself when not defined.
     */
    optionValue?: string | ((data: any) => any) | undefined;
    /**
     * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
     */
    optionDisabled?: string | ((data: any) => boolean) | undefined;
    /**
     * Property name or getter function to use as the label of an option group.
     */
    optionGroupLabel?: string | ((data: any) => string) | undefined;
    /**
     * Property name or getter function that refers to the children options of option group.
     */
    optionGroupChildren?: string | ((data: any) => any[]) | undefined;
    /**
     * Inline style of inner list element.
     */
    listStyle?: string | undefined;
    /**
     * When specified, disables the component.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * A property to uniquely identify an option.
     */
    dataKey?: string | undefined;
    /**
     * When specified, allows selecting multiple values.
     * @defaultValue false
     */
    multiple?: boolean | undefined;
    /**
     * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually.
     * On touch enabled devices, metaKeySelection is turned off automatically.
     * @defaultValue false
     */
    metaKeySelection?: boolean | undefined;
    /**
     * When specified, displays a filter input at header.
     * @defaultValue false
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
     * @defaultValue contains
     */
    filterMatchMode?: 'contains' | 'startsWith' | 'endsWith' | string | undefined;
    /**
     * Fields used when filtering the options, defaults to optionLabel.
     */
    filterFields?: string[] | undefined;
    /**
     * Uses to pass all properties of the HTMLInputElement to the filter input inside the component.
     */
    filterInputProps?: InputHTMLAttributes | undefined;
    /**
     * Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.
     * @type {VirtualScrollerProps}
     */
    virtualScrollerOptions?: VirtualScrollerProps;
    /**
     * Whether to focus on the first visible or selected element.
     * @defaultValue true
     */
    autoOptionFocus?: boolean | undefined;
    /**
     * When enabled, the focused option is selected.
     * @defaultValue false
     */
    selectOnFocus?: boolean | undefined;
    /**
     * Text to be displayed in hidden accessible field when filtering returns any results. Defaults to value from PrimeVue locale configuration.
     * @defaultValue '{0} results are available'
     */
    filterMessage?: string | undefined;
    /**
     * Text to be displayed in hidden accessible field when options are selected. Defaults to value from PrimeVue locale configuration.
     * @defaultValue '{0} items selected'
     */
    selectionMessage?: string | undefined;
    /**
     * Text to be displayed in hidden accessible field when any option is not selected. Defaults to value from PrimeVue locale configuration.
     * @defaultValue No selected item
     */
    emptySelectionMessage?: string | undefined;
    /**
     * Text to display when filtering does not return any results. Defaults to value from PrimeVue locale configuration.
     * @defaultValue No results found
     */
    emptyFilterMessage?: string | undefined;
    /**
     * Text to display when there are no options available. Defaults to value from PrimeVue locale configuration.
     * @defaultValue No results found
     */
    emptyMessage?: string | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | string | undefined;
    /**
     * Icon to display in filter input.
     * @deprecated since v3.27.0. Use 'filtericon' slot.
     */
    filterIcon?: string | undefined;
    /**
     * Defines a string value that labels an interactive element.
     */
    'aria-label'?: string | undefined;
    /**
     * Identifier of the underlying input element.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {ListboxPassThroughOptions}
     */
    pt?: ListboxPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in Listbox component.
 */
export interface ListboxSlots {
    /**
     * Custom header template.
     * @param {Object} scope - header slot's params.
     */
    header(scope: {
        /**
         * Value of the component
         */
        value: any;
        /**
         * Displayed options
         */
        options: any[];
    }): VNode[];
    /**
     * Custom footer template.
     * @param {Object} scope - footer slot's params.
     */
    footer(scope: {
        /**
         * Value of the component
         */
        value: any;
        /**
         * Displayed options
         */
        options: any[];
    }): VNode[];
    /**
     * Custom option template.
     * @param {Object} scope - option slot's params.
     */
    option(scope: {
        /**
         * Option instance
         */
        option: any;
        /**
         * Index of the option
         */
        index: number;
    }): VNode[];
    /**
     * Custom optiongroup template.
     * @param {Object} scope - optiongroup slot's params.
     */
    optiongroup(scope: {
        /**
         * Option instance
         */
        option: any;
        /**
         * Index of the option
         */
        index: number;
    }): VNode[];
    /**
     * Custom emptyfilter template.
     */
    emptyfilter(): VNode[];
    /**
     * Custom empty template.
     */
    empty(): VNode[];
    /**
     * Custom content template.
     * @param {Object} scope - content slot's params.
     */
    content(scope: {
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
         * @return {VirtualScrollerItemOptions}
         */
        getItemOptions(index: number): VirtualScrollerItemOptions;
    }): VNode[];
    /**
     * Custom loader template.
     * @param {Object} scope - loader slot's params.
     */
    loader(scope: {
        /**
         * Options of the loader items for virtualscroller
         */
        options: any[];
    }): VNode[];
    /**
     * Custom filter icon template.
     */
    filtericon(): VNode[];
}

/**
 * Defines valid emits in Listbox component.
 */
export interface ListboxEmits {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any): void;
    /**
     * Callback to invoke on value change.
     * @param {ListboxChangeEvent} event - Custom change event.
     */
    change(event: ListboxChangeEvent): void;
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     */
    focus(event: Event): void;
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     */
    blur(event: Event): void;
    /**
     * Callback to invoke on filter input.
     * @param {ListboxFilterEvent} event - Custom filter event.
     */
    filter(event: ListboxFilterEvent): void;
}

/**
 * **PrimeVue - Listbox**
 *
 * _ListBox is used to select one or more values from a list of items._
 *
 * [Live Demo](https://www.primevue.org/listbox/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Listbox extends ClassComponent<ListboxProps, ListboxSlots, ListboxEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Listbox: GlobalComponentConstructor<Listbox>;
    }
}

export default Listbox;
