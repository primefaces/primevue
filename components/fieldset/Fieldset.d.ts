/**
 *
 * Fieldset is a grouping component with the optional content toggle feature.
 *
 * [Live Demo](https://www.primevue.org/fieldset/)
 *
 * @module fieldset
 *
 */
import { AnchorHTMLAttributes, VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Custom toggle event.
 * @see {@link FieldsetEmits.toggle}
 */
export interface FieldsetToggleEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Collapsed state as a boolean
     */
    value: boolean;
}

/**
 * Defines valid properties in Fieldset component.
 */
export interface FieldsetProps {
    /**
     * Header text of the fieldset.
     */
    legend?: string | undefined;
    /**
     * When specified, content can toggled by clicking the legend.
     * @defaultValue false
     */
    toggleable?: boolean | undefined;
    /**
     * Defines the default visibility state of the content.
     * @defaultValue false
     */
    collapsed?: boolean | undefined;
    /**
     * Uses to pass the custom value to read for the AnchorHTMLAttributes inside the component.
     */
    toggleButtonProps?: AnchorHTMLAttributes | undefined;
}

/**
 * Defines valid slots in Fieldset slots.
 */
export interface FieldsetSlots {
    /**
     * Default content slot.
     */
    default: () => VNode[];
    /**
     * Custom legend template.
     */
    legend: () => VNode[];
}

/**
 * Defines valid emits in Fildset component.
 */
export interface FieldsetEmits {
    /**
     * Emitted when the collapsed changes.
     * @param {boolean} value - New value.
     */
    'update:collapsed'(value: boolean): void;
    /**
     * Callback to invoke when a tab gets expanded or collapsed.
     * @param {FieldsetToggleEvent} event - Custom toggle event.
     */
    toggle(event: FieldsetToggleEvent): void;
}

/**
 * **PrimeVue - Fieldset**
 *
 * _Fieldset is a grouping component with the optional content toggle feature._
 *
 * [Live Demo](https://www.primevue.org/fieldset/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Fieldset extends ClassComponent<FieldsetProps, FieldsetSlots, FieldsetEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Fieldset: GlobalComponentConstructor<Fieldset>;
    }
}

export default Fieldset;
