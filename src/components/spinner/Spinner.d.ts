import Vue from 'vue';

export declare class Spinner extends Vue {
    value?: any;
    step?: number;
    min?: number;
    max?: number;
    ariaLabelledBy?: string;
    $emit(eventName: 'input', value: any): this;
}