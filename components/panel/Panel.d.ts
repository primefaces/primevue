/**
 *
 * Panel is a container with the optional content toggle feature.
 *
 * [Live Demo](https://www.primevue.org/panel/)
 *
 * @module panel
 *
 */
import { ButtonHTMLAttributes, VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Custom toggle event.
 * @see {@link PanelEmits.toggle}
 */
export interface PanelToggleEvent {
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
 * Defines valid properties in Panel component.
 */
export interface PanelProps {
    /**
     * Header text of the panel.
     */
    header?: string;
    /**
     * Defines if content of panel can be expanded and collapsed.
     * @defaultValue false
     */
    toggleable?: boolean;
    /**
     * Defines the initial state of panel content.
     * @defaultValue false
     */
    collapsed?: boolean;
    /**
     * Uses to pass the custom value to read for the button inside the component.
     */
    toggleButtonProps?: ButtonHTMLAttributes | undefined;
}

/**
 * Defines valid slots in Panel slots.
 */
export interface PanelSlots {
    /**
     * Custom content template.
     */
    default(): VNode[];
    /**
     * Custom header template.
     */
    header(): VNode[];
    /**
     * Custom icons template.
     */
    icons(): VNode[];
}

/**
 * Defines valid emits in Panel component.
 */
export interface PanelEmits {
    /**
     * Emitted when the collapsed changes.
     * @param {boolean} value - New value.
     */
    'update:collapsed'(value: boolean): void;
    /**
     * Callback to invoke when a tab toggle.
     * @param {PanelToggleEvent} event - Custom toggle event.
     */
    toggle(event: PanelToggleEvent): void;
}

/**
 * **PrimeVue - Panel**
 *
 * _Panel is a container with the optional content toggle feature._
 *
 * [Live Demo](https://www.primevue.org/panel/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Panel extends ClassComponent<PanelProps, PanelSlots, PanelEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Panel: GlobalComponentConstructor<Panel>;
    }
}

export default Panel;
