/**
 *
 * InputNumber is an input component to provide numerical input.
 *
 * [Live Demo](https://www.primevue.org/inputnumber/)
 *
 * @module inputnumber
 *
 */
import type { DefineComponent, DesignToken, EmitFn, HintedString, Nullable, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { InputTextPassThroughOptions } from 'primevue/inputtext';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type RoundingMode = 'ceil' | 'floor' | 'expand' | 'trunc' | 'halfCeil' | 'halfFloor' | 'halfExpand' | 'halfTrunc' | 'halfEven';

export declare type InputNumberPassThroughOptionType<T = any> = InputNumberPassThroughAttributes | ((options: InputNumberPassThroughMethodOptions<T>) => InputNumberPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface InputNumberPassThroughMethodOptions<T> {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: InputNumberProps;
    /**
     * Defines current inline state.
     */
    state: InputNumberState;
    /**
     * Defines parent instance.
     */
    parent: T;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom shared passthrough(pt) option method.
 */
export interface InputNumberSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: InputNumberProps;
    /**
     * Defines current inline state.
     */
    state: InputNumberState;
}

/**
 * Custom input event.
 * @see {@link InputNumberEmitsOptions.input}
 */
export interface InputNumberInputEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * New value
     */
    value: string | number | undefined;
    /**
     * currentValue
     */
    formattedValue: string;
}

/**
 * Custom blur event.
 * @see {@link InputNumberEmitsOptions.blur}
 */
export interface InputNumberBlurEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Input value
     */
    value: string;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link InputNumberProps.pt}
 */
export interface InputNumberPassThroughOptions<T = any> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputNumberPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the InputText component.
     * @see {@link InputTextPassThroughOptions}
     */
    pcInputText?: InputTextPassThroughOptions<InputNumberSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    clearIcon?: InputNumberPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the button group's DOM element.
     */
    buttonGroup?: InputNumberPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the increment button's DOM element.
     */
    incrementButton?: InputNumberPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the increment icon's DOM element.
     */
    incrementIcon?: InputNumberPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the decrement button's DOM element.
     */
    decrementButton?: InputNumberPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the decrement icon's DOM element.
     */
    decrementIcon?: InputNumberPassThroughOptionType<T>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface InputNumberPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in InputNumber component.
 */
