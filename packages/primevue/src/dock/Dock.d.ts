/**
 *
 * Dock is a navigation component consisting of menuitems.
 *
 * [Live Demo](https://www.primevue.org/dock/)
 *
 * @module dock
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { MenuItem } from 'primevue/menuitem';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type DockPassThroughOptionType = DockPassThroughAttributes | ((options: DockPassThroughMethodOptions) => DockPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface DockPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: DockProps;
    /**
     * Defines current inline state.
     */
    state: DockState;
    /**
     * Defines current options.
     */
    context: DockContext;
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
 * @see {@link DockProps.pt}
 */
export interface DockPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DockPassThroughOptionType;
    /**
     * Used to pass attributes to the list container's DOM element.
     */
    listContainer?: DockPassThroughOptionType;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: DockPassThroughOptionType;
    /**
     * Used to pass attributes to the  item's DOM element.
     */
    item?: DockPassThroughOptionType;
    /**
     * Used to pass attributes to the item content's DOM element.
     */
    itemContent?: DockPassThroughOptionType;
    /**
     * Used to pass attributes to the item link's DOM element.
     */
    itemLink?: DockPassThroughOptionType;
    /**
     * Used to pass attributes to the item icon's DOM element.
     */
    itemIcon?: DockPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface DockPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Dock component.
 */
export interface DockState {
    /**
     * Current id state as a string.
     */
    id: string;
    /**
     * Current index as a number.
     * @defaultValue -3
     */
    currentIndex: number;
    /**
     * Current focus state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Current focused item index as a number.
     * @defaultValue -1
     */
    focusedOptionIndex: number;
}

/**
 * Defines current options in Dock component.
 */
export interface DockContext {
    /**
     * Current index of the menuitem.
     */
    index: number;
    /**
     * Current menuitem
     */
    item: any;
    /**
     * Current active state of menuitem as a boolean.
     * @defaultValue false
     */
    active: boolean;
}

/**
 * Defines tooltip options
 */
export interface DockTooltipOptions {
    /**
     * Event to show the tooltip, valid values are hover and focus.
     */
    event: 'hover' | 'focus' | undefined;
    /**
     * Position of element.
     * @defaultValue bottom
     */
    position: 'bottom' | 'top' | 'left' | 'right' | undefined;
    /**
     * Optional options.
     */
    [key: string]: any;
}

/**
 * Defines valid router binding props in Dock component.
 */
export interface DockRouterBindProps {
    /**
     * Action element binding
     */
    action: object;
    /**
     * Icon element binding
     */
    icon: object;
}

/**
 * Defines valid properties in Dock component.
 */
export interface DockProps {
    /**
     * MenuModel instance to define the action items.
     */
    model?: MenuItem[] | undefined;
    /**
     * Position of element.
     * @defaultValue bottom
     */
    position?: 'bottom' | 'top' | 'left' | 'right' | undefined;
    /**
     * Style class of the element.
     */
    class?: any;
    /**
     * Inline style of the element.
     */
    style?: any;
    /**
     * The breakpoint to define the maximum width boundary.
     * @defaultValue 960px
     */
    breakpoint?: string | undefined;
    /**
     * Whether to display the tooltip on items. The modifiers of Tooltip can be used like an object in it. Valid keys are 'event' and 'position'.
     * @type {DockTooltipOptions}
     */
    tooltipOptions?: DockTooltipOptions;
    /**
     * Unique identifier of the menu.
     */
    menuId?: string | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {DockPassThroughOptions}
     */
    pt?: PassThrough<DockPassThroughOptions>;
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
 * Defines valid slots in Dock component.
 */
export interface DockSlots {
    /**
     * Custom item content.
     * @param {Object} scope - item slot's params.
     */
    item(scope: {
        /**
         * Custom content for item.
         */
        item: MenuItem;
        /**
         * Index of the menuitem
         */
        index: number;
        /**
         * Label property of the menuitem
         */
        label: string | ((...args: any) => string) | undefined;
        /**
         * Binding properties of the menuitem
         */
        props: DockRouterBindProps;
    }): VNode[];
    /**
     * @deprecated since v4.0. Use 'itemicon' slot.
     * Custom icon content.
     * @param {Object} scope - item icon slot's params.
     */
    icon(scope: {
        /**
         * Custom content for item icon.
         */
        item: MenuItem;
    }): VNode[];
    /**
     * Custom icon content.
     * @param {Object} scope - item icon slot's params.
     */
    itemicon(scope: {
        /**
         * Custom content for item icon.
         */
        item: MenuItem;
    }): VNode[];
}

/**
 * Defines valid emits in Dock component.
 */
export interface DockEmitsOptions {
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     */
    focus(event: Event): void;
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     */
    blur(event: Event): void;
}

export declare type DockEmits = EmitFn<DockEmitsOptions>;

/**
 * **PrimeVue - Dock**
 *
 * _Dock is a navigation component consisting of menuitems._
 *
 * [Live Demo](https://www.primevue.org/dock/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Dock: DefineComponent<DockProps, DockSlots, DockEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Dock: DefineComponent<DockProps, DockSlots, DockEmits>;
    }
}

export default Dock;
