import { VNode } from 'vue';
import { VirtualScrollerProps } from '../virtualscroller';

interface ListboxProps {
    modelValue?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: any;
    optionDisabled?: boolean;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    listStyle?: string;
    disabled?: boolean;
    dataKey?: string;
    multiple?: boolean;
    metaKeySelection?: boolean;
    filter?: boolean;
    filterPlaceholder?: string;
    filterLocale?: string;
    filterMatchMode?: string;
    filterFields?: string[];
    emptyFilterMessage?: string;
    emptyMessage?: string;
    virtualScrollerOptions?: VirtualScrollerProps;
}

declare class Listbox {
    $props: ListboxProps;
    $emit(eventName: 'update:modelValue', value: any): this;
    $emit(eventName: 'change', e: { originalEvent: Event, value: any }): this;
    $emit(eventName: 'filter', e: { originalEvent: Event, value: string }): this;
    $slots: {
        header: VNode[];
        footer: VNode[];
        option: VNode[];
        optiongroup: VNode[];
        emptyfilter: VNode[];
        empty: VNode[];
        content: VNode[];
        loader: VNode[];
    }
}

export default Listbox;
