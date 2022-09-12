const DividerProps = [
    {
        name: "align",
        type: "string",
        default: "null",
        description: 'Alignment of the content, options are "left", "center", "right" for horizontal layout and "top", "center", "bottom" for vertical.'
    },
    {
        name: "layout",
        type: "string",
        default: "horizontal",
        description: 'Specifies the orientation, valid values are "horizontal" and "vertical".'
    },
    {
        name: "type",
        type: "string",
        default: "solid",
        description: 'Border style type, default is "solid" and other options are "dashed" and "dotted".'
    }
];

module.exports = {
    divider: {
        name: "Divider",
        description: "Divider is used to separate contents.",
        props: DividerProps
    }
};
