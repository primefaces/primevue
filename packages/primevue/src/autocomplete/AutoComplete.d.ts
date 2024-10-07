/**
 *
 * AutoComplete is an input component that provides real-time suggestions while being typed.
 *
 * [Live Demo](https://www.primevue.org/autocomplete/)
 *
 * @module autocomplete
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, HintedString, Nullable, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { ChipPassThroughOptions } from 'primevue/chip';
import type { InputTextPassThroughOptions } from 'primevue/inputtext';
import type { PassThroughOptions } from 'primevue/passthrough';
import type { VirtualScrollerItemOptions, VirtualScrollerPassThroughOptionType, VirtualScrollerProps } from 'primevue/virtualscroller';
import { TransitionProps, VNode } from 'vue';

export declare type AutoCompletePassThroughOptionType = AutoCompletePassThroughAttributes | ((options: AutoCompletePassThroughMethodOptions) => AutoCompletePassThroughAttributes | string) | string | null | undefined;

export declare type AutoCompletePassThroughTransitionType = TransitionProps | ((options: AutoCompletePassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface AutoCompletePassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: AutoCompleteProps;
    /**
     * Defines current inline state.
     */
    state: AutoCompleteState;
    /**
     * Defines current options.
     */
    context: AutoCompleteContext;
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
export interface AutoCompleteSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: AutoCompleteProps;
    /**
     * Defines current inline state.
     */
    state: AutoCompleteState;
}

/**
 * Custom change event.
 * @see {@link AutoCompleteEmitsOptions.change}
 */
