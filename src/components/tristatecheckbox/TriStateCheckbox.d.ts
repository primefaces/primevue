interface TriStateCheckboxProps {
    modelValue?: any;
}

declare class TriStateCheckbox {
    $props: TriStateCheckboxProps;
    $emit(eventName: string, event: Event): this;
}

export default TriStateCheckbox;
