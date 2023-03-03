/**
 *
 * DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.
 *
 * [Live Demo](https://www.primevue.org/deferredcontent/)
 *
 * @module deferredcontent
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface DeferredContentProps {}

/**
 * Defines valid slots in DeferredContent component.
 */
export interface DeferredContentSlots {
    /**
     * Default content slot.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in DeferredContent component.
 */
export interface DeferredContentEmits {
    /**
     * Callback to invoke when deferred content is loaded.
     */
    load(): void;
}

/**
 * **PrimeVue - DeferredContent**
 *
 * _DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll._
 *
 * [Live Demo](https://www.primevue.org/deferredcontent/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class DeferredContent extends ClassComponent<DeferredContentProps, DeferredContentSlots, DeferredContentEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        DeferredContent: GlobalComponentConstructor<DeferredContent>;
    }
}

export default DeferredContent;
