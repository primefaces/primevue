/**
 *
 * Chip represents people using icons, labels and images.
 *
 * [Live Demo](https://www.primevue.org/chip)
 *
 * @module chip
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type ChipPassThroughOptionType<T = any> = ChipPassThroughAttributes | ((options: ChipPassThroughMethodOptions<T>) => ChipPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ChipPassThroughMethodOptions<T> {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ChipProps;
    /**
     * Defines current inline state.
     */
    state: ChipState;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: T;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ChipProps.pt}
 */
export interface ChipPassThroughOptions<T = any> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ChipPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the image's DOM element.
     */
    image?: ChipPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: ChipPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the label' DOM element.
     */
    label?: ChipPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the removeIcon's DOM element.
     */
    removeIcon?: ChipPassThroughOptionType<T>;
    /**
     * Used to manage all lifecycle hooks.
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
     */
    removeIcon?: string;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ChipPassThroughOptions}
     */
    pt?: PassThrough<ChipPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
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
         * @param {Event} event - Browser event
         */
        removeCallback: (event: Event) => void;
        /**
         * Remove icon keydown event
         * @param {Event} event - Browser event
         */
        keydownCallback: (event: Event) => void;
    }): VNode[];
}

/**
 * Defines valid properties in Chip component.
 */
export interface ChipEmitsOptions {
    /**
     * Callback to invoke when a chip is removed.
     * @param {Event} event - Browser event.
     */
    remove(event: Event): void;
}

export declare type ChipEmits = EmitFn<ChipEmitsOptions>;

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
 *
 */
declare const Chip: DefineComponent<ChipProps, ChipSlots, ChipEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Chip: DefineComponent<ChipProps, ChipSlots, ChipEmits>;
    }
}

export default Chip;
