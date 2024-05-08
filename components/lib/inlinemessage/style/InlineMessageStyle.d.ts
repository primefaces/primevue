/**
 *
 * InlineMessage component is useful in cases where a single message needs to be displayed related to an element such as forms. It has one property, severity of the message.
 *
 * [Live Demo](https://www.primevue.org/inlinemessage/)
 *
 * @module inlinemessagestyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum InlineMessageClasses {
    root = 'p-inline-message',
    icon = 'p-inline-message-icon',
    text = 'p-inline-message-text'
}

export interface InlineMessageStyle extends BaseStyle {}
