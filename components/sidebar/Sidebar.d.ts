/**
 *
 * Sidebar is a panel component displayed as an overlay at the edges of the screen.
 *
 * [Live Demo](https://primevue.org/sidebar)
 *
 * @module sidebar
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Sidebar component.
 */
export interface SidebarProps {
    /**
     * Specifies the visibility of the dialog.
     * @defaultValue false
     */
    visible?: boolean | undefined;
    /**
     * Specifies the position of the sidebar.
     * @defaultValue left
     */
    position?: 'left' | 'right' | 'top' | 'bottom' | 'full' | undefined;
    /**
     * Base zIndex value to use in layering.
     * @defaultValue 0
     */
    baseZIndex?: number | undefined;
    /**
     * Whether to automatically manage layering.
     * @defaultValue true
     */
    autoZIndex?: boolean | undefined;
    /**
     * Whether clicking outside closes the panel.
     * @defaultValue true
     */
    dismissable?: boolean | undefined;
    /**
     * Whether to display a close icon inside the panel.
     * @defaultValue true
     */
    showCloseIcon?: boolean | undefined;
    /**
     * Icon to display in the sidebar close button.
     * @defaultValue pi pi-times
     */
    closeIcon?: string | undefined;
    /**
     * Whether to a modal layer behind the sidebar.
     * @defaultValue true
     */
    modal?: boolean | undefined;
    /**
     * Whether background scroll should be blocked when sidebar is visible.
     * @defaultValue false
     */
    blockScroll?: boolean | undefined;
}

/**
 * Defines valid slots in Sidebar component.
 */
export interface SidebarSlots {
    /**
     * Custom content template.
     */
    default(): VNode[];
    /**
     * Custom header template.
     */
    header(): VNode[];
}

/**
 * Defines valid emits in Sidebar component.
 */
export interface SidebarEmits {
    /**
     * Emitted when the value changes.
     * @param {boolean} value - New value.
     */
    'update:modelValue'(value: boolean): void;
    /**
     * Callback to invoke when sidebar gets shown.
     */
    show(): void;
    /**
     * Callback to invoke when sidebar gets hidden.
     */
    hide(): void;
}

/**
 * **PrimeVue - Sidebar**
 *
 * _Sidebar is a panel component displayed as an overlay._
 *
 * [Live Demo](https://www.primevue.org/sidebar/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Sidebar extends ClassComponent<SidebarProps, SidebarSlots, SidebarEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Sidebar: GlobalComponentConstructor<Sidebar>;
    }
}

export default Sidebar;
