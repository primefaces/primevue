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
    allowEmpty?: boolean;
    inputStyle?: any;
    inputClass?: string;
    style?: any;
    class?: string;
}

declare class InputNumber {
    $props: InputNumberProps;
    $emit(eventName: 'update:modelValue', value: number): this;
    $emit(eventName: 'input', e: {originalEvent: Event, value: any}): this;
    getFormatter(): any;
}

export default InputNumber;
