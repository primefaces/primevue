const AccordionTabProps = [
    {
        name: "header",
        type: "string",
        default: "null",
        description: "Orientation of tab headers."
    },
    {
        name: "headerStyle",
        type: "any",
        default: "null",
        description: "Inline style of the tab header."
    },
    {
        name: "headerClass",
        type: "any",
        default: "null",
        description: "Style class of the tab header."
    },
    {
        name: "headerProps",
        type: "any",
        default: "null",
        description: "Uses to pass all properties of the HTMLDivElement to the tab header."
    },
    {
        name: "headerActionProps",
        type: "any",
        default: "null",
        description: "Uses to pass all properties of the HTMLAnchorElement to the focusable anchor element inside the tab header."
    },
    {
        name: "contentStyle",
        type: "any",
        default: "null",
        description: "Inline style of the tab content."
    },
    {
        name: "contentClass",
        type: "any",
        default: "null",
        description: "Style class of the tab content."
    },
    {
        name: "contentProps",
        type: "any",
        default: "null",
        description: "Uses to pass all properties of the HTMLDivElement to the tab content."
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
