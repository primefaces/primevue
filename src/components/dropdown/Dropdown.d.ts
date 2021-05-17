import { VNode } from 'vue';

interface DropdownProps {
    modelValue?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: any;
    optionDisabled?: boolean;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    scrollHeight?: string;
    filter?: boolean;
    filterPlaceholder?: string;
    filterLocale?: string;
    filterMatchMode?: string;
    filterFields?: string[];
    editable?: boolean;
    placeholder?: string;
    disabled?: boolean;
    dataKey?: string;
    showClear?: boolean;
    tabindex?: string;
    inputId?: string;
    ariaLabelledBy?: string;
    appendTo?: string;
    emptyFilterMessage?: string;
    emptyMessage?: string;
    panelClass?: string;
    loading?: boolean;
    loadingIcon?: string;
}

declare class Dropdown {
    $props: DropdownProps;
    $emit(eventName: 'input', value: string): this;
    $emit(eventName: 'change', e: { originalEvent: Event, value: string }): this;
    $emit(eventName: 'before-show'): this;
    $emit(eventName: 'before-leave'): this;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $emit(eventName: 'focus', e: Event): this;
    $emit(eventName: 'blur', e: Event): this;
    $emit(eventName: 'filter', e: { originalEvent: Event, value: string }): this;
    $slot: {
        option: VNode[];
    }
}

export default Dropdown;
