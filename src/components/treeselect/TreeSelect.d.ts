import { VNode } from 'vue';

interface TreeSelectProps {
    modelValue?: any;
    options?: any[];
    scrollHeight?: string;
    placeholder?: string;
    disabled?: boolean;
    tabindex?: string;
    inputId?: string;
    ariaLabelledBy?: string;
    selectionMode?: string;
    panelClass?: string;
    appendTo?: string;
    emptyMessage?: string;
    display?: string;
    metaKeySelection?: boolean;
}

declare class TreeSelect {
    $props: TreeSelectProps;
    $emit(eventName: 'update:modelValue', value: any): this;
    $emit(eventName: 'change', value: any): this;
    $emit(eventName: 'before-show'): this;
    $emit(eventName: 'before-hide'): this;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $emit(eventName: 'node-select', node: any): this;
    $emit(eventName: 'node-unselect', node: any): this;
    $emit(eventName: 'node-expand', node: any): this;
    $emit(eventName: 'node-collapse', node: any): this;
    $slots: {
        value: VNode[];
        header: VNode[];
        footer: VNode[];
        empty: VNode[];
        indicator: VNode[];
    }
}

export default TreeSelect;
