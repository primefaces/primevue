import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type VirtualScrollerItemsType = any[] | any[][] | undefined | null;

type VirtualScrollerItemSizeType = number | number[] | undefined;

type VirtualScrollerOrientationType = 'vertical' | 'horizontal' | 'both' | undefined;

type VirtualScrollerToType = 'to-start' | 'to-end' | undefined;

export interface VirtualScrollerScrollIndexChangeEvent {
    /**
     * First index of the new data range to be loaded.
     */
    first: number;
    /**
     * Last index of the new data range to be loaded.
     */
    last: number;
}

/**
 * @extends VirtualScrollerScrollIndexChangeEvent
 */
export interface VirtualScrollerLazyEvent extends VirtualScrollerScrollIndexChangeEvent { }

/**
 * @extends VirtualScrollerScrollIndexChangeEvent
 */
export interface VirtualScrollerViewport extends VirtualScrollerScrollIndexChangeEvent { }

export interface VirtualScrollerRangeMethod {
    /**
     * Whether the item is first.
     */
    first: number;
    /**
     * Whether the item is last.
     */
    last: number;
    /**
     * Viewport info.
     * @see VirtualScrollerViewport
     */
    viewport: VirtualScrollerViewport;
}

export interface VirtualScrollerItemOptions {
    /**
     * Item index
     */
    index: number;
    /**
     * Items count
     */
    count: number;
    /**
     * Whether the item is first.
     */
    first: boolean;
    /**
     * Whether the item is last.
     */
    last: boolean;
    /**
     * Whether the item is even.
     */
    even: boolean;
    /**
     * Whether the item is odd.
     */
    odd: boolean;
    /**
     * Optional
     */
    [key: string]: any;
}

/**
 * @extends VirtualScrollerItemOptions
 */
export interface VirtualScrollerLoaderOptions extends VirtualScrollerItemOptions { }

export interface VirtualScrollerProps {
    /**
     * Unique identifier of the element.
     */
    id?: string | undefined;
    /**
     * Inline style of the component.
     */
    style?: any;
    /**
     * Style class of the component.
     */
    class?: any;
    /**
     * An array of objects to display.
     */
    items?: VirtualScrollerItemsType;
    /**
     * The height/width of item according to orientation.
     */
    itemSize?: VirtualScrollerItemSizeType;
    /**
     * Height of the scroll viewport.
     */
    scrollHeight?: string | undefined;
    /**
     * Width of the scroll viewport.
     */
    scrollWidth?: string | undefined;
    /**
     * The orientation of scrollbar.
     * @see VirtualScrollerOrientationType
     * Default value is 'vertical'.
     */
    orientation?: VirtualScrollerOrientationType;
    /**
     * Determines how many additional elements to add to the DOM outside of the view.
     * According to the scrolls made up and down, extra items are added in a certain algorithm in the form of multiples of this number.
     * Default value is half the number of items shown in the view.
     */
    numToleratedItems?: number | undefined;
    /**
     * Delay in scroll before new data is loaded.
     * Default value is 0.
     */
    delay?: number | undefined;
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     */
    lazy?: boolean | undefined;
    /**
     * If disabled, the VirtualScroller feature is eliminated and the content is displayed directly.
     */
    disabled?: boolean | undefined;
    /**
     * Used to implement a custom loader instead of using the loader feature in the VirtualScroller.
     */
    loaderDisabled?: boolean | undefined;
    /**
     * Whether to show loader.
     */
    showLoader?: boolean | undefined;
    /**
     * Used to implement a custom spacer instead of using the spacer feature in the VirtualScroller.
     * Default value is true.
     */
    showSpacer?: boolean | undefined;
    /**
     * Whether to load items.
     */
    loading?: boolean | undefined;
    /**
     * Callback to invoke in lazy mode to load new data.
     * @param {VirtualScrollerLazyEvent} event - Custom lazy event.
     */
    onLazyLoad?: (event: VirtualScrollerLazyEvent) => void;
    /**
     * Index of the element in tabbing order.
     * Default value is 0.
     */
    tabindex?: number | string | undefined;
}

