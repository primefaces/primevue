/**
 *
 * Chart groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/chart/)
 *
 * @module chart
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { CanvasHTMLAttributes } from 'vue';

export declare type ChartPassThroughOptionType = ChartPassThroughAttributes | ((options: ChartPassThroughMethodOptions) => ChartPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ChartPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ChartProps;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ChartProps.pt}
 */
export interface ChartPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ChartPassThroughOptionType;
    /**
     * Used to pass attributes to the canvas's DOM element.
     */
    canvas?: ChartPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
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
 * @see {@link ChartEmitsOptions.select}
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
    plugins?: any[];
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
     * Used to pass all properties of the CanvasHTMLAttributes to canvas element inside the component.
     */
    canvasProps?: CanvasHTMLAttributes | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ChartPassThroughOptions}
     */
    pt?: PassThrough<ChartPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
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
export interface ChartEmitsOptions {
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

export declare type ChartEmits = EmitFn<ChartEmitsOptions>;

export interface ChartMethods {
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
declare const Chart: DefineComponent<ChartProps, ChartSlots, ChartEmits, ChartMethods>;

declare module 'vue' {
    export interface GlobalComponents {
        Chart: DefineComponent<ChartProps, ChartSlots, ChartEmits, ChartMethods>;
    }
}

export default Chart;
