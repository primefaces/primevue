import { VNode } from 'vue';

interface TreeProps {
    value?: any;
    expandedKeys?: any;
    selectionKeys?: any;
    selectionMode?: string;
    metaKeySelection?: string;
    loading?: boolean;
    loadingIcon?: string;
    filter?: boolean;
    filterBy?: string;
    filterMode?: string;
    filterPlaceholder?: string;
    filterLocale?: string;
    scrollHeight?: string;
}

declare class Tree {
    $props: TreeProps;
    $emit(eventName: 'update:expandedKeys', value: any): this;
    $emit(eventName: 'update:selectionKeys', value: any): this;
    $emit(eventName: 'node-select', node: any): this;
    $emit(eventName: 'node-unselect', node: any): this;
    $emit(eventName: 'node-expand', node: any): this;
    $emit(eventName: 'node-collapse', node: any): this;
    $slots: {
        [key: string]: VNode[];
    }
}

export default Tree;
