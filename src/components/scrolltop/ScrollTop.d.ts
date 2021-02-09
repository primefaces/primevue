interface ScrollToProps {
    target?: string;
    threshold?: number;
    icon?: boolean;
    behavior?: boolean;
}

declare class ScrollTo {
    $props: ScrollToProps;
}

export default ScrollTo;
