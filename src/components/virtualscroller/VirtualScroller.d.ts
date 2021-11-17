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

interface VirtualScrollerRangeMethodInterface {
    first: number;
    last: number;
    viewport: {
        first: number;
        last: number;
    }
}

interface VirtualScrollerGetItemOptionsInterface {
    index: number;
    count: number;
    first: number;
    last: number;
    even: number;
    odd: number;
}

interface VirtualScrollerGetLoaderOptionsInterface {
    loading: boolean;
    first: number;
    last: number;
    even: number;
    odd: number;
}

interface VirtualScrollerContentSlotInterface {
    contentRef: string;
    styleClass: string;
    items: any[];
    getItemOptions: VirtualScrollerGetItemOptionsInterface;
}

interface VirtualScrollerItemSlotInterface {
    item: any;
    options: VirtualScrollerGetItemOptionsInterface;
}

interface VirtualScrollerLoaderSlotInterface {
    options: VirtualScrollerGetLoaderOptionsInterface;
}

declare class VirtualScroller {
    $props: VirtualScrollerProps;
    scrollTo(options?: ScrollToOptions): void;
    scrollToIndex(index: number, behavior: ScrollBehavior): void;
    scrollInView(index: number, to: "to-start" | "to-end", behavior: ScrollBehavior): void;
    getRenderedRange(): VirtualScrollerRangeMethodInterface;
    $emit(eventName: 'update:numToleratedItems', value: number): this;
    $emit(eventName: 'scroll-index-change', value: { first: number, last: number }): this;
    $emit(eventName: 'lazy-load', value: { first: number, last: number }): this;
    $slots: { 
        content: VirtualScrollerContentSlotInterface;
        item: VirtualScrollerItemSlotInterface;
        loader: VirtualScrollerLoaderSlotInterface;
    }
}

export default VirtualScroller;