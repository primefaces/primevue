/**
 *
 * Rating component is a star based selection input.
 *
 * [Live Demo](https://www.primevue.org/rating/)
 *
 * @module ratingstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum RatingClasses {
    root = 'p-rating',
    option = 'p-rating-option',
    onIcon = 'p-rating-on-icon',
    offIcon = 'p-rating-off-icon'
}

export interface RatingStyle extends BaseStyle {}
