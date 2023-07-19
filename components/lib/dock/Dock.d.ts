/**
 *
 * Dock is a navigation component consisting of menuitems.
 *
 * [Live Demo](https://www.primevue.org/dock/)
 *
 * @module dock
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type DockPassThroughOptionType = DockPassThroughAttributes | ((options: DockPassThroughMethodOptions) => DockPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface DockPassThroughMethodOptions {
    instance: any;
    props: DockProps;
    state: DockState;
    context: DockContext;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link DockProps.pt}
 */
export interface DockPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: DockPassThroughOptionType;
    /**
     * Uses to pass attributes to the container's DOM element.
     */
    container?: DockPassThroughOptionType;
    /**
     * Uses to pass attributes to the list's DOM element.
     */
    menu?: DockPassThroughOptionType;
    /**
     * Uses to pass attributes to the list item's DOM element.
     */
    menuitem?: DockPassThroughOptionType;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: DockPassThroughOptionType;
    /**
     * Uses to pass attributes to the action's DOM element.
     */
    action?: DockPassThroughOptionType;
    /**
     * Uses to pass attributes to the icon's DOM element.
     */
    icon?: DockPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
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
     * @defaultvalue -3
     */
    currentIndex: number;
    /**
     * Current focus state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Current focused item index as a number.
     * @defaultvalue -1
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
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * @defaultValue true
     */
    exact?: boolean | undefined;
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
    'aria-labelledby'?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    'aria-label'?: string | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {DockPassThroughOptions}
     */
    pt?: DockPassThroughOptions;
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
    }): VNode[];
    /**
     * Custom icon content.
     * @param {Object} scope - icon slot's params.
     */
    icon(scope: {
        /**
         * Custom content for icon.
         */
        item: MenuItem;
    }): VNode[];
}

/**
 * Defines valid emits in Dock component.
 */
export interface DockEmits {
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
declare class Dock extends ClassComponent<DockProps, DockSlots, DockEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Dock: GlobalComponentConstructor<Dock>;
    }
}

export default Dock;
