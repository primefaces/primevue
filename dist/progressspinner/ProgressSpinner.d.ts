import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface ProgressSpinnerProps {
    /**
     * Width of the circle stroke.
     * Default value is 2.
     */
    strokeWidth?: string | undefined;
    /**
     * Color for the background of the circle.
     */
    fill?: string | undefined;
    /**
     * Duration of the rotate animation.
     * Default value is 2s.
     */
    animationDuration?: string | undefined;
}

export interface ProgressSpinnerSlots {
}

export declare type ProgressSpinnerEmits = {
}

declare class ProgressSpinner extends ClassComponent<ProgressSpinnerProps, ProgressSpinnerSlots, ProgressSpinnerEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ProgressSpinner: GlobalComponentConstructor<ProgressSpinner>
    }
}

/**
 *
 * ProgressSpinner is a process status indicator.
 *
 * Demos:
 *
 * - [ProgressSpinner](https://www.primefaces.org/primevue/showcase/#/progressspinner)
 *
 */
export default ProgressSpinner;
