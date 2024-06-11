/**
 *
 * Displays an image with preview and tranformation options. For multiple image, see Galleria.
 *
 * [Live Demo](https://www.primevue.org/image/)
 *
 * @module imagestyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum ImageClasses {
    /**
     * Class name of the root element
     */
    root = 'p-image',
    /**
     * Class name of the preview mask element
     */
    previewMask = 'p-image-preview-mask',
    /**
     * Class name of the preview icon element
     */
    previewIcon = 'p-image-preview-icon',
    /**
     * Class name of the mask element
     */
    mask = 'p-image-mask',
    /**
     * Class name of the toolbar element
     */
    toolbar = 'p-image-toolbar',
    /**
     * Class name of the rotate right button element
     */
    rotateRightButton = 'p-image-rotate-right-button',
    /**
     * Class name of the rotate left button element
     */
    rotateLeftButton = 'p-image-rotate-left-button',
    /**
     * Class name of the zoom out button element
     */
    zoomOutButton = 'p-image-zoom-out-button',
    /**
     * Class name of the zoom in button element
     */
    zoomInButton = 'p-image-zoom-in-button',
    /**
     * Class name of the close button element
     */
    closeButton = 'p-image-close-button',
    /**
     * Class name of the original element
     */
    original = 'p-image-original'
}

export interface ImageStyle extends BaseStyle {}
