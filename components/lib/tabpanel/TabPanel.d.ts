/**
 *
 * TabPanel is a helper component for TabPanel component.
 *
 * [Live Demo](https://www.primevue.org/tabview/)
 *
 * @module tabpanel
 *
 */
import { AnchorHTMLAttributes, HTMLAttributes, LiHTMLAttributes, VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in TabPanel component.
 */
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
     * @defaultValue false
     */
    disabled?: boolean | undefined;
}
/**
 * Defines valid slots in TabPanel slots.
 */
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

export interface TabPanelEmits {}

/**
 * **PrimeVue - TabPanel**
 *
 * _TabPanel is a helper component for TabPanel component._
 *
 * [Live Demo](https://www.primevue.org/tabview/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class TabPanel extends ClassComponent<TabPanelProps, TabPanelSlots, TabPanelEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        TabPanel: GlobalComponentConstructor<TabPanel>;
    }
}

export default TabPanel;
