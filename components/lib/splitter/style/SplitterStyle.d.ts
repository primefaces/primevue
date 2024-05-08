/**
 *
 * Splitter is utilized to separate and resize panels.
 *
 * [Live Demo](https://www.primevue.org/splitter/)
 *
 * @module splitterstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum SplitterClasses {
    root = 'p-splitter',
    gutter = 'p-splitter-gutter',
    gutterHandle = 'p-splitter-gutter-handle'
}

export interface SplitterStyle extends BaseStyle {}
