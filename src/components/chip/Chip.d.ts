interface ChipProps {
    label?: string;
    icon?: string;
    image?: string;
    removable?: boolean;
    removeIcon?: string;
}

declare class Chip {
    $props: ChipProps;
    $emit(eventName: 'remove', event: Event): this;
}

export default Chip;
