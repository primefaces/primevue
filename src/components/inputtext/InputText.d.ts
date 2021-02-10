interface InputTextProps {
    value?: string;
}

declare class InputText {
    $props: InputTextProps;
    $emit(eventName: 'input', value: string): this;
}

export default InputText;
