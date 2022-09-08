const AvatarProps = [
    {
        name: 'label',
        type: 'string',
        default: 'null',
        description: 'Defines the text to display.'
    },
    {
        name: 'icon',
        type: 'string',
        default: 'null',
        description: 'Defines the icon to display.'
    },
    {
        name: 'image',
        type: 'string',
        default: 'null',
        description: 'Defines the image to display.'
    },
    {
        name: 'size',
        type: 'string',
        default: 'null',
        description: 'Size of the element, valid options are "large" and "xlarge".'
    },
    {
        name: 'shape',
        type: 'string',
        default: 'square',
        description: 'Shape of the element, valid options are "square" and "circle".'
    }
];

const AvatarEvents = [
    {
        name: 'error',
        description: 'Triggered when an error occurs while loading an image file.'
    }
];

module.exports = {
    avatar: {
        name: 'Avatar',
        description: 'Avatar represents people using icons, labels and images.',
        props: AvatarProps,
        events: AvatarEvents
    }
};
