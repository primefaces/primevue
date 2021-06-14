interface KnobProps {
    modelValue?: number;
    size?: number;
    disabled?: boolean;
    readonly?: boolean;
    step?: number;
    min?: number;
    max?: number;
    valueColor?: string;
    rangeColor?: string;
    textColor?: string;
    strokeWidth?: number;
    showValue?: boolean;
    valueTemplate?: string;
}

declare class Knob {
    $props: KnobProps;
    $emit(eventName: 'update:modelValue', value: number): this;
    $emit(eventName: 'change', value: any): this;
}

export default Knob;
