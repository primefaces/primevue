/**
 *
 * TieredMenu displays submenus in nested overlays.
 *
 * [Live Demo](https://www.primevue.org/menu/)
 *
 * @module tieredmenu
 *
 */
import { VNode } from 'vue';
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in TieredMenuMenu component.
 */
export interface TieredMenuProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * Defines if menu would displayed as a popup.
     * @defaultValue false
     */
    popup?: boolean | undefined;
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
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * @defaultValue true
     */
    exact?: boolean | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
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
 * Defines valid slots in TieredMenuMenu component.
 */
export interface TieredMenuSlots {
    /**
     * Custom content for each item.
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
 * Defines valid emits in TieredMenuMenu component.
 */
export interface TieredMenuEmits {
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
 * **PrimeVue - TieredMenu**
 *
 * _TieredMenu displays submenus in nested overlays._
 *
 * [Live Demo](https://www.primevue.org/tieredmenu/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class TieredMenu extends ClassComponent<TieredMenuProps, TieredMenuSlots, TieredMenuEmits> {
    /**
     * Toggles the visibility of the overlay.
     * @param {Event} event - Browser event
     *
     * @memberof TieredMenu
     */
    toggle: (event: Event) => void;
    /**
     * Shows the overlay.
     * @param {Event} event - Browser event
     *
     * @memberof TieredMenu
     */
    show: (event: Event) => void;
    /**
     * Hides the overlay.
     *
     * @memberof TieredMenu
     */
    hide(): void;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        TieredMenu: GlobalComponentConstructor<TieredMenu>;
    }
}

export default TieredMenu;
