/**
 *
 * BlockUI represents people using icons, labels and images.
 *
 * [Live Demo](https://www.primevue.org/blockui)
 *
 * @module blockui
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type BlockUIPassThroughOptionType = BlockUIPassThroughAttributes | ((options: BlockUIPassThroughMethodOptions) => BlockUIPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface BlockUIPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: BlockUIProps;
    /**
     * Defines current inline state.
     */
    state: BlockUIState;
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
 * @see {@link BlockUIProps.pt}
 */
export interface BlockUIPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: BlockUIPassThroughOptionType;
    /**
     * Used to pass attributes to the mask's DOM element.
     */
    mask?: BlockUIPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface BlockUIPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in BlockUI component.
 */
export interface BlockUIState {
    /**
     * Current blocked state as a boolean.
     * @defaultValue false
     */
    isBlocked: boolean;
}

/**
 * Defines valid properties in BlockUI component
 */
export interface BlockUIProps {
    /**
     * Controls the blocked state.
     * @defaultValue false
     */
    blocked?: boolean | undefined;
    /**
     * When enabled, the whole document gets blocked.
     * @defaultValue false
     */
    fullScreen?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * @defaultValue 0
     */
    baseZIndex?: number | undefined;
    /**
     * Whether to automatically manage layering.
     * @defaultValue true
     */
    autoZIndex?: boolean | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {BlockUIPassThroughOptions}
     */
    pt?: PassThrough<BlockUIPassThroughOptions>;
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
 * Defines valid slots in BlockUI component
 */
export interface BlockUISlots {
    /**
     * Custom content's slot.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in BlockUI component
 */
export interface BlockUIEmitsOptions {
    /**
     * Fired when the element gets blocked.
     */
    block(): void;
    /**
     * Fired when the element gets unblocked.
     */
    unblock(): void;
}

export declare type BlockUIEmits = EmitFn<BlockUIEmitsOptions>;

/**
 * **PrimeVue - BlockUI**
 *
 * _BlockUI represents people using icons, labels and images._
 *
 * [Live Demo](https://www.primevue.org/blockui/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const BlockUI: DefineComponent<BlockUIProps, BlockUISlots, BlockUIEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        BlockUI: GlobalComponentConstructor<BlockUIProps, BlockUISlots, BlockUIEmits>;
    }
}

export default BlockUI;
