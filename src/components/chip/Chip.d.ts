import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface ChipProps {
    /**
     * Defines the text to display.
     */
    label?: string;
    /**
     * Defines the icon to display.
     */
    icon?: string;
    /**
     * Defines the image to display.
     */
    image?: string;
    /**
     * Whether to display a remove icon.
     */
    removable?: boolean;
    /**
     * Icon of the remove element.
     * Default value is 'pi pi-times-circle'.
     */
    removeIcon?: string;
}

export interface ChipSlots {
    /**
     * Content can easily be customized with the default slot instead of using the built-in modes.
     */
    default: () => VNode[];
}

export declare type ChipEmits = {
    /**
     * Callback to invoke when a chip is removed.
     * @param {Event} event - Browser event.
     */
    'remove': (event: Event) => void;
}

declare class Chip extends ClassComponent<ChipProps, ChipSlots, ChipEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Chip: GlobalComponentConstructor<Chip>
    }
}

/**
 *
 * Chip represents entities using icons, labels and images.
 *
 * Demos:
 *
 * - [Chip](https://www.primefaces.org/primevue/showcase/#/chip)
 *
 */
export default Chip;
