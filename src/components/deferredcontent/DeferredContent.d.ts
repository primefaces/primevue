import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface DeferredContentProps {
}

export interface DeferredContentSlots {
    /**
     * Default content slot.
     */
    default: () => VNode[];
}

export declare type DeferredContentEmits = {
    /**
     * Callback to invoke when deferred content is loaded.
     */
    'load': () => void;
}

declare class DeferredContent extends ClassComponent<DeferredContentProps, DeferredContentSlots, DeferredContentEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        DeferredContent: GlobalComponentConstructor<DeferredContent>
    }
}

/**
 *
 * DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.
 *
 * Demos:
 *
 * - [DeferredContent](https://www.primefaces.org/primevue/showcase/#/deferredcontent)
 *
 */
export default DeferredContent;
