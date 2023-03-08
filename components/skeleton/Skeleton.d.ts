/**
 *
 * Skeleton is a placeholder to display instead of the actual content.
 *
 * [Live Demo](https://www.primevue.org/skeleton/)
 *
 * @module skeleton
 *
 */
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
