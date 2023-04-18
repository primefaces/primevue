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
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
