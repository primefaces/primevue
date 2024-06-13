const SplitterPanelProps = [
    {
        name: 'size',
        type: 'number',
        default: 'null',
        description: 'Size of the element relative to 100%.'
    },
    {
        name: 'minSize',
        type: 'number',
        default: 'null',
        description: 'Minimum size of the element relative to 100%.'
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Used to pass attributes to DOM elements inside the component.'
    }
];

module.exports = {
    splitterpanel: {
        name: 'SplitterPanel',
        description: 'Splitter requires two SplitterPanel components to wrap.',
        'doc-url': 'splitter',
        props: SplitterPanelProps
    }
};
