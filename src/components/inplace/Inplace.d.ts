import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface InplaceProps {
    /**
     * Displays a button to switch back to display mode.
     */
    closable?: boolean | undefined;
    /**
     * Whether the content is displayed or not.
     */
    active?: boolean | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     */
    disabled?: boolean | undefined;
}

export interface InplaceSlots {
    /**
     * Custom display template.
     */
    display: () => VNode[];
    /**
     * Custom content template.
     */
    content: () => VNode[];
}

export declare type InplaceEmits = {
    /**
     * Emitted when the active changes.
     * @param {boolean} value - New value.
     */
    'update:active': (value: boolean) => void;
    /**
     * Callback to invoke when inplace is opened.
     * @param {Event} event - Browser event.
     */
    'open': (event: Event) => void;
    /**
     * Callback to invoke when inplace is closed.
     * @param {Event} event - Browser event.
     */
    'close': (event: Event) => void;
}

declare class Inplace extends ClassComponent<InplaceProps, InplaceSlots, InplaceEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Inplace: GlobalComponentConstructor<Inplace>
    }
}

/**
 *
 * Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.
 *
 * Demos:
 *
 * - [Inplace](https://www.primefaces.org/primevue/showcase/#/inplace)
 *
 */
export default Inplace;
