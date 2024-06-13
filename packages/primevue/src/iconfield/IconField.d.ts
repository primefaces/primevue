/**
 *
 * IconField wraps an input and an icon.
 *
 * [Live Demo](https://www.primevue.org/inputtext/)
 *
 * @module iconfield
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type IconFieldPassThroughOptionType<T = any> = IconFieldPassThroughAttributes | ((options: IconFieldPassThroughMethodOptions<T>) => IconFieldPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface IconFieldPassThroughMethodOptions<T = any> {
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
    parent: T;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link IconFieldProps.pt}
 */
export interface IconFieldPassThroughOptions<T = any> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: IconFieldPassThroughOptionType<T>;
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
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
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
export interface IconFieldEmitsOptions {}

export declare type IconFieldEmits = EmitFn<IconFieldEmitsOptions>;

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
declare const IconField: DefineComponent<IconFieldProps, IconFieldSlots, IconFieldEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        IconField: GlobalComponentConstructor<IconFieldProps, IconFieldSlots, IconFieldEmits>;
    }
}

export default IconField;
