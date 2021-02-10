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
    $emit(eventName: 'change', value: any): this;
    $emit(eventName: 'slideend', e: {originalEvent: Event, values: any}): this;
}

export default Slider;
