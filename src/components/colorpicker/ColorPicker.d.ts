import Vue, { VNode } from 'vue';

export declare class ColorPicker extends Vue {
    value?: any;
    defaultColor?: any;
    inline?: boolean;
    format?: string;
    disabled?: boolean;
    tabindex?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    $emit(eventName: 'input', value: any): this;
}