/**
 *
 * Badge represents people using icons, labels and images.
 *
 * [Live Demo](https://www.primevue.org/badge)
 *
 * @module badge
 *
 */
import type { DefineComponent, DesignToken, EmitFn, HintedString, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type BadgePassThroughOptionType<T = any> = BadgePassThroughAttributes | ((options: BadgePassThroughMethodOptions<T>) => BadgePassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface BadgePassThroughMethodOptions<T> {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: BadgeProps;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
    /**
     * Defines parent instance.
     */
    parent: T;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface BadgePassThroughAttributes {
    [key: string]: any;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link BadgeProps.pt}
 */
export interface BadgePassThroughOptions<T = any> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: BadgePassThroughOptionType<T>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Defines valid properties in Badge component.
 */
export interface BadgeProps {
    /**
     * Value to display inside the badge.
     */
    value?: string | number;
    /**
     * Severity type of the badge.
     */
    severity?: HintedString<'secondary' | 'info' | 'success' | 'warn' | 'danger' | 'contrast'> | null | undefined;
    /**
     * Size of the badge, valid options are 'small', 'large', and 'xlarge'.
     */
    size?: 'small' | 'large' | 'xlarge' | null | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {BadgePassThroughOptions}
     */
    pt?: PassThrough<BadgePassThroughOptions>;
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
 * Defines valid slots in Badge component.
 */
export interface BadgeSlots {
    /**
     * Content can easily be customized with the default slot instead of using the built-in display.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in Badge component.
 */
export interface BadgeEmitsOptions {}

export declare type BadgeEmits = EmitFn<BadgeEmitsOptions>;

/**
 * **PrimeVue - Badge**
 *
 * _Badge represents people using icons, labels and images._
 *
 * [Live Demo](https://www.primevue.org/badge/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Badge: DefineComponent<BadgeProps, BadgeSlots, BadgeEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Badge: DefineComponent<BadgeProps, BadgeSlots, BadgeEmits>;
    }
}

export default Badge;
