import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type SidebarPositionType = 'left' | 'right' | 'top' | 'bottom' | 'full' | undefined;

export interface SidebarProps {
    /**
     * Specifies the visibility of the dialog.
     */
    visible?: boolean | undefined;
    /**
     * Specifies the position of the sidebar.
     * @see SidebarPositionType
     * Default value is 'left'.
     */
    position?: SidebarPositionType;
    /**
     * Base zIndex value to use in layering.
     * Default value is 0.
     */
    baseZIndex?: number | undefined;
    /**
     * Whether to automatically manage layering.
     * Default value is true.
     */
    autoZIndex?: boolean | undefined;
    /**
     * Whether clicking outside closes the panel.
     * Default value is true.
     */
    dismissable?: boolean | undefined;
    /**
     * Whether to display a close icon inside the panel.
     * Default value is true.
     */
    showCloseIcon?: boolean | undefined;
    /**
     * Icon to display in the sidebar close button.
     * Default value is 'pi pi-times'.
     */
    closeIcon?: string | undefined;
    /**
     * Whether to a modal layer behind the sidebar.
     * Default value is true.
     */
    modal?: boolean | undefined;
    /**
     * Whether background scroll should be blocked when sidebar is visible.
     */
    blockScroll?: boolean | undefined;
}

export interface SidebarSlots {
    /**
     * Custom content template.
     */
    default: () => VNode[];
    /**
     * Custom header template.
     */
    header: () => VNode[];
}

export declare type SidebarEmits = {
    /**
     * Emitted when the value changes.
     * @param {boolean} value - New value.
     */
    'update:modelValue': (value: boolean) => void;
    /**
     * Callback to invoke when sidebar gets shown.
     */
    show: () => void;
    /**
     * Callback to invoke when sidebar gets hidden.
     */
    hide: () => void;
};

declare class Sidebar extends ClassComponent<SidebarProps, SidebarSlots, SidebarEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Sidebar: GlobalComponentConstructor<Sidebar>;
    }
}

/**
 *
 * Sidebar is a panel component displayed as an overlay at the edges of the screen.
 *
 * Demos:
 *
 * - [Sidebar](https://www.primefaces.org/primevue/sidebar)
 *
 */
export default Sidebar;
