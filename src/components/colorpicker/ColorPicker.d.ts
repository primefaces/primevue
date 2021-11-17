interface ColorPickerProps {
    modelValue?: any;
    defaultColor?: any;
    inline?: boolean;
    format?: string;
    disabled?: boolean;
    tabindex?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    ariaLabelledBy?: string;
    panelClass?: string;
    appendTo?: string;
}

declare class ColorPicker {
    $props: ColorPickerProps;
    $emit(eventName: 'update:modelValue', value: any): this;
    $emit(eventName: 'change', event: {originalEvent: Event, value: any}): this;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
}

export default ColorPicker;
