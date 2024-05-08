/**
 *
 * Galleria is an advanced content gallery component.
 *
 * [Live Demo](https://www.primevue.org/galleria/)
 *
 * @module galleriastyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum GalleriaClasses {
    mask = 'p-galleria-mask',
    root = 'p-galleria',
    closeButton = 'p-galleria-close-button',
    closeIcon = 'p-galleria-close-icon',
    header = 'p-galleria-header',
    content = 'p-galleria-content',
    footer = 'p-galleria-footer',
    itemsContainer = 'p-galleria-items-container',
    items = 'p-galleria-items',
    previousItemButton = 'p-galleria-prev-button',
    previousItemIcon = 'p-galleria-prev-icon',
    item = 'p-galleria-item',
    nextItemButton = 'p-galleria-next-button',
    nextItemIcon = 'p-galleria-next-icon',
    caption = 'p-galleria-caption',
    indicatorList = 'p-galleria-indicator-list',
    indicator = 'p-galleria-indicator',
    indicatorButton = 'p-galleria-indicator-button',
    thumbnails = 'p-galleria-thumbnails',
    thumbnailContent = 'p-galleria-thumbnails-content',
    previousThumbnailButton = 'p-galleria-thumbnail-prev-button',
    previousThumbnailIcon = 'p-galleria-thumbnail-prev-icon',
    thumbnailsViewport = 'p-galleria-thumbnails-viewport',
    thumbnailItems = 'p-galleria-thumbnail-items',
    thumbnailItem = 'p-galleria-thumbnail-item',
    thumbnail = 'p-galleria-thumbnail',
    nextThumbnailButton = 'p-galleria-thumbnail-next-button',
    nextThumbnailIcon = 'p-galleria-thumbnail-next-icon'
}

export interface GalleriaStyle extends BaseStyle {}
