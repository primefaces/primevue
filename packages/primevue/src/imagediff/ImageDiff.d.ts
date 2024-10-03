/**
 *
 * ImageDiff
 *
 * [Live Demo](https://www.primevue.org/imagediff/)
 *
 * @module imagediff
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { PassThroughOptions } from 'primevue/passthrough';
import { TransitionProps } from 'vue';

export declare type ImageDiffPassThroughOptionType = ImageDiffPassThroughAttributes | ((options: ImageDiffPassThroughMethodOptions) => ImageDiffPassThroughAttributes | string) | string | null | undefined;

export declare type ImageDiffPassThroughTransitionType = TransitionProps | ((options: ImageDiffPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ImageDiffPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ImageDiffProps;
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
 * @see {@link ImageDiffProps.pt}
 */
export interface ImageDiffPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ImageDiffPassThroughOptionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ImageDiffPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in ImageDiff component.
 */
export interface ImageDiffProps {
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ImageDiffPassThroughOptions}
     */
    pt?: PassThrough<ImageDiffPassThroughOptions>;
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
 * Defines valid slots in ImageDiff slots.
 */
export interface ImageDiffSlots {}

export interface ImageDiffEmitsOptions {}

export declare type ImageDiffEmits = EmitFn<ImageDiffEmitsOptions>;

/**
 * **PrimeVue - ImageDiff**
 *
 * _ImageDiff_
 *
 * [Live Demo](https://www.primevue.org/imagediff/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const ImageDiff: DefineComponent<ImageDiffProps, ImageDiffSlots, ImageDiffEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        ImageDiff: GlobalComponentConstructor<ImageDiffProps, ImageDiffSlots, ImageDiffEmits>;
    }
}

export default ImageDiff;
