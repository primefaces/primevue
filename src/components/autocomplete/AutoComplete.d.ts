import VirtualScrollerProps from '../virtualscroller';

interface AutoCompleteProps {
    modelValue?: any;
    suggestions?: any[];
    field?: string|Function;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    scrollHeight?: string;
    dropdown?: boolean;
    dropdownMode?: string;
    autoHighlight?: boolean;
    multiple?: boolean;
    minLength?: number;
    delay?: number;
    appendTo?: string;
    completeOnFocus?: boolean;
    inputStyle?: any;
    inputClass?: string;
    forceSelection?: boolean;
    class?: any;
    style?: any;
    panelClass?: string;
    virtualScrollerOptions?: VirtualScrollerProps;
}

interface AutoCompleteItemSlotInterface {
    item: any;
    index: number;
}

interface AutoCompleteOptionGroupInterface {
    item: any;
    index: number;
}

interface AutoCompleteHeaderInterface {
    value: any;
    suggestions: any;
}

interface AutoCompleteFooterInterface {
    value: any;
    suggestions: any;
}

interface AutoCompleteChipInterface {
    value: any;
}

interface AutoCompleteContentInterface {
    items: any;
    styleClass: string;
    contentRef: string;
    getItemOptions: any;
}

interface AutoCompleteLoaderInterface {
    options: any[];
}

declare class AutoComplete {
    $props: AutoCompleteProps;
    $emit(eventName: 'update:modelValue', value: any): this;
    $emit(eventName: 'item-select', e: {originalEvent: Event, value: any}): this;
    $emit(eventName: 'item-unselect', e: {originalEvent: Event, value: any}): this;
    $emit(eventName: 'dropdown-click', e: {originalEvent: Event, query: string}): this;
    $emit(eventName: 'complete', e: {originalEvent: Event, query: string}): this;
    $emit(eventName: 'clear'): this;
    $slots: {
        item: AutoCompleteItemSlotInterface;
        optiongroup: AutoCompleteOptionGroupInterface;
        header: AutoCompleteHeaderInterface;
        footer: AutoCompleteFooterInterface;
        chip: AutoCompleteChipInterface;
        content: AutoCompleteContentInterface;
        loader: AutoCompleteLoaderInterface;
    };
}

export default AutoComplete;
