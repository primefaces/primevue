/**
 *
 * VirtualScroller is a performant approach to handle huge data efficiently.
 *
 * [Live Demo](https://www.primevue.org/virtualscroller/)
 *
 * @module virtualscrollerstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum VirtualScrollerClasses {
    /**
     * Class name of the root element
     */
    root = 'p-virtualscroller',
    /**
     * Class name of the content element
     */
    content = 'p-virtualscroller-content',
    /**
     * Class name of the spacer element
     */
    spacer = 'p-virtualscroller-spacer',
    /**
     * Class name of the loader element
     */
    loader = 'p-virtualscroller-loader',
    /**
     * Class name of the loading icon element
     */
    loadingIcon = 'p-virtualscroller-loading-icon'
}

export interface VirtualScrollerStyle extends BaseStyle {}
