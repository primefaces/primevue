interface SplitButtonProps {
    label?: string;
    icon?: string;
    model?: any[];
    autoZIndex?: boolean;
    baseZIndex?: number;
    appendTo?: string;
    class?: string;
    style?: any;
}

declare class SplitButton {
    $props: SplitButtonProps;
    $emit(eventName: 'click', event: Event): this;
}

export default SplitButton;
