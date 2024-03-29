/**
 *
 * Dropdown also known as Select, is used to choose an item from a collection of options.
 *
 * [Live Demo](https://www.primevue.org/dropdown/)
 *
 * @module dropdown
 *
 */
import { HTMLAttributes, InputHTMLAttributes, TransitionProps, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, HintedString, PassThrough } from '../ts-helpers';
import { VirtualScrollerItemOptions, VirtualScrollerPassThroughOptionType, VirtualScrollerProps } from '../virtualscroller';

export declare type DropdownPassThroughOptionType<T = any> = DropdownPassThroughAttributes | ((options: DropdownPassThroughMethodOptions<T>) => DropdownPassThroughAttributes | string) | string | null | undefined;

export declare type DropdownPassThroughTransitionType<T = any> = TransitionProps | ((options: DropdownPassThroughMethodOptions<T>) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface DropdownPassThroughMethodOptions<T> {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: DropdownProps;
    /**
     * Defines current inline state.
     */
    state: DropdownState;
    /**
     * Defines parent instance.
     */
    parent: T | any;
    /**
     * Defines current options.
     */
    context: DropdownContext;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom change event.
 * @see {@link DropdownEmits.change}
 */
export interface DropdownChangeEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Selected option value
     */
    value: any;
}

/**
 * Custom filter event.
 * @see {@link DropdownEmits.filter}
 */
export interface DropdownFilterEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Filter value
     */
    value: any;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link DropdownProps.pt}
 */
export interface DropdownPassThroughOptions<T = any> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the clear icon's DOM element.
     */
    clearIcon?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the trigger' DOM element.
     */
    trigger?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the loading icon's DOM element.
     */
    loadingIcon?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the filter container's DOM element.
     */
    filterContainer?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the filter input's DOM element.
     */
    filterInput?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the filter icon's DOM element.
     */
    filterIcon?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the wrapper's DOM element.
     */
    wrapper?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the VirtualScroller component.
     * @see {@link VirtualScrollerPassThroughOptionType}
     */
    virtualScroller?: VirtualScrollerPassThroughOptionType;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the item group's DOM element.
     */
    itemGroup?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the item group label's DOM element.
     */
    itemGroupLabel?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the item label's DOM element.
     */
    itemLabel?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the check icon's DOM element.
     */
    checkIcon?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the bank icon's DOM element.
     */
    blankIcon?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the empty message's DOM element.
     */
    emptyMessage?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the hidden first focusable element's DOM element.
     */
    hiddenFirstFocusableEl?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the hidden filter result's DOM element.
     */
    hiddenFilterResult?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the hidden empty message's DOM element.
     */
    hiddenEmptyMessage?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the hidden selected message's DOM element.
     */
    hiddenSelectedMessage?: DropdownPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the hidden last focusable element's DOM element.
     */
    hiddenLastFocusableEl?: DropdownPassThroughOptionType<T>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: DropdownPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface DropdownPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Dropdown component.
 */
