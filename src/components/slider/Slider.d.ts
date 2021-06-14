interface SliderProps {
    modelValue?: number | any[];
    min?: number;
    max?: number;
    orientation?: string;
    step?: number;
    range?: boolean;
    disabled?: boolean;
    ariaLabelledBy?: string;
}

declare class Slider {
    $props: SliderProps;
    $emit(eventName: 'update:modelValue', value: number | any[]): this;
    $emit(eventName: 'change', value: any): this;
    $emit(eventName: 'slideend', e: {originalEvent: Event, value: any}): this;
}

export default Slider;
