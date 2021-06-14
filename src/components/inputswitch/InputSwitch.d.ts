interface InputSwitchProps {
    modelValue?: boolean;
    class?: string;
    style?: any;
}

declare class InputSwitch {
    $props: InputSwitchProps;
    $emit(eventName: 'update:modelValue', value: boolean): this;
    $emit(eventName: 'click', event: Event): this;
    $emit(eventName: 'change', event: Event): this;
}

export default InputSwitch;
