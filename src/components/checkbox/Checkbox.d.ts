import Vue from 'vue';

export declare class Checkbox extends Vue {
    value?: null;
    modelValue?: null;
    binary?: boolean;
    ariaLabelledBy?: string;
    $emit(eventName: 'click', event: Event): this;
    $emit(eventName: 'input', value: any): this;
    $emit(eventName: 'change', event: Event): this;
    $emit(eventName: 'focus', event: Event): this;
    $emit(eventName: 'blur', event: Event): this;
}