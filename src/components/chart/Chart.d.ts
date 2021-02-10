interface ChartProps {
    type?: string;
    data?: object;
    options?: object;
    width?: number;
    height?: number;
}

declare class Chart {
    $props: ChartProps;
    $emit(eventName: 'select', e: { originalEvent: Event, element: any, dataset: any }): this;
    refresh(): void;
    reinit(): void;
    generateLegend(): void | any;
}

export default Chart;
