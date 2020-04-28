import Vue from 'vue';

export declare class InputNumber extends Vue {
    value?: number;
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
    $emit(eventName: string, value: number | Event): this;
}