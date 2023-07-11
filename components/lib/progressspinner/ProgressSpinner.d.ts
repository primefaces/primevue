/**
 *
 * ProgressSpinner is a process status indicator.
 *
 * [Live Demo](https://www.primevue.org/progressspinner)
 *
 * @module progressspinner
 *
 */
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type ProgressSpinnerPassThroughOptionType = ProgressSpinnerPassThroughAttributes | ((options: ProgressSpinnerPassThroughMethodOptions) => ProgressSpinnerPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ProgressSpinnerPassThroughMethodOptions {
    instance: any;
    props: ProgressSpinnerProps;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ProgressSpinnerProps.pt}
 */
export interface ProgressSpinnerPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: ProgressSpinnerPassThroughOptionType;
    /**
     * Uses to pass attributes to the spinner's DOM element.
     */
    spinner?: ProgressSpinnerPassThroughOptionType;
    /**
     * Uses to pass attributes to the circle's DOM element.
     */
    circle?: ProgressSpinnerPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ProgressSpinnerPassThroughAttributes {
    [key: string]: any;
}

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
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {ProgressSpinnerPassThroughOptions}
     */
    pt?: ProgressSpinnerPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
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
