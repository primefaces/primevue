interface ToggleButtonProps {
    value?: boolean;
    onIcon?: string;
    offIcon?: string;
    onLabel?: string;
    offLabel?: string;
    iconPos?: string;
}

declare class ToggleButton {
    $props: ToggleButtonProps;
    $emit(eventName: string, event: Event): this;
}

export default ToggleButton;
