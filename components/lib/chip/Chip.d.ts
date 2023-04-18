/**
 *
 * Chip represents people using icons, labels and images.
 *
 * [Live Demo](https://www.primevue.org/chip)
 *
 * @module chip
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Chip component.
 */
export interface ChipProps {
    /**
     * Defines the text to display.
     */
    label?: string;
    /**
     * Defines the icon to display.
     * @deprecated since v3.27.0. Use 'icon' slot.
     */
    icon?: string;
    /**
     * Defines the image to display.
     */
    image?: string;
    /**
     * Whether to display a remove icon.
     * @defaultValue false
     */
    removable?: boolean;
    /**
     * Icon of the remove element.
     * @deprecated since v3.27.0. Use 'removeicon' slot.
     */
    removeIcon?: string;
}

/**
 * Defines valid slots in Chip component.
 */
export interface ChipSlots {
    /**
     * Content can easily be customized with the default slot instead of using the built-in modes.
     */
    default(): VNode[];
    /**
     * Custom icon template.
     */
    icon(): VNode[];
    /**
     * Custom remove icon template of chip component.
     * @param {Object} scope - remove icon slot's params.
     */
    removeicon(scope: {
        /**
         * Remove icon click event
         */
        onClick(): void;
        /**
         * Remove icon keydown event
         */
        onKeydown(): void;
    }): VNode[];
}

/**
 * Defines valid properties in Chip component.
 */
export interface ChipEmits {
    /**
     * Callback to invoke when a chip is removed.
     * @param {Event} event - Browser event.
     */
    remove(event: Event): void;
}

/**
 * **PrimeVue - Chip**
 *
 * _Chip represents people using icons, labels and images._
 *
 * [Live Demo](https://www.primevue.org/chip/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Chip extends ClassComponent<ChipProps, ChipSlots, ChipEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Chip: GlobalComponentConstructor<Chip>;
    }
}

export default Chip;
