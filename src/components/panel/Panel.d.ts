import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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

export interface PanelProps {
    /**
     * Header text of the panel.
     */
    header?: string;
    /**
     * Defines if content of panel can be expanded and collapsed.
     */
    toggleable?: boolean;
    /**
     * Defines the initial state of panel content.
     */
    collapsed?: boolean;
}

export interface PanelSlots {
    /**
     * Custom content template.
     */
    default: () => VNode[];
    /**
     * Custom header template.
     */
    header: () => VNode[];
    /**
     * Custom icons template.
     */
    icons: () => VNode[];
}

export declare type PanelEmits = {
    /**
     * Emitted when the collapsed changes.
     * @param {boolean} value - New value.
     */
    'update:collapsed': (value: boolean) => void;
    /**
     * Callback to invoke when a tab toggle.
     * @param {PanelToggleEvent} event - Custom toggle event.
     */
    'toggle': (event: PanelToggleEvent) => void;
}

declare class Panel extends ClassComponent<PanelProps, PanelSlots, PanelEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Panel: GlobalComponentConstructor<Panel>
    }
}

/**
 *
 * Panel is a container with the optional content toggle feature.
 *
 * Demos:
 *
 * - [Panel](https://www.primefaces.org/primevue/showcase/#/panel)
 *
 */
export default Panel;
