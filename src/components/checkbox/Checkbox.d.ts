interface CheckboxProps {
    value?: any;
    modelValue?: any;
    binary?: boolean;
    class?: string;
    style?: any;
    trueValue?: any;
    falseValue?: any;
}

declare class Checkbox {
    $props: CheckboxProps;
    $emit(eventName: 'update:page', value: any): this;
    $emit(eventName: 'click', event: Event): this;
    $emit(eventName: 'change', event: Event): this;
    $emit(eventName: 'input', value: boolean): this;
}

export default Checkbox;
