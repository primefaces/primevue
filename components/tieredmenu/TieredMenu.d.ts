import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { MenuItem } from '../menuitem';

type TieredMenuAppandToType = 'body' | 'self' | string | undefined | HTMLElement;

export interface TieredMenuProps {
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
     * @see TieredMenuAppandToType
     * Default value is 'body'.
     */
    appendTo?: TieredMenuAppandToType;
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

export interface TieredMenuSlots {
    /**
     * Custom content for each item.
     * @param {Object} scope - item slot's params.
     */
    item: (scope: {
        /**
         * Menuitem instance
         */
        item: MenuItem;
    }) => VNode[];
}

export declare type TieredMenuEmits = {
}

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
    show: (event: Event, target?: any) => void;
    /**
     * Hides the overlay.
     *
     * @memberof TieredMenu
     */
    hide(): void;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        TieredMenu: GlobalComponentConstructor<TieredMenu>
    }
}

/**
 *
 * TieredMenu displays submenus in nested overlays.
 *
 * Helper API:
 *
 * - [MenuItem](https://www.primefaces.org/primevue/showcase/#/menumodel)
 *
 * Demos:
 *
 * - [TieredMenu](https://www.primefaces.org/primevue/showcase/#/tieredmenu)
 *
 */
export default TieredMenu;
