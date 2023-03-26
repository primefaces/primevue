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
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
