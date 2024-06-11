/**
 *
 * ConfirmDialog uses a Dialog UI with confirmDialog method or <ConfirmDialog> tag.
 *
 * [Live Demo](https://www.primevue.org/confirmdialog)
 *
 * @module confirmdialogstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum ConfirmDialogClasses {
    /**
     * Class name of the root element
     */
    root = 'p-confirmdialog',
    /**
     * Class name of the icon element
     */
    icon = 'p-confirmdialog-icon',
    /**
     * Class name of the message element
     */
    message = 'p-confirmdialog-message',
    /**
     * Class name of the reject button element
     */
    pcRejectButton = 'p-confirmdialog-reject-button',
    /**
     * Class name of the accept button element
     */
    pcAcceptButton = 'p-confirmdialog-accept-button'
}

export interface ConfirmDialogStyle extends BaseStyle {}
