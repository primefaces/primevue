import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { MenuItem } from '../menuitem';

export interface MenubarProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * Default value is true.
     */
    exact?: boolean | undefined;
}

export interface MenubarSlots {
    /**
     * Custom start template.
     */
    start: () => VNode[];
    /**
     * Custom end template.
     */
    end: () => VNode[];
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

export declare type MenubarEmits = {
}

declare class Menubar extends ClassComponent<MenubarProps, MenubarSlots, MenubarEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Menubar: GlobalComponentConstructor<Menubar>
    }
}

/**
 *
 * Menubar is a horizontal menu component.
 *
 * Helper API:
 *
 * - [MenuItem](https://www.primefaces.org/primevue/showcase/#/menumodel)
 *
 * Demos:
 *
 * - [Menubar](https://www.primefaces.org/primevue/showcase/#/menubar)
 *
 */
export default Menubar;
