interface CheckboxProps {
    value?: any;
    modelValue?: any;
    binary?: boolean;
}

declare class Checkbox {
    $props: CheckboxProps;
    $emit(eventName: string, event: Event): this;
}

export default Checkbox;
