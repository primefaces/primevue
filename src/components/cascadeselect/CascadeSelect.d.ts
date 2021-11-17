import { VNode } from 'vue';

type CascadeSelectOptionLabelType = string | ((data: any) => string) | undefined;
type CascadeSelectOptionValueType = string | ((data: any) => any) | undefined;
type CascadeSelectOptionChildrenType = string[] | string | ((data: any) => any[]) | undefined;

interface CascadeSelectProps {
    modelValue?: any;
    options?: any[];
    optionLabel?: CascadeSelectOptionLabelType;
    optionValue?: CascadeSelectOptionValueType;
    optionGroupLabel?: CascadeSelectOptionLabelType;
    optionGroupChildren?: CascadeSelectOptionChildrenType;
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

interface CascadeSelectOptionSlotInterface {
    option: any;
}

interface CascadeSelectValueSlotInterface {
    value: any;
    placeholder: string;
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
        option: CascadeSelectOptionSlotInterface;
        value: CascadeSelectValueSlotInterface;
        indicator: VNode[];
    }
}

export default CascadeSelect;
