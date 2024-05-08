/**
 *
 * ConfirmPopup displays a confirmation overlay displayed relatively to its target.
 *
 * [Live Demo](https://www.primevue.org/confirmpopup)
 *
 * @module confirmpopupstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum ConfirmPopupClasses {
    root = 'p-confirmpopup',
    content = 'p-confirmpopup-content',
    icon = 'p-confirmpopup-icon',
    message = 'p-confirmpopup-message',
    footer = 'p-confirmpopup-footer',
    pcRejectButton = 'p-confirmpopup-reject-button',
    pcAcceptButton = 'p-confirmpopup-accept-button'
}

export interface ConfirmPopupStyle extends BaseStyle {}
