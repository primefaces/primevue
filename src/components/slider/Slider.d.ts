import Vue from 'vue';

export declare class Slider extends Vue {
    modelValue?: number | any[];
    min?: number;
    max?: number;
    orientation?: string;
    step?: number;
    range?: boolean;
    disabled?: boolean;
    ariaLabelledBy?: string;
    $emit(eventName: 'change', value: any): this;
    $emit(eventName: 'slideend', e: {originalEvent: Event, values: any}): this;
}