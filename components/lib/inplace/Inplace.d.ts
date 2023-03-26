/**
 *
 * Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.
 *
 * [Live Demo](https://www.primevue.org/inplace)
 *
 * @module inplace
 *
 */
import { ButtonHTMLAttributes, HTMLAttributes, VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Inplace component.
 */
export interface InplaceProps {
    /**
     * Displays a button to switch back to display mode.
     * @defaultValue false
     */
    closable?: boolean | undefined;
    /**
     * Whether the content is displayed or not.
     * @defaultValue false
     */
    active?: boolean | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Icon to display in the close button.
     * @defaultValue pi pi-times
     */
    closeIcon?: string | undefined;
    /**
     * Uses to pass all properties of the HTMLDivElement to display container.
     */
    displayProps?: HTMLAttributes | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the close button.
     */
    closeButtonProps?: ButtonHTMLAttributes | undefined;
}

/**
 * Defines valid slots in Inplace component.
 */
export interface InplaceSlots {
    /**
     * Custom display template.
     */
    display(): VNode[];
    /**
     * Custom content template.
     */
    content(): VNode[];
}

/**
 * Defines valid emits in Inplace component.
 */
export interface InplaceEmits {
    /**
     * Emitted when the active changes.
     * @param {boolean} value - New value.
     */
    'update:active'(value: boolean): void;
    /**
     * Callback to invoke when inplace is opened.
     * @param {Event} event - Browser event.
     */
    open(event: Event): void;
    /**
     * Callback to invoke when inplace is closed.
     * @param {Event} event - Browser event.
     */
    close(event: Event): void;
}

/**
 * **PrimeVue - Inplace**
 *
 * _Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content._
 *
 * [Live Demo](https://www.primevue.org/inplace/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Inplace extends ClassComponent<InplaceProps, InplaceSlots, InplaceEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Inplace: GlobalComponentConstructor<Inplace>;
    }
}

export default Inplace;
