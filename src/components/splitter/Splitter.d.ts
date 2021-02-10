interface SplitterProps {
    layout?: string;
    gutterSize?: number;
    stateKey?: string;
    stateStorage?: string;
}

declare class Splitter {
    $props: SplitterProps;
}

export default Splitter;
