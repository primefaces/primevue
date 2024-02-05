import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => ['p-timeline p-component', 'p-timeline-' + props.align, 'p-timeline-' + props.layout],
    event: 'p-timeline-event',
    opposite: 'p-timeline-event-opposite',
    separator: 'p-timeline-event-separator',
    marker: 'p-timeline-event-marker',
    connector: 'p-timeline-event-connector',
    content: 'p-timeline-event-content'
};

export default BaseStyle.extend({
    name: 'timeline',
    classes
});
