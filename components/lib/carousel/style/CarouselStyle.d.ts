/**
 *
 * Carousel is a content slider featuring various customization options.
 *
 * [Live Demo](https://www.primevue.org/carousel/)
 *
 * @module carouselstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum CarouselClasses {
    root = 'p-carousel',
    header = 'p-carousel-header',
    contentContainer = 'p-carousel-content-container',
    content = 'p-carousel-content',
    pcPreviousButton = 'p-carousel-prev-button',
    viewport = 'p-carousel-viewport',
    itemList = 'p-carousel-item-list',
    itemClone = 'p-carousel-item-clone',
    item = 'p-carousel-item',
    pcNextButton = 'p-carousel-next-button',
    indicatorList = 'p-carousel-indicator-list',
    indicator = 'p-carousel-indicator',
    indicatorButton = 'p-carousel-indicator-button',
    footer = 'p-carousel-footer'
}

export interface CarouselStyle extends BaseStyle {}
