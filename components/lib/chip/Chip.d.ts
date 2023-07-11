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
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type ChipPassThroughOptionType = ChipPassThroughAttributes | ((options: ChipPassThroughMethodOptions) => ChipPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ChipPassThroughMethodOptions {
    instance: any;
    props: ChipProps;
    state: ChipState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ChipProps.pt}
 */
export interface ChipPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: ChipPassThroughOptionType;
    /**
     * Uses to pass attributes to the image's DOM element.
     */
    image?: ChipPassThroughOptionType;
    /**
     * Uses to pass attributes to the icon's DOM element.
     */
    icon?: ChipPassThroughOptionType;
    /**
     * Uses to pass attributes to the label' DOM element.
     */
    label?: ChipPassThroughOptionType;
    /**
     * Uses to pass attributes to the removeIcon's DOM element.
     */
    removeIcon?: ChipPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ChipPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Chip component.
 */
export interface ChipState {
    /**
     * Current visible state as a boolean.
     * @defaultValue true
     */
    visible: boolean;
}

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
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {ChipPassThroughOptions}
     */
    pt?: ChipPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
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
