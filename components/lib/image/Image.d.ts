/**
 *
 * Displays an image with preview and tranformation options. For multiple image, see Galleria.
 *
 * [Live Demo](https://www.primevue.org/image/)
 *
 * @module image
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Image component.
 */
export interface ImageProps {
    /**
     * Controls the preview functionality.
     * @defaultValue false
     */
    preview?: boolean | undefined;
    /**
     * Inline style of the image element.
     */
    imageStyle?: any;
    /**
     * Style class of the image element.
     */
    imageClass?: any;
    /**
     * Custom indicator icon.
     * @deprecated since v3.27.0. Use 'indicator' slot.
     */
    indicatorIcon?: string;
}

/**
 * Defines valid slots in Image slots.
 */
export interface ImageSlots {
    /**
     * Custom indicator template.
     */
    indicator(): VNode[];
    /**
     * Custom refresh template.
     */
    refresh(): VNode[];
    /**
     * Custom undo template.
     */
    undo(): VNode[];
    /**
     * Custom zoomout template.
     */
    zoomout(): VNode[];
    /**
     * Custom zoomin template.
     */
    zoomin(): VNode[];
    /**
     * Custom close template.
     */
    close(): VNode[];
}

export interface ImageEmits {}

/**
 * **PrimeVue - Image**
 *
 * _Displays an image with preview and tranformation options. For multiple image, see Galleria._
 *
 * [Live Demo](https://www.primevue.org/image/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Image extends ClassComponent<ImageProps, ImageSlots, ImageEmits> {
    /**
     * Triggered when the preview overlay is shown.
     *
     * @memberof Image
     */
    show(): void;
    /**
     * Triggered when the preview overlay is hidden.
     *
     * @memberof Image
     */
    hide(): void;
    /**
     * Triggered when an error occurs while loading an image file.
     *
     * @memberof Image
     */
    error(): void;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Image: GlobalComponentConstructor<Image>;
    }
}

export default Image;
