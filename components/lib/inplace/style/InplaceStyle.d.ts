/**
 *
 * Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.
 *
 * [Live Demo](https://www.primevue.org/inplace)
 *
 * @module inplacestyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum InplaceClasses {
    root = 'p-inplace',
    display = 'p-inplace-display',
    content = 'p-inplace-content'
}

export interface InplaceStyle extends BaseStyle {}
