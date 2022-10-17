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
        name: 'exact',
        type: 'boolean',
        default: 'true',
        description: "Whether to apply 'router-link-active-exact' class if route exactly matches the item path."
    },
    {
        name: 'aria-label',
        type: 'string',
        default: 'null',
        description: 'Defines a string value that labels an interactive element.'
    },
    {
        name: 'aria-labelledby',
        type: 'string',
        default: 'null',
        description: 'Identifier of the underlying menu element.'
    }
];

const BreadcrumbSlots = [
    {
        name: 'item',
        description: 'Template of a menuitem.'
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
