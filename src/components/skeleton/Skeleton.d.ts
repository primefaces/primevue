import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type SkeletonShapeType = 'rectangle' | 'circle' | undefined;

type SkeletonAnimationType = 'wave' | 'none' | undefined;

export interface SkeletonProps {
    /**
     * Shape of the element.
     * @see SkeletonShapeType
     * Default value is 'rectangle'.
     */
    shape?: SkeletonShapeType;
    /**
     * Size of the Circle or Square.
     */
    size?: string | undefined;
    /**
     * Width of the element.
     * Default value is '100%'.
     */
    width?: string | undefined;
    /**
     * Height of the element.
     * Default value is '1rem'.
     */
    height?: string | undefined;
    /**
     * Border radius of the element, defaults to value from theme.
     */
    borderRadius?: string | undefined;
    /**
     * Type of the animation.
     * @see SkeletonAnimationType
     * Default value is 'wave'.
     */
    animation?: SkeletonAnimationType;
}

export interface SkeletonSlots {
}

export declare type SkeletonEmits = {
}

declare class Skeleton extends ClassComponent<SkeletonProps, SkeletonSlots, SkeletonEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Skeleton: GlobalComponentConstructor<Skeleton>
    }
}

/**
 *
 * Skeleton is a placeholder to display instead of the actual content.
 *
 * Demos:
 *
 * - [Skeleton](https://www.primefaces.org/primevue/showcase/#/skeleton)
 *
 */
export default Skeleton;
