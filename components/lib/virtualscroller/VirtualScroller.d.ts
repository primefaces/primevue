/**
 *
 * VirtualScroller is a performant approach to handle huge data efficiently.
 *
 * [Live Demo](https://www.primevue.org/virtualscroller/)
 *
 * @module virtualscroller
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type VirtualScrollerPassThroughOptionType = VirtualScrollerPassThroughAttributes | ((options: VirtualScrollerPassThroughMethodOptions) => VirtualScrollerPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface VirtualScrollerPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: VirtualScrollerProps;
    /**
     * Defines current inline state.
     */
    state: VirtualScrollerState;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom scroll index change event.
 * @see {@link VirtualScrollerEmits['scroll-index-change']}
 */
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
 * Custom lazy event.
 * @see {@link VirtualScrollerEmits['scroll-index-change']}
 * @extends VirtualScrollerScrollIndexChangeEvent
 */
export interface VirtualScrollerLazyEvent extends VirtualScrollerScrollIndexChangeEvent {}

/**
 * Custom virtualscroller viewport metadata.
 * @see {@link VirtualScrollerEmits['scroll-index-change']}
 * @extends VirtualScrollerScrollIndexChangeEvent
 */
export interface VirtualScrollerViewport extends VirtualScrollerScrollIndexChangeEvent {}

/**
 * Virtual scroller rendered range.
 */
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

/**
 * Custom item options.
 */
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
 * Custom passthrough(pt) options.
 * @see {@link VirtualScrollerProps.pt}
 */
export interface VirtualScrollerPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: VirtualScrollerPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: VirtualScrollerPassThroughOptionType;
    /**
     * Used to pass attributes to the loader's DOM element.
     */
    loader?: VirtualScrollerPassThroughOptionType;
    /**
     * Used to pass attributes to the loading icon's DOM element.
     */
    loadingIcon?: VirtualScrollerPassThroughOptionType;
    /**
     * Used to pass attributes to the spacer's DOM element.
     */
    spacer?: VirtualScrollerPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface VirtualScrollerPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in VirtualScroller component.
 */
export interface VirtualScrollerState {
    /**
     * First index of the new data range to be loaded as a number.
     */
    first: number;
    /**
     * Last index of the new data range to be loaded as a number.
     */
    last: number;
    /**
     * Index of the first item as a number.
     */
    page: number;
    /**
     * Visible item count in the viewport as a number.
     */
    numItemsInViewport: number;
    /**
     * Lastest scroll position as a number.
     */
    lastScrollPos: number;
    /**
     * Additional elements to add to the DOM outside of the view as a number.
     */
    d_numToleratedItems: number;
    /**
     * Current loading state as a boolean.
     * @defaultValue false
     */
    d_loading: number;
    /**
     * Loadable items array.
     */
    loaderArr: any[];
    /**
     * The style of spacer element.
     */
    spacerStyle: any;
    /**
     * The style of content element.
     */
    contentStyle: any;
}

/**
 * Custom virtualscroller loader options
 * @see VirtualScrollerItemOptions
 * @extends VirtualScrollerItemOptions
 */
export interface VirtualScrollerLoaderOptions extends VirtualScrollerItemOptions {}

