/**
 *
 * InputNumber is an input component to provide numerical input.
 *
 * [Live Demo](https://www.primevue.org/inputnumber/)
 *
 * @module inputnumber
 *
 */
import { ButtonHTMLAttributes, InputHTMLAttributes, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ButtonPassThroughOptionType } from '../button';
import { InputTextPassThroughOptionType } from '../inputtext';
import { ClassComponent, GlobalComponentConstructor, Nullable } from '../ts-helpers';

export declare type InputNumberPassThroughOptionType = InputNumberPassThroughAttributes | ((options: InputNumberPassThroughMethodOptions) => InputNumberPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface InputNumberPassThroughMethodOptions {
    instance: any;
    props: InputNumberProps;
    state: InputNumberState;
}

/**
 * Custom input event.
 * @see {@link InputNumberEmits.input}
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
}

/**
 * Custom blur event.
 * @see {@link InputNumberEmits.blur}
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
export interface InputNumberPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: InputNumberPassThroughOptionType;
    /**
     * Uses to pass attributes to the Input component.
     * @see {@link InputTextPassThroughOptionType}
     */
    input?: InputTextPassThroughOptionType;
    /**
     * Uses to pass attributes to the button group's DOM element.
     */
    buttonGroup?: InputNumberPassThroughOptionType;
    /**
     * Uses to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    incrementButton?: ButtonPassThroughOptionType;
    /**
     * Uses to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    decrementButton?: ButtonPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
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
     */
    d_modelValue: number;
    /**
     * Current focused state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
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
    buttonLayout?: 'stacked' | 'horizontal' | 'vertical' | undefined;
    /**
     * Style class of the increment button.
     */
    incrementButtonClass?: string | undefined;
    /**
     * Style class of the decrement button.
     */
    decrementButtonClass?: string | undefined;
    /**
     * Style class of the increment button.
     * @deprecated since v3.27.0. Use 'incrementbuttonicon' slot.
     */
    incrementButtonIcon?: string | undefined;
    /**
     * Style class of the decrement button.
     * @deprecated since v3.27.0. Use 'decrementbuttonicon' slot.
     */
    decrementButtonIcon?: string | undefined;
    /**
     * Locale to be used in formatting.
     */
    locale?: string | undefined;
    /**
     * The locale matching algorithm to use. Possible values are 'lookup' and 'best fit'; the default is 'best fit'.
     * See [Locale Negotation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_negotiation) for details.
     * @defaultValue best fit
     */
    localeMatcher?: 'lookup' | 'best fit' | undefined;
    /**
     * Defines the behavior of the component.
     * @defaultValue decimal
     */
    mode?: 'decimal' | 'currency' | undefined;
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
     * Mininum boundary value.
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
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
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
     * Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: InputHTMLAttributes | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to increment button inside the component.
     */
    incrementButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to decrement button inside the component.
     */
    decrementButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    'aria-label'?: string | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {InputNumberPassThroughOptions}
     */
    pt?: InputNumberPassThroughOptions;
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
     * Custom increment button icon template.
     */
    incrementbuttonicon(): VNode[];
    /**
     * Custom decrement button icon template.
     */
    decrementbuttonicon(): VNode[];
}

/**
 * Defines valid emits in InputNumber component.
 */
export interface InputNumberEmits {
    /**
     * Emitted when the value changes.
     * @param {number} value - New value.
     */
    'update:modelValue'(value: number): void;
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
 */
declare class InputNumber extends ClassComponent<InputNumberProps, InputNumberSlots, InputNumberEmits> {
    /**
     * Returns Intl.NumberFormat object.
     *
     * @memberof InputNumber
     */
    getFormatter: () => Intl.NumberFormat | undefined;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        InputNumber: GlobalComponentConstructor<InputNumber>;
    }
}

export default InputNumber;
