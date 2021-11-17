interface TextareaProps {
    modelValue?: string;
    autoResize?: boolean;
}

declare class Textarea {
    $props: TextareaProps;
    $emit(eventName: 'update:modelValue', value: string): this;
}

export default Textarea;
