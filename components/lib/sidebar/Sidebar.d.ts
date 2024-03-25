/**
 *
 * Sidebar is a panel component displayed as an overlay at the edges of the screen.
 *
 * [Live Demo](https://primevue.org/sidebar)
 *
 * @module sidebar
 *
 */
import { TransitionProps, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type SidebarPassThroughOptionType = SidebarPassThroughAttributes | ((options: SidebarPassThroughMethodOptions) => SidebarPassThroughAttributes | string) | string | null | undefined;

export declare type SidebarPassThroughTransitionType = TransitionProps | ((options: SidebarPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface SidebarPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: SidebarProps;
    /**
     * Defines current inline state.
     */
    state: SidebarState;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link SidebarProps.pt}
 */
export interface SidebarPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SidebarPassThroughOptionType;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: SidebarPassThroughOptionType;
    /**
     * Used to pass attributes to the header content's DOM element.
     */
    title?: SidebarPassThroughOptionType;
    /**
     * Used to pass attributes to the close button's DOM element.
     */
    closeButton?: SidebarPassThroughOptionType;
    /**
     * Used to pass attributes to the close icon's DOM element.
     */
    closeIcon?: SidebarPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: SidebarPassThroughOptionType;
    /**
     * Used to pass attributes to the mask's DOM element.
     */
    mask?: SidebarPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: SidebarPassThroughTransitionType;
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
     * Title content of the dialog.
     */
    header?: string | undefined;
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
     * Used to pass attributes to DOM elements inside the component.
     * @type {SidebarPassThroughOptions}
     */
    pt?: PassThrough<SidebarPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
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
     *  @param {Object} scope - header slot's params.
     */
    header(scope: {
        /**
         * Style class of the header title
         */
        class: any;
    }): VNode[];
    /**
     * Custom close icon template.
     * @param {Object} scope - close icon slot's params.
     */
    closeicon(scope: {
        /**
         * Style class of the close icon
         */
        class: any;
    }): VNode[];
    /**
     * Custom container slot.
     * @param {Object} scope - container slot's params.
     */
    container(scope: {
        /**
         * Close sidebar function.
         * @deprecated since v3.39.0. Use 'closeCallback' property instead.
         */
        onClose: () => void;
        /**
         * Close sidebar function.
         */
        closeCallback: () => void;
    }): VNode[];
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

declare module 'vue' {
    export interface GlobalComponents {
        Sidebar: GlobalComponentConstructor<Sidebar>;
    }
}

export default Sidebar;
