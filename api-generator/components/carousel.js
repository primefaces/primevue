const CarouselProps = [
    {
        name: "value",
        type: "array",
        default: "null",
        description: "An array of objects to display."
    },
    {
        name: "page",
        type: "number",
        default: "null",
        description: "Index of the first item."
    },
    {
        name: "circular",
        type: "boolean",
        default: "false",
        description: "Defines if scrolling would be infinite."
    },
    {
        name: "autoplayInterval",
        type: "number",
        default: "null",
        description: "Time in milliseconds to scroll items automatically."
    },
    {
        name: "numVisible",
        type: "number",
        default: "1",
        description: "Number of items per page."
    },
    {
        name: "numScroll",
        type: "number",
        default: "1",
        description: "Number of items to scroll."
    },
    {
        name: "responsiveOptions",
        type: "any",
        default: "null",
        description: "An array of options for responsive design."
    },
    {
        name: "orientation",
        type: "string",
        default: "horizontal",
        description: 'Specifies the layout of the component, valid values are "horizontal" and "vertical".'
    },
    {
        name: "verticalViewPortHeight",
        type: "string",
        default: "300px",
        description: "Height of the viewport in vertical layout."
    },
    {
        name: "contentClass",
        type: "string",
        default: "null",
        description: "Style class of main content."
    },
    {
        name: "containerClass",
        type: "string",
        default: "null",
        description: "Style class of the viewport container."
    },
    {
        name: "indicatorsContentClass",
        type: "string",
        default: "null",
        description: "Style class of the indicator items."
    }
];

const CarouselSlots = [
    {
        name: "header",
        description: "Custom content for the component header."
    },
    {
        name: "footer",
        description: "Custom content for the component footer."
    },
    {
        name: "item",
        description: "Custom content for the component item."
    }
];

module.exports = {
    carousel: {
        name: "Carousel",
        description: "Carousel is a content slider featuring various customization options.",
        props: CarouselProps,
        slots: CarouselSlots
    }
};
