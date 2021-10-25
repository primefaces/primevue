import { VNode } from 'vue';
import VirtualScrollerProps from '../virtualscroller';

interface MultiSelectProps {
    modelValue?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: any;
    optionDisabled?: boolean;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    scrollHeight?: string;
    placeholder?: string;
    disabled?: boolean;
    tabindex?: string;
    inputId?: string;
    dataKey?: string;
    filter?: boolean;
    filterPlaceholder?: string;
    filterLocale?: string;
    filterMatchMode?: string;
    filterFields?: string[];
    ariaLabelledBy?: string;
    appendTo?: string;
    emptyFilterMessage?: string;
    emptyMessage?: string;
    display?: string;
    panelClass?: string;
    selectedItemsLabel?: string;
    maxSelectedLabels?: number;
    selectionLimit?: number;
    showToggleAll?: boolean;
    loading?: boolean;
    loadingIcon?: string;
    virtualScrollerOptions?: VirtualScrollerProps;
    selectAll?: boolean;
}

interface MultiSelectValueSlotInterface {
    value: any;
    placeholder: string;
}

interface MultiSelectHeaderSlotInterface {
    value: any;
    options: any[];
}

interface MultiSelectFooterSlotInterface {
    value: any;
    options: any[];
}

interface MultiSelectOptionSlotInterface {
    option: any;
    index: number;
}

interface MultiSelectOptionGroupSlotInterface {
    option: any;
    index: number;
}

interface MultiSelectChipSlotContent {
    value: any;
}

interface MultiSelectContentInterface {
    items: any;
    styleClass: string;
    contentRef: string;
    getItemOptions: any;
}

interface MultiSelectLoaderSlotInterface {
    options: any[];
}

declare class MultiSelect {
    $props: MultiSelectProps;
    $emit(eventName: 'update:modelValue', value: any): this;
    $emit(eventName: 'change', e: {originalEvent: Event, value: any}): this;
    $emit(eventName: 'before-show'): this;
    $emit(eventName: 'before-leave'): this;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $emit(eventName: 'filter', e: { originalEvent: Event, value: string }): this;
    $emit(eventName: 'selectall-change', e: { originalEvent: Event, checked: boolean }): this;
    show(): void;
    hide(): void;
    $slots: {
        value: MultiSelectValueSlotInterface;
        header: MultiSelectHeaderSlotInterface;
        footer: MultiSelectFooterSlotInterface;
        emptyfilter: VNode[];
        empty: VNode[];
        option: MultiSelectOptionSlotInterface;
        optiongroup: MultiSelectOptionGroupSlotInterface;
        chip: MultiSelectChipSlotContent;
        content: MultiSelectContentInterface;
        loader: MultiSelectLoaderSlotInterface;
        indicator: VNode[];
    }
}

export default MultiSelect;
