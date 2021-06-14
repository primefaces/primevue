import { VNode } from 'vue';

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

declare class SelectButton {
    $props: SelectButtonProps;
    $emit(eventName: 'update:modelValue', value: any): this;
    $emit(eventName: 'focus', event: Event): this;
    $emit(eventName: 'blur', event: Event): this;
    $slots: {
        option: VNode[];
    }
}

export default SelectButton;
