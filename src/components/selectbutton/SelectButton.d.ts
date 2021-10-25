interface SelectButtonProps {
    modelValue?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: any;
    optionDisabled?: boolean;
    multiple?: boolean;
    disabled?: boolean;
    dataKey?: string;
    ariaLabelledBy?: string;
}

interface SelectButtonOptionSlotInterface {
    option: any;
    index: number;
}

declare class SelectButton {
    $props: SelectButtonProps;
    $emit(eventName: 'update:modelValue', value: any): this;
    $emit(eventName: 'focus', event: Event): this;
    $emit(eventName: 'blur', event: Event): this;
    $slots: {
        option: SelectButtonOptionSlotInterface;
    }
}

export default SelectButton;
