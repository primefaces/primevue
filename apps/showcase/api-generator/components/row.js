const RowProps = [
    {
        name: 'type',
        type: 'string',
        default: 'null',
        description: 'Defines the type of the group.'
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Used to pass attributes to DOM elements inside the component.'
    }
];

module.exports = {
    row: {
        name: 'Row',
        description: 'DataTable can be grouped by defining a Row component with nested columns',
        'doc-url': 'datatable',
        props: RowProps
    }
};
