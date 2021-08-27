const StepsProps = [
    {
        name: "id",
        type: "string",
        default: "null",
        description: "Unique identifier of the element."
    },
    {
        name: "model",
        type: "array",
        default: "null",
        description: "An array of menuitems."
    },
    {
        name: "readonly",
        type: "boolean",
        default: "true",
        description: "Whether the items are clickable or not."
    },
    {
        name: "exact",
        type: "boolean",
        default: "true",
        description: "Whether to apply 'router-link-active-exact' class if route exactly matches the item path."
    }
];

const StepsSlots = [
    {
        name: "item",
        description: "Template of a menuitem."
    }
];

module.exports = {
    steps: {
        name: "steps",
        description: "Steps components is an indicator for the steps in a wizard workflow.",
        props: StepsProps,
        slots: StepsSlots
    }
};
