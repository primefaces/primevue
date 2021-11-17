const AccordionTabProps = [
    {
        name: "header",
        type: "string",
        default: "null",
        description: "Orientation of tab headers."
    },
    {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Whether the tab is disabled."
    }
];

module.exports = {
    accordiontab: {
        name: "AccordionTab",
        description: "Accordion element consists of one or more AccordionTab elements.",
        props: AccordionTabProps
    }
};
