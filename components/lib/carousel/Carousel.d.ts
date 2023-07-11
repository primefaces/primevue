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
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type CarouselPassThroughOptionType = CarouselPassThroughAttributes | ((options: CarouselPassThroughMethodOptions) => CarouselPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface CarouselPassThroughMethodOptions {
    instance: any;
    props: CarouselProps;
    state: CarouselState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link CarouselProps.pt}
 */
export interface CarouselPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: CarouselPassThroughOptionType;
    /**
     * Uses to pass attributes to the header's DOM element.
     */
    header?: CarouselPassThroughOptionType;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: CarouselPassThroughOptionType;
    /**
     * Uses to pass attributes to the container's DOM element.
     */
    container?: CarouselPassThroughOptionType;
    /**
     * Uses to pass attributes to the previous button's DOM element.
     */
    previousButton?: CarouselPassThroughOptionType;
    /**
     * Uses to pass attributes to the previous button icon's DOM element.
     */
    previousButtonIcon?: CarouselPassThroughOptionType;
    /**
     * Uses to pass attributes to the items content's DOM element.
     */
    itemsContent?: CarouselPassThroughOptionType;
    /**
     * Uses to pass attributes to the items container's DOM element.
     */
    itemsContainer?: CarouselPassThroughOptionType;
    /**
     * Uses to pass attributes to the item cloned's DOM element.
     */
    itemCloned?: CarouselPassThroughOptionType;
    /**
     * Uses to pass attributes to the item's DOM element.
     */
    item?: CarouselPassThroughOptionType;
    /**
     * Uses to pass attributes to the next button's DOM element.
     */
    nextButton?: CarouselPassThroughOptionType;
    /**
     * Uses to pass attributes to the next button icon's DOM element.
     */
    nextButtonIcon?: CarouselPassThroughOptionType;
    /**
     * Uses to pass attributes to the indicators's DOM element.
     */
    indicators?: CarouselPassThroughOptionType;
    /**
     * Uses to pass attributes to the indicator's DOM element.
     */
    indicator?: CarouselPassThroughOptionType;
    /**
     * Uses to pass attributes to the indicator button's DOM element.
     */
    indicatorButton?: CarouselPassThroughOptionType;
    /**
     * Uses to pass attributes to the footer's DOM element.
     */
    footer?: CarouselPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface CarouselPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Carousel component.
 */
export interface CarouselState {
    /**
     * Remaining items' count as a number.
     * @defaultValue 0
     */
    remainingItems: number;
    /**
     * Number of items per page as a number.
     * @defaultValue 1
     */
    d_numVisible: number;
    /**
     * Number of items to scroll as a number.
     * @defaultValue 1
     */
    d_numScroll: number;
    /**
     * Old number of items to scroll as a number.
     * @defaultValue 0
     */
    d_oldNumScroll: number;
    /**
     * Old number of items per page as a number.
     * @defaultValue 0
     */
    d_oldNumVisible: number;
    /**
     * Old array of objects to display.
     */
    d_oldValue: number;
    /**
     * Index of the first item.
     * @defaultValue 0
     */
    d_page: number;
    /**
     * Total shifted items' count as a number.
     * @defaultValue 0
     */
    totalShiftedItems: number;
    /**
     * Allow autoplay as a boolean.
     * @defaultValue false
     */
    allowAutoplay: boolean;
    /**
     * Defines if scrolling would be infinite as a boolean.
     * @defaultValue false
     */
    d_circular: boolean;
    /**
     * Swipe threshold count as a number.
     * @defaultValue 20
     */
    swipeThreshold: number;
}

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
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {CarouselPassThroughOptions}
     */
    pt?: CarouselPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
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
    /**
     * Custom previous icon template.
     */
    previousicon(): VNode[];
    /**
     * Custom next icon template.
     */
    nexticon(): VNode[];
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
