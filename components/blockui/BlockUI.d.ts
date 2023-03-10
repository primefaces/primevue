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
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
