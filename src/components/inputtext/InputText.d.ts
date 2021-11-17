interface InputTextProps {
    modelValue?: string;
}

declare class InputText {
    $props: InputTextProps;
    $emit(eventName: 'update:modelValue', value: string | null): this;
}

export default InputText;
