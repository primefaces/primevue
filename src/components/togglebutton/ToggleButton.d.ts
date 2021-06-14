interface ToggleButtonProps {
    modelValue?: boolean;
    onIcon?: string;
    offIcon?: string;
    onLabel?: string;
    offLabel?: string;
    iconPos?: string;
}

declare class ToggleButton {
    $props: ToggleButtonProps;
    $emit(eventName: 'update:modelValue', value: boolean): this;
    $emit(eventName: 'change', event: Event): this;
}

export default ToggleButton;