export interface AutoCompleteChangeEvent {
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
 * Custom item select event.
 * @see {@link AutoCompleteEmitsOptions['item-select']}
 */
export interface AutoCompleteOptionSelectEvent {
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
 * Custom item unselect event.
 * @see {@link AutoCompleteEmitsOptions['item-unselect']}
 * @extends AutoCompleteOptionSelectEvent
 */
export interface AutoCompleteOptionUnselectEvent extends AutoCompleteOptionSelectEvent {}

/**
 * Custom dropdown click event.
 * @see {@link AutoCompleteEmitsOptions['dropdown-click']}
 */
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

/**
 * Custom complete event.
 * @see {@link AutoCompleteEmitsOptions.complete}
 */
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

/**
 * Custom passthrough(pt) options.
 * @see {@link AutoCompleteProps.pt}
 */
export interface AutoCompletePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AutoCompletePassThroughOptionType;
    /**
     * Used to pass attributes to the InputText component.
     * @see {@link InputTextPassThroughOptions}
     */
    pcInputText?: InputTextPassThroughOptions<AutoCompleteSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the input multiple's DOM element.
     */
    inputMultiple?: AutoCompletePassThroughOptionType;
    /**
     * Used to pass attributes to the chip's DOM element.
     */
    chipItem?: AutoCompletePassThroughOptionType;
    /**
     * Used to pass attributes to the Chip.
     * @see {@link ChipPassThroughOptions}
     */
    pcChip?: ChipPassThroughOptions<AutoCompleteSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the chip icon's DOM element.
     */
    chipIcon?: AutoCompletePassThroughOptionType;
    /**
     * Used to pass attributes to the input chip's DOM element.
     */
    inputChip?: AutoCompletePassThroughOptionType;
    /**
     * Used to pass attributes to the loader's DOM element.
     */
    loader?: AutoCompletePassThroughOptionType;
    /**
     * Used to pass attributes to the dropdown's DOM element.
     */
    dropdown?: AutoCompletePassThroughOptionType;
    /**
     * Used to pass attributes to the dropdown icon's DOM element.
     */
    dropdownIcon?: AutoCompletePassThroughOptionType;
    /**
     * Used to pass attributes to the overlay's DOM element.
     */
    overlay?: AutoCompletePassThroughOptionType;
    /**
     * Used to pass attributes to the VirtualScroller component.
     * @see {@link VirtualScrollerPassThroughOptionType}
     */
    virtualScroller?: VirtualScrollerPassThroughOptionType;
    /**
     * Used to pass attributes to the list container's DOM element.
     */
    listContainer?: AutoCompletePassThroughOptionType;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: AutoCompletePassThroughOptionType;
    /**
     * Used to pass attributes to the option group's DOM element.
     */
    optionGroup?: AutoCompletePassThroughOptionType;
    /**
     * Used to pass attributes to the option's DOM element.
     */
    option?: AutoCompletePassThroughOptionType;
    /**
     * Used to pass attributes to the empty message's DOM element.
     */
    emptyMessage?: AutoCompletePassThroughOptionType;
    /**
     * Used to pass attributes to the search result message's DOM element.
     */
    searchResultMessage?: AutoCompletePassThroughOptionType;
    /**
     * Used to pass attributes to the selected message's DOM element.
     */
    selectedMessage?: AutoCompletePassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: AutoCompletePassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface AutoCompletePassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in AutoComplete component.
 */
export interface AutoCompleteState {
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
     * Current focused item index as a number.
     * @defaultValue -1
     */
    focusedMultipleOptionIndex: number;
    /**
     * Current overlay visible state as a boolean.
     * @defaultValue false
     */
    overlayVisible: boolean;
    /**
     * Current search state as a boolean.
     * @defaultValue false
     */
    searching: boolean;
    /**
     * Value of the token input as a string.
     * @defaultValue null
     */
    multipleInputValue: Nullable<string>;
}

/**
 * Defines current options in AutoComplete component.
 */
export interface AutoCompleteContext {
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
 * Defines valid properties in AutoComplete component.
 */
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
     * Property name or getter function to use as the label of an option.
     */
    optionLabel?: string | ((data: any) => string) | undefined;
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
     * whether typeahead is active or not.
     * @defaultValue true
     */
    typeahead?: boolean | undefined;
    /**
     * Maximum height of the suggestions overlay.
     * @defaultValue 14rem
     */
    scrollHeight?: string | undefined;
    /**
     * Displays a button next to the input field when enabled.
     * @defaultValue false
     */
    dropdown?: boolean | undefined;
    /**
     * Specifies the behavior dropdown button. Default 'blank' mode sends an empty string and 'current' mode sends the input value.
     * @defaultValue blank
     */
    dropdownMode?: 'blank' | 'current' | undefined;
    /**
     * Specifies if multiple values can be selected.
     * @defaultValue false
     */
    multiple?: boolean | undefined;
    /**
     * Default text to display when no option is selected.
     */
    placeholder?: string | undefined;
    /**
     * Whether the autocomplete is in loading state.
     * @defaultValue false
     */
    loading?: boolean | undefined;
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
     * Minimum number of characters to initiate a search.
     * @defaultValue 1
     */
    minLength?: number | undefined;
    /**
     * Delay between keystrokes to wait before sending a query.
     * @defaultValue 300
     */
    delay?: number | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * Special keywords are 'body' for document body and 'self' for the element itself.
     * @defaultValue body
     */
    appendTo?: HintedString<'body' | 'self'> | undefined | HTMLElement;
    /**
     * When present, autocomplete clears the manual input if it does not match of the suggestions to force only accepting values from the suggestions.
     * @defaultValue false
     */
    forceSelection?: boolean | undefined;
    /**
     * Whether to run a query when input receives focus.
     * @defaultValue false
     */
    completeOnFocus?: boolean | undefined;
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
     * Inline style of the overlay.
     */
    panelStyle?: object | undefined;
    /**
     * Style class of the overlay.
     */
    panelClass?: string | object | undefined;
    /**
     * Inline style of the overlay overlay.
     */
    overlayStyle?: object | undefined;
    /**
     * Style class of the overlay overlay.
     */
    overlayClass?: string | object | undefined;
    /**
     * Icon to display in the dropdown.
     */
    dropdownIcon?: string | undefined;
    /**
     * Style class of the dropdown button.
     */
    dropdownClass?: string | object | undefined;
    /**
     * Icon to display in loading state.
     * @deprecated since v4.0. Use 'loader' slot.
     */
    loadingIcon?: string | undefined;
    /**
     * Icon to display in loading state.
     */
    loader?: string | undefined;
    /**
     * Icon to display in chip remove action.
     */
    removeTokenIcon?: string | undefined;
    /**
     * Icon to display in chip remove action.
     */
    chipIcon?: string | undefined;
    /**
     * Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.
     * @type {VirtualScrollerProps}
     */
    virtualScrollerOptions?: VirtualScrollerProps;
    /**
     * Whether to focus on the first visible or selected element when the overlay is shown.
     * @defaultValue false
     */
    autoOptionFocus?: boolean | undefined;
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
     * Locale to use in searching. The default locale is the host environment's current locale.
     */
    searchLocale?: string | undefined;
    /**
     * Text to be displayed in hidden accessible field when filtering returns any results. Defaults to value from PrimeVue locale configuration.
     * @defaultValue '{0} results are available'
     */
    searchMessage?: string | undefined;
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
    emptySearchMessage?: string | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | string | undefined;
    /**
     * Spans 100% width of the container when enabled.
     * @defaultValue null
     */
    fluid?: boolean | undefined;
    /**
     * Defines a string value that labels an interactive element.
     */
    ariaLabel?: string | undefined;
    /**
     * Identifier of the underlying input element.
     */
    ariaLabelledby?: string | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {AutoCompletePassThroughOptions}
     */
    pt?: PassThrough<AutoCompletePassThroughOptions>;
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
 * Defines valid slots in AutoComplete component.
 * @todo Next release we should complete types for all slots
 */
export interface AutoCompleteSlots {
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
        suggestions: any[];
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
        suggestions: any[];
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
     * Custom empty template when there is no data to display.
     */
    empty(): VNode[];
    /**
     * Custom dropdown icon template.
     */
    dropdownicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * @deprecated since v4.0. Use 'chipicon' slot instead.
     * Custom chip icon template in multiple mode.
     * @param {Object} scope - chip icon slot's params.
     */
    removetokenicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
        /**
         * Index of the token.
         */
        index: number;
        /**
         * Remove token icon function.
         * @param {Event} event - Browser event
         */
        removeCallback: (event: Event, index: number) => void;
    }): VNode[];
    /**
     * Custom chip icon template in multiple mode.
     * @param {Object} scope - chip icon slot's params.
     */
    chipicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
        /**
         * Index of the token.
         */
        index: number;
        /**
         * Remove token icon function.
         * @param {Event} event - Browser event
         */
        removeCallback: (event: Event, index: number) => void;
    }): VNode[];
    /**
     * @deprecated since v4.0. Use 'loader' slot instead.
     * Custom loader template.
     */
    loadingicon(scope: {
        /**
         * Style class of the loader.
         */
        class: string;
    }): VNode[];
    /**
     * Custom loader template.
     */
    loader(scope: {
        /**
         * Style class of the loader.
         */
        class: string;
    }): VNode[];
    /**
     * @deprecated since v4.0. Use 'dropdown' slot instead.
     * Custom dropdown template.
     */
    dropdownbutton(scope: {
        /**
         * Toggle function.
         * @param {Event} event - Browser event
         */
        toggleCallback: (event: Event) => void;
    }): VNode[];
    /**
     * Custom dropdown template.
     */
    dropdown(scope: {
        /**
         * Toggle function.
         * @param {Event} event - Browser event
         */
        toggleCallback: (event: Event) => void;
    }): VNode[];
}