export interface VirtualScrollerSlots {
    /**
     * Custom content template.
     * @param {Object} scope - content slot's params.
     */
    content: (scope: {
        /**
         * An array of objects to display for virtualscroller
         */
        items: any;
        /**
         * Style class of the content
         */
        styleClass: string;
        /**
         * Referance of the content
         * @param {HTMLElement} el - Element of 'ref' property
         */
        contentRef(el: any): void;
        /**
         * Options of the items
         * @param {number} index - Rendered index
         * @return {@link VirtualScroller.VirtualScrollerItemOptions}
         */
        getItemOptions(index: number): VirtualScrollerItemOptions;
        /**
         * Whether the data is loaded.
         */
        loading: boolean;
        /**
         * Loader options of the items while the data is loading.
         * @param {number} index - Rendered index
         * @param {*} [ext] - Extra options
         */
        getLoaderOptions(index: number, ext?: any): VirtualScrollerLoaderOptions;
        /**
         * The height/width of item according to orientation.
         */
        itemSize: VirtualScrollerItemSizeType;
        /**
         * The number of the rendered rows.
         */
        rows: number | undefined;
        /**
         * The number of the rendered columns.
         */
        columns: number | undefined;
        /**
         * The style of spacer element.
         */
        spacerStyle: any;
        /**
         * The style of content element.
         */
        contentStyle: any;
        /**
         * Whether the orientation is vertical.
         */
        vertical: boolean;
        /**
         * Whether the orientation is horizontal.
         */
        horizontal: boolean;
        /**
         * Whether the orientation is both.
         */
        both: boolean;
    }) => VNode[];
    /**
     * Custom item template.
     * @param {Object} scope - item slot's params.
     */
    item: (scope: {
        /**
         * Item data.
         */
        item: any;
        /**
         * Item options.
         */
        options: VirtualScrollerItemOptions;
    }) => VNode[];
    /**
     * Custom loader template.
     * @param {Object} scope - header slot's params.
     */
    loader: (scope: {
        /**
         * Loader options.
         */
        options: VirtualScrollerLoaderOptions;
    }) => VNode[];
}

export declare type VirtualScrollerEmits = {
    /**
     * Emitted when the numToleratedItems changes.
     * @param {number} value - New number tolerated items
     */
    'update:numToleratedItems': (value: number) => void;
    /**
     * Callback to invoke when scroll position changes.
     * @param {Event} event - Browser event.
    */
    'scroll': (event: Event) => void;
    /**
     * Callback to invoke when scroll position and item's range in view changes.
     * @param {AccordionTabOpenEvent} event - Custom tab open event.
    */
    'scroll-index-change': (event: VirtualScrollerScrollIndexChangeEvent) => void;
    /**
     * Callback to invoke in lazy mode to load new data.
     * @param {VirtualScrollerLazyEvent} event - Custom lazy event.
     */
    'lazy-load': (event: VirtualScrollerLazyEvent) => void;
}

declare class VirtualScroller extends ClassComponent<VirtualScrollerProps, VirtualScrollerSlots, VirtualScrollerEmits> {
    /**
     * Scroll to move to a specific position.
     * @param {ScrollToOptions} [options] - scoll options.
     */
    scrollTo(options?: ScrollToOptions): void;
    /**
     * Scroll to move to a specific item.
     * @param {number} index - Index of item according to orientation mode.
     * @param {ScrollBehavior} [behavior] - Behavior of scroll.
     */
    scrollToIndex(index: number, behavior?: ScrollBehavior): void;
    /**
     * It is used to move the specified index into the view. It is a method that will usually be needed when keyboard support is added to the virtualScroller component.
     * @param {number} index - Index of item according to orientation mode.
     * @param {VirtualScrollerToType} to - Defines the location of the item in view,
     * @param {ScrollBehavior} [behavior] Behavior of scroll
     */
    scrollInView(index: number, to: VirtualScrollerToType, behavior?: ScrollBehavior): void;
    /**
     * Returns the range of items added to the DOM.
     */
    getRenderedRange(): VirtualScrollerRangeMethod;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        VirtualScroller: GlobalComponentConstructor<VirtualScroller>
    }
}

/**
 *
 * VirtualScroller is a performant approach to handle huge data efficiently.
 *
 * Demos:
 *
 * - [VirtualScroller](https://www.primefaces.org/primevue/showcase/#/virtualscroller)
 *
 */
export default VirtualScroller;
