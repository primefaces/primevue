import { ClassComponent, GlobalComponentConstructor, Nullable } from '../ts-helpers';

type InputNumberButtonLayoutType = 'stacked' | 'horizontal' | 'vertical' | undefined;

type InputNumberLocaleMatcherType = 'lookup' | 'best fit' | undefined;

type InputNumberModeType = 'decimal' | 'currency' | undefined;

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

export interface InputNumberProps {
    /**
     * Value of the component.
     */
    modelValue?: Nullable<number>;
    /**
     * Whether to format the value.
     */
    format?: boolean | undefined;
    /**
     * Displays spinner buttons.
     */
    showButtons?: boolean | undefined;
    /**
     * Layout of the buttons.
     * @see InputNumberButtonLayoutType
     * Default value is 'stacked'.
     */
    buttonLayout?: InputNumberButtonLayoutType;
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
     * Default value is 'pi pi-angle-up'.
     */
    incrementButtonIcon?: string | undefined;
    /**
     * Style class of the decrement button.
     * Default value is 'pi pi-angle-down'.
     */
    decrementButtonIcon?: string | undefined;
    /**
     * Locale to be used in formatting.
     */
    locale?: string | undefined;
    /**
     * The locale matching algorithm to use. Possible values are 'lookup' and 'best fit'; the default is 'best fit'.
     * See [Locale Negotation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_negotiation) for details.
     * @see InputNumberLocaleMatcherType
     * Default value is 'best fit'
     */
    localeMatcher?: InputNumberLocaleMatcherType;
    /**
     * Defines the behavior of the component.
     * @see InputNumberModeType
     * Default value is 'decimal'.
     */
    mode?: InputNumberModeType;
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
     * Default value is 'symbol'.
     */
    currencyDisplay?: string | undefined;
    /**
     * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.
     * Default value is true.
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
     * Default value is 1.
     */
    step?: number | undefined;
    /**
     * Determines whether the input field is empty.
     * Default value is true.
     */
    allowEmpty?: boolean | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that an input field is read-only.
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
    inputClass?: any | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: any | undefined;
    /**
     * Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: HTMLInputElement | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to increment button inside the component.
     */
    incrementButtonProps?: HTMLButtonElement | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to decrement button inside the component.
     */
    decrementButtonProps?: HTMLButtonElement | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    'aria-label'?: string | undefined;
}

export interface InputNumberSlots {
}

export declare type InputNumberEmits = {
    /**
     * Emitted when the value changes.
     * @param {number} value - New value.
     */
    'update:modelValue': (value: number) => void;
    /**
      * Callback to invoke when the value is entered.
      * @param {InputNumberInputEvent} event - Custom input event.
      */
    'input': (event: InputNumberInputEvent) => void;
    /**
     * Callback to invoke on focus of input field.
     * @param {Event} event - Focus event
     */
    'focus': (event: Event) => void;
    /**
       * Callback to invoke on blur of input field.
       * @param {InputNumberBlurEvent} event - Blur event
       */
    'blur': (event: InputNumberBlurEvent) => void;
}

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
        InputNumber: GlobalComponentConstructor<InputNumber>
    }
}

/**
 *
 * InputNumber is an input component to provide numerical input.
 *
 * Helper API:
 *
 * - [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
 *
 * Demos:
 *
 * - [InputNumber](https://www.primefaces.org/primevue/showcase/#/inputnumber)
 *
 */
export default InputNumber;
