import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type TimelineVerticalAlignType = 'left' | 'right' | 'alternate' | undefined;

type TimelineHorizontalAlignType = 'top' | 'bottom' | undefined;

type TimelineAlignType = TimelineVerticalAlignType | TimelineHorizontalAlignType | undefined;

type TimelineLayoutType = 'vertical' | 'horizontal' | undefined;

export interface TimelineProps {
    /**
     * An array of events to display.
     */
    value?: any[] | undefined;
    /**
     * Position of the timeline bar relative to the content.
     * @see TimelineAlignType
     * Default value is 'left'.
     */
    align?: TimelineAlignType;
    /**
     * Orientation of the timeline.
     * @see TimelineLayoutType
     * Default value is 'horizontal'.
     */
    layout?: TimelineLayoutType;
    /**
     * Name of the field that uniquely identifies the a record in the data.
     */
    dataKey?: string | undefined;
}

export interface TimelineSlots {
    /**
     * Custom content template
     * @param {Object} scope - content slot's params.
     */
    content: (scope: {
        /**
         * Item data
         */
        item: any;
        /**
         * Index of item
         */
        index: number;
    }) => VNode[];
    /**
     * Custom opposite template.
     * @param {Object} scope - opposite slot's params.
     */
    opposite: (scope: {
        /**
         * Item data
         */
        item: any;
        /**
         * Index of item
         */
        index: number;
    }) => VNode[];
    /**
     * Custom marker template.
     * @param {Object} scope - marker slot's params.
     */
    marker: (scope: {
        /**
         * Item data
         */
        item: any;
        /**
         * Index of item
         */
        index: number;
    }) => VNode[];
    /**
     * Custom connector template.
     */
    connector: (scope: {
        /**
         * Item data
         */
        item: any;
        /**
         * Index of item
         */
        index: number;
    }) => VNode[];
}

export declare type TimelineEmits = {
}

declare class Timeline extends ClassComponent<TimelineProps, TimelineSlots, TimelineEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Timeline: GlobalComponentConstructor<Timeline>
    }
}

/**
 *
 * Timeline visualizes a series of chained events.
 *
 * Demos:
 *
 * - [Timeline](https://www.primefaces.org/primevue/showcase/#/timeline)
 *
 */
export default Timeline;
