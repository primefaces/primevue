/**
 *
 * Toolbar is a grouping component for buttons and other content.
 *
 * [Live Demo](https://www.primevue.org/toolbar/)
 *
 * @module toolbar
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Toolbar component.
 */
export interface ToolbarProps {
    /**
     * Defines a string value that labels an interactive element.
     */
    'aria-labelledby'?: string | undefined;
}

/**
 * Defines valid slots in Toolbar slots.
 */
export interface ToolbarSlots {
    /**
     * Custom start template.
     */
    start(): VNode[];

    /**
     * Custom center template.
     */
    center(): VNode[];

    /**
     * Custom end template.
     */
    end(): VNode[];
}
/**
 * Defines valid emits in Toolbar component.
 */
export interface ToolbarEmits {}

/**
 * **PrimeVue - Toolbar**
 *
 * _Toolbar is a grouping component for buttons and other content._
 *
 * [Live Demo](https://www.primevue.org/toolbar/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo.svg)
 *
 * @group Component
 *
 */
export declare class Toolbar extends ClassComponent<ToolbarProps, ToolbarSlots, ToolbarEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Toolbar: GlobalComponentConstructor<Toolbar>;
    }
}

/**
 *
 * Toolbar is a grouping component for buttons and other content.
 *
 * Demos:
 *
 * - [Toolbar](https://www.primefaces.org/primevue/toolbar)
 *
 */
export default Toolbar;
