/**
 *
 * Message groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/message/)
 *
 * @module messagestyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum MessageClasses {
    /**
     * Class name of the root element
     */
    root = 'p-message',
    /**
     * Class name of the content element
     */
    content = 'p-message-content',
    /**
     * Class name of the icon element
     */
    icon = 'p-message-icon',
    /**
     * Class name of the text element
     */
    text = 'p-message-text',
    /**
     * Class name of the close button element
     */
    closeButton = 'p-message-close-button',
    /**
     * Class name of the close icon element
     */
    closeIcon = 'p-message-close-icon'
}

export interface MessageStyle extends BaseStyle {}
