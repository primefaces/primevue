/**
 *
 * ImageCompare
 *
 * [Live Demo](https://www.primevue.org/ImageCompare/)
 *
 * @module ImageCompare
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { PassThroughOptions } from 'primevue/passthrough';
import { TransitionProps } from 'vue';

export declare type ImageComparePassThroughOptionType = ImageComparePassThroughAttributes | ((options: ImageComparePassThroughMethodOptions) => ImageComparePassThroughAttributes | string) | string | null | undefined;

export declare type ImageComparePassThroughTransitionType = TransitionProps | ((options: ImageComparePassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ImageComparePassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ImageCompareProps;
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
 * @see {@link ImageCompareProps.pt}
 */
export interface ImageComparePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ImageComparePassThroughOptionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ImageComparePassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in ImageCompare component.
 */
export interface ImageCompareProps {
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ImageComparePassThroughOptions}
     */
    pt?: PassThrough<ImageComparePassThroughOptions>;
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
 * Defines valid slots in ImageCompare slots.
 */
export interface ImageCompareSlots {}

export interface ImageCompareEmitsOptions {}

export declare type ImageCompareEmits = EmitFn<ImageCompareEmitsOptions>;

/**
 * **PrimeVue - ImageCompare**
 *
 * _ImageCompare_
 *
 * [Live Demo](https://www.primevue.org/ImageCompare/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const ImageCompare: DefineComponent<ImageCompareProps, ImageCompareSlots, ImageCompareEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        ImageCompare: GlobalComponentConstructor<ImageCompareProps, ImageCompareSlots, ImageCompareEmits>;
    }
}

export default ImageCompare;
