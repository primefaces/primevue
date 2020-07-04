import Vue, { VNode } from 'vue';

export declare class Listbox extends Vue {
    value?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: any;
    optionDisabled?: boolean;
    listStyle?: string;
    disabled?: boolean;
    dataKey?: string;
    multiple?: boolean;
    metaKeySelection?: boolean;
    filter?: boolean;
    filterPlaceholder?: string;
    filterLocale?: string;
    ariaLabelledBy?: string;
    $emit(eventName: 'input', value: any): this;
    $emit(eventName: 'change', e: { originalEvent: Event, value: any }): this;
    $emit(eventName: 'filter', e: { originalEvent: Event, value: string }): this;
    $slots: {
        option: VNode[];
    }
}