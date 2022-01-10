import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type GalleriaThumbnailsPositionType = 'bottom' | 'top' | 'left' | 'right' | undefined;

type GalleriaIndicatorsPositionType = 'bottom' | 'top' | 'left' | 'right' | undefined;

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
     * Default value is 0.
     */
    activeIndex?: number | undefined;
    /**
     * Whether to display the component on fullscreen.
     */
    fullScreen?: boolean | undefined;
    /**
     * Specifies the visibility of the mask on fullscreen mode.
     */
    visible?: boolean | undefined;
    /**
     * Number of items per page.
     */
    numVisible?: number | undefined;
    /**
     * An array of options for responsive design.
     * @see GalleriaResponsiveOptions
     */
    responsiveOptions?: GalleriaResponsiveOptions[];
    /**
     * Whether to display navigation buttons in item section.
     */
    showItemNavigators?: boolean | undefined;
    /**
     * Whether to display navigation buttons in thumbnail container.
     * Default value is true.
     */
    showThumbnailNavigators?: boolean | undefined;
    /**
     * Whether to display navigation buttons on item hover.
     */
    showItemNavigatorsOnHover?: boolean | undefined;
    /**
     * When enabled, item is changed on indicator hover.
     */
    changeItemOnIndicatorHover?: boolean | undefined;
    /**
     * Defines if scrolling would be infinite.
     */
    circular?: boolean | undefined;
    /**
     * Items are displayed with a slideshow in autoPlay mode.
     */
    autoPlay?: boolean | undefined;
    /**
     * Time in milliseconds to scroll items.
     * Default value is 4000.
     */
    transitionInterval?: number | undefined;
    /**
     * Whether to display thumbnail container.
     * Default value is true.
     */
    showThumbnails?: boolean | undefined;
    /**
     * Position of thumbnails.
     * @see GalleriaThumbnailsPositionType
     * Default value is 'bottom'.
     */
    thumbnailsPosition?: GalleriaThumbnailsPositionType;
    /**
     * Height of the viewport in vertical thumbnail.
     * Default value is '300px'.
     */
    verticalThumbnailViewPortHeight?: string | undefined;
    /**
     * Whether to display indicator container.
     */
    showIndicators?: boolean | undefined;
    /**
     * When enabled, indicator container is displayed on item container.
     */
    showIndicatorsOnItem?: boolean | undefined;
    /**
     * Position of indicators.
     * @see GalleriaIndicatorsPositionType
     * Default value is 'bottom'.
     */
    indicatorsPosition?: GalleriaIndicatorsPositionType;
    /**
     * Base zIndex value to use in layering.
     * Default value is 0.
     */
    baseZIndex?: number | undefined;
    /**
     * Style class of the mask on fullscreen mode.
     */
    maskClass?: string | undefined;
    /**
     * Inline style of the component on fullscreen mode. Otherwise, the 'style' property can be used.
     */
    containerStyle?: any;
    /**
     * Style class of the component on fullscreen mode. Otherwise, the 'class' property can be used.
     */
    containerClass?: any;
}

export interface GalleriaSlots {
    /**
     * Custom header template.
     */
    header: () => VNode[];
    /**
     * Custom footer template.
     */
    footer: () => VNode[];
    /**
     * Custom item template.
     * @param {Object} scope - item slot's params.
     */
    item: (scope: {
        /**
         * Item instance
         */
        item: any;
    }) => VNode[];
    /**
     * Custom caption template.
     * @param {Object} scope - caption slot's params.
     */
    caption: (scope: {
        /**
         * Item instance
         */
        item: any;
    }) => VNode[];
    /**
     * Custom indicator template.
     * @param {Object} scope - indicator slot's params.
     */
    indicator: (scope: {
        /**
         * Index of the indicator item
         */
        index: number;
    }) => VNode[];
    /**
     * Custom thumbnail template.
     * @param {Object} scope - thumbnail slot's params.
     */
    thumbnail: (scope: {
        /**
         * Item instance
         */
        item: any;
    }) => VNode[];
}

export declare type GalleriaEmits = {
    /**
     * Emitted when the active index changes.
     * @param {number} value - Index of new active item.
     */
    'update:activeIndex': (value: number) => void;
    /**
     * Emitted when the visible changes.
     * @param {boolean} value - New value.
     */
    'update:visible': (value: boolean) => void;
}

declare class Galleria extends ClassComponent<GalleriaProps, GalleriaSlots, GalleriaEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Galleria: GlobalComponentConstructor<Galleria>
    }
}

/**
 *
 * Galleria is an advanced content gallery component.
 *
 * Demos:
 *
 * - [Galleria](https://www.primefaces.org/primevue/showcase/#/galleria)
 *
 */
export default Galleria;
