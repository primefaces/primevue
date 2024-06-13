/**
 *
 * Timeline visualizes a series of chained events.
 *
 * [Live Demo](https://primevue.org/timeline)
 *
 * @module timeline
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type TimelinePassThroughOptionType = TimelinePassThroughAttributes | ((options: TimelinePassThroughMethodOptions) => TimelinePassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TimelinePassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: TimelineProps;
    /**
     * Defines current options.
     */
    context: TimelineContext;
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
 * @see {@link TimelineProps.pt}
 */
export interface TimelinePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TimelinePassThroughOptionType;
    /**
     * Used to pass attributes to the event's DOM element.
     */
    event?: TimelinePassThroughOptionType;
    /**
     * Used to pass attributes to the event opposite's DOM element.
     */
    eventOpposite?: TimelinePassThroughOptionType;
    /**
     * Used to pass attributes to the event separator's DOM element.
     */
    eventSeparator?: TimelinePassThroughOptionType;
    /**
     * Used to pass attributes to the event marker's DOM element.
     */
    eventMarker?: TimelinePassThroughOptionType;
    /**
     * Used to pass attributes to the event connector's DOM element.
     */
    eventConnector?: TimelinePassThroughOptionType;
    /**
     * Used to pass attributes to the event content's DOM element.
     */
    eventContent?: TimelinePassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface TimelinePassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current options in Timeline component.
 */
export interface TimelineContext {
    /**
     * Current index of the item as a number.
     */
    index: number;
}

/**
 * Defines valid properties in Timeline component.
 */
export interface TimelineProps {
    /**
     * An array of events to display.
     */
    value?: any[] | undefined;
    /**
     * Position of the timeline bar relative to the content.
     * @defaultValue left
     */
    align?: 'left' | 'right' | 'alternate' | 'top' | 'bottom' | undefined;
    /**
     * Orientation of the timeline.
     * @defaultValue horizontal
     */
    layout?: 'vertical' | 'horizontal' | undefined;
    /**
     * Name of the field that uniquely identifies the a record in the data.
     */
    dataKey?: string | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {TimelinePassThroughOptions}
     */
    pt?: PassThrough<TimelinePassThroughOptions>;
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

/**
 * Defines valid slots in Timeline component.
 */
export interface TimelineSlots {
    /**
     * Custom content template
     * @param {Object} scope - content slot's params.
     */
    content(scope: {
        /**
         * Item data
         */
        item: any;
        /**
         * Index of item
         */
        index: number;
    }): VNode[];
    /**
     * Custom opposite template.
     * @param {Object} scope - opposite slot's params.
     */
    opposite(scope: {
        /**
         * Item data
         */
        item: any;
        /**
         * Index of item
         */
        index: number;
    }): VNode[];
    /**
     * Custom marker template.
     * @param {Object} scope - marker slot's params.
     */
    marker(scope: {
        /**
         * Item data
         */
        item: any;
        /**
         * Index of item
         */
        index: number;
    }): VNode[];
    /**
     * Custom connector template.
     */
    connector(scope: {
        /**
         * Item data
         */
        item: any;
        /**
         * Index of item
         */
        index: number;
    }): VNode[];
}

/**
 * Defines valid emits in Timeline component.
 */
export interface TimelineEmitsOptions {}

export declare type TimelineEmits = EmitFn<TimelineEmitsOptions>;

/**
 * **PrimeVue - Timeline**
 *
 * _Timeline visualizes a series of chained events._
 *
 * [Live Demo](https://www.primevue.org/timeline/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Timeline: DefineComponent<TimelineProps, TimelineSlots, TimelineEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Timeline: GlobalComponentConstructor<TimelineProps, TimelineSlots, TimelineEmits>;
    }
}

export default Timeline;
