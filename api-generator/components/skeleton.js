const SkeletonProps = [
    {
        name: 'shape',
        type: 'string',
        default: 'rectangle',
        description: 'Shape of the element, options are "rectangle" and "circle".'
    },
    {
        name: 'size',
        type: 'string',
        default: 'null',
        description: 'Size of the Circle or Square.'
    },
    {
        name: 'width',
        type: 'string',
        default: '100%',
        description: 'Width of the element.'
    },
    {
        name: 'height',
        type: 'string',
        default: '1rem',
        description: 'Height of the element.'
    },
    {
        name: 'borderRadius',
        type: 'string',
        default: 'null',
        description: 'Border radius of the element, defaults to value from theme.'
    },
    {
        name: 'animation',
        type: 'string',
        default: 'wave',
        description: 'Type of the animation, valid options are "wave" and "none".'
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

module.exports = {
    skeleton: {
        name: 'Skeleton',
        description: 'Skeleton is a placeholder to display instead of the actual content.',
        props: SkeletonProps
    }
};