/**
 * Defines valid emits in AutoComplete component.
 */
export interface AutoCompleteEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any): void;
    /**
     * Callback to invoke on value change.
     * @param {AutoCompleteChangeEvent} event - Custom change event.
     */
    change(event: AutoCompleteChangeEvent): void;
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
     * @deprecated since v4.0. Use 'option-select' emit.
     * Callback to invoke when a suggestion is selected.
     * @param {AutoCompleteOptionSelectEvent} event - Custom option select event.
     */
    'item-select'(event: AutoCompleteOptionSelectEvent): void;
    /**
     * @deprecated since v4.0. Use 'option-unselect' emit.
     * Callback to invoke when a selected value is removed.
     * @param {AutoCompleteOptionUnselectEvent} event - Custom option unselect event.
     */
    'item-unselect'(event: AutoCompleteOptionUnselectEvent): void;
    /**
     * Callback to invoke when a suggestion is selected.
     * @param {AutoCompleteOptionSelectEvent} event - Custom option select event.
     */
    'option-select'(event: AutoCompleteOptionSelectEvent): void;
    /**
     * Callback to invoke when a selected value is removed.
     * @param {AutoCompleteOptionUnselectEvent} event - Custom option unselect event.
     */
    'option-unselect'(event: AutoCompleteOptionUnselectEvent): void;
    /**
     * Callback to invoke to when dropdown button is clicked.
     * @param {AutoCompleteDropdownClickEvent} event - Custom dropdown click event.
     */
    'dropdown-click'(event: AutoCompleteDropdownClickEvent): void;
    /**
     * Callback to invoke when input is cleared by the user.
     */
    clear(): void;
    /**
     * Callback to invoke to search for suggestions.
     * @param {AutoCompleteCompleteEvent} event - Custom complete event.
     */
    complete(event: AutoCompleteCompleteEvent): void;
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
}

export declare type AutoCompleteEmits = EmitFn<AutoCompleteEmitsOptions>;

/**
 * **PrimeVue - AutoComplete**
 *
 * _AutoComplete is an input component that provides real-time suggestions while being typed._
 *
 * [Live Demo](https://www.primevue.org/autocomplete/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const AutoComplete: DefineComponent<AutoCompleteProps, AutoCompleteSlots, AutoCompleteEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        AutoComplete: GlobalComponentConstructor<AutoCompleteProps, AutoCompleteSlots, AutoCompleteEmits>;
    }
}

export default AutoComplete;
