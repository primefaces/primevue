import Vue, { VNode } from 'vue';

export declare class Dropdown extends Vue {
    value?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: any;
    optionDisabled?: boolean;
    scrollHeight?: string;
    labelClass?: string;
    filter?: boolean;
    filterPlaceholder?: string;
    filterLocale?: string;
    editable?: boolean;
    placeholder?: string;
    disabled?: boolean;
    dataKey?: string;
    showClear?: boolean;
    tabindex?: string;
    inputId?: string;
    containerClass?: string;
    ariaLabelledBy?: string;
    appendTo?: string;
    $emit(eventName: 'input', value: string): this;
    $emit(eventName: 'change', e: { originalEvent: Event, value: string }): this;
    $emit(eventName: 'before-show'): this;
    $emit(eventName: 'before-leave'): this;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $emit(eventName: 'filter', e: { originalEvent: Event, value: string }): this;
    $slot: {
        option: VNode[];
    }
}