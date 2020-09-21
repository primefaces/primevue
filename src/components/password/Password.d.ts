import Vue from 'vue';

export declare class Password extends Vue {
    modelValue?: string;
    promptLabel?: string;
    mediumRegex?: string;
    strongRegex?: string;
    weakLabel?: string;
    mediumLabel?: string;
    strongLabel?: string;
    feedback?: boolean;
    $emit(eventName: string, event: Event): this;
}