export interface DropdownState {
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
 * Defines current options in Dropdown component.
 */
export interface DropdownContext {
    /**
     * Current item option.
     */
    option: any;
    /**
     * Current item index.
     */
    index: number;
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
 * Defines valid properties in Dropdown component.
 */
export interface DropdownProps {
    /**
     * Value of the component.
     */
    modelValue?: any;
    /**
     * An array of selectitems to display as the available options.
     */
    options?: any[];
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
     * When present, custom value instead of predefined options can be entered using the editable input field.
     * @defaultValue false
     */
    editable?: boolean | undefined;
    /**
     * Default text to display when no option is selected.
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
     * A property to uniquely identify an option.
     */
    dataKey?: string | undefined;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @defaultValue false
     */
    showClear?: boolean | undefined;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: object | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: string | object | undefined;
    /**
     * Used to pass all properties of the HTMLInputElement/HTMLSpanElement to the focusable input element inside the component.
     */
    inputProps?: InputHTMLAttributes | HTMLAttributes | undefined;
    /**
     * Inline style of the overlay panel.
     */
    panelStyle?: object | undefined;
    /**
     * Style class of the overlay panel.
     */
    panelClass?: string | object | undefined;
    /**
     * Used to pass all properties of the HTMLDivElement to the overlay panel inside the component.
     */
    panelProps?: HTMLAttributes | undefined;
    /**
     * Used to pass all properties of the HTMLInputElement to the filter input inside the component.
     */
    filterInputProps?: InputHTMLAttributes | undefined;
    /**
     * Used to pass all properties of the HTMLElement to the clear icon inside the component.
     * @deprecated since v3.26.0. Use 'pt' peroperty.
     */
    clearIconProps?: HTMLAttributes | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @defaultValue body
     */
    appendTo?: HintedString<'body' | 'self'> | undefined | HTMLElement;
    /**
     * Whether the dropdown is in loading state.
     * @defaultValue false
     */
    loading?: boolean | undefined;
    /**
     * Icon to display in clear button.
     * @deprecated since v3.27.0. Use 'clearicon' slot.
     */
    clearIcon?: string | undefined;
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
     * Clears the filter value when hiding the dropdown.
     * @defaultValue false
     */
    resetFilterOnHide?: boolean;
    /**
     * Clears the filter value when clicking on the clear icon.
     * @defaultValue false
     */
    resetFilterOnClear?: boolean;
    /**
     * Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.
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
     * When enabled, the focused option is selected.
     * @defaultValue false
     */
    selectOnFocus?: boolean | undefined;
    /**
     * When enabled, the focus is placed on the hovered option.
     * @defaultValue true
     */
    focusOnHover?: boolean | undefined;
    /**
     *  Whether the selected option will be add highlight class.
     *  @defaultValue true
     */
    highlightOnSelect?: boolean | undefined;
    /**
     *  Whether the selected option will be shown with a check mark.
     *  @defaultValue false
     */
    checkmark?: boolean | undefined;
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
     * Defines a string value that labels an interactive element.
     */
    ariaLabel?: string | undefined;
    /**
     * Identifier of the underlying input element.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {DropdownPassThroughOptions}
     */
    pt?: PassThrough<DropdownPassThroughOptions>;
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
 * Defines valid slots in Dropdown component.
 */
export interface DropdownSlots {
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
     * Custom indicator template.
     * @deprecated since v3.27.0. Use 'dropdownicon or loadingicon' slots.
     */
    indicator(): VNode[];
    /**
     * Custom header template of panel.
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
     * Custom footer template of panel.
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
     * Custom empty filter template.
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
         * @return {@link VirtualScrollerItemOptions}
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
     * Custom clear icon template.
     * @param {Object} scope - clear icon slot's params.
     */
    clearicon(scope: {
        /**
         * Style class of the clear icon
         */
        class: any;
        /**
         * Clear icon click function.
         * @param {Event} event - Browser event
         * @deprecated since v3.39.0. Use 'clearCallback' property instead.
         */
        onClick: (event: Event) => void;
        /**
         * Clear icon click function.
         * @param {Event} event - Browser event
         */
        clearCallback: (event: Event) => void;
    }): VNode[];
    /**
     * Custom dropdown icon template.
     * @param {Object} scope - dropdown icon slot's params.
     */
    dropdownicon(scope: {
        /**
         * Style class of the dropdown icon
         */
        class: any;
    }): VNode[];
    /**
     * Custom loading icon template.
     * @param {Object} scope - loading icon slot's params.
     */
    loadingicon(scope: {
        /**
         * Style class of the loading icon
         */
        class: any;
    }): VNode[];
    /**
     * Custom filter icon template.
     * @param {Object} scope - filter icon slot's params.
     */
    filtericon(scope: {
        /**
         * Style class of the filter icon
         */
        class: any;
    }): VNode[];
}

/**
 * Defines valid emits in Dropdown component.
 */
export interface DropdownEmits {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any): void;
    /**
     * Callback to invoke on value change.
     * @param {DropdownChangeEvent} event - Custom change event.
     */
    change(event: DropdownChangeEvent): void;
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
     * @param {DropdownFilterEvent} event - Custom filter event.
     */
    filter(event: DropdownFilterEvent): void;
}

/**
 * **PrimeVue - Dropdown**
 *
 * _Dropdown also known as Select, is used to choose an item from a collection of options._
 *
 * [Live Demo](https://www.primevue.org/dropdown/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Dropdown extends ClassComponent<DropdownProps, DropdownSlots, DropdownEmits> {
    /**
     * Shows the overlay.
     * @param {boolean} [isFocus] - Decides whether to focus on the component. @defaultValue false.
     *
     * @memberof Dropdown
     */
    show: (isFocus?: boolean) => void;
    /**
     * Hides the overlay.
     * @param {boolean} [isFocus] - Decides whether to focus on the component. @defaultValue false.
     *
     * @memberof Dropdown
     */
    hide: (isFocus?: boolean) => void;
}

declare module 'vue' {
    export interface GlobalComponents {
        Dropdown: GlobalComponentConstructor<Dropdown>;
    }
}

export default Dropdown;
