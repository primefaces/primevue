/**
 *
 * Editor groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/editor/)
 *
 * @module editorstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum EditorClasses {
    /**
     * Class name of the root element
     */
    root = 'p-editor',
    /**
     * Class name of the toolbar element
     */
    toolbar = 'p-editor-toolbar',
    /**
     * Class name of the content element
     */
    content = 'p-editor-content'
}

export interface EditorStyle extends BaseStyle {}
