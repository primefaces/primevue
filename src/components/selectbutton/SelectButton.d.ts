type SelectButtonOptionLabelType = string | ((data: any) => string) | undefined;
type SelectButtonOptionValueType = string | ((data: any) => any) | undefined;
type SelectButtonOptionDisabledType = string | ((data: any) => boolean) | undefined;

interface SelectButtonProps {
    modelValue?: any;
    options?: any[];
    optionLabel?: SelectButtonOptionLabelType;
    optionValue?: SelectButtonOptionValueType;
    optionDisabled?: SelectButtonOptionDisabledType;
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
    $emit(eventName: 'change', event: {originalEvent: Event, value: any}): this;
    $emit(eventName: 'focus', event: Event): this;
    $emit(eventName: 'blur', event: Event): this;
    $slots: {
        option: SelectButtonOptionSlotInterface;
    }
}

export default SelectButton;
