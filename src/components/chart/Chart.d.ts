import Vue from 'vue';

declare class Chart extends Vue {
    type?: string;
    data?: object;
    options?: object;
    plugins?: any[];
    width?: number;
    height?: number;
    $emit(eventName: 'select', e: { originalEvent: Event, element: any, dataset: any }): this;
    refresh(): void;
    reinit(): void;
    generateLegend(): void | any;
}

export default Chart;