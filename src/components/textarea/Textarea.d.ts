interface TextareaProps {
    value?: string;
    autoResize?: boolean;
}

declare class Textarea {
    $props: TextareaProps;
    $emit(eventName: 'input', value: string): this;
}

export default Textarea;
