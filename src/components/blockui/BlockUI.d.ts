import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface BlockUIProps {
    /**
     * Controls the blocked state.
     */
    blocked?: boolean | undefined;
    /**
     * When enabled, the whole document gets blocked.
     */
    fullScreen?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * Default value is 0.
     */
    baseZIndex?: number | undefined;
    /**
     * Whether to automatically manage layering.
     * Default value is true.
     */
    autoZIndex?: boolean | undefined;
}

export interface BlockUISlots {
    /**
     * Custom content's slot.
     */
    default: () => VNode[];
}

export declare type BlockUIEmits = {
    /**
     * Fired when the element gets blocked.
     */
    'block': () => void;
    /**
     * Fired when the element gets unblocked.
     */
    'unblock': () => void;
}

declare class BlockUI extends ClassComponent<BlockUIProps, BlockUISlots, BlockUIEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        BlockUI: GlobalComponentConstructor<BlockUI>
    }
}

/**
 *
 * BlockUI can either block other components or the whole page.
 *
 * Demos:
 *
 * - [BlockUI](https://www.primefaces.org/primevue/showcase/#/blockui)
 *
 */
export default BlockUI;
