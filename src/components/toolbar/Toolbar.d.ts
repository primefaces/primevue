import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface ToolbarProps {
}

export interface ToolbarSlots {
    /**
     * Custom start template.
     */
    start: () => VNode[];
    /**
     * Custom end template.
     */
    end: () => VNode[];
}

export declare type ToolbarEmits = {
}

declare class Toolbar extends ClassComponent<ToolbarProps, ToolbarSlots, ToolbarEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Toolbar: GlobalComponentConstructor<Toolbar>
    }
}

/**
 *
 * Toolbar is a grouping component for buttons and other content.
 *
 * Demos:
 *
 * - [Toolbar](https://www.primefaces.org/primevue/showcase/#/toolbar)
 *
 */
export default Toolbar;
