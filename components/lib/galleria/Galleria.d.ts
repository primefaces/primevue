/**
 *
 * Galleria is an advanced content gallery component.
 *
 * [Live Demo](https://www.primevue.org/galleria/)
 *
 * @module galleria
 *
 */
import { ButtonHTMLAttributes, HTMLAttributes, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
export declare type GalleriaPassThroughOptionType = GalleriaPassThroughAttributes | ((options: GalleriaPassThroughMethodOptions) => GalleriaPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface GalleriaPassThroughMethodOptions {
    instance: any;
    props: GalleriaProps;
    state: GalleriaState;
}

export interface GalleriaResponsiveOptions {
    /**
     * Breakpoint for responsive mode. Exp; @media screen and (max-width: ${breakpoint}) {...}
     */
    breakpoint: string;
    /**
     * The number of visible items on breakpoint.
     */
    numVisible: number;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link GalleriaProps.pt}
 */
export interface GalleriaPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the close button's DOM element.
     */
    closeButton?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the close icon's DOM element.
     */
    closeIcon?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the header's DOM element.
     */
    header?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the footer's DOM element.
     */
    footer?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the item wrapper's DOM element.
     */
    itemWrapper?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the item container's DOM element.
     */
    itemContainer?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the previous item button's DOM element.
     */
    previousItemButton?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the previous item icon's DOM element.
     */
    previousItemIcon?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the item's DOM element.
     */
    item?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the next item button's DOM element.
     */
    nextItemButton?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the next item icon's DOM element.
     */
    nextItemIcon?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the caption's DOM element.
     */
    caption?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the indicators's DOM element.
     */
    indicators?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the indicator's DOM element.
     */
    indicator?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the indicator button's DOM element.
     */
    indicatorButton?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the thumbnail wrapper's DOM element.
     */
    thumbnailWrapper?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the thumbnail container's DOM element.
     */
    thumbnailContainer?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the previous thumbnail button's DOM element.
     */
    previousThumbnailButton?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the previous thumbnail icon's DOM element.
     */
    previousThumbnailIcon?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the thumbnail items container's DOM element.
     */
    thumbnailItemsContainer?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the thumbnail items' DOM element.
     */
    thumbnailItems?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the thumbnail item's DOM element.
     */
    thumbnailItem?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the thumbnail item content's DOM element.
     */
    thumbnailItemContent?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the next thumbnail button's DOM element.
     */
    nextThumbnailButton?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the next thumbnail icon's DOM element.
     */
    nextThumbnailIcon?: GalleriaPassThroughOptionType;
    /**
     * Uses to pass attributes to the mask's DOM element.
     */
    mask?: GalleriaPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface GalleriaPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Galleria component.
 */
export interface GalleriaState {
    /**
     * Current container visible state as a boolean.
     * @defaultValue false
     */
    containerVisible: boolean;
    /**
     * Style id of the component.
     */
    id: string;
    /**
     * Index of the first item as a number.
     * @defaultValue 0
     */
    activeIndex: number;
    /**
     * Number of items per page as a number.
     * @defaultValue 3
     */
    numVisible: number;
    /**
     * Current slide active state as a boolean.
     * @defaultValue false
     */
    slideShowActive: boolean;
    /**
     * Number of items per page as a number.
     * @defaultValue 3
     */
    d_numVisible: number;
    /**
     * Old number of items per page as a number.
     * @defaultValue 3
     */
    d_oldNumVisible: number;
    /**
     * Current active item index as a number.
     * @defaultValue 0
     */
    d_activeIndex: number;
    /**
     * The previous active item index as a number.
     * @defaultValue 0
     */
    d_oldActiveItemIndex: number;
    /**
     * Index of the first item.
     * @defaultValue 0
     */
    page: number;
    /**
     * Total shifted items' count as a number.
     * @defaultValue 0
     */
    totalShiftedItems: number;
}

/**
 * Defines valid properties in Galleria component.
 */
export interface GalleriaProps {
    /**
     * Unique identifier of the element.
     */
    id?: string | undefined;
    /**
     * An array of objects to display.
     */
    value?: any[];
    /**
     * Index of the first item.
     * @defaultValue 0
     */
    activeIndex?: number | undefined;
    /**
     * Whether to display the component on fullscreen.
     * @defaultValue false
     */
    fullScreen?: boolean | undefined;
    /**
     * Specifies the visibility of the mask on fullscreen mode.
     * @defaultValue false
     */
    visible?: boolean | undefined;
    /**
     * Number of items per page.
     * @defaultValue 3
     */
    numVisible?: number | undefined;
    /**
     * An array of options for responsive design.
     * @see GalleriaResponsiveOptions
     */
    responsiveOptions?: GalleriaResponsiveOptions[];
    /**
     * Whether to display navigation buttons in item section.
     * @defaultValue false
     */
    showItemNavigators?: boolean | undefined;
    /**
     * Whether to display navigation buttons in thumbnail container.
     * @defaultValue true
     */
    showThumbnailNavigators?: boolean | undefined;
    /**
     * Whether to display navigation buttons on item hover.
     * @defaultValue false
     */
    showItemNavigatorsOnHover?: boolean | undefined;
    /**
     * When enabled, item is changed on indicator hover.
     * @defaultValue false
     */
    changeItemOnIndicatorHover?: boolean | undefined;
    /**
     * Defines if scrolling would be infinite.
     * @defaultValue false
     */
    circular?: boolean | undefined;
    /**
     * Items are displayed with a slideshow in autoPlay mode.
     * @defaultValue false
     */
    autoPlay?: boolean | undefined;
    /**
     * Time in milliseconds to scroll items.
     * @defaultValue 4000
     */
    transitionInterval?: number | undefined;
    /**
     * Whether to display thumbnail container.
     * @defaultValue true
     */
    showThumbnails?: boolean | undefined;
    /**
     * Position of thumbnails.
     * @defaultValue bottom
     */
    thumbnailsPosition?: 'bottom' | 'top' | 'left' | 'right' | undefined;
    /**
     * Height of the viewport in vertical thumbnail.
     * @defaultValue 300px
     */
    verticalThumbnailViewPortHeight?: string | undefined;
    /**
     * Whether to display indicator container.
     * @defaultValue false
     */
    showIndicators?: boolean | undefined;
    /**
     * When enabled, indicator container is displayed on item container.
     * @defaultValue false
     */
    showIndicatorsOnItem?: boolean | undefined;
    /**
     * Position of indicators.
     * @defaultValue bottom
     */
    indicatorsPosition?: 'bottom' | 'top' | 'left' | 'right' | undefined;
    /**
     * Base zIndex value to use in layering.
     * @defaultValue 0
     */
    baseZIndex?: number | undefined;
    /**
     * Style class of the mask on fullscreen mode.
     */
    maskClass?: string | undefined;
    /**
     * Inline style of the component on fullscreen mode. Otherwise, the 'style' property can be used.
     */
    containerStyle?: any | undefined;
    /**
     * Style class of the component on fullscreen mode. Otherwise, the 'class' property can be used.
     */
    containerClass?: any | undefined;
    /**
     * Uses to pass all properties of the HTMLDivElement to the container element on fullscreen mode.
     */
    containerProps?: HTMLAttributes | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the previous navigation button.
     */
    prevButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the next navigation button.
     */
    nextButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {GalleriaPassThroughOptions}
     */
    pt?: GalleriaPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}
/**
 * Defines valid slots in Galleria slots.
 */
export interface GalleriaSlots {
    /**
     * Custom header template.
     */
    header(): VNode[];
    /**
     * Custom footer template.
     */
    footer(): VNode[];
    /**
     * Custom item template.
     * @param {Object} scope - item slot's params.
     */
    item(scope: {
        /**
         * Item instance
         */
        item: any;
    }): VNode[];
    /**
     * Custom caption template.
     * @param {Object} scope - caption slot's params.
     */
    caption(scope: {
        /**
         * Item instance
         */
        item: any;
    }): VNode[];
    /**
     * Custom indicator template.
     * @param {Object} scope - indicator slot's params.
     */
    indicator(scope: {
        /**
         * Index of the indicator item
         */
        index: number;
    }): VNode[];
    /**
     * Custom thumbnail template.
     * @param {Object} scope - thumbnail slot's params.
     */
    thumbnail(scope: {
        /**
         * Item instance
         */
        item: any;
    }): VNode[];
    /**
     * Custom close icon template.
     */
    closeicon(): VNode[];
    /**
     * Custom navigator previous item icon template.
     */
    previousitemicon(): VNode[];
    /**
     * Custom navigator next item icon template.
     */
    nextitemicon(): VNode[];
    /**
     * Custom thumbnail previous icon template.
     */
    previousthumbnailicon(): VNode[];
    /**
     * Custom thumbnail next item template.
     */
    nextthumbnailicon(): VNode[];
}

/**
 * Defines valid emits in Galleria component.
 */
export interface GalleriaEmits {
    /**
     * Emitted when the active index changes.
     * @param {number} value - Index of new active item.
     */
    'update:activeIndex'(value: number): void;
    /**
     * Emitted when the visible changes.
     * @param {boolean} value - New value.
     */
    'update:visible'(value: boolean): void;
}

/**
 * **PrimeVue - Galleria**
 *
 * _Galleria is an advanced content gallery component._
 *
 * [Live Demo](https://www.primevue.org/galleria/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Galleria extends ClassComponent<GalleriaProps, GalleriaSlots, GalleriaEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Galleria: GlobalComponentConstructor<Galleria>;
    }
}

export default Galleria;
