import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface EditorTextChangeEvent {
    /**
     * Current value as html.
     */
    htmlValue: string;
    /**
     * Current value as text.
     */
    textValue: any;
    /**
     * Representation of the change.
     */
    delta: any;
    /**
     * Source of change. Will be either 'user' or 'api'.
     */
    source: string;
    /**
     * Text editor instance.
     */
    instance: any;
}

export interface EditorSelectionChangeEvent {
    /**
     * Current value as html.
     */
    htmlValue: string;
    /**
     * Current value as text.
     */
    textValue: any;
    /**
     * Representation of the selection boundaries.
     */
    range: any;
    /**
     * Representation of the previous selection boundaries.
     */
    oldRange: any;
    /**
     * Source of change. Will be either 'user' or 'api'.
     */
    source: string;
    /**
     * Text editor instance.
     */
    instance: any;
}

export interface EditorProps {
    /**
     * Value of the content.
     */
    modelValue?: string | undefined;
    /**
     * Placeholder text to show when editor is empty.
     */
    placeholder?: string | undefined;
    /**
     * Whether to instantiate the editor to readonly mode.
     */
    readonly?: boolean | undefined;
    /**
     * Whitelist of formats to display, see [here](https://quilljs.com/docs/formats/) for available options.
     */
    formats?: any[];
    /**
     * Inline style of the container.
     */
    editorStyle?: any;
}

export interface EditorSlots {
    /**
     * Custom toolbar template.
     */
    toolbar: () => VNode[];
}

export declare type EditorEmits = {
    /**
     * Emitted when the value changes.
     * @param {string} value - New value.
     */
    'update:modelValue': (value: string) => void;
    /**
     * Callback to invoke when text of editor changes.
     * @param {EditorTextChangeEvent} event - Custom text change event.
     */
    'text-change': (event: EditorTextChangeEvent) => void;
    /**
     * Callback to invoke when selection of the text changes.
     * @param {EditorSelectionChangeEvent} event - Custom selection change event.
     */
    'selection-change': (event: EditorSelectionChangeEvent) => void;
}

declare class Editor extends ClassComponent<EditorProps, EditorSlots, EditorEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Editor: GlobalComponentConstructor<Editor>
    }
}

/**
 *
 * Editor is rich text editor component based on Quill.
 *
 * Demos:
 *
 * - [Editor](https://www.primefaces.org/primevue/showcase/#/editor)
 *
 */
export default Editor;
