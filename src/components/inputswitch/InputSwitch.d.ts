interface InputSwitchProps {
    modelValue?: boolean;
    class?: string;
    style?: any;
    trueValue?: any;
    falseValue?: any;
}

declare class InputSwitch {
    $props: InputSwitchProps;
    $emit(eventName: 'update:modelValue', value: boolean): this;
    $emit(eventName: 'click', event: Event): this;
    $emit(eventName: 'change', event: Event): this;
    $emit(eventName: 'input', value: boolean): this;
}

export default InputSwitch;
