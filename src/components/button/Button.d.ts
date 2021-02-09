interface ButtonProps {
    label?: string;
    icon?: string;
    iconPos?: string;
    badge?: string;
    badgeClass?: string;
}

declare class Button {
    $props: ButtonProps;
}

export default Button;
