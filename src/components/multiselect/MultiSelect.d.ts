import Vue, {VNode} from 'vue';

declare class MultiSelect extends Vue {
    value?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: any;
    optionDisabled?: boolean;
    scrollHeight?: string;
    placeholder?: string;
    disabled?: boolean;
    filter?: boolean;
    tabindex?: string;
    inputId?: string;
    dataKey?: string;
    filterPlaceholder?: string;
    filterLocale?: string;
    ariaLabelledBy?: string;
    appendTo?: string;
    emptyFilterMessage?: string;
    display?: string;
    $emit(eventName: 'input', value: any): this;
    $emit(eventName: 'change', e: {originalEvent: Event, value: any}): this;
    $emit(eventName: 'before-show'): this;
    $emit(eventName: 'before-leave'): this;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $emit(eventName: 'filter', e: { originalEvent: Event, value: string }): this;
    $slots: {
        value: VNode[];
        option: VNode[];
    }
}

export default MultiSelect;