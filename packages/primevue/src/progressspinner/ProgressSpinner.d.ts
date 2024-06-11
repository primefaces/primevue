/**
 *
 * ProgressSpinner is a process status indicator.
 *
 * [Live Demo](https://www.primevue.org/progressspinner)
 *
 * @module progressspinner
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';

export declare type ProgressSpinnerPassThroughOptionType = ProgressSpinnerPassThroughAttributes | ((options: ProgressSpinnerPassThroughMethodOptions) => ProgressSpinnerPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ProgressSpinnerPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ProgressSpinnerProps;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ProgressSpinnerProps.pt}
 */
export interface ProgressSpinnerPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ProgressSpinnerPassThroughOptionType;
    /**
     * Used to pass attributes to the spinner's DOM element.
     */
    spinner?: ProgressSpinnerPassThroughOptionType;
    /**
     * Used to pass attributes to the circle's DOM element.
     */
    circle?: ProgressSpinnerPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
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
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ProgressSpinnerPassThroughOptions}
     */
    pt?: PassThrough<ProgressSpinnerPassThroughOptions>;
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
 * Defines valid slots in ProgressSpinner component.
 */
export interface ProgressSpinnerSlots {}

/**
 * Defines valid emits in ProgressSpinner component.
 */
export interface ProgressSpinnerEmitsOptions {}

export declare type ProgressSpinnerEmits = EmitFn<ProgressSpinnerEmitsOptions>;

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
 *
 */
declare const ProgressSpinner: DefineComponent<ProgressSpinnerProps, ProgressSpinnerSlots, ProgressSpinnerEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        ProgressSpinner: GlobalComponentConstructor<ProgressSpinnerProps, ProgressSpinnerSlots, ProgressSpinnerEmits>;
    }
}

export default ProgressSpinner;
