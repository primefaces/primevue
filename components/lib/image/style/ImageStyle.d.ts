/**
 *
 * Displays an image with preview and tranformation options. For multiple image, see Galleria.
 *
 * [Live Demo](https://www.primevue.org/image/)
 *
 * @module imagestyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum ImageClasses {
    root = 'p-image',
    previewMask = 'p-image-preview-mask',
    previewIcon = 'p-image-preview-icon',
    mask = 'p-image-mask',
    toolbar = 'p-image-toolbar',
    rotateRightButton = 'p-image-rotate-right-button',
    rotateLeftButton = 'p-image-rotate-left-button',
    zoomOutButton = 'p-image-zoom-out-button',
    zoomInButton = 'p-image-zoom-in-button',
    closeButton = 'p-image-close-button',
    original = 'p-image-original'
}

export interface ImageStyle extends BaseStyle {}
