/**
 *
 * MultiSelect is used to select multiple items from a collection.
 *
 * [Live Demo](https://www.primevue.org/multiselect/)
 *
 * @module multiselect
 *
 */
import { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, TransitionProps, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough, HintedString } from '../ts-helpers';
import { VirtualScrollerItemOptions, VirtualScrollerPassThroughOptionType, VirtualScrollerProps } from '../virtualscroller';

export declare type MultiSelectPassThroughOptionType = MultiSelectPassThroughAttributes | ((options: MultiSelectPassThroughMethodOptions) => MultiSelectPassThroughAttributes | string) | string | null | undefined;

export declare type MultiSelectPassThroughTransitionType = TransitionProps | ((options: MultiSelectPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface MultiSelectPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: MultiSelectProps;
    /**
     * Defines current inline state.
     */
    state: MultiSelectState;
    /**
     * Defines current options.
     */
    context: MultiSelectContext;
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
 * Custom change event.
 * @see {@link MultiSelectEmits.change}
 */
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

/**
 * Custom all change event.
 * @see {@link MultiSelectEmits['selectall-change']}
 */
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

/**
 * Custom filter event
 * @see {@link MultiSelectEmits.filter}
 */
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

/**
 * Custom passthrough(pt) options.
 * @see {@link MultiSelectProps.pt}
 */
export interface MultiSelectPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the label container's DOM element.
     */
    labelContainer?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the token's DOM element.
     */
    token?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the token label's DOM element.
     */
    tokenLabel?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the remove token icon's DOM element.
     */
    removeTokenIcon?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the trigger's DOM element.
     */
    trigger?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the trigger icon's DOM element.
     */
    triggerIcon?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the dropdown icon's DOM element.
     */
    dropdownIcon?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the header checkbox's DOM element.
     */
    headerCheckbox?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the filter container's DOM element.
     */
    filterContainer?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the filter input's DOM element.
     */
    filterInput?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the filter icon's DOM element.
     */
    filterIcon?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the close button's DOM element.
     */
    closeButton?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the close icon's DOM element.
     */
    closeIcon?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the wrapper's DOM element.
     */
    wrapper?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the VirtualScroller component.
     * @see {@link VirtualScrollerPassThroughOptionType}
     */
    virtualScroller?: VirtualScrollerPassThroughOptionType;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the item group's DOM element.
     */
    itemGroup?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the item checkbox's DOM element.
     */
    itemCheckbox?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the option's DOM element.
     */
    option?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the emptyMessage's DOM element.
     */
    emptyMessage?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the hidden input's DOM element.
     */
    hiddenInput?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the hidden first focusable element's DOM element.
     */
    hiddenFirstFocusableEl?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the hidden filter result's DOM element.
     */
    hiddenFilterResult?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the hidden selected message's DOM element.
     */
    hiddenSelectedMessage?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the hidden last focusable element's DOM element.
     */
    hiddenLastFocusableEl?: MultiSelectPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: MultiSelectPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface MultiSelectPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in MultiSelect component.
 */
export interface MultiSelectState {
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
     * Current focused item index as a number.
     * @defaultvalue -1
     */
    focusedOptionIndex: number;
    /**
     * Current filter value state as a string.
     */
    filterValue: string;
    /**
     * Current overlay visible state as a boolean.
     * @defaultValue false
     */
    overlayVisible: boolean;
}

/**
 * Defines current options in MultiSelect component.
 */
export interface MultiSelectContext {
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
 * Defines valid properties in MultiSelect component.
 */
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
     * Height of the viewport, a scrollbar is defined if height of list exceeds this value.
     * @defaultValue 200px
     */
    scrollHeight?: string | undefined;
    /**
     * Label to display when there are no selections.
     */
    placeholder?: string | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     */
    invalid?: boolean | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Specifies the input variant of the component.
     * @defaultValue outlined
     */
    variant?: 'outlined' | 'filled' | undefined;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Used to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: InputHTMLAttributes | undefined;
    /**
     * Inline style of the overlay panel.
     */
    panelStyle?: any;
    /**
     * Style class of the overlay panel.
     */
    panelClass?: any;
    /**
     * Used to pass all properties of the HTMLDivElement to the overlay panel.
     */
    panelProps?: HTMLAttributes | undefined;
    /**
     * Used to pass all properties of the HTMLInputElement to the filter input inside the overlay panel.
     */
    filterInputProps?: InputHTMLAttributes | undefined;
    /**
     * Used to pass all properties of the HTMLButtonElement to the clear button inside the overlay panel.
     */
    closeButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * A property to uniquely identify an option.
     */
    dataKey?: string | undefined;
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
    filterMatchMode?: HintedString<'contains' | 'startsWith' | 'endsWith'> | undefined;
    /**
     * Fields used when filtering the options, defaults to optionLabel.
     */
    filterFields?: string[] | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are 'body' for document body and 'self' for the element itself.
     * @defaultValue body
     */
    appendTo?: HintedString<'body' | 'self'> | undefined | HTMLElement;
    /**
     * Defines how the selected items are displayed.
     * @defaultValue comma
     */
    display?: 'comma' | 'chip' | undefined;
    /**
     * Label to display after exceeding max selected labels.
     * @defaultValue '{0} items selected'
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
     * @defaultValue true
     */
    showToggleAll?: boolean | undefined;
    /**
     * Whether the multiselect is in loading state.
     * @defaultValue false
     */
    loading?: boolean | undefined;
    /**
     * Icon to display in the checkboxes.
     * @deprecated since v3.27.0. Use 'checkboxicon' slot.
     */
    checkboxIcon?: string | undefined;
    /**
     * Icon to display in the dropdown close button.
     * @deprecated since v3.27.0. Use 'closeicon' slot.
     */
    closeIcon?: string | undefined;
    /**
     * Icon to display in the dropdown.
     * @deprecated since v3.27.0. Use 'dropdownicon' slot.
     */
    dropdownIcon?: string | undefined;
    /**
     * Icon to display in filter input.
     * @deprecated since v3.27.0. Use 'filtericon' slot.
     */
    filterIcon?: string | undefined;
    /**
     * Icon to display in loading state.
     * @deprecated since v3.27.0. Use 'loadingicon' slot.
     */
    loadingIcon?: string | undefined;
    /**
     * Icon to display in chip remove action.
     * @deprecated since v3.27.0. Use 'removetokenicon' slot.
     */
    removeTokenIcon?: string | undefined;
    /**
     * Whether all data is selected.
     * @defaultValue false
     */
    selectAll?: boolean | undefined;
    /**
     * Clears the filter value when hiding the dropdown.
     * @defaultValue false
     */
    resetFilterOnHide?: boolean | undefined;
    /**
     * Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.
     * @type {VirtualScrollerProps}
     */
    virtualScrollerOptions?: VirtualScrollerProps;
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
     * @defaultValue false
     */
    autoOptionFocus?: boolean | undefined;
    /**
     * Whether to focus on the filter element when the overlay panel is shown.
     * @defaultValue false
     */
    autoFilterFocus?: boolean | undefined;
    /**
     * When enabled, the focus is placed on the hovered option.
     * @defaultValue true
     */
    focusOnHover?: boolean | undefined;
    /**
     *  Highlights automatically the first item.
     *  @defaultValue false
     */
    highlightOnSelect?: boolean | undefined;
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
     * @defaultValue No results found'
     */
    emptyMessage?: string | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | string | undefined;
    /**
     * Defines a string value that labels an interactive element.
     */
    ariaLabel?: string | undefined;
    /**
     * Identifier of the underlying input element.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {MultiSelectPassThroughOptions}
     */
    pt?: PassThrough<MultiSelectPassThroughOptions>;
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
 * Defines valid slots in MultiSelect component.
 */
export interface MultiSelectSlots {
    /**
     * Custom value template.
     * @param {Object} scope - value slot's params.
     */
    value(scope: {
        /**
         * Value of the component
         */
        value: any;
        /**
         * Placeholder prop value
         */
        placeholder: string;
    }): VNode[];
    /**
     * Custom chip template.
     * @param {Object} scope - chip slot's params.
     */
    chip(scope: {
        /**
         * A value in the selection
         */
        value: any;
    }): VNode[];
    /**
     * Custom indicator template.
     * @deprecated since v3.27.0. Use 'loadingicon and dropdownicon' slot.
     */
    indicator(): VNode[];
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
     * Custom option group template.
     * @param {Object} scope - option group slot's params.
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
        contentRef: (el: any) => void;
        /**
         * Options of the items
         * @param {number} index - Rendered index
         * @return {VirtualScrollerItemOptions}
         */
        getItemOptions: (index: number) => VirtualScrollerItemOptions;
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
     * Custom remove token icon template.
     * @param {Object} scope - removetokenicon slot's params.
     */
    removetokenicon(scope: {
        /**
         * Style class of the loading icon.
         */
        class: string;
        /**
         * Item of the token.
         */
        item: any;
        /**
         * Remove token icon function.
         * @param {Event} event - Browser event
         * @param {any} item - Item
         * @deprecated since v3.39.0. Use 'removeCallback' property instead.
         */
        onClick: (event: Event, item: any) => void;
        /**
         * Remove token icon function.
         * @param {Event} event - Browser event
         * @param {any} item - Item
         */
        removeCallback: (event: Event, item: any) => void;
    }): VNode[];
    /**
     * Custom header checkbox icon template.
     * @param {Object} scope - header checkbox icon slot's params.
     */
    headercheckboxicon(scope: {
        /**
         * Options of the loader items for virtualscroller
         */
        allSelected: boolean;
        /**
         * Style class of the loading icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom filter icon template.
     * @param {Object} scope - filtericon slot's params.
     */
    filtericon(scope: {
        /**
         * Style class of the loading icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom close icon template.
     * @param {Object} scope - closeicon slot's params.
     */
    closeicon(scope: {
        /**
         * Style class of the loading icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom item checkbox icon template.
     * @param {Object} scope - itemcheckboxicon slot's params.
     */
    itemcheckboxicon(scope: {
        /**
         * Options of the loader items for virtualscroller
         */
        selected: boolean;
        /**
         * Style class of the loading icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom loading icon template.
     * @param {Object} scope - loading icon slot's params.
     */
    loadingicon(scope: {
        /**
         * Style class of the loading icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom dropdown icon template.
     * @param {Object} scope - dropdownicon slot's params.
     */
    dropdownicon(scope: {
        /**
         * Style class of the loading icon.
         */
        class: string;
    }): VNode[];
}

/**
 * Defines valid emits in MultiSelect component.
 */
export interface MultiSelectEmits {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any): void;
    /**
     * Callback to invoke on value change.
     * @param {MultiSelectChangeEvent} event - Custom change event.
     */
    change(event: MultiSelectChangeEvent): void;
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
     * Callback to invoke before the overlay is shown.
     */
    'before-show'(): void;
    /**
     * Callback to invoke before the overlay is hidden.
     */
    'before-hide'(): void;
    /**
     * Callback to invoke when the overlay is shown.
     */
    show(): void;
    /**
     * Callback to invoke when the overlay is hidden.
     */
    hide(): void;
    /**
     * Callback to invoke on filter input.
     * @param {MultiSelectFilterEvent} event - Custom filter event.
     */
    filter(event: MultiSelectFilterEvent): void;
    /**
     * Callback to invoke when all data is selected.
     * @param {MultiSelectAllChangeEvent} event - Custom select all change event.
     */
    'selectall-change'(event: MultiSelectAllChangeEvent): void;
}

/**
 * **PrimeVue - MultiSelect**
 *
 * _MultiSelect is used to select multiple items from a collection._
 *
 * [Live Demo](https://www.primevue.org/multiselect/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class MultiSelect extends ClassComponent<MultiSelectProps, MultiSelectSlots, MultiSelectEmits> {
    /**
     * Shows the overlay.
     * @param {boolean} [isFocus] - Decides whether to focus on the component. Default value is false.
     *
     * @memberof MultiSelect
     */
    show(isFocus?: boolean): void;
    /**
     * Hides the overlay.
     * @param {boolean} [isFocus] - Decides whether to focus on the component. Default value is false.
     *
     * @memberof MultiSelect
     */
    hide(isFocus?: boolean): void;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        MultiSelect: GlobalComponentConstructor<MultiSelect>;
    }
}

export default MultiSelect;
