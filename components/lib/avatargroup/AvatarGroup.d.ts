/**
 *
 * AvatarGroup is a helper component for Avatar.
 *
 * [Live Demo](https://www.primevue.org/accordion/)
 *
 * @module avatargroup
 *
 */
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type AvatarGroupPassThroughOptionType = AvatarGroupPassThroughAttributes | null | undefined;

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface AvatarGroupPassThroughAttributes {
    [key: string]: any;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link AvatarGroupProps.pt}
 */
export interface AvatarGroupPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: AvatarGroupPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Defines valid properties in AvatarGroup component.
 */
export interface AvatarGroupProps {
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {AvatarGroupPassThroughOptions}
     */
    pt?: AvatarGroupPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in AvatarGroup component.
 */
export interface AvatarGroupSlots {}

/**
 * Defines valid emits in AvatarGroup component.
 */
export interface AvatarGroupEmits {}

/**
 * **PrimeVue - AvatarGroup**
 *
 * _A set of Avatars can be displayed together using the AvatarGroup component._
 *
 * [Live Demo](https://www.primevue.org/avatargroup/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class AvatarGroup extends ClassComponent<AvatarGroupProps, AvatarGroupSlots, AvatarGroupEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        AvatarGroup: GlobalComponentConstructor<AvatarGroup>;
    }
}

export default AvatarGroup;
