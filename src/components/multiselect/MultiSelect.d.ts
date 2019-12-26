import Vue, {VNode} from 'vue';

export declare class MultiSelect extends Vue {
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
    dataKey?: string;
    filterPlaceholder?: string;
    ariaLabelledBy?: string;
    $emit(eventName: 'input', value: any): this;
    $emit(eventName: 'change', e: {originalEvent: Event, value: any}): this;
    $slots: {
        value: VNode[];
        option: VNode[];
    }
}