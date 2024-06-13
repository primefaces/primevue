/**
 *
 * Toolbar is a grouping component for buttons and other content.
 *
 * [Live Demo](https://www.primevue.org/toolbar/)
 *
 * @module toolbarstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum ToolbarClasses {
    /**
     * Class name of the root element
     */
    root = 'p-toolbar',
    /**
     * Class name of the start element
     */
    start = 'p-toolbar-start',
    /**
     * Class name of the center element
     */
    center = 'p-toolbar-center',
    /**
     * Class name of the end element
     */
    end = 'p-toolbar-end'
}

export interface ToolbarStyle extends BaseStyle {}
