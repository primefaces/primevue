/**
 *
 * Carousel is a content slider featuring various customization options.
 *
 * [Live Demo](https://www.primevue.org/carousel/)
 *
 * @module carousel
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { ButtonPassThroughOptions } from 'primevue/button';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type CarouselPassThroughOptionType = CarouselPassThroughAttributes | ((options: CarouselPassThroughMethodOptions) => CarouselPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface CarouselPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: CarouselProps;
    /**
     * Defines current inline state.
     */
    state: CarouselState;
    /**
     * Defines current options.
     */
    context: CarouselContext;
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
 * Custom shared passthrough(pt) option method.
 */
export interface CarouselSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: CarouselProps;
    /**
     * Defines current inline state.
     */
    state: CarouselState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link CarouselProps.pt}
 */
export interface CarouselPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CarouselPassThroughOptionType;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: CarouselPassThroughOptionType;
    /**
     * Used to pass attributes to the content container's DOM element.
     */
    contentContainer?: CarouselPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: CarouselPassThroughOptionType;
    /**
     * Used to pass attributes to the previous button's DOM element.
     * @see {@link ButtonPassThroughOptions}
     */
    pcPrevButton?: ButtonPassThroughOptions<CarouselSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the viewport's DOM element.
     */
    viewport?: CarouselPassThroughOptionType;
    /**
     * Used to pass attributes to the items list's DOM element.
     */
    itemList?: CarouselPassThroughOptionType;
    /**
     * Used to pass attributes to the item clone's DOM element.
     */
    itemClone?: CarouselPassThroughOptionType;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: CarouselPassThroughOptionType;
    /**
     * Used to pass attributes to the next button's DOM element.
     * @see {@link ButtonPassThroughOptions}
     */
    pcNextButton?: ButtonPassThroughOptions<CarouselSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the indicator list's DOM element.
     */
    indicatorList?: CarouselPassThroughOptionType;
    /**
     * Used to pass attributes to the indicator's DOM element.
     */
    indicator?: CarouselPassThroughOptionType;
    /**
     * Used to pass attributes to the indicator button's DOM element.
     */
    indicatorButton?: CarouselPassThroughOptionType;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: CarouselPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
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

/**
 * Defines current inline options in Carousel component.
 */
export interface CarouselContext {
    /**
     * Current highlighted state of the indicator as a boolean.
     * @defaultValue false
     */
    highlighted: boolean;
    /**
     * Index of the item as a number.
     */
    index: number;
    /**
     * Current active state of the item as a boolean.
     * @defaultValue false
     */
    active: boolean;
    /**
     * Current start state of the item as a boolean.
     * @defaultValue false
     */
    start: boolean;
    /**
     * Current end state of the item as a boolean.
     * @defaultValue false
     */
    end: boolean;
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
     * Used to pass attributes to the previous Button component.
     * @defaultValue { severity: 'secondary', text: true, rounded: true }
     */
    prevButtonProps?: object | undefined;
    /**
     * Used to pass attributes to the next Button component.
     * @defaultValue { severity: 'secondary', text: true, rounded: true }
     */
    nextButtonProps?: object | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {CarouselPassThroughOptions}
     */
    pt?: PassThrough<CarouselPassThroughOptions>;
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
    previcon(): VNode[];
    /**
     * Custom next icon template.
     */
    nexticon(): VNode[];
    /**
     * Custom empty template.
     */
    empty(): VNode[];
}

/**
 * Defines valid emits in Carousel component.
 */
export interface CarouselEmitsOptions {
    /**
     * Emitted when the page changes.
     * @param {number} value - New page value.
     */
    'update:page'(value: number): void;
}

export declare type CarouselEmits = EmitFn<CarouselEmitsOptions>;

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
declare const Carousel: DefineComponent<CarouselProps, CarouselSlots, CarouselEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Carousel: DefineComponent<CarouselProps, CarouselSlots, CarouselEmits>;
    }
}

export default Carousel;
