interface RadioButtonProps {
    value?: any;
    modelValue?: any;
}

declare class RadioButton {
    $props: RadioButtonProps;
    $emit(eventName: string, event: Event): this;
}

export default RadioButton;
