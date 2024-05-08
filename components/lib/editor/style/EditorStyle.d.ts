/**
 *
 * Editor groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/editor/)
 *
 * @module editorstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum EditorClasses {
    root = 'p-editor',
    toolbar = 'p-editor-toolbar',
    content = 'p-editor-content'
}

export interface EditorStyle extends BaseStyle {}
