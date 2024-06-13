/**
 *
 * Timeline visualizes a series of chained events.
 *
 * [Live Demo](https://primevue.org/timeline)
 *
 * @module timelinestyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum TimelineClasses {
    /**
     * Class name of the root element
     */
    root = 'p-timeline',
    /**
     * Class name of the event element
     */
    event = 'p-timeline-event',
    /**
     * Class name of the event opposite element
     */
    eventOpposite = 'p-timeline-event-opposite',
    /**
     * Class name of the event separator element
     */
    eventSeparator = 'p-timeline-event-separator',
    /**
     * Class name of the event marker element
     */
    eventMarker = 'p-timeline-event-marker',
    /**
     * Class name of the event connector element
     */
    eventConnector = 'p-timeline-event-connector',
    /**
     * Class name of the event content element
     */
    eventContent = 'p-timeline-event-content'
}

export interface TimelineStyle extends BaseStyle {}
