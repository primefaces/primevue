import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type BadgeSeverityType = 'info' | 'success' | 'warning' | 'danger' | undefined;

type BadgeSizeType = 'large' | 'xlarge' | undefined;

export interface BadgeProps {
    /**
     * Value to display inside the badge.
     */
    value?: any;
    /**
     * Severity type of the badge.
     * @see BadgeSeverityType
     */
    severity?: BadgeSeverityType;
    /**
     * Size of the badge, valid options are 'large' and 'xlarge'.
     * @see BadgeSizeType
     */
    size?: BadgeSizeType;
}

export interface BadgeSlots {
    /**
     * Content can easily be customized with the default slot instead of using the built-in display.
     */
    default: () => VNode[];
}

export declare type BadgeEmits = {
}

declare class Badge extends ClassComponent<BadgeProps, BadgeSlots, BadgeEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Badge: GlobalComponentConstructor<Badge>
    }
}

/**
 *
 * Badge is a small status indicator for another element.
 *
 * Demos:
 *
 * - [Badge](https://www.primefaces.org/primevue/showcase/#/badge)
 *
 */
export default Badge;
