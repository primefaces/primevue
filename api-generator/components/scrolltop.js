const ScrollTopProps = [
    {
        name: 'target',
        type: 'string',
        default: 'window',
        description: 'Target of the ScrollTop, valid values are "window" and "parent".'
    },
    {
        name: 'threshold',
        type: 'number',
        default: '400',
        description: 'Defines the threshold value of the vertical scroll position of the target to toggle the visibility.'
    },
    {
        name: 'icon',
        type: 'string',
        default: 'undefined',
        description: 'Icon to display.'
    },
    {
        name: 'behavior',
        type: 'string',
        default: 'smooth',
        description: 'Defines the scrolling behavi, "smooth" adds an animation and "auto" scrolls with a jump.'
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

const ScrollTopSlots = [
    {
        name: 'icon',
        description: 'Custom scrolltop icon template.'
    }
];

module.exports = {
    scrolltop: {
        name: 'ScrollTop',
        description: 'ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.',
        props: ScrollTopProps,
        slots: ScrollTopSlots
    }
};
