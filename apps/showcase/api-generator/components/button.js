const ButtonProps = [
    {
        name: 'label',
        type: 'string',
        default: 'null',
        description: 'Text of the button.'
    },
    {
        name: 'icon',
        type: 'string',
        default: 'null',
        description: 'Name of the icon.'
    },
    {
        name: 'iconPos',
        type: 'string',
        default: 'left',
        description: 'Position of the icon, valid values are "left", "right", "bottom" and "top".'
    },
    {
        name: 'iconClass',
        type: 'string',
        default: 'null',
        description: 'Style class of the icon.'
    },
    {
        name: 'badge',
        type: 'string',
        default: 'null',
        description: 'Value of the badge.'
    },
    {
        name: 'badgeClass',
        type: 'string',
        default: 'null',
        description: 'Style class of the badge.'
    },
    {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Whether the button is in loading state.'
    },
    {
        name: 'loadingIcon',
        type: 'string',
        default: 'pi pi-spinner pi-spin',
        description: 'Icon to display in loading state.'
    },
    {
        name: 'link',
        type: 'boolean',
        default: 'false',
        description: 'Add a link style to the button.'
    },
    {
        name: 'severity',
        type: 'string',
        default: 'null',
        description: 'Defines the style of the button, valid values are "secondary", "success", "info", "warn", "help", "danger", "contrast".'
    },
    {
        name: 'raised',
        type: 'boolean',
        default: 'false',
        description: 'Add a shadow to indicate elevation.'
    },
    {
        name: 'rounded',
        type: 'boolean',
        default: 'false',
        description: 'Add a circular border radius to the button.'
    },
    {
        name: 'text',
        type: 'boolean',
        default: 'false',
        description: 'Add a textual class to the button without a background initially.'
    },
    {
        name: 'outlined',
        type: 'boolean',
        default: 'false',
        description: 'Add a border class without a background initially.'
    },
    {
        name: 'size',
        type: 'string',
        default: 'null',
        description: 'Defines the size of the button, valid values are "small" and "large".'
    },
    {
        name: 'plain',
        type: 'boolean',
        default: 'false',
        description: 'Add a plain textual class to the button without a background initially.'
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

const ButtonEvents = [];

const ButtonSlots = [
    {
        name: 'icon',
        description: 'Custom icon template.'
    },
    {
        name: 'loadingicon',
        description: 'Custom loading icon template.'
    }
];

module.exports = {
    button: {
        name: 'Button',
        description: 'Button is an extension to standard button element with icons and theming.',
        props: ButtonProps,
        events: ButtonEvents,
        slots: ButtonSlots
    }
};
