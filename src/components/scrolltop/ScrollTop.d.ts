interface ScrollToProps {
    target?: string;
    threshold?: number;
    icon?: string;
    behavior?: string;
}

declare class ScrollTop {
    $props: ScrollToProps;
}

export default ScrollTop;
