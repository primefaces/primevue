import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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

export interface FieldsetProps {
    /**
     * Header text of the fieldset.
     */
    legend?: string | undefined;
    /**
     * When specified, content can toggled by clicking the legend.
     */
    toggleable?: boolean | undefined;
    /**
     * Defines the default visibility state of the content.
     */
    collapsed?: boolean | undefined;
}

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

export declare type FieldsetEmits = {
    /**
     * Emitted when the collapsed changes.
     * @param {boolean} value - New value.
     */
    'update:collapsed': (value: boolean) => void;
    /**
     * Callback to invoke when a tab gets expanded or collapsed.
     * @param {FieldsetToggleEvent} event - Custom toggle event.
     */
    'toggle': (event: FieldsetToggleEvent) => void;
}

declare class Fieldset extends ClassComponent<FieldsetProps, FieldsetSlots, FieldsetEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Fieldset: GlobalComponentConstructor<Fieldset>
    }
}

/**
 *
 * Fieldset is a grouping component with the optional content toggle feature.
 *
 * Demos:
 *
 * - [Fieldset](https://www.primefaces.org/primevue/showcase/#/fieldset)
 *
 */
export default Fieldset;
