import { VNode } from 'vue';

interface VirtualScrollerProps {
    items?: any[]|any[][];
    itemSize?: number|any[];
    scrollHeight?: string;
    scrollWidth?: string;
    orientation?: string;
    numToleratedItems?: number;
    delay?: number;
    lazy?: boolean;
    showLoader?: boolean;
    loading?: boolean;
    style?: any;
    class?: string;
}

declare class VirtualScroller {
    $props: VirtualScrollerProps;
    $emit(eventName: 'update:numToleratedItems', value: number): this;
    $emit(eventName: 'scroll-index-change', value: { first: number, last: number }): this;
    $emit(eventName: 'lazy-load', value: { first: number, last: number }): this;
    $slots: { 
        content: VNode[];
        items: VNode[];
        loader: VNode[];
    }
}