import Vue, { VNode } from 'vue';

declare class Editor extends Vue {
    value?: string;
    placeholder?: string;
    readonly?: boolean;
    formats?: any[];
    editorStyle?: string;
    $emit(eventName: 'input', event: string): this;
    $emit(eventName: 'text-change', e: { htmlValue: string, textValue: any, delta: any, source: string}): this;
    $slot: {
        toolbar: VNode[];
    }
}

export default Editor;