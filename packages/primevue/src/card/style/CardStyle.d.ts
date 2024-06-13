/**
 *
 * Card is a flexible container component.
 *
 * [Live Demo](https://www.primevue.org/card/)
 *
 * @module cardstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum CardClasses {
    /**
     * Class name of the root element
     */
    root = 'p-card',
    /**
     * Class name of the header element
     */
    header = 'p-card-header',
    /**
     * Class name of the body element
     */
    body = 'p-card-body',
    /**
     * Class name of the caption element
     */
    caption = 'p-card-caption',
    /**
     * Class name of the title element
     */
    title = 'p-card-title',
    /**
     * Class name of the subtitle element
     */
    subtitle = 'p-card-subtitle',
    /**
     * Class name of the content element
     */
    content = 'p-card-content',
    /**
     * Class name of the footer element
     */
    footer = 'p-card-footer'
}

export interface CardStyle extends BaseStyle {}
