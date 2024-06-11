/**
 *
 * Carousel is a content slider featuring various customization options.
 *
 * [Live Demo](https://www.primevue.org/carousel/)
 *
 * @module carouselstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum CarouselClasses {
    /**
     * Class name of the root element
     */
    root = 'p-carousel',
    /**
     * Class name of the header element
     */
    header = 'p-carousel-header',
    /**
     * Class name of the content container element
     */
    contentContainer = 'p-carousel-content-container',
    /**
     * Class name of the content element
     */
    content = 'p-carousel-content',
    /**
     * Class name of the previous button element
     */
    pcPrevButton = 'p-carousel-prev-button',
    /**
     * Class name of the viewport element
     */
    viewport = 'p-carousel-viewport',
    /**
     * Class name of the item list element
     */
    itemList = 'p-carousel-item-list',
    /**
     * Class name of the item clone element
     */
    itemClone = 'p-carousel-item-clone',
    /**
     * Class name of the item element
     */
    item = 'p-carousel-item',
    /**
     * Class name of the next button element
     */
    pcNextButton = 'p-carousel-next-button',
    /**
     * Class name of the indicator list element
     */
    indicatorList = 'p-carousel-indicator-list',
    /**
     * Class name of the indicator element
     */
    indicator = 'p-carousel-indicator',
    /**
     * Class name of the indicator button element
     */
    indicatorButton = 'p-carousel-indicator-button',
    /**
     * Class name of the footer element
     */
    footer = 'p-carousel-footer'
}

export interface CarouselStyle extends BaseStyle {}
