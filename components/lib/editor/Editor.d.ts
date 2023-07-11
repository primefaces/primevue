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
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
export declare type EditorPassThroughOptionType = EditorPassThroughAttributes | ((options: EditorPassThroughMethodOptions) => EditorPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface EditorPassThroughMethodOptions {
    instance: any;
    props: EditorProps;
    state: EditorState;
}

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
 * Custom passthrough(pt) options.
 * @see {@link EditorProps.pt}
 */
export interface EditorPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: EditorPassThroughOptionType;
    /**
     * Uses to pass attributes to the toolbar's DOM element.
     */
    toolbar?: EditorPassThroughOptionType;
    /**
     * Uses to pass attributes to the formats' DOM element.
     */
    formats?: EditorPassThroughOptionType;
    /**
     * Uses to pass attributes to the header's DOM element.
     */
    header?: EditorPassThroughOptionType;
    /**
     * Uses to pass attributes to the option's DOM element.
     */
    option?: EditorPassThroughOptionType;
    /**
     * Uses to pass attributes to the bold's DOM element.
     */
    bold?: EditorPassThroughOptionType;
    /**
     * Uses to pass attributes to the italic's DOM element.
     */
    italic?: EditorPassThroughOptionType;
    /**
     * Uses to pass attributes to the underline's DOM element.
     */
    underline?: EditorPassThroughOptionType;
    /**
     * Uses to pass attributes to the color's DOM element.
     */
    color?: EditorPassThroughOptionType;
    /**
     * Uses to pass attributes to the background's DOM element.
     */
    background?: EditorPassThroughOptionType;
    /**
     * Uses to pass attributes to the list's DOM element.
     */
    list?: EditorPassThroughOptionType;
    /**
     * Uses to pass attributes to the select's DOM element.
     */
    select?: EditorPassThroughOptionType;
    /**
     * Uses to pass attributes to the link's DOM element.
     */
    link?: EditorPassThroughOptionType;
    /**
     * Uses to pass attributes to the image's DOM element.
     */
    image?: EditorPassThroughOptionType;
    /**
     * Uses to pass attributes to the code block's DOM element.
     */
    codeBlock?: EditorPassThroughOptionType;
    /**
     * Uses to pass attributes to the clean's DOM element.
     */
    clean?: EditorPassThroughOptionType;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: EditorPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface EditorPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Editor component.
 */
export interface EditorState {
    /**
     * Current rerendered color key as a number.
     * @defaultValue 0
     */
    reRenderColorKey: number;
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
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {EditorPassThroughOptions}
     */
    pt?: EditorPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
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
