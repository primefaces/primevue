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
    },
    {
        name: "exact",
        type: "boolean",
        default: "true",
        description: "Whether to apply 'router-link-active-exact' class if route exactly matches the item path."
    }
];

module.exports = {
    breadcrumb: {
        name: "Breadcrumb",
        description: "Breadcrumb provides contextual information about page hierarchy.",
        props: BreadcrumbProps
    }
};
