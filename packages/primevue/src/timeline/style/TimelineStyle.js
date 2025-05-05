import { style } from '@primeuix/styles/timeline';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props }) => ['p-timeline p-component', 'p-timeline-' + props.align, 'p-timeline-' + props.layout],
    event: 'p-timeline-event',
    eventOpposite: 'p-timeline-event-opposite',
    eventSeparator: 'p-timeline-event-separator',
    eventMarker: 'p-timeline-event-marker',
    eventConnector: 'p-timeline-event-connector',
    eventContent: 'p-timeline-event-content'
};

export default BaseStyle.extend({
    name: 'timeline',
    style,
    classes
});
