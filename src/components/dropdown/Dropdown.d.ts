import { VNode } from 'vue';
import VirtualScrollerProps from '../virtualscroller';

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
    virtualScrollerOptions?: VirtualScrollerProps;
}

interface DropdownValueSlotInterface {
    value: any;
    placeholder: string;
}

interface DropdownHeaderSlotInterface {
    value: any;
    options: any[];
}

interface DropdownFooterSlotInterface {
    value: any;
    options: any[];
}

interface DropdownOptionSlotInterface {
    option: any;
    index: number;
}

interface DropdownOptionGroupSlotInterface {
    option: any;
    index: number;
}

interface DropdownContentInterface {
    items: any;
    styleClass: string;
    contentRef: string;
    getItemOptions: any;
}

interface DropdownLoaderInterface {
    options: any[];
}

declare class Dropdown {
    $props: DropdownProps;
    $emit(eventName: 'update:modelValue', value: any): this;
    $emit(eventName: 'change', e: { originalEvent: Event, value: string }): this;
    $emit(eventName: 'before-show'): this;
    $emit(eventName: 'before-leave'): this;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $emit(eventName: 'focus', e: Event): this;
    $emit(eventName: 'blur', e: Event): this;
    $emit(eventName: 'filter', e: { originalEvent: Event, value: string }): this;
    show(): void;
    hide(): void;
    $slot: {
        value: DropdownValueSlotInterface;
        header: DropdownHeaderSlotInterface;
        footer: DropdownFooterSlotInterface;
        option: DropdownOptionSlotInterface;
        optiongroup: DropdownOptionGroupSlotInterface;
        emptyfilter: VNode[];
        empty: VNode[];
        content: DropdownContentInterface;
        loader: DropdownLoaderInterface;
        indicator: VNode[];
    }
}

export default Dropdown;
