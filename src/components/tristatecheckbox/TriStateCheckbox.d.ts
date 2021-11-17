interface TriStateCheckboxProps {
    modelValue?: any;
    style?: any;
    class?: string;
}

declare class TriStateCheckbox {
    $props: TriStateCheckboxProps;
    $emit(eventName: 'update:modelValue', value: any): this;
}

export default TriStateCheckbox;
