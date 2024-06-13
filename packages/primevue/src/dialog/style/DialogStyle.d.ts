/**
 *
 * Dialog is a container to display content in an overlay window.
 *
 * [Live Demo](https://www.primevue.org/dialog)
 *
 * @module dialogstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum DialogClasses {
    /**
     * Class name of the mask element
     */
    mask = 'p-dialog-mask',
    /**
     * Class name of the root element
     */
    root = 'p-dialog',
    /**
     * Class name of the header element
     */
    header = 'p-dialog-header',
    /**
     * Class name of the title element
     */
    title = 'p-dialog-title',
    /**
     * Class name of the header actions element
     */
    headerActions = 'p-dialog-header-actions',
    /**
     * Class name of the maximize button element
     */
    pcMaximizeButton = 'p-dialog-maximize-button',
    /**
     * Class name of the close button element
     */
    pcCloseButton = 'p-dialog-close-button',
    /**
     * Class name of the content element
     */
    content = 'p-dialog-content',
    /**
     * Class name of the footer element
     */
    footer = 'p-dialog-footer'
}

export interface DialogStyle extends BaseStyle {}
