import Vue, { VNode } from 'vue';

declare class ColorPicker extends Vue {
    value?: any;
    defaultColor?: any;
    inline?: boolean;
    format?: string;
    disabled?: boolean;
    tabindex?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    ariaLabelledBy?: string;
    $emit(eventName: 'input', value: any): this;
}

export default ColorPicker;