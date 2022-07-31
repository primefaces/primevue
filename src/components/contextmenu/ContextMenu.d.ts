import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { MenuItem } from '../menuitem';

type ContextMenuAppendTo = 'body' | 'self' | string | undefined | HTMLElement;

export interface ContextMenuProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @see ContextMenuAppendTo
     * Default value is 'body'
     */
    appendTo?: ContextMenuAppendTo;
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
     * Attaches the menu to document instead of a particular item.
     */
    global?: boolean | undefined;
    /**
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * Default value is true.
     */
    exact?: boolean | undefined;
}

export interface ContextMenuSlots {
    /**
     * Custom item template.
     * @param {Object} scope - item slot's params.
     */
    item: (scope: {
        /**
         * Menuitem instance
         */
        item: MenuItem;
    }) => VNode[];
}

export declare type ContextMenuEmits = {
}

declare class ContextMenu extends ClassComponent<ContextMenuProps, ContextMenuSlots, ContextMenuEmits> {
    /**
     * Toggles the visibility of the menu.
     * @param {Event} event - Browser event.
     *
     * @memberof ContextMenu
     */
    toggle: (event: Event) => void;
    /**
     * Shows the menu.
     * @param {Event} event - Browser event.
     *
     * @memberof ContextMenu
     */
    show: (event: Event) => void;
    /**
     * Hides the menu.
     *
     * @memberof ContextMenu
     */
    hide: () => void;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ContextMenu: GlobalComponentConstructor<ContextMenu>
    }
}

/**
 *
 * ContextMenu displays an overlay menu on right click of its target. Note that components like DataTable has special integration with ContextMenu.
 * Refer to documentation of the individual documentation of the with context menu support.
 *
 * Helper API:
 *
 * - [MenuItem](https://www.primefaces.org/primevue/showcase/#/menumodel)
 *
 * Demos:
 *
 * - [ContextMenu](https://www.primefaces.org/primevue/showcase/#/contextmenu)
 *
 */
export default ContextMenu;
