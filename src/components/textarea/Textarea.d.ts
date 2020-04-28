import Vue from 'vue';

export declare class Textarea extends Vue {
    value?: string;
    autoResize?: boolean;
    $emit(eventName: 'input', value: string): this;
}