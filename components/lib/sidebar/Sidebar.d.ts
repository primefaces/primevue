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
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type SidebarPassThroughOptionType = SidebarPassThroughAttributes | ((options: SidebarPassThroughMethodOptions) => SidebarPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface SidebarPassThroughMethodOptions {
    instance: any;
    props: SidebarProps;
    state: SidebarState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link SidebarProps.pt}
 */
export interface SidebarPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: SidebarPassThroughOptionType;
    /**
     * Uses to pass attributes to the header's DOM element.
     */
    header?: SidebarPassThroughOptionType;
    /**
     * Uses to pass attributes to the header content's DOM element.
     */
    headerContent?: SidebarPassThroughOptionType;
    /**
     * Uses to pass attributes to the close button's DOM element.
     */
    closeButton?: SidebarPassThroughOptionType;
    /**
     * Uses to pass attributes to the close icon's DOM element.
     */
    closeIcon?: SidebarPassThroughOptionType;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: SidebarPassThroughOptionType;
    /**
     * Uses to pass attributes to the mask's DOM element.
     */
    mask?: SidebarPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface SidebarPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Sidebar component.
 */
export interface SidebarState {
    /**
     * Current container visible state as a boolean.
     * @defaultValue false
     */
    containerVisible: boolean;
}

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
     * @deprecated since v3.27.0. Use 'closeicon' slot.
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
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {SidebarPassThroughOptions}
     */
    pt?: SidebarPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
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
    /**
     * Custom close icon template.
     */
    closeicon(): VNode[];
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
