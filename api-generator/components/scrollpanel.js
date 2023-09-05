const ScrollPanelProps = [
    {
        name: 'step',
        type: 'number',
        default: '5',
        description: 'Step factor to scroll the content while pressing the arrow keys.'
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
    scrollpanel: {
        name: 'ScrollPanel',
        description: 'ScrollPanel is a cross browser, lightweight and themable alternative to native browser scrollbar.',
        props: ScrollPanelProps
    }
};
