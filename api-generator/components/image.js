const ImageProps = [
    {
        name: 'preview',
        type: 'boolean',
        default: 'false',
        description: 'Controls the preview functionality.'
    },
    {
        name: 'indicatorIcon',
        type: 'string',
        default: 'pi pi-eye',
        description: 'Custom indicator icon.'
    },
    {
        name: 'zoomInDisabled',
        type: 'boolean',
        default: 'false',
        description: 'Disable the zoom-in button'
    },
    {
        name: 'zoomOutDisabled',
        type: 'boolean',
        default: 'false',
        description: 'Disable the zoom-out button'
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

const ImageEvents = [
    {
        name: 'show',
        description: 'Triggered when the preview overlay is shown.'
    },
    {
        name: 'hide',
        description: 'Triggered when the preview overlay is hidden.'
    },
    {
        name: 'error',
        description: 'Triggered when an error occurs while loading an image file.'
    }
];

const ImageSlots = [
    {
        name: 'indicator',
        description: 'Custom content for the preview indicator.'
    },
    {
        name: 'refresh',
        description: 'Custom content for the component refresh.'
    },
    {
        name: 'undo',
        description: 'Custom content for the component undo.'
    },
    {
        name: 'zoomout',
        description: 'Custom content for the component zoomout.'
    },
    {
        name: 'zoomin',
        description: 'Custom content for the component zoomin.'
    },
    {
        name: 'close',
        description: 'Custom content for the component close.'
    },
    {
        name: 'image',
        description: 'Custom content for the component image.'
    },
    {
        name: 'preview',
        description: 'Custom content for the component preview.'
    }
];

module.exports = {
    image: {
        name: 'Image',
        description: 'Displays an image with preview and tranformation options.',
        props: ImageProps,
        events: ImageEvents,
        slots: ImageSlots
    }
};
