import Vue, { VNode } from 'vue';

declare class InputMask extends Vue {
    value?: string;
    $emit(eventName: 'input', value: string): this;
    $emit(eventName: 'focus', event: Event): this;
    $emit(eventName: 'blur', event: Event): this;
    $emit(eventName: 'keydown', event: Event): this;
    $emit(eventName: 'keypress', event: Event): this;
    $emit(eventName: 'paste', event: Event): this;
    $emit(eventName: 'complete', event: Event): this;
}

export default InputMask;