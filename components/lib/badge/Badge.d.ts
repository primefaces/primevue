/**
 *
 * Badge represents people using icons, labels and images.
 *
 * [Live Demo](https://www.primevue.org/badge)
 *
 * @module badge
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type BadgePassThroughOptionType = BadgePassThroughAttributes | ((options: BadgePassThroughMethodOptions) => BadgePassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface BadgePassThroughMethodOptions {
    instance: any;
    props: BadgeProps;
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
export interface BadgePassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: BadgePassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
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
    severity?: 'info' | 'success' | 'warning' | 'danger' | string | null | undefined;
    /**
     * Size of the badge, valid options are 'large' and 'xlarge'.
     */
    size?: 'large' | 'xlarge' | null | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {BadgePassThroughOptions}
     */
    pt?: BadgePassThroughOptions;
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
export interface BadgeEmits {}

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
 */
declare class Badge extends ClassComponent<BadgeProps, BadgeSlots, BadgeEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Badge: GlobalComponentConstructor<Badge>;
    }
}

export default Badge;
