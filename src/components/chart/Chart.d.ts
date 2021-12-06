import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface ChartSelectEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Selected element.
     */
    element: HTMLElement | any;
    /**
     * Selected dataset.
     */
    dataset: any;
}

export interface ChartProps {
    /**
     * Type of the chart.
     */
    type?: string | undefined;
    /**
     * Data to display.
     */
    data?: object | undefined;
    /**
     * Options to customize the chart.
     */
    options?: object | undefined;
    /**
     * Used to custom plugins of the chart.
     */
    plugins?: any;
    /**
     * Width of the chart in non-responsive mode.
     * Default value is 300.
     */
    width?: number | undefined;
    /**
     * Height of the chart in non-responsive mode.
     * Default value is 150.
     */
    height?: number | undefined;
}

export interface ChartSlots {
}

export declare type ChartEmits = {
    /**
     * Callback to invoke when a tab gets expanded.
     * @param {ChartSelectEvent} event - Custom select event.
     */
    'select': (event: ChartSelectEvent) => void;
    /**
     * Callback to invoke when chart is loaded.
     * @param {*} chart - Chart instance.
     */
    'loaded': (chart: any) => void;
}

declare class Chart extends ClassComponent<ChartProps, ChartSlots, ChartEmits> {
    /**
     * Redraws the graph.
     *
     * @memberof Chart
     */
    refresh: () => void;
    /**
     * Destroys the graph first and then creates it again.
     *
     * @memberof Chart
     */
    reinit: () => void;
    /**
     * Returns an HTML string of a legend for that chart. The legend is generated from the legendCallback in the options.
     *
     * @memberof Chart
     */
    generateLegend: () => string | any;
    /**
     * Returns Chart instance.
     *
     * @memberof Chart
     */
    getChart: () => any;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Chart: GlobalComponentConstructor<Chart>
    }
}

/**
 *
 * Chart components are based on Charts.js, an open source HTML5 based charting library.
 *
 * Helper API;
 *
 * - [Chart.js](https://www.chartjs.org/)
 *
 * Demos:
 *
 * - [Chart](https://www.primefaces.org/primevue/showcase/#/chart)
 *
 */
export default Chart;
