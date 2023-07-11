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
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
export declare type ImagePassThroughOptionType = ImagePassThroughAttributes | ((options: ImagePassThroughMethodOptions) => ImagePassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ImagePassThroughMethodOptions {
    instance: any;
    props: ImageProps;
    state: ImageState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ImageProps.pt}
 */
export interface ImagePassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: ImagePassThroughOptionType;
    /**
     * Uses to pass attributes to the image's DOM element.
     */
    image?: ImagePassThroughOptionType;
    /**
     * Uses to pass attributes to the button's DOM element.
     */
    button?: ImagePassThroughOptionType;
    /**
     * Uses to pass attributes to the icon's DOM element.
     */
    icon?: ImagePassThroughOptionType;
    /**
     * Uses to pass attributes to the mask's DOM element.
     */
    mask?: ImagePassThroughOptionType;
    /**
     * Uses to pass attributes to the toolbar's DOM element.
     */
    toolbar?: ImagePassThroughOptionType;
    /**
     * Uses to pass attributes to the rotate right button's DOM element.
     */
    rotateRightButton?: ImagePassThroughOptionType;
    /**
     * Uses to pass attributes to the rotate right icon's DOM element.
     */
    rotateRightIcon?: ImagePassThroughOptionType;
    /**
     * Uses to pass attributes to the rotate left button's DOM element.
     */
    rotateLeftButton?: ImagePassThroughOptionType;
    /**
     * Uses to pass attributes to the rotate left icon's DOM element.
     */
    rotateLeftIcon?: ImagePassThroughOptionType;
    /**
     * Uses to pass attributes to the zoom out button's DOM element.
     */
    zoomOutButton?: ImagePassThroughOptionType;
    /**
     * Uses to pass attributes to the zoom out icon's DOM element.
     */
    zoomOutIcon?: ImagePassThroughOptionType;
    /**
     * Uses to pass attributes to the zoom in button's DOM element.
     */
    zoomInButton?: ImagePassThroughOptionType;
    /**
     * Uses to pass attributes to the zoom in icon's DOM element.
     */
    zoomInIcon?: ImagePassThroughOptionType;
    /**
     * Uses to pass attributes to the close button's DOM element.
     */
    closeButton?: ImagePassThroughOptionType;
    /**
     * Uses to pass attributes to the close icon's DOM element.
     */
    closeIcon?: ImagePassThroughOptionType;
    /**
     * Uses to pass attributes to the preview container's DOM element.
     */
    previewContainer?: ImagePassThroughOptionType;
    /**
     * Uses to pass attributes to the preview's DOM element.
     */
    preview?: ImagePassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ImagePassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Image component.
 */
export interface ImageState {
    /**
     * Mask visible state as a boolean.
     * @defaultValue false
     */
    maskVisible: boolean;
    /**
     * Preview visible state as a boolean.
     * @defaultValue false
     */
    previewVisible: boolean;
    /**
     * Rotate state as a number.
     * @defaultValue 0
     */
    rotate: number;
    /**
     * Scale state as a boolean.
     * @defaultValue 1
     */
    scale: number;
}

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
    /**
     * Disable the zoom-in button
     * @defaultValue false
     */
    zoomInDisabled?: boolean | undefined;
    /**
     * Disable the zoom-out button
     * @defaultValue false
     */
    zoomOutDisabled?: boolean | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {ImagePassThroughOptions}
     */
    pt?: ImagePassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
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
    /**
     * Custom image template.
     */
    image(scope: {
        /**
         * Style class of the image element.
         */
        class: any;
        /**
         * Style of the image element.
         */
        style: any;
        /**
         * Image error function.
         */
        onError: void;
    }): VNode[];
    /**
     * Custom preview template.
     */
    preview(scope: {
        /**
         * Style class of the preview image element.
         */
        class: any;
        /**
         * Style of the preview image element.
         */
        style: any;
        /**
         * Preview click function.
         */
        onClick: void;
    }): VNode[];
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
