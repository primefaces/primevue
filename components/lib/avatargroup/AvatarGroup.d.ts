/**
 *
 * A set of Avatars can be displayed together using the AvatarGroup component.
 *
 * [Live Demo](https://www.primevue.org/avatar/)
 *
 * @module avatargroup
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type AvatarGroupPassThroughOptionType = AvatarGroupPassThroughAttributes | ((options: AvatarGroupPassThroughMethodOptions) => AvatarGroupPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface AvatarGroupPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: AvatarGroupProps;
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
export interface AvatarGroupPassThroughAttributes {
    [key: string]: any;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link AvatarGroupProps.pt}
 */
export interface AvatarGroupPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AvatarGroupPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Defines valid properties in AvatarGroup component.
 */
export interface AvatarGroupProps {
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {AvatarGroupPassThroughOptions}
     */
    pt?: PassThrough<AvatarGroupPassThroughOptions>;
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
 * Defines valid slots in AvatarGroup component.
 */
export interface AvatarGroupSlots {
    /**
     * Default slot to detect Avatar components.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in AvatarGroup component.
 */
export interface AvatarGroupEmits {}

/**
 * **PrimeVue - AvatarGroup**
 *
 * _A set of Avatars can be displayed together using the AvatarGroup component._
 *
 * [Live Demo](https://www.primevue.org/avatar/)
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
