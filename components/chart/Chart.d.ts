/**
 *
 * Chart groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/chart/)
 *
 * @module chart
 *
 */
import { CanvasHTMLAttributes } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Custom select event.
 * @see {@link ChartEmits.select}
 */
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

/**
 * Defines valid properties in Chart component.
 */
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
     * @defaultValue 300
     */
    width?: number | undefined;
    /**
     * Height of the chart in non-responsive mode.
     * @defaultValue 150
     */
    height?: number | undefined;
    /**
     * Uses to pass all properties of the CanvasHTMLAttributes to canvas element inside the component.
     */
    canvasProps?: CanvasHTMLAttributes | undefined;
}

export interface ChartSlots {}

/**
 * Defines valid emits in Chart component.
 */
export interface ChartEmits {
    /**
     * Callback to invoke when a tab gets expanded.
     * @param {ChartSelectEvent} event - Custom select event.
     */
    select(event: ChartSelectEvent): void;
    /**
     * Callback to invoke when chart is loaded.
     * @param {*} chart - Chart instance.
     */
    loaded(chart: any): void;
}

/**
 * **PrimeVue - Chart**
 *
 * _Chart groups a collection of contents in tabs._
 *
 * [Live Demo](https://www.primevue.org/chart/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Chart extends ClassComponent<ChartProps, ChartSlots, ChartEmits> {
    /**
     * Redraws the graph.
     *
     * @memberof Chart
     */
    refresh(): void;
    /**
     * Destroys the graph first and then creates it again.
     *
     * @memberof Chart
     */
    reinit(): void;
    /**
     * Returns an HTML string of a legend for that chart. The legend is generated from the legendCallback in the options.
     *
     * @memberof Chart
     */
    generateLegend(): string | any;
    /**
     * Returns Chart instance.
     *
     * @memberof Chart
     */
    getChart(): any;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Chart: GlobalComponentConstructor<Chart>;
    }
}

export default Chart;
