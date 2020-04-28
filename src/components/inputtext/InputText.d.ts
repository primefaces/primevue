import Vue from 'vue';

export declare class InputText extends Vue {
    value?: string;
    $emit(eventName: 'input', value: string): this;
}