interface InputNumberProps {
    modelValue?: number;
    format?: boolean;
    showButtons?: boolean;
    buttonLayout?: string;
    incrementButtonClass?: string;
    decrementButtonClass?: string;
    incrementButtonIcon?: string;
    decrementButtonIcon?: string;
    locale?: string;
    localeMatcher?: string;
    mode?: string;
    prefix?: string;
    suffix?: string;
    currency?: string;
    currencyDisplay?: string;
    useGrouping?: boolean;
    minFractionDigits?: number;
    maxFractionDigits?: number;
    min?: number;
    max?: number;
    step?: number;
    inputStyle?: any;
    inputClass?: string;
}

declare class InputNumber {
    $props: InputNumberProps;
    $emit(eventName: string, value: number | Event): this;
    $emit(eventName: 'input', e: {originalEvent: Event, value: any}): this;
}

export default InputNumber;
