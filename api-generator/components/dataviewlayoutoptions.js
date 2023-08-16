const DataViewLayoutOptionsProps = [
    {
        name: 'modelValue',
        type: 'string',
        default: 'null',
        description: 'Value of the component.'
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Used to pass attributes to DOM elements inside the component.'
    }
];

const DataViewLayoutOptionsSlots = [
    {
        name: 'listicon',
        description: 'Custom list icon template.'
    },
    {
        name: 'gridicon',
        description: 'Custom grid icon template.'
    }
];

module.exports = {
    dataviewlayoutoptions: {
        name: 'DataViewLayoutOptions',
        description: 'When both layout modes are enabled in DataView, a UI element would be necessary to let the user toggle between the view. DataViewLayoutOptions is a helper component to display a buttonset to choose the layout mode in DataView.',
        'doc-url': 'dataview',
        props: DataViewLayoutOptionsProps,
        slots: DataViewLayoutOptionsSlots
    }
};
