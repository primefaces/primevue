const AvatarGroupProps = [
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
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Uses to pass attributes to DOM elements inside the component.'
    }
];

module.exports = {
    avatargroup: {
        name: 'AvatarGroup',
        'doc-url': 'avatar',
        description: 'A set of Avatars can be displayed together using the AvatarGroup component.',
        props: AvatarGroupProps
    }
};
