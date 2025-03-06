/**
 *
 * Avatar represents people using icons, labels and images.
 *
 * - [Live Demo](https://primevue.org/avatar)
 *
 * @module avatar
 */
import type { DefineComponent, DesignToken, EmitFn, HintedString, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type AvatarPassThroughOptionType = AvatarPassThroughAttributes | ((options: AvatarPassThroughMethodOptions) => AvatarPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface AvatarPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: AvatarProps;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
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
     * Used to pass attributes to the root's DOM element.
     */
    root?: AvatarPassThroughOptionType;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: AvatarPassThroughOptionType;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: AvatarPassThroughOptionType;
    /**
     * Used to pass attributes to the image's DOM element.
     */
    image?: AvatarPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
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
    size?: HintedString<'normal' | 'large' | 'xlarge'> | undefined;
    /**
     * Shape of the element.
     * @defaultValue square
     */
    shape?: HintedString<'square' | 'circle'> | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {AvatarPassThroughOptions}
     */
    pt?: PassThrough<AvatarPassThroughOptions>;
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
export interface AvatarEmitsOptions {
    /**
     * Triggered when an error occurs while loading an image file.
     */
    error(event: Event): void;
}

export declare type AvatarEmits = EmitFn<AvatarEmitsOptions>;

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
 *
 */
declare const Avatar: DefineComponent<AvatarProps, AvatarSlots, AvatarEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Avatar: DefineComponent<AvatarProps, AvatarSlots, AvatarEmits>;
    }
}

export default Avatar;
