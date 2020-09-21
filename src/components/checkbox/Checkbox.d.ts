import Vue from 'vue';

export declare class Checkbox extends Vue {
    value?: null;
    modelValue?: null;
    binary?: boolean;
    $emit(eventName: string, event: Event): this;
}