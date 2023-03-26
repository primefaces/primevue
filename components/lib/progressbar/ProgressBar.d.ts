/**
 *
 * ProgressBar is a process status indicator.
 *
 * [Live Demo](https://www.primevue.org/progressbar)
 *
 * @module progressbar
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in ProgressBar component.
 */
export interface ProgressBarProps {
    /**
     * Current value of the progress.
     */
    value?: number | undefined;
    /**
     * Defines the mode of the progress
     * @defaultValue determinate
     */
    mode?: 'determinate' | 'indeterminate' | undefined;
    /**
     * Whether to display the progress bar value.
     * @defaultValue true
     */
    showValue?: boolean | undefined;
}

/**
 * Defines valid slots in ProgressBar component.
 */
export interface ProgressBarSlots {
    /**
     * Custom content slot.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in ProgressBar component.
 */
export interface ProgressBarEmits {}

/**
 * **PrimeVue - ProgressBar**
 *
 * ProgressBar is a process status indicator._
 *
 * [Live Demo](https://www.primevue.org/progressbar/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class ProgressBar extends ClassComponent<ProgressBarProps, ProgressBarSlots, ProgressBarEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ProgressBar: GlobalComponentConstructor<ProgressBar>;
    }
}

export default ProgressBar;
