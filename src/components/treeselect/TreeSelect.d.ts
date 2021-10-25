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

interface TreeSelectValueSlotInterface {
    value: any;
    placeholder: string;
}

interface TreeSelectHeaderSlotInterface {
    value: any;
    options: any[];
}

interface TreeSelectFooterSlotInterface {
    value: any;
    options: any[];
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
    show(): void;
    hide(): void;
    $slots: {
        value: TreeSelectValueSlotInterface;
        header: TreeSelectHeaderSlotInterface;
        footer: TreeSelectFooterSlotInterface;
        empty: VNode[];
        indicator: VNode[];
    }
}

export default TreeSelect;
