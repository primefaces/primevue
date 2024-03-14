/**
 *
 * Displays an image with preview and tranformation options. For multiple image, see Galleria.
 *
 * [Live Demo](https://www.primevue.org/image/)
 *
 * @module image
 *
 */
import { TransitionProps, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type ImagePassThroughOptionType = ImagePassThroughAttributes | ((options: ImagePassThroughMethodOptions) => ImagePassThroughAttributes | string) | string | null | undefined;

export declare type ImagePassThroughTransitionType = TransitionProps | ((options: ImagePassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ImagePassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**ˆ
     * Defines valid properties.
     */
    props: ImageProps;
    /**
     * Defines current inline state.
     */
    state: ImageState;
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
 * @see {@link ImageProps.pt}
 */
export interface ImagePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ImagePassThroughOptionType;
    /**
     * Used to pass attributes to the image's DOM element.
     */
    image?: ImagePassThroughOptionType;
    /**
     * Used to pass attributes to the button's DOM element.
     */
    button?: ImagePassThroughOptionType;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: ImagePassThroughOptionType;
    /**
     * Used to pass attributes to the mask's DOM element.
     */
    mask?: ImagePassThroughOptionType;
    /**
     * Used to pass attributes to the toolbar's DOM element.
     */
    toolbar?: ImagePassThroughOptionType;
    /**
     * Used to pass attributes to the rotate right button's DOM element.
     */
    rotateRightButton?: ImagePassThroughOptionType;
    /**
     * Used to pass attributes to the rotate right icon's DOM element.
     */
    rotateRightIcon?: ImagePassThroughOptionType;
    /**
     * Used to pass attributes to the rotate left button's DOM element.
     */
    rotateLeftButton?: ImagePassThroughOptionType;
    /**
     * Used to pass attributes to the rotate left icon's DOM element.
     */
    rotateLeftIcon?: ImagePassThroughOptionType;
    /**
     * Used to pass attributes to the zoom out button's DOM element.
     */
    zoomOutButton?: ImagePassThroughOptionType;
    /**
     * Used to pass attributes to the zoom out icon's DOM element.
     */
    zoomOutIcon?: ImagePassThroughOptionType;
    /**
     * Used to pass attributes to the zoom in button's DOM element.
     */
    zoomInButton?: ImagePassThroughOptionType;
    /**
     * Used to pass attributes to the zoom in icon's DOM element.
     */
    zoomInIcon?: ImagePassThroughOptionType;
    /**
     * Used to pass attributes to the close button's DOM element.
     */
    closeButton?: ImagePassThroughOptionType;
    /**
     * Used to pass attributes to the close icon's DOM element.
     */
    closeIcon?: ImagePassThroughOptionType;
    /**
     * Used to pass attributes to the preview container's DOM element.
     */
    previewContainer?: ImagePassThroughOptionType;
    /**
     * Used to pass attributes to the preview's DOM element.
     */
    preview?: ImagePassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: ImagePassThroughTransitionType;
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
     * @deprecated since v3.27.0. Use 'indicatoricon' slot.
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
     * Used to pass attributes to DOM elements inside the component.
     * @type {ImagePassThroughOptions}
     */
    pt?: PassThrough<ImagePassThroughOptions>;
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
 * Defines valid slots in Image slots.
 */
export interface ImageSlots {
    /**
     * Custom indicator template.
     */
    indicatoricon(): VNode[];
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
     * @param {Object} scope - image slot's params.
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
         * @deprecated since v3.39.0. Use 'errorCallback' property instead.
         */
        onError: () => void;
        /**
         * Preview click function.
         */
        errorCallback: () => void;
    }): VNode[];
    /**
     * Custom preview template.
     * @param {Object} scope - preview slot's params.
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
         * @deprecated since v3.39.0. Use 'previewCallback' property instead.
         */
        onClick: () => void;
        /**
         * Preview click function.
         */
        previewCallback: () => void;
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

declare module 'vue' {
    export interface GlobalComponents {
        Image: GlobalComponentConstructor<Image>;
    }
}

export default Image;
