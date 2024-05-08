/**
 *
 * Timeline visualizes a series of chained events.
 *
 * [Live Demo](https://primevue.org/timeline)
 *
 * @module timelinestyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum TimelineClasses {
    root = 'p-timeline',
    event = 'p-timeline-event',
    eventOpposite = 'p-timeline-event-opposite',
    eventSeparator = 'p-timeline-event-separator',
    eventMarker = 'p-timeline-event-marker',
    eventConnector = 'p-timeline-event-connector',
    eventContent = 'p-timeline-event-content'
}

export interface TimelineStyle extends BaseStyle {}
