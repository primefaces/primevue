import { VNode } from 'vue';

interface MultiSelectProps {
    modelValue?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: any;
    optionDisabled?: boolean;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    scrollHeight?: string;
    placeholder?: string;
    disabled?: boolean;
    tabindex?: string;
    inputId?: string;
    dataKey?: string;
    filter?: boolean;
    filterPlaceholder?: string;
    filterLocale?: string;
    filterMatchMode?: string;
    filterFields?: string[];
    ariaLabelledBy?: string;
    appendTo?: string;
    emptyFilterMessage?: string;
    emptyMessage?: string;
    display?: string;
    panelClass?: string;
    selectionLimit?: number;
    showToggleAll?: boolean;
    loading?: boolean;
    loadingIcon?: string;
}

declare class MultiSelect {
    $props: MultiSelectProps;
    $emit(eventName: 'input', value: any): this;
    $emit(eventName: 'change', e: {originalEvent: Event, value: any}): this;
    $emit(eventName: 'before-show'): this;
    $emit(eventName: 'before-leave'): this;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $emit(eventName: 'filter', e: { originalEvent: Event, value: string }): this;
    $slots: {
        value: VNode[];
        header: VNode[];
        footer: VNode[];
        emptyfilter: VNode[];
        empty: VNode[];
        option: VNode[];
        optiongroup: VNode[];
        chip: VNode[];
    }
}

export default MultiSelect;
