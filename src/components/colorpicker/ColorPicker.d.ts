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
}

export default ColorPicker;
