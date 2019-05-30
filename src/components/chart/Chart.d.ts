import Vue from 'vue';

export declare class Chart extends Vue {
    type?: string;
    data?: object;
    options?: object;
    width?: number;
    height?: number;
    $emit(eventName: 'select', e: { originalEvent: Event, element: any, dataset: any }): this;
    refresh(): void;
    reinit(): void;
    generateLegend(): void | any;
}