export interface InputNumberState {
    /**
     * Current value state as a number.
     * @deprecated since 4.2.0. Use 'd_value' instead.
     */
    d_modelValue: number;
    /**
     * Current value state as a number.
     */
    d_value: number;
    /**
     * Current focused state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
}

/**
 * Defines valid listeners in InputNumber component.
 */
export interface InputNumberButtonListeners {
    /**
     * Mouse down event of increment button.
     * @param {Event} event - Browser event
     */
    onMousedown: (event: Event) => void;
    /**
     * Mouse up event of increment button.
     * @param {Event} event - Browser event
     */
    onMouseup: (event: Event) => void;
    /**
     * Mouse leave event of increment button.
     * @param {Event} event - Browser event
     */
    onMouseleave: (event: Event) => void;
    /**
     * Key down event of increment button.
     * @param {Event} event - Browser event
     */
    onKeydown: (event: Event) => void;
    /**
     * Key up event of increment button.
     * @param {Event} event - Browser event
     */
    onKeyup: (event: Event) => void;
}

/**
 * Defines valid properties in InputNumber component.
 */
export interface InputNumberProps {
    /**
     * Value of the component.
     */
    modelValue?: Nullable<number>;
    /**
     * The default value for the input when not controlled by `modelValue`.
     */
    defaultValue?: Nullable<number>;
    /**
     * The name attribute for the element, typically used in form submissions.
     */
    name?: string | undefined;
    /**
     * Whether to format the value.
     * @defaultValue true
     */
    format?: boolean | undefined;
    /**
     * Displays spinner buttons.
     * @defaultValue false
     */
    showButtons?: boolean | undefined;
    /**
     * Layout of the buttons.
     * @defaultValue stacked
     */
    buttonLayout?: HintedString<'stacked' | 'horizontal' | 'vertical'> | undefined;
    /**
     * Style class of the increment button.
     */
    incrementButtonClass?: string | undefined;
    /**
     * Style class of the decrement button.
     */
    decrementButtonClass?: string | undefined;
    /**
     * Style class of the increment icon.
     * @deprecated since v4.0. Use 'incrementIcon'.
     */
    incrementButtonIcon?: string | undefined;
    /**
     * Style class of the increment icon.
     */
    incrementIcon?: string | undefined;
    /**
     * Style class of the decrement icon.
     * @deprecated since v4.0. Use 'decrementIcon'.
     */
    decrementButtonIcon?: string | undefined;
    /**
     * Style class of the decrement icon.
     */
    decrementIcon?: string | undefined;
    /**
     * Locale to be used in formatting.
     */
    locale?: string | undefined;
    /**
     * The locale matching algorithm to use. Possible values are 'lookup' and 'best fit'; the default is 'best fit'.
     * See [Locale Negotation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_negotiation) for details.
     * @defaultValue best fit
     */
    localeMatcher?: HintedString<'lookup' | 'best fit'> | undefined;
    /**
     * Defines the behavior of the component.
     * @defaultValue decimal
     */
    mode?: HintedString<'decimal' | 'currency'> | undefined;
    /**
     * Text to display before the value.
     */
    prefix?: string | undefined;
    /**
     * Text to display after the value.
     */
    suffix?: string | undefined;
    /**
     * The currency to use in currency formatting. Possible values are the [ISO 4217 currency codes](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency), such as 'USD' for the US dollar, 'EUR' for the euro, or 'CNY' for the Chinese RMB.
     * There is no default value; if the style is 'currency', the currency property must be provided.
     */
    currency?: string | undefined;
    /**
     * How to display the currency in currency formatting. Possible values are 'symbol' to use a localized currency symbol such as €, 'code' to use the ISO currency code, 'name' to use a localized currency name such as 'dollar'.
     * @defaultValue symbol
     */
    currencyDisplay?: string | undefined;
    /**
     * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.
     * @defaultValue true
     */
    useGrouping?: boolean | undefined;
    /**
     * The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0;
     * the default for currency formatting is the number of minor unit digits provided by the [ISO 4217 currency code](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency) list (2 if the list doesn't provide that information).
     */
    minFractionDigits?: number | undefined;
    /**
     * The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3;
     * the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the [ISO 4217 currency code](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency) list (2 if the list doesn't provide that information).
     */
    maxFractionDigits?: number | undefined;
    /**
     * How decimals should be rounded.
     * The default value is `"halfExpand"`, [further information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode).
     */
    roundingMode?: RoundingMode;
    /**
     * Minimum boundary value.
     */
    min?: number | undefined;
    /**
     * Maximum boundary value.
     */
    max?: number | undefined;
    /**
     * Step factor to increment/decrement the value.
     * @defaultValue 1
     */
    step?: number | undefined;
    /**
     * Determines whether the input field is empty.
     * @defaultValue true
     */
    allowEmpty?: boolean | undefined;
    /**
     * Highlights automatically the input value.
     * @defaultValue false
     */
    highlightOnFocus?: boolean | undefined;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @defaultValue false
     */
    showClear?: boolean | undefined;
    /**
     * Defines the size of the component.
     */
    size?: HintedString<'small' | 'large'> | undefined;
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
     * @defaultValue null
     */
    variant?: HintedString<'outlined' | 'filled'> | undefined | null;
    /**
     * When present, it specifies that an input field is read-only.
     * @defaultValue false
     */
    readonly?: boolean | undefined;
    /**
     * Placeholder text for the input.
     */
    placeholder?: string | undefined;
    /**
     * Spans 100% width of the container when enabled.
     * @defaultValue null
     */
    fluid?: boolean | undefined;
    /**
     * 	Identifier of the focus input to match a label defined for the chips.
     */
    inputId?: string | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: string | object | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: object | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
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
     * @type {InputNumberPassThroughOptions}
     */
    pt?: PassThrough<InputNumberPassThroughOptions>;
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
 * Defines valid slots in InputNumber component.
 */
export interface InputNumberSlots {
    /**
     * Custom increment button template.
     */
    incrementbutton(scope: {
        /**
         * InputNumber listeners
         */
        listeners: InputNumberButtonListeners;
    }): VNode[];
    /**
     * Custom decrement button template.
     */
    decrementbutton(scope: {
        /**
         * InputNumber listeners
         */
        listeners: InputNumberButtonListeners;
    }): VNode[];
    /**
     * @deprecated since v4.0. Use 'incrementicon' slot.
     * Custom increment icon template.
     */
    incrementbuttonicon(): VNode[];
    /**
     * Custom increment icon template.
     */
    incrementicon(): VNode[];
    /**
     * @deprecated since v4.0. Use 'decrementicon' slot.
     * Custom decrement icon template.
     */
    decrementbuttonicon(): VNode[];
    /**
     * Custom decrement icon template.
     */
    decrementicon(): VNode[];
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
}

/**
 * Defines valid emits in InputNumber component.
 */
export interface InputNumberEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {number} value - New value.
     */
    'update:modelValue'(value: number): void;
    /**
     * Emitted when the value changes in uncontrolled mode.
     * @param {number} value - New value.
     */
    'value-change'(value: number): void;
    /**
     * Callback to invoke when the value is entered.
     * @param {InputNumberInputEvent} event - Custom input event.
     */
    input(event: InputNumberInputEvent): void;
    /**
     * Callback to invoke on focus of input field.
     * @param {Event} event - Focus event
     */
    focus(event: Event): void;
    /**
     * Callback to invoke on blur of input field.
     * @param {InputNumberBlurEvent} event - Blur event
     */
    blur(event: InputNumberBlurEvent): void;
}

export declare type InputNumberEmits = EmitFn<InputNumberEmitsOptions>;

export interface InputNumberMethods {
    /**
     * Returns Intl.NumberFormat object.
     *
     * @memberof InputNumber
     */
    getFormatter: () => Intl.NumberFormat | undefined;
}

/**
 * **PrimeVue - InputNumber**
 *
 * _InputNumber is an input component to provide numerical input._
 *
 * [Live Demo](https://www.primevue.org/inputnumber/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const InputNumber: DefineComponent<InputNumberProps, InputNumberSlots, InputNumberEmits, InputNumberMethods>;

declare module 'vue' {
    export interface GlobalComponents {
        InputNumber: DefineComponent<InputNumberProps, InputNumberSlots, InputNumberEmits, InputNumberMethods>;
    }
}

export default InputNumber;
