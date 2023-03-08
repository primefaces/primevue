/**
 *
 * Timeline visualizes a series of chained events.
 *
 * [Live Demo](https://primevue.org/timeline)
 *
 * @module timeline
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
