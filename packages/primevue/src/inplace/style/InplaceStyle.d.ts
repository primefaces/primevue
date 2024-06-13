/**
 *
 * Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.
 *
 * [Live Demo](https://www.primevue.org/inplace)
 *
 * @module inplacestyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum InplaceClasses {
    /**
     * Class name of the root element
     */
    root = 'p-inplace',
    /**
     * Class name of the display element
     */
    display = 'p-inplace-display',
    /**
     * Class name of the content element
     */
    content = 'p-inplace-content'
}

export interface InplaceStyle extends BaseStyle {}
