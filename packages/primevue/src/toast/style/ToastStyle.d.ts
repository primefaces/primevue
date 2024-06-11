/**
 *
 * Toast is used to display messages in an overlay.
 *
 * [Live Demo](https://www.primevue.org/toast/)
 *
 * @module toaststyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum ToastClasses {
    /**
     * Class name of the root element
     */
    root = 'p-toast',
    /**
     * Class name of the message element
     */
    message = 'p-toast-message',
    /**
     * Class name of the message content element
     */
    messageContent = 'p-toast-message-content',
    /**
     * Class name of the message icon element
     */
    messageIcon = 'p-toast-message-icon',
    /**
     * Class name of the message text element
     */
    messageText = 'p-toast-message-text',
    /**
     * Class name of the summary element
     */
    summary = 'p-toast-summary',
    /**
     * Class name of the detail element
     */
    detail = 'p-toast-detail',
    /**
     * Class name of the close button element
     */
    closeButton = 'p-toast-close-button',
    /**
     * Class name of the close icon element
     */
    closeIcon = 'p-toast-close-icon'
}

export interface ToastStyle extends BaseStyle {}
