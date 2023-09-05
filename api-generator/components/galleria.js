const GalleriaProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'value',
        type: 'array',
        default: 'null',
        description: 'An array of objects to display.'
    },
    {
        name: 'activeIndex',
        type: 'number',
        default: '0',
        description: 'Index of the first item.'
    },
    {
        name: 'fullscreen',
        type: 'boolean',
        default: 'false',
        description: 'Whether to display the component on fullscreen.'
    },
    {
        name: 'visible',
        type: 'boolean',
        default: 'false',
        description: 'Specifies the visibility of the mask on fullscreen mode.'
    },
    {
        name: 'numVisible',
        type: 'number',
        default: '3',
        description: 'Number of items per page.'
    },
    {
        name: 'responsiveOptions',
        type: 'any',
        default: 'null',
        description: 'An array of options for responsive design.'
    },
    {
        name: 'showItemNavigators',
        type: 'boolean',
        default: 'false',
        description: 'Whether to display navigation buttons in item section.'
    },
    {
        name: 'showThumbnailNavigators',
        type: 'boolean',
        default: 'true',
        description: 'Whether to display navigation buttons in thumbnail container.'
    },
    {
        name: 'showItemNavigatorsOnHover',
        type: 'boolean',
        default: 'false',
        description: 'Whether to display navigation buttons on item hover.'
    },
    {
        name: 'changeItemOnIndicatorHover',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, item is changed on indicator hover.'
    },
    {
        name: 'circular',
        type: 'boolean',
        default: 'false',
        description: 'Defines if scrolling would be infinite.'
    },
    {
        name: 'autoPlay',
        type: 'boolean',
        default: 'false',
        description: 'Items are displayed with a slideshow in autoPlay mode.'
    },
    {
        name: 'transitionInterval',
        type: 'number',
        default: '4000',
        description: 'Time in milliseconds to scroll items.'
    },
    {
        name: 'showThumbnails',
        type: 'boolean',
        default: 'true',
        description: 'Whether to display thumbnail container.'
    },
    {
        name: 'thumbnailsPosition',
        type: 'string',
        default: 'bottom',
        description: 'Position of thumbnails. Valid values are "bottom", "top", "left" and "right".'
    },
    {
        name: 'verticalThumbnailViewPortHeight',
        type: 'string',
        default: '300px',
        description: 'Height of the viewport in vertical thumbnail.'
    },
    {
        name: 'showIndicators',
        type: 'boolean',
        default: 'false',
        description: 'Whether to display indicator container.'
    },
    {
        name: 'showIndicatorsOnItem',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, indicator container is displayed on item container.'
    },
    {
        name: 'indicatorsPosition',
        type: 'string',
        default: 'bottom',
        description: 'Position of indicators. Valid values are "bottom", "top", "left" and "right".'
    },
    {
        name: 'baseZIndex',
        type: 'number',
        default: '0',
        description: 'ase zIndex value to use in layering.'
    },
    {
        name: 'maskClass',
        type: 'string',
        default: 'null',
        description: 'Style class of the mask on fullscreen mode.'
    },
    {
        name: 'containerStyle',
        type: 'any',
        default: 'null',
        description: "Inline style of the component on fullscreen mode. Otherwise, the 'style' property can be used."
    },
    {
        name: 'containerClass',
        type: 'any',
        default: 'null',
        description: "Style class of the component on fullscreen mode. Otherwise, the 'class' property can be used."
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

const GalleriaSlots = [
    {
        name: 'header',
        description: "Custom content for the component's header."
    },
    {
        name: 'footer',
        description: "Custom content for the component's footer."
    },
    {
        name: 'item',
        description: 'Custom content for the item.'
    },
    {
        name: 'caption',
        description: 'Custom caption content.'
    },
    {
        name: 'thumbnail',
        description: 'Custom thumbnail content.'
    },
    {
        name: 'indicator',
        description: 'Custom indicator content.'
    },
    {
        name: 'closeicon',
        description: 'Custom close icon template.'
    },
    {
        name: 'previousitemicon',
        description: 'Custom navigator previous item icon template.'
    },
    {
        name: 'nextitemicon',
        description: 'Custom navigator next item icon template.'
    },
    {
        name: 'previousthumbnailicon',
        description: 'Custom thumbnail previous icon template.'
    },
    {
        name: 'nextthumbnailicon',
        description: 'Custom thumbnail next icon template.'
    }
];

module.exports = {
    galleria: {
        name: 'Galleria',
        description: 'Galleria is an advanced content gallery component.',
        props: GalleriaProps,
        slots: GalleriaSlots
    }
};
