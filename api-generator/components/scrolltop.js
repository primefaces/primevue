const ScrollTopProps = [
    {
        name: "target",
        type: "string",
        default: "window",
        description: 'Target of the ScrollTop, valid values are "window" and "parent".'
    },
    {
        name: "threshold",
        type: "number",
        default: "400",
        description: "Defines the threshold value of the vertical scroll position of the target to toggle the visibility."
    },
    {
        name: "icon",
        type: "string",
        default: "pi pi-chevron-up",
        description: "Icon to display."
    },
    {
        name: "behavior",
        type: "string",
        default: "smooth",
        description: 'Defines the scrolling behavi, "smooth" adds an animation and "auto" scrolls with a jump.'
    }
];

module.exports = {
    scrolltop: {
        name: "ScrollTop",
        description: "ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.",
        props: ScrollTopProps
    }
};
