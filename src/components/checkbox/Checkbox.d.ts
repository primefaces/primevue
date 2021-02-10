interface CheckboxProps {
    value?: null;
    modelValue?: null;
    binary?: boolean;
}

declare class Checkbox {
    $props: CheckboxProps;
    $emit(eventName: string, event: Event): this;
}

export default Checkbox;
