import Vue, { VNode } from 'vue';

export declare class ColorPicker extends Vue {
    modelValue?: any;
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