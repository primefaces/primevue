import Vue from 'vue';

export declare class Spinner extends Vue {
    value?: any;
    step?: number;
    min?: number;
    max?: number;
    $emit(eventName: 'input', value: any): this;
}