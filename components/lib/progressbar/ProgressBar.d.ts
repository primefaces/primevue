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
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type ProgressBarPassThroughOptionType = ProgressBarPassThroughAttributes | ((options: ProgressBarPassThroughMethodOptions) => ProgressBarPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ProgressBarPassThroughMethodOptions {
    instance: any;
    props: ProgressBarProps;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ProgressBarProps.pt}
 */
export interface ProgressBarPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: ProgressBarPassThroughOptionType;
    /**
     * Uses to pass attributes to the value's DOM element.
     */
    value?: ProgressBarPassThroughOptionType;
    /**
     * Uses to pass attributes to the label's DOM element.
     */
    label?: ProgressBarPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ProgressBarPassThroughAttributes {
    [key: string]: any;
}

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
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {ProgressBarPassThroughOptions}
     */
    pt?: ProgressBarPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
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
