/**
 *
 * VirtualScroller is a performant approach to handle huge data efficiently.
 *
 * [Live Demo](https://www.primevue.org/virtualscroller/)
 *
 * @module virtualscrollerstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum VirtualScrollerClasses {
    root = 'p-virtualscroller',
    content = 'p-virtualscroller-content',
    spacer = 'p-virtualscroller-spacer',
    loader = 'p-virtualscroller-loader',
    loadingIcon = 'p-virtualscroller-loading-icon'
}

export interface VirtualScrollerStyle extends BaseStyle {}
