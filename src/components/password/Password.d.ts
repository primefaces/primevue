import Vue from 'vue';

declare class Password extends Vue {
    value?: string;
    promptLabel?: string;
    mediumRegex?: string;
    strongRegex?: string;
    weakLabel?: string;
    mediumLabel?: string;
    strongLabel?: string;
    feedback?: boolean;
    $emit(eventName: 'input', value: any): this;
    $emit(eventName: 'focus', event: Event): this;
    $emit(eventName: 'blur', event: Event): this;
    $emit(eventName: 'keydown', event: Event): this;
}

export default Password;