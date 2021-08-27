import { VNode } from 'vue';

interface CascadeSelectProps {
    modelValue?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: any;
    optionGroupLabel?: string;
    optionGroupChildren?: string[];
    placeholder?: string;
    disabled?: boolean;
    dataKey?: string;
    tabindex?: string;
    inputId?: string;
    ariaLabelledBy?: string;
    appendTo?: string;
    panelClass?: string;
    loading?: boolean;
    loadingIcon?: string;
}

declare class CascadeSelect {
    $props: CascadeSelectProps;
    $emit(eventName: 'update:modelValue', value: string): this;
    $emit(eventName: 'change', e: { originalEvent: Event, value: any }): this;
    $emit(eventName: 'change-group', e: { originalEvent: Event, value: any }): this;
    $emit(eventName: 'before-show'): this;
    $emit(eventName: 'before-hide'): this;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $slot: {
        option: VNode[];
        value: VNode[];
        indicator: VNode[];
    }
}

export default CascadeSelect;
