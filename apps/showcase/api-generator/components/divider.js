const DividerProps = [
    {
        name: 'align',
        type: 'string',
        default: 'null',
        description: 'Alignment of the content, options are "left", "center", "right" for horizontal layout and "top", "center", "bottom" for vertical.'
    },
    {
        name: 'layout',
        type: 'string',
        default: 'horizontal',
        description: 'Specifies the orientation, valid values are "horizontal" and "vertical".'
    },
    {
        name: 'type',
        type: 'string',
        default: 'solid',
        description: 'Border style type, default is "solid" and other options are "dashed" and "dotted".'
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
    divider: {
        name: 'Divider',
        description: 'Divider is used to separate contents.',
        props: DividerProps
    }
};
