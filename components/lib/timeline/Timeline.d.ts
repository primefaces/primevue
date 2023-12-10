/**
 *
 * Timeline visualizes a series of chained events.
 *
 * [Live Demo](https://primevue.org/timeline)
 *
 * @module timeline
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

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
     * Used to pass attributes to the opposite's DOM element.
     */
    opposite?: TimelinePassThroughOptionType;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: TimelinePassThroughOptionType;
    /**
     * Used to pass attributes to the marker's DOM element.
     */
    marker?: TimelinePassThroughOptionType;
    /**
     * Used to pass attributes to the connector's DOM element.
     */
    connector?: TimelinePassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: TimelinePassThroughOptionType;
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
export interface TimelineEmits {}

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
 */
declare class Timeline extends ClassComponent<TimelineProps, TimelineSlots, TimelineEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Timeline: GlobalComponentConstructor<Timeline>;
    }
}

export default Timeline;
