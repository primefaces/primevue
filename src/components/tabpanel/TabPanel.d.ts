import { AnchorHTMLAttributes, HTMLAttributes, LiHTMLAttributes, VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface TabPanelProps {
    /**
     * Orientation of tab headers.
     */
    header?: string | undefined;
    /**
     * Inline style of the tab header.
     */
    headerStyle?: any;
    /**
     * Style class of the tab header.
     */
    headerClass?: any;
    /**
     * Uses to pass all properties of the HTMLLiElement to the tab header.
     */
    headerProps?: LiHTMLAttributes | undefined;
    /**
     * Uses to pass all properties of the HTMLAnchorElement to the focusable anchor element inside the tab header.
     */
    headerActionProps?: AnchorHTMLAttributes | undefined;
    /**
     * Inline style of the tab content.
     */
    contentStyle?: any;
    /**
     * Style class of the tab content.
     */
    contentClass?: any;
    /**
     * Uses to pass all properties of the HTMLDivElement to the tab content.
     */
    contentProps?: HTMLAttributes | undefined;
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
