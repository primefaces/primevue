const CardProps = [
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

const CardSlots = [
    {
        name: 'header',
        description: 'Custom content for the component header.'
    },
    {
        name: 'title',
        description: 'Custom content for the component title.'
    },
    {
        name: 'subtitle',
        description: 'Custom content for the component subtitle.'
    },
    {
        name: 'content',
        description: 'Custom content for the component content.'
    },
    {
        name: 'footer',
        description: 'Custom content for the component footer.'
    }
];

module.exports = {
    card: {
        name: 'Card',
        description: 'Card is a flexible container component.',
        props: CardProps,
        slots: CardSlots
    }
};
