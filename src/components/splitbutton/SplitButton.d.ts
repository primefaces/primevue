interface SplitButtonProps {
    label?: string;
    icon?: string;
    model?: any[];
    disabled?: boolean;
    tabindex?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    appendTo?: string;
}

declare class SplitButton {
    $props: SplitButtonProps;
    $emit(eventName: 'click', event: Event): this;
}

export default SplitButton;
