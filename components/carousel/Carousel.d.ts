/**
 *
 * Carousel is a content slider featuring various customization options.
 *
 * [Live Demo](https://www.primevue.org/carousel/)
 *
 * @module carousel
 *
 */
import { ButtonHTMLAttributes, VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
/**
 * Defines valid properties in Carousel component.
 */
export interface CarouselProps {
    /**
     * An array of objects to display.
     */
    value?: any | undefined;
    /**
     * Index of the first item.
     * @defaultValue 0
     */
    page?: number | undefined;
    /**
     * Number of items per page.
     * @defaultValue 1
     */
    numVisible?: number | undefined;
    /**
     * Number of items to scroll.
     * @defaultValue 1
     */
    numScroll?: number | undefined;
    /**
     * An array of options for responsive design.
     * @see CarouselResponsiveOptions
     */
    responsiveOptions?: CarouselResponsiveOptions[] | undefined;
    /**
     * Specifies the layout of the component, valid values are 'horizontal' and 'vertical'.
     * @defaultValue horizontal
     */
    orientation?: 'horizontal' | 'vertical' | undefined;
    /**
     * Height of the viewport in vertical layout.
     * @defaultValue 300px
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
     * @defaultValue false
     */
    circular?: boolean | undefined;
    /**
     * Time in milliseconds to scroll items automatically.
     * @defaultValue 0
     */
    autoplayInterval?: number | undefined;
    /**
     * Whether to display navigation buttons in container.
     * @defaultValue true
     */
    showNavigators?: boolean | undefined;
    /**
     * Whether to display indicator container.
     * @defaultValue true
     */
    showIndicators?: boolean | undefined;
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
 * Defines valid slots in Carousel slots.
 */
export interface CarouselSlots {
    /**
     * Custom content for each item.
     * @param {Object} scope - item slot's params.
     */
    item(scope: {
        /**
         * Data of the component
         */
        data: any;
        /**
         * Index of the item
         */
        index: number;
    }): VNode[];
    /**
     * Custom header template.
     */
    header(): VNode[];
    /**
     * Custom footer template.
     */
    footer(): VNode[];
}

/**
 * Defines valid emits in Carousel component.
 */
export interface CarouselEmits {
    /**
     * Emitted when the page changes.
     * @param {number} value - New page value.
     */
    'update:page'(value: number): void;
}

/**
 * **PrimeVue - Carousel**
 *
 * _Carousel is a content slider featuring various customization options._
 *
 * [Live Demo](https://www.primevue.org/carousel/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Carousel extends ClassComponent<CarouselProps, CarouselSlots, CarouselEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Carousel: GlobalComponentConstructor<Carousel>;
    }
}

export default Carousel;
