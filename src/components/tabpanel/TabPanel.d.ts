import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface TabPanelProps {
    /**
     * Orientation of tab headers.
     */
    header?: string | undefined;
    /**
     * Whether the tab is disabled.
     */
    disabled?: boolean | undefined;
}

export interface TabPanelSlots {
    /**
     * Custom content template.
     */
    default: () => VNode[];
    /**
     * Custom header template.
     */
    header: () => VNode[];
}

export declare type TabPanelEmits = {
}

declare class TabPanel extends ClassComponent<TabPanelProps, TabPanelSlots, TabPanelEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        TabPanel: GlobalComponentConstructor<TabPanel>
    }
}

/**
 *
 * TabPanel is a helper component for TabView component.
 *
 * Demos:
 *
 * - [TabPanel](https://www.primefaces.org/primevue/showcase/#/tabpanel)
 *
 */
export default TabPanel;
