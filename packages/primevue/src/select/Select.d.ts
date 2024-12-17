/**
 *
 * Select is used to choose an item from a collection of options.
 *
 * [Live Demo](https://www.primevue.org/select/)
 *
 * @module select
 *
 */
import type { DefineComponent, DesignToken, EmitFn, HintedString, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { IconFieldPassThroughOptions } from 'primevue/iconfield';
import type { InputIconPassThroughOptions } from 'primevue/inputicon';
import type { InputTextPassThroughOptions } from 'primevue/inputtext';
import type { PassThroughOptions } from 'primevue/passthrough';
import type { VirtualScrollerItemOptions, VirtualScrollerPassThroughOptionType, VirtualScrollerProps } from 'primevue/virtualscroller';
import { TransitionProps, VNode } from 'vue';

export declare type SelectPassThroughOptionType<T = any> = SelectPassThroughAttributes | ((options: SelectPassThroughMethodOptions<T>) => SelectPassThroughAttributes | string) | string | null | undefined;

export declare type SelectPassThroughTransitionType<T = any> = TransitionProps | ((options: SelectPassThroughMethodOptions<T>) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface SelectPassThroughMethodOptions<T> {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: SelectProps;
    /**
     * Defines current inline state.
     */
    state: SelectState;
    /**
     * Defines parent instance.
     */
    parent: T | any;
    /**
     * Defines current options.
     */
    context: SelectContext;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom shared passthrough(pt) option method.
 */
export interface SelectSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: SelectProps;
    /**
     * Defines current inline state.
     */
    state: SelectState;
}

/**
 * Custom change event.
 * @see {@link SelectEmitsOptions.change}
 */
export interface SelectChangeEvent {
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
 * @see {@link SelectEmitsOptions.filter}
 */
export interface SelectFilterEvent {
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
 * @see {@link SelectProps.pt}
 */
export interface SelectPassThroughOptions<T = any> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the clear icon's DOM element.
     */
    clearIcon?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the dropdown' DOM element.
     */
    dropdown?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the loading icon's DOM element.
     */
    loadingIcon?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the overlay's DOM element.
     */
    overlay?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the IconField component.
     * @see {@link IconFieldPassThroughOptions}
     */
    pcFilterContainer?: IconFieldPassThroughOptions<SelectSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the InputText component.
     * @see {@link InputTextPassThroughOptions}
     */
    pcFilter?: InputTextPassThroughOptions<SelectSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the InputIcon component.
     * @see {@link InputIconPassThroughOptions}
     */
    pcFilterIconContainer?: InputIconPassThroughOptions<SelectSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the filter icon's DOM element.
     */
    filterIcon?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the list container's DOM element.
     */
    listContainer?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the VirtualScroller component.
     * @see {@link VirtualScrollerPassThroughOptionType}
     */
    virtualScroller?: VirtualScrollerPassThroughOptionType;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the option group's DOM element.
     */
    optionGroup?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the option group label's DOM element.
     */
    optionGroupLabel?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the option's DOM element.
     */
    option?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the option label's DOM element.
     */
    optionLabel?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the option check icon's DOM element.
     */
    optionCheckIcon?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the option blank icon's DOM element.
     */
    optionBlankIcon?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the empty message's DOM element.
     */
    emptyMessage?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the hidden first focusable element's DOM element.
     */
    hiddenFirstFocusableEl?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the hidden filter result's DOM element.
     */
    hiddenFilterResult?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the hidden empty message's DOM element.
     */
    hiddenEmptyMessage?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the hidden selected message's DOM element.
     */
    hiddenSelectedMessage?: SelectPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the hidden last focusable element's DOM element.
     */
    hiddenLastFocusableEl?: SelectPassThroughOptionType<T>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: SelectPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface SelectPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Select component.
 */
export interface SelectState {
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
 * Defines current options in Select component.
 */
export interface SelectContext {
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
 * Defines valid properties in Select component.
 */
export interface SelectProps {
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
     * @defaultValue 14rem
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
     * A property to uniquely identify an option.
     */
    dataKey?: string | undefined;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @defaultValue false
     */
    showClear?: boolean | undefined;
    /**
     * Spans 100% width of the container when enabled.
     * @defaultValue null
     */
    fluid?: boolean | undefined;
    /**
     * @deprecated since v4.0. Use 'labelId' instead.
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * @deprecated since v4.0. Use 'labelStyle' instead.
     * Inline style of the input field.
     */
    inputStyle?: object | undefined;
    /**
     * @deprecated since v4.0. Use 'labelClass' instead.
     * Style class of the input field.
     */
    inputClass?: string | object | undefined;
    /**
     * Identifier of the underlying label element.
     */
    labelId?: string | undefined;
    /**
     * Inline style of the label field.
     */
    labelStyle?: object | undefined;
    /**
     * Style class of the label field.
     */
    labelClass?: string | object | undefined;
    /**
     * @deprecated since v4.0. Use 'overlayStyle' instead.
     * Inline style of the overlay panel.
     */
    panelStyle?: object | undefined;
    /**
     * @deprecated since v4.0. Use 'overlayClass' instead.
     * Style class of the overlay panel.
     */
    panelClass?: string | object | undefined;
    /**
     * Inline style of the overlay.
     */
    overlayStyle?: object | undefined;
    /**
     * Style class of the overlay.
     */
    overlayClass?: string | object | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @defaultValue body
     */
    appendTo?: HintedString<'body' | 'self'> | undefined | HTMLElement;
    /**
     * Whether the select is in loading state.
     * @defaultValue false
     */
    loading?: boolean | undefined;
    /**
     * Icon to display in clear button.
     */
    clearIcon?: string | undefined;
    /**
     * Icon to display in the select.
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
     * Clears the filter value when hiding the select.
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
     * @defaultValue No available options
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
     * @type {SelectPassThroughOptions}
     */
    pt?: PassThrough<SelectPassThroughOptions>;
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
 * Defines valid slots in Select component.
 */
export interface SelectSlots {
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
         * Clear icon click function.
         * @param {Event} event - Browser event
         */
        clearCallback: (event: Event) => void;
    }): VNode[];
    /**
     * Custom select icon template.
     * @param {Object} scope - select icon slot's params.
     */
    dropdownicon(scope: {
        /**
         * Style class of the select icon
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
 * Defines valid emits in Select component.
 */
export interface SelectEmitsOptions {
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
     * @param {SelectChangeEvent} event - Custom change event.
     */
    change(event: SelectChangeEvent): void;
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
     * @param {SelectFilterEvent} event - Custom filter event.
     */
    filter(event: SelectFilterEvent): void;
}

export declare type SelectEmits = EmitFn<SelectEmitsOptions>;

export interface SelectMethods {
    /**
     * Shows the overlay.
     * @param {boolean} [isFocus] - Decides whether to focus on the component.
     * @defaultValue false.
     *
     * @memberof Select
     */
    show: (isFocus?: boolean) => void;
    /**
     * Hides the overlay.
     * @param {boolean} [isFocus] - Decides whether to focus on the component.
     * @defaultValue false.
     *
     * @memberof Select
     */
    hide: (isFocus?: boolean) => void;
}

/**
 * **PrimeVue - Select**
 *
 * _Select is used to choose an item from a collection of options._
 *
 * [Live Demo](https://www.primevue.org/select/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Select: DefineComponent<SelectProps, SelectSlots, SelectEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Select: DefineComponent<SelectProps, SelectSlots, SelectEmits>;
    }
}

export default Select;
