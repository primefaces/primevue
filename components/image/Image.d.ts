import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface ImageProps {
    /**
     * Controls the preview functionality.
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
}

export interface ImageSlots {
    /**
     * Custom indicator template.
     */
    indicator: () => VNode[];
}

export declare type ImageEmits = {
}

declare class Image extends ClassComponent<ImageProps, ImageSlots, ImageEmits> {
    /**
     * Triggered when the preview overlay is shown.
     *
     * @memberof Image
     */
    show: () => void;
    /**
     * Triggered when the preview overlay is hidden.
     *
     * @memberof Image
     */
    hide: () => void;
    /**
     * Triggered when an error occurs while loading an image file.
     * 
     * @memberof Image
     */
    error: () => void;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Image: GlobalComponentConstructor<Image>
    }
}

/**
 *
 * Displays an image with preview and tranformation options. For multiple image, see Galleria.
 *
 * Demos:
 *
 * - [Image](https://www.primefaces.org/primevue/showcase/#/image)
 *
 */
export default Image;
