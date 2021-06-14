interface InputTextProps {
    modelValue?: string;
}

declare class InputText {
    $props: InputTextProps;
    $emit(eventName: 'update:modelValue', value: string): this;
}

export default InputText;
