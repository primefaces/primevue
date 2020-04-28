import Vue from 'vue';

export declare class Password extends Vue {
    value?: string;
    promptLabel?: string;
    weakLabel?: string;
    mediumLabel?: string;
    strongLabel?: string;
    feedback?: boolean;
    $emit(eventName: 'input', value: any): this;
    $emit(eventName: 'focus', event: Event): this;
    $emit(eventName: 'blur', event: Event): this;
    $emit(eventName: 'keydown', event: Event): this;
}