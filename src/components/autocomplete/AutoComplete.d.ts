import Vue, { VNode } from 'vue';

declare class AutoComplete extends Vue {
    value?: any;
    suggestions?: any[];
    field?: string;
    scrollHeight?: string;
    dropdown?: boolean;
    dropdownMode?: string;
    multiple?: boolean;
    minLength?: number;
    delay?: number;
    ariaLabelledBy?: string;
    appendTo?: string;
    $emit(eventName: 'input', value: any): this;
    $emit(eventName: 'item-select', e: {originalEvent: Event, value: any}): this;
    $emit(eventName: 'item-unselect', e: {originalEvent: Event, value: any}): this;
    $emit(eventName: 'dropdown-click', e: {originalEvent: Event, query: string}): this;
    $emit(eventName: 'complete', e: {originalEvent: Event, query: string}): this;
    $emit(eventName: 'clear'): this;
    $emit(eventName: 'focus', event: Event): this;
    $emit(eventName: 'blur', event: Event): this;
    $slots: {
        list: VNode[];
    };
}

export default AutoComplete;