const TimelineProps = [
    {
        name: 'value',
        type: 'array',
        default: 'null',
        description: 'An array of events to display.'
    },
    {
        name: 'align',
        type: 'string',
        default: 'left',
        description: 'Position of the timeline bar relative to the content. Valid values are "left", "right" and "alternate" for vertical layout and "top", "bottom" for horizontal layout.'
    },
    {
        name: 'layout',
        type: 'string',
        default: 'vertical',
        description: 'Orientation of the timeline, valid values are "vertical" and "horizontal".'
    },
    {
        name: 'dataKey',
        type: 'string',
        default: 'null',
        description: 'Name of the field that uniquely identifies the a record in the data.'
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Used to pass attributes to DOM elements inside the component.'
    },
    {
        name: 'unstyled',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, it removes component related styles in the core.'
    }
];

const TimelineSlots = [
    {
        name: 'opposite',
        description: 'Custom content for the content to be placed at the other side of the bar'
    },
    {
        name: 'marker',
        description: 'Custom content for the marker'
    },
    {
        name: 'content',
        description: 'Custom content'
    },
    {
        name: 'connector',
        description: 'Connector element'
    }
];

module.exports = {
    timeline: {
        name: 'Timeline',
        description: 'Timeline visualizes a series of chained events.',
        props: TimelineProps,
        slots: TimelineSlots
    }
};
