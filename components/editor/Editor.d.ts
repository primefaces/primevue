/**
 *
 * Editor groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/editor/)
 *
 * @module editor
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Custom text change event.
 * @see {@link EditorEmits['text-change']}
 */
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
/**
 * Custom selection change event.
 * @see {@link EditorEmits['selection-change']}
 */
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
/**
 * Custom load event.
 * @see {@link EditorEmits.load}
 */
export interface EditorLoadEvent {
    /**
     * Text editor instance.
     */
    instance: any;
}

/**
 * Defines valid properties in Editor component.
 */
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
     * @defaultValue false
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
    /**
     * Modules configuration, see [here](https://quilljs.com/docs/modules/) for available options.
     */
    modules?: any;
}

/**
 * Defines valid slots in Editor slots.
 */
export interface EditorSlots {
    /**
     * Custom toolbar template.
     */
    toolbar: () => VNode[];
}

/**
 * Defines valid emits in Editor component.
 */
export interface EditorEmits {
    /**
     * Emitted when the value changes.
     * @param {string} value - New value.
     */
    'update:modelValue'(value: string): void;
    /**
     * Callback to invoke when text of editor changes.
     * @param {EditorTextChangeEvent} event - Custom text change event.
     */
    'text-change'(event: EditorTextChangeEvent): void;
    /**
     * Callback to invoke when selection of the text changes.
     * @param {EditorSelectionChangeEvent} event - Custom selection change event.
     */
    'selection-change'(event: EditorSelectionChangeEvent): void;
    /**
     * Callback to invoke when the quill modules are loaded.
     * @param {EditorLoadEvent} event - Custom load event.
     */
    load(event: EditorLoadEvent): void;
}

/**
 * **PrimeVue - Editor**
 *
 * _Editor groups a collection of contents in tabs._
 *
 * [Live Demo](https://www.primevue.org/editor/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Editor extends ClassComponent<EditorProps, EditorSlots, EditorEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Editor: GlobalComponentConstructor<Editor>;
    }
}

export default Editor;
