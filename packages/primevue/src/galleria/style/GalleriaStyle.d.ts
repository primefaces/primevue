/**
 *
 * Galleria is an advanced content gallery component.
 *
 * [Live Demo](https://www.primevue.org/galleria/)
 *
 * @module galleriastyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum GalleriaClasses {
    /**
     * Class name of the mask element
     */
    mask = 'p-galleria-mask',
    /**
     * Class name of the root element
     */
    root = 'p-galleria',
    /**
     * Class name of the close button element
     */
    closeButton = 'p-galleria-close-button',
    /**
     * Class name of the close icon element
     */
    closeIcon = 'p-galleria-close-icon',
    /**
     * Class name of the header element
     */
    header = 'p-galleria-header',
    /**
     * Class name of the content element
     */
    content = 'p-galleria-content',
    /**
     * Class name of the footer element
     */
    footer = 'p-galleria-footer',
    /**
     * Class name of the items container element
     */
    itemsContainer = 'p-galleria-items-container',
    /**
     * Class name of the items element
     */
    items = 'p-galleria-items',
    /**
     * Class name of the previous item button element
     */
    prevButton = 'p-galleria-prev-button',
    /**
     * Class name of the previous item icon element
     */
    prevIcon = 'p-galleria-prev-icon',
    /**
     * Class name of the item element
     */
    item = 'p-galleria-item',
    /**
     * Class name of the next item button element
     */
    nextButton = 'p-galleria-next-button',
    /**
     * Class name of the next item icon element
     */
    nextIcon = 'p-galleria-next-icon',
    /**
     * Class name of the caption element
     */
    caption = 'p-galleria-caption',
    /**
     * Class name of the indicator list element
     */
    indicatorList = 'p-galleria-indicator-list',
    /**
     * Class name of the indicator element
     */
    indicator = 'p-galleria-indicator',
    /**
     * Class name of the indicator button element
     */
    indicatorButton = 'p-galleria-indicator-button',
    /**
     * Class name of the thumbnails element
     */
    thumbnails = 'p-galleria-thumbnails',
    /**
     * Class name of the thumbnail content element
     */
    thumbnailContent = 'p-galleria-thumbnails-content',
    /**
     * Class name of the previous thumbnail button element
     */
    previousThumbnailButton = 'p-galleria-thumbnail-prev-button',
    /**
     * Class name of the previous thumbnail icon element
     */
    previousThumbnailIcon = 'p-galleria-thumbnail-prev-icon',
    /**
     * Class name of the thumbnails viewport element
     */
    thumbnailsViewport = 'p-galleria-thumbnails-viewport',
    /**
     * Class name of the thumbnail items element
     */
    thumbnailItems = 'p-galleria-thumbnail-items',
    /**
     * Class name of the thumbnail item element
     */
    thumbnailItem = 'p-galleria-thumbnail-item',
    /**
     * Class name of the thumbnail element
     */
    thumbnail = 'p-galleria-thumbnail',
    /**
     * Class name of the next thumbnail button element
     */
    nextThumbnailButton = 'p-galleria-thumbnail-next-button',
    /**
     * Class name of the next thumbnail icon element
     */
    nextThumbnailIcon = 'p-galleria-thumbnail-next-icon'
}

export interface GalleriaStyle extends BaseStyle {}
