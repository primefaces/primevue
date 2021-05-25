const BreadcrumbProps = [
    {
        name: "model",
        type: "array",
        default: "null",
        description: "An array of menuitems."
    },
    {
        name: "home",
        type: "menuitem",
        default: "null",
        description: "Configuration for the home icon."
    }
];

module.exports = {
    breadcrumb: {
        name: "Breadcrumb",
        description: "Breadcrumb provides contextual information about page hierarchy.",
        props: BreadcrumbProps
    }
};
