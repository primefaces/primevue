/**
 *
 * MultiSelect is used to select multiple items from a collection.
 *
 * [Live Demo](https://www.primevue.org/multiselect/)
 *
 * @module multiselect
 *
 */
import type { DefineComponent, DesignToken, EmitFn, HintedString, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { ChipPassThroughOptions } from 'primevue/chip';
import type { IconFieldPassThroughOptions } from 'primevue/iconfield';
import type { InputIconPassThroughOptions } from 'primevue/inputicon';
import type { InputTextPassThroughOptions } from 'primevue/inputtext';
import type { PassThroughOptions } from 'primevue/passthrough';
import type { VirtualScrollerItemOptions, VirtualScrollerPassThroughOptionType, VirtualScrollerProps } from 'primevue/virtualscroller';
import { TransitionProps, VNode } from 'vue';

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
 * Custom shared passthrough(pt) option method.
 */
export interface MultiSelectSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: MultiSelectProps;
    /**
     * Defines current inline state.
     */
    state: MultiSelectState;
}

/**
 * Custom change event.
 * @see {@link MultiSelectEmitsOptions.change}
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
 * @see {@link MultiSelectEmitsOptions['selectall-change']}
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
 * @see {@link MultiSelectEmitsOptions.filter}
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
     * Used to pass attributes to the label's DOM element.
     */
    clearIcon?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the chip's DOM element.
     */
    chipItem?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the Chip.
     * @see {@link ChipPassThroughOptions}
     */
    pcChip?: ChipPassThroughOptions<MultiSelectSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the dropdown's DOM element.
     */
    dropdown?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the loading icon's DOM element.
     */
    loadingIcon?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the dropdown icon's DOM element.
     */
    dropdownIcon?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the overlay's DOM element.
     */
    overlay?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the header checkbox's DOM element.
     */
    pcHeaderCheckbox?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the IconField component.
     * @see {@link IconFieldPassThroughOptions}
     */
    pcFilterContainer?: IconFieldPassThroughOptions<MultiSelectSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the InputText component.
     * @see {@link InputTextPassThroughOptions}
     */
    pcFilter?: InputTextPassThroughOptions<MultiSelectSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the InputIcon component.
     * @see {@link InputIconPassThroughOptions}
     */
    pcFilterIconContainer?: InputIconPassThroughOptions<MultiSelectSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the filter icon's DOM element.
     */
    filterIcon?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the list container's DOM element.
     */
    listContainer?: MultiSelectPassThroughOptionType;
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
     * Used to pass attributes to the option group's DOM element.
     */
    optionGroup?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the option's DOM element.
     */
    option?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the option label's DOM element.
     */
    optionLabel?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the option checkbox's DOM element.
     */
    pcOptionCheckbox?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the emptyMessage's DOM element.
     */
    emptyMessage?: MultiSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the hidden input container's DOM element.
     */
    hiddenInputContainer?: MultiSelectPassThroughOptionType;
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
     * @defaultValue -1
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
     * The default value for the input when not controlled by `modelValue`.
     */
    defaultValue?: any;
    /**
     * The name attribute for the element, typically used in form submissions.
     */
    name?: string | undefined;
    /**
     * An array of select items to display as the available options.
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
     * @defaultValue 14rem
     */
    scrollHeight?: string | undefined;
    /**
     * Label to display when there are no selections.
     */
    placeholder?: string | undefined;
    /**
     * Defines the size of the component.
     */
    size?: 'small' | 'large' | undefined;
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
     * Spans 100% width of the container when enabled.
     * @defaultValue null
     */
    fluid?: boolean | undefined;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * @deprecated since v4.0. Use 'overlayStyle' instead.
     * Inline style of the overlay.
     */
    panelStyle?: any;
    /**
     * @deprecated since v4.0. Use 'overlayClass' instead.
     * Style class of the overlay.
     */
    panelClass?: any;
    /**
     * Inline style of the overlay.
     */
    overlayStyle?: any;
    /**
     * Style class of the overlay.
     */
    overlayClass?: any;
    /**
     * A property to uniquely identify an option.
     */
    dataKey?: string | undefined;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @defaultValue false
     */
    showClear?: boolean | undefined;
    /**
     * Icon to display in clear button.
     */
    clearIcon?: string | undefined;
    /**
     * Clears the filter value when clicking on the clear icon.
     * @defaultValue false
     */
    resetFilterOnClear?: boolean;
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
     * @defaultValue null
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
     */
    checkboxIcon?: string | undefined;
    /**
     * Icon to display in the dropdown.
     */
    dropdownIcon?: string | undefined;
    /**
     * Icon to display in filter input.
     */
    filterIcon?: string | undefined;
    /**
     * Icon to display in loading state.
     */
    loadingIcon?: string | undefined;
    /**
     * Icon to display in chip remove action.
     */
    removeTokenIcon?: string | undefined;
    /**
     * Icon to display in chip remove action.
     */
    chipIcon?: string | undefined;
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
     * @defaultValue null
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
     * @defaultValue No available options'
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
     * Form control object, typically used for handling validation and form state.
     */
    formControl?: Record<string, any> | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
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
         * Selection state
         */
        selected: boolean;
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
     * @deprecated since v4.0. Use 'chipicon' slot instead.
     * Custom chip icon template.
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
         * Chip icon function.
         * @param {Event} event - Browser event
         * @param {any} item - Item
         */
        removeCallback: (event: Event, item: any) => void;
    }): VNode[];
    /**
     * Custom chip icon template.
     * @param {Object} scope - chipicon slot's params.
     */
    chipicon(scope: {
        /**
         * Style class of the loading icon.
         */
        class: string;
        /**
         * Item of the token.
         */
        item: any;
        /**
         * Chip icon function.
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
     * Custom clear icon template.
     * @param {Object} scope - clear icon slot's params.
     */
    clearicon(scope: {
        /**
         * Clear icon click function.
         * @param {Event} event - Browser event
         */
        clearCallback: (event: Event) => void;
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
export interface MultiSelectEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any): void;
    /**
     * Emitted when the value changes in uncontrolled mode.
     * @param {*} value - New value.
     */
    'value-change'(value: any): void;
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

export declare type MultiSelectEmits = EmitFn<MultiSelectEmitsOptions>;

export interface MultiSelectMethods {
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
declare const MultiSelect: DefineComponent<MultiSelectProps, MultiSelectSlots, MultiSelectEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        MultiSelect: DefineComponent<MultiSelectProps, MultiSelectSlots, MultiSelectEmits>;
    }
}

export default MultiSelect;
