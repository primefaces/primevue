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
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type ChartPassThroughOptionType = ChartPassThroughAttributes | ((options: ChartPassThroughMethodOptions) => ChartPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ChartPassThroughMethodOptions {
    instance: any;
    props: ChartProps;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ChartProps.pt}
 */
export interface ChartPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: ChartPassThroughOptionType;
    /**
     * Uses to pass attributes to the canvas's DOM element.
     */
    canvas?: ChartPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ChartPassThroughAttributes {
    [key: string]: any;
}

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
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {ChartPassThroughOptions}
     */
    pt?: ChartPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
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
