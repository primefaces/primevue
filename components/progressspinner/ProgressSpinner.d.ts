/**
 *
 * ProgressSpinner is a process status indicator.
 *
 * [Live Demo](https://www.primevue.org/progressspinner)
 *
 * @module progressspinner
 *
 */
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in ProgressSpinner component.
 */
export interface ProgressSpinnerProps {
    /**
     * Width of the circle stroke.
     * @defaultValue 2
     */
    strokeWidth?: string | undefined;
    /**
     * Color for the background of the circle.
     */
    fill?: string | undefined;
    /**
     * Duration of the rotate animation.
     * @defaultValue 2s
     */
    animationDuration?: string | undefined;
}

/**
 * Defines valid slots in ProgressSpinner component.
 */
export interface ProgressSpinnerSlots {}

/**
 * Defines valid emits in ProgressSpinner component.
 */
export interface ProgressSpinnerEmits {}

/**
 * **PrimeVue - ProgressSpinner**
 *
 * _ProgressSpinner is a process status indicator._
 *
 * [Live Demo](https://www.primevue.org/progressspinner/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class ProgressSpinner extends ClassComponent<ProgressSpinnerProps, ProgressSpinnerSlots, ProgressSpinnerEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ProgressSpinner: GlobalComponentConstructor<ProgressSpinner>;
    }
}

export default ProgressSpinner;
