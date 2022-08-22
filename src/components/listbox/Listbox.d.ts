import Vue, { VNode } from 'vue';

declare class Listbox extends Vue {
    value?: any;
    options?: any[];
    optionLabel?: string | ((data: any) => string) | undefined;
    optionValue?: string | ((data: any) => any) | undefined;
    optionDisabled?: string | ((data: any) => boolean) | undefined;
    listStyle?: string;
    disabled?: boolean;
    dataKey?: string;
    multiple?: boolean;
    metaKeySelection?: boolean;
    filter?: boolean;
    filterPlaceholder?: string;
    filterLocale?: string;
    ariaLabelledBy?: string;
    emptyFilterMessage?: string;
    $emit(eventName: 'input', value: any): this;
    $emit(eventName: 'change', e: { originalEvent: Event, value: any }): this;
    $emit(eventName: 'filter', e: { originalEvent: Event, value: string }): this;
    $slots: {
        option: VNode[];
    }
}

export default Listbox;