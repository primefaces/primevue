import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-timeline {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
}

.p-timeline-left .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-left .p-timeline-event-content {
    text-align: left;
}

.p-timeline-right .p-timeline-event {
    flex-direction: row-reverse;
}

.p-timeline-right .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-right .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: row-reverse;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline-vertical .p-timeline-event-content {
    padding: ${dt('timeline.vertical.event.content.padding')};
}

.p-timeline-vertical .p-timeline-event-connector {
    width: ${dt('timeline.event.connector.size')};
}

.p-timeline-event {
    display: flex;
    position: relative;
    min-height: ${dt('timeline.event.min.height')};
}

.p-timeline-event:last-child {
    min-height: 0;
}

.p-timeline-event-opposite {
    flex: 1;
}

.p-timeline-event-content {
    flex: 1;
}

.p-timeline-event-separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.p-timeline-event-marker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    align-self: baseline;
    border-width: ${dt('timeline.event.marker.border.width')};
    border-style: solid;
    border-color: ${dt('timeline.event.marker.border.color')};
    border-radius: ${dt('timeline.event.marker.border.radius')};
    width: ${dt('timeline.event.marker.size')};
    height: ${dt('timeline.event.marker.size')};
    background: ${dt('timeline.event.marker.background')};
}

.p-timeline-event-marker::before {
    content: " ";
    border-radius: ${dt('timeline.event.marker.content.border.radius')};
    width: ${dt('timeline.event.marker.content.size')};
    height:${dt('timeline.event.marker.content.size')};
    background: ${dt('timeline.event.marker.content.background')};
}

.p-timeline-event-marker::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${dt('timeline.event.marker.border.radius')};
    box-shadow: ${dt('timeline.event.marker.content.inset.shadow')};
}

.p-timeline-event-connector {
    flex-grow: 1;
    background: ${dt('timeline.event.connector.color')};
}

.p-timeline-horizontal {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event {
    flex-direction: column;
    flex: 1;
}

.p-timeline-horizontal .p-timeline-event:last-child {
    flex: 0;
}

.p-timeline-horizontal .p-timeline-event-separator {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event-connector {
    width: 100%;
    height: ${dt('timeline.event.connector.size')};
}

.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline-horizontal .p-timeline-event-content {
    padding: ${dt('timeline.horizontal.event.content.padding')};
}

.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: column-reverse;
}

.p-timeline-bottom .p-timeline-event {
    flex-direction: column-reverse;
}
`;

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
    theme,
    classes
});
