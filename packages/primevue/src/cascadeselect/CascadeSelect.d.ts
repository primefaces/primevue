/**
 *
 * CascadeSelect is a form component to select a value from a nested structure of options.
 *
 * [Live Demo](https://www.primevue.org/cascadeselect/)
 *
 * @module cascadeselect
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, HintedString, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { HTMLAttributes, InputHTMLAttributes, TransitionProps, VNode } from 'vue';

export declare type CascadeSelectPassThroughOptionType = CascadeSelectPassThroughAttributes | ((options: CascadeSelectPassThroughMethodOptions) => CascadeSelectPassThroughAttributes | string) | string | null | undefined;

export declare type CascadeSelectPassThroughTransitionType = TransitionProps | ((options: CascadeSelectPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface CascadeSelectPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: CascadeSelectProps;
    /**
     * Defines current inline state.
     */
    state: CascadeSelectState;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines current options.
     */
    context: CascadeSelectContext;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom change event
 * @see {@link CascadeSelectEmitsOptions.change}
 */
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
 * @see {@link CascadeSelectEmitsOptions.change}
 * @extends CascadeSelectChangeEvent
 */
export interface CascadeSelectGroupChangeEvent extends CascadeSelectChangeEvent {}

/**
 * Custom passthrough(pt) options.
 * @see {@link CascadeSelectProps.pt}
 */
export interface CascadeSelectPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CascadeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: CascadeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: CascadeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the dropdown button's DOM element.
     */
    dropdown?: CascadeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the dropdown icon's DOM element.
     */
    dropdownIcon?: CascadeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the loading icon's DOM element.
     */
    loadingIcon?: CascadeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the overlay's DOM element.
     */
    overlay?: CascadeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the list container's DOM element.
     */
    listContainer?: CascadeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: CascadeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the option's DOM element.
     */
    option?: CascadeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the option content's DOM element.
     */
    optionContent?: CascadeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the option text's DOM element.
     */
    optionText?: CascadeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the option list's DOM element.
     */
    optionList?: CascadeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the group icon's DOM element.
     */
    groupIcon?: CascadeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the hidden input container's DOM element.
     */
    hiddenInputContainer?: CascadeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the hidden input's DOM element.
     */
    hiddenInput?: CascadeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the hidden selected message's DOM element.
     */
    hiddenSelectedMessage?: CascadeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the search result message text aria's DOM element.
     */
    hiddenSearchResult?: CascadeSelectPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: CascadeSelectPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface CascadeSelectPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines focused item info
 */
export interface CascadeSelectFocusedOptionInfo {
    /**
     * Active item index
     */
    index: number;
    /**
     * Active item level
     */
    level: number;
    /**
     * Parent key info
     */
    parentKey: string;
}

/**
 * Defines current inline state in CascadeSelect component.
 */
export interface CascadeSelectState {
    /**
     * Current id state as a string
     */
    id: string;
    /**
     * Current focused state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Current focused item info.
     * @type {CascadeSelectFocusedOptionInfo}
     */
    focusedOptionInfo: CascadeSelectFocusedOptionInfo;
    /**
     * Current focused state as a boolean.
     * @defaultValue false
     */
    activeOptionPath: any[];
    /**
     * Current overlay visible state as a boolean.
     * @defaultValue false
     */
    overlayVisible: boolean;
}

/**
 * Defines current options in CascadeSelect component.
 */
export interface CascadeSelectContext {
    /**
     * Current option.
     */
    option: any;
    /**
     * Index of the option.
     */
    index: number;
    /**
     * Level of the option.
     */
    level: number;
    /**
     * Current option group state of option as a boolean.
     */
    optionGroup: boolean;
    /**
     * Current active state of option as a boolean.
     * @defaultValue false
     */
    active: boolean;
    /**
     * Current focused state of option as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Current disabled state of option as a boolean.
     * @defaultValue false
     */
    disabled: boolean;
}

