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
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
    severity?: 'info' | 'success' | 'warning' | 'danger' | null | undefined;
    /**
     * Size of the badge, valid options are 'large' and 'xlarge'.
     */
    size?: 'large' | 'xlarge' | null | undefined;
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
