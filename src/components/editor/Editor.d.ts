import { VNode } from 'vue';

interface EditorProps {
    modelValue?: string;
    placeholder?: string;
    readonly?: boolean;
    formats?: any[];
    editorStyle?: string;
}

declare class Editor {
    $props: EditorProps;
    $emit(eventName: 'update:modelValue', value: string): this;
    $emit(eventName: 'text-change', e: { htmlValue: string, textValue: any, delta: any, source: string, instance: any}): this;
    $slot: {
        toolbar: VNode[];
    }
}

export default Editor;
