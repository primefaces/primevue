const BreadcrumbProps = [
    {
        name: 'model',
        type: 'array',
        default: 'null',
        description: 'An array of menuitems.'
    },
    {
        name: 'home',
        type: 'menuitem',
        default: 'null',
        description: 'Configuration for the home icon.'
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

const BreadcrumbSlots = [
    {
        name: 'item',
        description: 'Custom item template.'
    },
    {
        name: 'separator',
        description: 'Custom separator template.'
    },
    {
        name: 'itemicon',
        description: 'Custom item icon template.'
    }
];

module.exports = {
    breadcrumb: {
        name: 'Breadcrumb',
        description: 'Breadcrumb provides contextual information about page hierarchy.',
        props: BreadcrumbProps,
        slots: BreadcrumbSlots
    }
};
