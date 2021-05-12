const TerminalProps = [
    {
        name: "welcomeMessage",
        type: "string",
        default: "null",
        description: "Initial text to display on terminal."
    },
    {
        name: "prompt",
        type: "string",
        default: "null",
        description: "Prompt text for each command."
    }
];

module.exports = {
    terminal: {
        name: "Terminal",
        description: "Terminal is a text based user interface.",
        props: TerminalProps
    }
};
