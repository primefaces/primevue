const ColumnGroupProps = [
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
    columngroup: {
        name: 'ColumnGroup',
        description: 'Columns can be grouped at header and footer sections by defining a ColumnGroup with nested rows and columns',
        'doc-url': 'datatable',
        props: ColumnGroupProps
    }
};
