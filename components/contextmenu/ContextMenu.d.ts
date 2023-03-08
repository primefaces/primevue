/**
 *
 * ContextMenu displays an overlay menu on right click of its target. Note that components like DataTable has special integration with ContextMenu.
 * Refer to documentation of the individual documentation of the with context menu support.
 *
 * [Live Demo](https://www.primevue.org/contextmenu/)
 *
 * @module contextmenu
 *
 */
import { VNode } from 'vue';
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in ContextMenu component.
 */
export interface ContextMenuProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @defaultValue body
     */
    appendTo?: 'body' | 'self' | string | undefined | HTMLElement;
    /**
     * Whether to automatically manage layering.
     * @defaultValue true
     */
    autoZIndex?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * @defaultValue 0
     */
    baseZIndex?: number | undefined;
    /**
     * Attaches the menu to document instead of a particular item.
     * @defaultValue false
     */
    global?: boolean | undefined;
    /**
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * @defaultValue true
     */
    exact?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | string | undefined;
    /**
     * Defines a string value that labels an interactive element.
     */
    'aria-label'?: string | undefined;
    /**
     * Identifier of the underlying menu element.
     */
    'aria-labelledby'?: string | undefined;
}

/**
 * Defines valid slots in ContextMenu component.
 */
export interface ContextMenuSlots {
    /**
     * Custom item template.
     * @param {Object} scope - item slot's params.
     */
    item(scope: {
        /**
         * Menuitem instance
         */
        item: MenuItem;
    }): VNode[];
}

/**
 * Defines valid emits in ContextMenu component.
 */
export interface ContextMenuEmits {
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
    /**
     * Callback to invoke before the popup is shown.
     */
    'before-show'(): void;
    /**
     * Callback to invoke before the popup is hidden.
     */
    'before-hide'(): void;
    /**
     * Callback to invoke when the popup is shown.
     */
    show(): void;
    /**
     * Callback to invoke when the popup is hidden.
     */
    hide(): void;
}

/**
 * **PrimeVue - ContextMenu**
 *
 * _ContextMenu displays an overlay menu on right click of its target. Note that components like DataTable has special integration with ContextMenu.
 * Refer to documentation of the individual documentation of the with context menu support._
 *
 * [Live Demo](https://www.primevue.org/contextmenu/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class ContextMenu extends ClassComponent<ContextMenuProps, ContextMenuSlots, ContextMenuEmits> {
    /**
     * Toggles the visibility of the menu.
     * @param {Event} event - Browser event.
     *
     * @memberof ContextMenu
     */
    toggle(event: Event): void;
    /**
     * Shows the menu.
     * @param {Event} event - Browser event.
     *
     * @memberof ContextMenu
     */
    show(event: Event): void;
    /**
     * Hides the menu.
     *
     * @memberof ContextMenu
     */
    hide(): void;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ContextMenu: GlobalComponentConstructor<ContextMenu>;
    }
}

export default ContextMenu;
