/**
 *
 * Message groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/message/)
 *
 * @module messagestyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum MessageClasses {
    root = 'p-message',
    content = 'p-message-content',
    icon = 'p-message-icon',
    text = 'p-message-text',
    closeButton = 'p-message-close-button',
    closeIcon = 'p-message-close-icon'
}

export interface MessageStyle extends BaseStyle {}
