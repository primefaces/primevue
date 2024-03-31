/**
 *
 * IconField wraps an input and an icon.
 *
 * [Live Demo](https://www.primevue.org/inputtext/)
 *
 * @module iconfield
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type IconFieldPassThroughOptionType = IconFieldPassThroughAttributes | ((options: IconFieldPassThroughMethodOptions) => IconFieldPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface IconFieldPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: IconFieldProps;
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
 * Custom passthrough(pt) options.
 * @see {@link IconFieldProps.pt}
 */
export interface IconFieldPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: IconFieldPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface IconFieldPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in IconField component.
 */
export interface IconFieldProps {
    /**
     * Position of the icon
     * @defaultValue right
     */
    iconPosition?: 'left' | 'right' | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {IconFieldPassThroughOptions}
     */
    pt?: PassThrough<IconFieldPassThroughOptions>;
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
 * Defines valid slots in IconField component.
 */
export interface IconFieldSlots {
    /**
     * Default slot for content.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in IconField component.
 */
export interface IconFieldEmits {}

/**
 * **PrimeVue - IconField**
 *
 * _IconField is used to select a boolean value._
 *
 * [Live Demo](https://www.primevue.org/inputtext/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class IconField extends ClassComponent<IconFieldProps, IconFieldSlots, IconFieldEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        IconField: GlobalComponentConstructor<IconField>;
    }
}

export default IconField;
