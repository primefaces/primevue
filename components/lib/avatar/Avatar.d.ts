/**
 *
 * Avatar represents people using icons, labels and images.
 *
 * - [Live Demo](https://primevue.org/avatar)
 *
 * @module avatar
 */
import { VNode } from 'vue';
import { AvatarGroupPassThroughOptions } from '../avatargroup';
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type AvatarPassThroughOptionType = AvatarPassThroughAttributes | ((options: AvatarPassThroughMethodOptions) => AvatarPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface AvatarPassThroughMethodOptions {
    instance: any;
    props: AvatarProps;
    parent: AvatarGroupPassThroughOptions;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface AvatarPassThroughAttributes {
    [key: string]: any;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link AvatarProps.pt}
 */
export interface AvatarPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: AvatarPassThroughOptionType;
    /**
     * Uses to pass attributes to the label's DOM element.
     */
    label?: AvatarPassThroughOptionType;
    /**
     * Uses to pass attributes to the icon's DOM element.
     */
    icon?: AvatarPassThroughOptionType;
    /**
     * Uses to pass attributes to the image's DOM element.
     */
    image?: AvatarPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Defines valid properties in Avatar component.
 */
export interface AvatarProps {
    /**
     * Defines the text to display.
     */
    label?: string | undefined;
    /**
     * Defines the icon to display.
     * @deprecated since v3.27.0. Use 'icon' slot.
     */
    icon?: string | undefined;
    /**
     * Defines the image to display.
     */
    image?: string | undefined;
    /**
     * Size of the element.
     * @defaultValue normal
     */
    size?: 'normal' | 'large' | 'xlarge' | undefined;
    /**
     * Shape of the element.
     * @defaultValue square
     */
    shape?: 'square' | 'circle' | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    'aria-label'?: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {AvatarPassThroughOptions}
     */
    pt?: AvatarPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in Avatar component.
 */
export interface AvatarSlots {
    /**
     * Content can easily be customized with the default slot instead of using the built-in modes.
     */
    default(): VNode[];
    /**
     * Custom icon template.
     */
    icon(): VNode[];
}

/**
 * Defines valid emits in Avatar component.
 */
export interface AvatarEmits {
    /**
     * Triggered when an error occurs while loading an image file.
     */
    error(): void;
}

/**
 * **PrimeVue - Avatar**
 *
 * _Avatar represents people using icons, labels and images._
 *
 * [Live Demo](https://www.primevue.org/avatar/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Avatar extends ClassComponent<AvatarProps, AvatarSlots, AvatarEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Avatar: GlobalComponentConstructor<Avatar>;
    }
}

export default Avatar;
