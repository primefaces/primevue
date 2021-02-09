interface ChipProps {
    label?: string;
    icon?: string;
    image?: string;
    removable?: boolean;
    removeIcon?: string;
}

declare class Chip {
    $props: ChipProps;
}

export default Chip;