/**
 * Defines valid properties in CascadeSelect component.
 */
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
     * Property name or getter function to retrieve the items of a group.
     */
    optionGroupChildren?: string[] | string | ((data: any) => any[]) | undefined;
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
     * Used to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: InputHTMLAttributes | undefined;
    /**
     * @deprecated since v4.0. Use 'overlayStyle' prop.
     * Inline style of the overlay overlay.
     */
    panelStyle?: object | undefined;
    /**
     * @deprecated since v4.0. Use 'overlayClass' prop.
     * Style class of the overlay overlay.
     */
    panelClass?: string | object | undefined;
    /**
     * @deprecated since v4.0. Use 'overlayProps' prop.
     * Used to pass all properties of the HTMLDivElement to the overlay overlay inside the component.
     */
    panelProps?: HTMLAttributes | undefined;
    /**
     * Inline style of the overlay overlay.
     */
    overlayStyle?: object | undefined;
    /**
     * Style class of the overlay overlay.
     */
    overlayClass?: string | object | undefined;
    /**
     * Used to pass all properties of the HTMLDivElement to the overlay overlay inside the component.
     */
    overlayProps?: HTMLAttributes | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are 'body' for document body and 'self' for the element itself.
     * @defaultValue body
     */
    appendTo?: HintedString<'body' | 'self'> | undefined | HTMLElement;
    /**
     * Whether the dropdown is in loading state.
     * @defaultValue false
     */
    loading?: boolean | undefined;
    /**
     * Icon to display in the dropdown.
     */
    dropdownIcon?: string | undefined;
    /**
     * Icon to display in loading state.
     */
    loadingIcon?: string | undefined;
    /**
     * Icon to display in the option group.
     */
    optionGroupIcon?: string | undefined;
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
     * @defaultValue false
     */
    autoOptionFocus?: boolean | undefined;
    /**
     * When enabled, the focused option is selected/opened.
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
     * Text to be displayed when there are no options available. Defaults to value from PrimeVue locale configuration.
     * @defaultValue No available options
     */
    emptyMessage?: string | undefined;
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
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {CascadeSelectPassThroughOptions}
     */
    pt?: PassThrough<CascadeSelectPassThroughOptions>;
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
 * Defines valid slots in CascadeSelect component.
 */
export interface CascadeSelectSlots {
    /**
     * Custom content for each option.
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
    }): VNode[];
    /**
     * Custom value template.
     * @param {CascadeSelectValueSlot} scope - value slot's params.
     */
    value(scope: {
        /**
         * Value of the component
         */
        value: any;
        /**
         * Placeholder text to show
         */
        placeholder: string;
    }): VNode[];
    /**
     * Custom dropdown icon template.
     */
    dropdownicon(): VNode[];
    /**
     * Custom loading icon template.
     */
    loadingicon(): VNode[];
    /**
     * Custom option group icon template.
     */
    optiongroupicon(): VNode[];
}

/**
 * Defines valid emits in CascadeSelect component.
 */
export interface CascadeSelectEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any): void;
    /**
     * Callback to invoke on value change.
     * @param { CascadeSelectChangeEvent } event - Custom change event.
     */
    change(event: CascadeSelectChangeEvent): void;
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
     * Callback to invoke on click.
     * @param { Event } event - Browser event.
     */
    click(event: Event): void;
    /**
     * Callback to invoke when a group changes.
     * @param { CascadeSelectGroupChangeEvent } event - Custom change event.
     */
    'group-change'(event: CascadeSelectGroupChangeEvent): void;
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

export declare type CascadeSelectEmits = EmitFn<CascadeSelectEmitsOptions>;

/**
 * **PrimeVue - CascadeSelect**
 *
 * _CascadeSelect is a form component to select a value from a nested structure of options._
 *
 * [Live Demo](https://www.primevue.org/cascadeselect/)
 * --- ---
 * ![PrimeVue(https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const CascadeSelect: DefineComponent<CascadeSelectProps, CascadeSelectSlots, CascadeSelectEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        CascadeSelect: GlobalComponentConstructor<CascadeSelectProps, CascadeSelectSlots, CascadeSelectEmits>;
    }
}

export default CascadeSelect;
