/**
 *
 * Card is a flexible container component.
 *
 * [Live Demo](https://www.primevue.org/card/)
 *
 * @module cardstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum CardClasses {
    root = 'p-card',
    header = 'p-card-header',
    body = 'p-card-body',
    caption = 'p-card-caption',
    title = 'p-card-title',
    subtitle = 'p-card-subtitle',
    content = 'p-card-content',
    footer = 'p-card-footer'
}

export interface CardStyle extends BaseStyle {}
