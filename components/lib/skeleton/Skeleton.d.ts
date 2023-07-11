/**
 *
 * Skeleton is a placeholder to display instead of the actual content.
 *
 * [Live Demo](https://www.primevue.org/skeleton/)
 *
 * @module skeleton
 *
 */
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type SkeletonPassThroughOptionType = SkeletonPassThroughAttributes | ((options: SkeletonPassThroughMethodOptions) => SkeletonPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface SkeletonPassThroughMethodOptions {
    instance: any;
    props: SkeletonProps;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link SkeletonProps.pt}
 */
export interface SkeletonPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: SkeletonPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface SkeletonPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in Skeleton component.
 */
export interface SkeletonProps {
    /**
     * Shape of the element.
     * @defaultValue rectangle
     */
    shape?: 'rectangle' | 'circle' | undefined;
    /**
     * Size of the Circle or Square.
     */
    size?: string | undefined;
    /**
     * Width of the element.
     * @defaultValue 100%
     */
    width?: string | undefined;
    /**
     * Height of the element.
     * @defaultValue 1rem
     */
    height?: string | undefined;
    /**
     * Border radius of the element, defaults to value from theme.
     */
    borderRadius?: string | undefined;
    /**
     * Type of the animation.
     * @defaultValue wave
     */
    animation?: 'wave' | 'none' | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {SkeletonPassThroughOptions}
     */
    pt?: SkeletonPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in Skeleton component.
 */
export interface SkeletonSlots {}

/**
 * Defines valid emits in Skeleton component.
 */
export interface SkeletonEmits {}

/**
 * **PrimeVue - Skeleton**
 *
 * _Skeleton is a placeholder to display instead of the actual content._
 *
 * [Live Demo](https://www.primevue.org/skeleton/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Skeleton extends ClassComponent<SkeletonProps, SkeletonSlots, SkeletonEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Skeleton: GlobalComponentConstructor<Skeleton>;
    }
}

export default Skeleton;
