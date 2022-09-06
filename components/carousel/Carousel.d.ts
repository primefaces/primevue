import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type CarouselOrientationType = 'horizontal' | 'vertical' | undefined;

export interface CarouselResponsiveOptions {
    /**
     * Breakpoint for responsive mode. Exp; @media screen and (max-width: ${breakpoint}) {...}
     */
    breakpoint: string;
    /**
     * The number of visible items on breakpoint.
     */
    numVisible: number;
    /**
     * The number of scrolled items on breakpoint.
     */
    numScroll: number;
}

export interface CarouselProps {
    /**
     * An array of objects to display.
     */
    value?: any | undefined;
    /**
     * Index of the first item.
     * Default value is 0.
     */
	page?: number | undefined;
    /**
     * Number of items per page.
     * Default value is 1.
     */
	numVisible?: number | undefined;
    /**
     * Number of items to scroll.
     * Default value is 1.
     */
	numScroll?: number | undefined;
    /**
     * An array of options for responsive design.
     * @see CarouselResponsiveOptions
     */
	responsiveOptions?: CarouselResponsiveOptions[] | undefined;
    /**
     * Specifies the layout of the component, valid values are 'horizontal' and 'vertical'.
     * @see CarouselOrientationType
     * Default value is 'horizontal'.
     */
	orientation?: CarouselOrientationType;
    /**
     * Height of the viewport in vertical layout.
     * Default value is '300px'.
     */
	verticalViewPortHeight?: string | undefined;
    /**
     * Style class of the viewport container.
     */
	containerClass?: any;
    /**
     * Style class of main content.
     */
	contentClass?: any;
    /**
     * Style class of the indicator items.
     */
	indicatorsContentClass?: any;
    /**
     * Defines if scrolling would be infinite.
     */
	circular?: boolean | undefined;
    /**
     * Time in milliseconds to scroll items automatically.
     * Default value is 0.
     */
	autoplayInterval?: number | undefined;
}

export interface CarouselSlots {
    /**
     * Custom content for each item.
     * @param {Object} scope - item slot's params.
     */
    item: (scope: {
        /**
         * Data of the component
         */
        data: any;
        /**
         * Index of the item
         */
        index: number;
    }) => VNode[];
	/**
     * Custom header template.
     */
    header: () => VNode[];
     /**
      * Custom footer template.
      */
    footer: () => VNode[];
}

export declare type CarouselEmits = {
    /**
     * Emitted when the page changes.
     * @param {number} value - New page value.
     */
    'update:page': (value: number) => void;
}

declare class Carousel extends ClassComponent<CarouselProps, CarouselSlots, CarouselEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Carousel: GlobalComponentConstructor<Carousel>
    }
}

/**
 *
 * Carousel is a content slider featuring various customization options.
 *
 * Demos:
 *
 * - [Carousel](https://www.primefaces.org/primevue/showcase/#/carousel)
 *
 */
export default Carousel;