/**
 * Defines valid properties in VirtualScroller component.
 */
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
    items?: any[] | any[][] | undefined | null;
    /**
     * The height/width of item according to orientation.
     */
    itemSize?: number | number[] | undefined;
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
     * @defaultValue vertical
     */
    orientation?: 'vertical' | 'horizontal' | 'both' | undefined;
    /**
     * Determines how many additional elements to add to the DOM outside of the view.
     * According to the scrolls made up and down, extra items are added in a certain algorithm in the form of multiples of this number.
     * @defaultValue half the number of items shown in the view.
     */
    numToleratedItems?: number | undefined;
    /**
     * Delay in scroll before new data is loaded.
     * @defaultValue 0
     */
    delay?: number | undefined;
    /**
     * Delay after window's resize finishes.
     * @defaultValue 10
     */
    resizeDelay?: number | undefined;
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @defaultValue false
     */
    lazy?: boolean | undefined;
    /**
     * If disabled, the VirtualScroller feature is eliminated and the content is displayed directly.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Used to implement a custom loader instead of using the loader feature in the VirtualScroller.
     * @defaultValue false
     */
    loaderDisabled?: boolean | undefined;
    /**
     * Whether to show loader.
     * @defaultValue false
     */
    showLoader?: boolean | undefined;
    /**
     * Used to implement a custom spacer instead of using the spacer feature in the VirtualScroller.
     * @defaultValue true
     */
    showSpacer?: boolean | undefined;
    /**
     * Whether to load items.
     * @defaultValue false
     */
    loading?: boolean | undefined;
    /**
     * Callback to invoke in lazy mode to load new data.
     * @param {VirtualScrollerLazyEvent} event - Custom lazy event.
     */
    onLazyLoad?(event: VirtualScrollerLazyEvent): void;
    /**
     * Index of the element in tabbing order.
     * @defaultValue 0
     */
    tabindex?: number | string | undefined;
    /**
     * When enabled, positions the content as inline.
     * @defaultValue false
     */
    inline?: boolean | undefined;
    /**
     * Used to specify how many items to load in each load method in lazy mode.
     * @defaultValue 0
     */
    step?: number | undefined;
    /**
     * Used to append each loaded item to top without removing any items from the DOM. Using very large data may cause the browser to crash.
     * @defaultValue false
     */
    appendOnly?: boolean | undefined;
    /**
     * Whether to dynamically change the height or width of scrollable container.
     * @defaultValue false
     */
    autoSize?: boolean | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {VirtualScrollerPassThroughOptions}
     */
    pt?: PassThrough<VirtualScrollerPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in VirtualScroller component.
 */
export interface VirtualScrollerSlots {
    /**
     * Custom content template.
     * @param {Object} scope - content slot's params.
     */
    content(scope: {
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
        contentRef: (el: any) => void;
        /**
         * Options of the items
         * @param {number} index - Rendered index
         * @return {@link VirtualScrollerItemOptions}
         */
        getItemOptions: (index: number) => VirtualScrollerItemOptions;
        /**
         * Whether the data is loaded.
         */
        loading: boolean;
        /**
         * Loader options of the items while the data is loading.
         * @param {number} index - Rendered index
         * @param {*} [ext] - Extra options
         * @return {@link VirtualScrollerItemOptions}
         */
        getLoaderOptions: (index: number, ext?: any) => VirtualScrollerLoaderOptions;
        /**
         * The height/width of item according to orientation.
         */
        itemSize: number | number[] | undefined;
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
    }): VNode[];
    /**
     * Custom item template.
     * @param {Object} scope - item slot's params.
     */
    item(scope: {
        /**
         * Item data.
         */
        item: any;
        /**
         * Item options.
         */
        options: VirtualScrollerItemOptions;
    }): VNode[];
    /**
     * Custom loader template.
     * @param {Object} scope - header slot's params.
     */
    loader(scope: {
        /**
         * Loader options.
         */
        options: VirtualScrollerLoaderOptions;
    }): VNode[];
    /**
     * Custom loading icon template.
     * @param {Object} scope - loadingicon slot's params.
     */
    loadingicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
}

/**
 * Defines valid emits in VirtualScroller component.
 */
export interface VirtualScrollerEmits {
    /**
     * Emitted when the numToleratedItems changes.
     * @param {number} value - New number tolerated items
     */
    'update:numToleratedItems'(value: number): void;
    /**
     * Callback to invoke when scroll position changes.
     * @param {Event} event - Browser event.
     */
    scroll(event: Event): void;
    /**
     * Callback to invoke when scroll position and item's range in view changes.
     * @param {VirtualScrollerScrollIndexChangeEvent} event - Custom tab open event.
     */
    'scroll-index-change'(event: VirtualScrollerScrollIndexChangeEvent): void;
    /**
     * Callback to invoke in lazy mode to load new data.
     * @param {VirtualScrollerLazyEvent} event - Custom lazy event.
     */
    'lazy-load'(event: VirtualScrollerLazyEvent): void;
}

/**
 * **PrimeVue - VirtualScroller**
 *
 * _VirtualScroller is a performant approach to handle huge data efficiently._
 *
 * [Live Demo](https://www.primevue.org/virtualscroller/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
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
     * @param {'to-start' | 'to-end' } to - Defines the location of the item in view,
     * @param {ScrollBehavior} [behavior] Behavior of scroll
     */
    scrollInView(index: number, to: 'to-start' | 'to-end', behavior?: ScrollBehavior): void;
    /**
     * Returns the range of items added to the DOM.
     */
    getRenderedRange(): VirtualScrollerRangeMethod;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        VirtualScroller: GlobalComponentConstructor<VirtualScroller>;
    }
}

export default VirtualScroller;
