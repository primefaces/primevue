import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type ProgressBarModeType = 'determinate' | 'indeterminate' | undefined;

export interface ProgressBarProps {
    /**
     * Current value of the progress.
     */
    value?: number | undefined;
    /**
     * Defines the mode of the progress
     * @see ProgressBarModeType
     * Default value is 'determinate'.
     */
    mode?: ProgressBarModeType;
    /**
     * Whether to display the progress bar value.
     * Default value is true.
     */
    showValue?: boolean | undefined;
}

export interface ProgressBarSlots {
    /**
     * Custom content slot.
     */
    default: () => VNode[];
}

export declare type ProgressBarEmits = {
}

declare class ProgressBar extends ClassComponent<ProgressBarProps, ProgressBarSlots, ProgressBarEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ProgressBar: GlobalComponentConstructor<ProgressBar>
    }
}

/**
 *
 * ProgressBar is a process status indicator.
 *
 * Demos:
 *
 * - [ProgressBar](https://www.primefaces.org/primevue/showcase/#/progressbar)
 *
 */
export default ProgressBar;
