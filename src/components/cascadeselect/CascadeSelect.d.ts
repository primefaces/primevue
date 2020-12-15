import Vue, { VNode } from 'vue';

declare class CascadeSelect extends Vue {
    value?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: any;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    placeholder?: string;
    disabled?: boolean;
    dataKey?: string;
    tabindex?: string;
    inputId?: string;
    ariaLabelledBy?: string;
    appendTo?: string;
    $emit(eventName: 'input', value: string): this;
    $emit(eventName: 'change', e: { originalEvent: Event, value: any }): this;
    $emit(eventName: 'change-group', e: { originalEvent: Event, value: any }): this;
    $emit(eventName: 'before-show'): this;
    $emit(eventName: 'before-leave'): this;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $slot: {
        option: VNode[];
    }
}

export default CascadeSelect;