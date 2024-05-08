/**
 *
 * ConfirmDialog uses a Dialog UI with confirmDialog method or <ConfirmDialog> tag.
 *
 * [Live Demo](https://www.primevue.org/confirmdialog)
 *
 * @module confirmdialogstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum ConfirmDialogClasses {
    root = 'p-confirmdialog',
    icon = 'p-confirmdialog-icon',
    message = 'p-confirmdialog-message',
    pcRejectButton = 'p-confirmdialog-reject-button',
    pcAcceptButton = 'p-confirmdialog-accept-button'
}

export interface ConfirmDialogStyle extends BaseStyle {}
