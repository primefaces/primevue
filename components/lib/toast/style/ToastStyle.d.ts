/**
 *
 * Toast is used to display messages in an overlay.
 *
 * [Live Demo](https://www.primevue.org/toast/)
 *
 * @module toaststyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum ToastClasses {
    root = 'p-toast',
    message = 'p-toast-message',
    messageContent = 'p-toast-message-content',
    messageIcon = 'p-toast-message-icon',
    messageText = 'p-toast-message-text',
    summary = 'p-toast-summary',
    detail = 'p-toast-detail',
    closeButton = 'p-toast-close-button',
    closeIcon = 'p-toast-close-icon'
}

export interface ToastStyle extends BaseStyle {}
