interface RadioButtonProps {
    value?: any;
    modelValue?: any;
    class?: string;
    style?: any;
}

declare class RadioButton {
    $props: RadioButtonProps;
    $emit(eventName: 'update:modelValue', value: any): this;
    $emit(eventName: 'click', event: Event): this;
    $emit(eventName: 'change', event: Event): this;
}

export default RadioButton;
