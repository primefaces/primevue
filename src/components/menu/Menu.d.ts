import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { MenuItem } from '../menuitem';

type MenuAppendToType = 'body' | 'self' | string | undefined | HTMLElement;

export interface MenuProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * Defines if menu would displayed as a popup.
     */
    popup?: boolean | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @see MenuAppendToType
     * Default value is 'body'.
     */
    appendTo?: MenuAppendToType;
    /**
     * Whether to automatically manage layering.
     * Default value is true.
     */
    autoZIndex?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * Default value is 0.
     */
    baseZIndex?: number | undefined;
    /**
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * Default value is true.
     */
    exact?: boolean | undefined;
}

export interface MenuSlots {
    /**
     * Custom item template.
     * @param {Object} scope - item slot's params.
     */
    item: (scope: {
        item: MenuItem;
    }) => VNode[];
}

export declare type MenuEmits = {
}

declare class Menu extends ClassComponent<MenuProps, MenuSlots, MenuEmits> {
    /**
     * Toggles the visibility of the overlay.
     * @param {Event} event - Browser event.
     *
     * @memberof Menu
     */
    toggle: (event: Event) => void;
    /**
     * Shows the overlay.
     * @param {Event} event - Browser event.
     *
     * @memberof Menu
     */
    show: (event: Event, target?: any) => void;
    /**
     * Hides the overlay.
     *
     * @memberof Menu
     */
    hide(): void;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Menu: GlobalComponentConstructor<Menu>
    }
}

/**
 *
 * Menu is a navigation / command component that supports dynamic and static positioning.
 *
 * Helper API:
 *
 * - [MenuItem](https://www.primefaces.org/primevue/showcase/#/menumodel)
 *
 * Demos:
 *
 * - [Menu](https://www.primefaces.org/primevue/showcase/#/menu)
 *
 */
export default Menu;
