/**
 *
 * Avatar represents people using icons, labels and images.
 *
 * - [Live Demo](https://primevue.org/avatar)
 *
 * @module avatar
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
}

/**
 * Defines valid slots in Avatar component.
 */
export interface AvatarSlots {
    /**
     * Content can easily be customized with the default slot instead of using the built-in modes.
     */
    default(): VNode[];
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
