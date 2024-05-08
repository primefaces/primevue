/**
 *
 * Dialog is a container to display content in an overlay window.
 *
 * [Live Demo](https://www.primevue.org/dialog)
 *
 * @module dialogstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum DialogClasses {
    mask = 'p-dialog-mask',
    root = 'p-dialog',
    header = 'p-dialog-header',
    title = 'p-dialog-title',
    headerActions = 'p-dialog-header-actions',
    pcMaximizeButton = 'p-dialog-maximize-button',
    pcCloseButton = 'p-dialog-close-button',
    content = 'p-dialog-content',
    footer = 'p-dialog-footer'
}

export interface DialogStyle extends BaseStyle {}
