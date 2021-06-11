import { VNode } from 'vue';

interface AutoCompleteProps {
    modelValue?: any;
    suggestions?: any[];
    field?: string|Function;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    scrollHeight?: string;
    dropdown?: boolean;
    dropdownMode?: string;
    multiple?: boolean;
    minLength?: number;
    delay?: number;
    appendTo?: string;
    completeOnFocus?: boolean;
    inputStyle?: any;
    inputClass?: string;
    forceSelection?: boolean;
    panelClass?: string;
}

declare class AutoComplete {
    $props: AutoCompleteProps;
    $emit(eventName: 'item-select', e: {originalEvent: Event, value: any}): this;
    $emit(eventName: 'item-unselect', e: {originalEvent: Event, value: any}): this;
    $emit(eventName: 'dropdown-click', e: {originalEvent: Event, query: string}): this;
    $emit(eventName: 'complete', e: {originalEvent: Event, query: string}): this;
    $emit(eventName: 'clear'): this;
    $slots: {
        item: VNode[];
        optiongroup: VNode[];
        header: VNode[];
        footer: VNode[];
        chip: VNode[];
    };
}

export default AutoComplete;
