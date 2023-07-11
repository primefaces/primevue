/**
 *
 * BlockUI represents people using icons, labels and images.
 *
 * [Live Demo](https://www.primevue.org/blockui)
 *
 * @module blockui
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type BlockUIPassThroughOptionType = BlockUIPassThroughAttributes | ((options: BlockUIPassThroughMethodOptions) => BlockUIPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface BlockUIPassThroughMethodOptions {
    instance: any;
    props: BlockUIProps;
    state: BlockUIState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link BlockUIProps.pt}
 */
export interface BlockUIPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: BlockUIPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
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
     * Uses to pass attributes to DOM elements inside the component.
     * @type {BlockUIPassThroughOptions}
     */
    pt?: BlockUIPassThroughOptions;
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
export interface BlockUIEmits {
    /**
     * Fired when the element gets blocked.
     */
    block(): void;
    /**
     * Fired when the element gets unblocked.
     */
    unblock(): void;
}

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
 */
declare class BlockUI extends ClassComponent<BlockUIProps, BlockUISlots, BlockUIEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        BlockUI: GlobalComponentConstructor<BlockUI>;
    }
}

export default BlockUI;
