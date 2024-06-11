/**
 *
 * Rating component is a star based selection input.
 *
 * [Live Demo](https://www.primevue.org/rating/)
 *
 * @module ratingstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum RatingClasses {
    /**
     * Class name of the root element
     */
    root = 'p-rating',
    /**
     * Class name of the option element
     */
    option = 'p-rating-option',
    /**
     * Class name of the on icon element
     */
    onIcon = 'p-rating-on-icon',
    /**
     * Class name of the off icon element
     */
    offIcon = 'p-rating-off-icon'
}

export interface RatingStyle extends BaseStyle {}
