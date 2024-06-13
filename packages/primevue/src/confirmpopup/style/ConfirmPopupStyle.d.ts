/**
 *
 * ConfirmPopup displays a confirmation overlay displayed relatively to its target.
 *
 * [Live Demo](https://www.primevue.org/confirmpopup)
 *
 * @module confirmpopupstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum ConfirmPopupClasses {
    /**
     * Class name of the root element
     */
    root = 'p-confirmpopup',
    /**
     * Class name of the content element
     */
    content = 'p-confirmpopup-content',
    /**
     * Class name of the icon element
     */
    icon = 'p-confirmpopup-icon',
    /**
     * Class name of the message element
     */
    message = 'p-confirmpopup-message',
    /**
     * Class name of the footer element
     */
    footer = 'p-confirmpopup-footer',
    /**
     * Class name of the reject button element
     */
    pcRejectButton = 'p-confirmpopup-reject-button',
    /**
     * Class name of the accept button element
     */
    pcAcceptButton = 'p-confirmpopup-accept-button'
}

export interface ConfirmPopupStyle extends BaseStyle {}
