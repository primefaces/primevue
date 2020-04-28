import Vue from 'vue';

export declare class DataViewLayoutOptions extends Vue {
    value?: string;
    $emit(eventName: 'input', layout: string): this;
}