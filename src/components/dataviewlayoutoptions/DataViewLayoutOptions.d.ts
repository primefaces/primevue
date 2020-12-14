import Vue from 'vue';

declare class DataViewLayoutOptions extends Vue {
    value?: string;
    $emit(eventName: 'input', layout: string): this;
}

export default DataViewLayoutOptions;