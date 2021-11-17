import { VNode } from 'vue';
import VirtualScrollerProps from '../virtualscroller';

type ListboxOptionLabelType = string | ((data: any) => string) | undefined;
type ListboxOptionValueType = string | ((data: any) => any) | undefined;
type ListboxOptionDisabledType = string | ((data: any) => boolean) | undefined;
type ListboxOptionChildrenType = string | ((data: any) => any[]) | undefined;

interface ListboxProps {
    modelValue?: any;
    options?: any[];
    optionLabel?: ListboxOptionLabelType;
    optionValue?: ListboxOptionValueType;
    optionDisabled?: ListboxOptionDisabledType;
    optionGroupLabel?: ListboxOptionLabelType;
    optionGroupChildren?: ListboxOptionChildrenType;
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

interface ListboxHeaderSlotInterface {
    value: any;
    options: any[];
}

interface ListboxFooterSlotInterface {
    value: any;
    options: any[];
}

interface ListboxOptionSlotInterface {
    option: any;
    index: number;
}

interface ListboxOptionGroupSlotInterface {
    option: any;
    index: number;
}

interface ListboxContentInterface {
    items: any;
    styleClass: string;
    contentRef: string;
    getItemOptions: any;
}

interface ListboxLoaderSlotInterface {
    options: any[];
}

declare class Listbox {
    $props: ListboxProps;
    $emit(eventName: 'update:modelValue', value: any): this;
    $emit(eventName: 'change', e: { originalEvent: Event, value: any }): this;
    $emit(eventName: 'filter', e: { originalEvent: Event, value: string }): this;
    $slots: {
        header: ListboxHeaderSlotInterface;
        footer: ListboxFooterSlotInterface;
        option: ListboxOptionSlotInterface;
        optiongroup: ListboxOptionGroupSlotInterface;
        emptyfilter: VNode[];
        empty: VNode[];
        content: ListboxContentInterface;
        loader: ListboxLoaderSlotInterface;
    }
}

export default Listbox;
