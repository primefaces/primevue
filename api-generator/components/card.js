const CardSlots = [
    {
        name: "header",
        description: "Custom content for the component header."
    },
    {
        name: "title",
        description: "Custom content for the component title."
    },
    {
        name: "subtitle",
        description: "Custom content for the component subtitle."
    },
    {
        name: "content",
        description: "Custom content for the component content."
    },
    {
        name: "footer",
        description: "Custom content for the component footer."
    }
];

module.exports = {
    card: {
        name: "Card",
        description: "Card is a flexible container component.",
        slots: CardSlots
    }
};
