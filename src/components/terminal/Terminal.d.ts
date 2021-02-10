interface TerminalProps {
    welcomeMessage?: string;
    prompt?: string;
}

declare class Terminal {
    $props: TerminalProps;
}

export default Terminal;
