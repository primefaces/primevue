import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { MenuItem } from '../menuitem';

type MegaMenuOrientationType = 'horizontal' | 'vertical' | undefined;

export interface MegaMenuProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * Defines the orientation.
     * @see MegaMenuOrientationType
     * Default value is 'horizontal'.
     */
    orientation?: MegaMenuOrientationType;
    /**
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * Default value is true.
     */
    exact?: boolean | undefined;
}

export interface MegaMenuSlots {
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

export declare type MegaMenuEmits = {
}

declare class MegaMenu extends ClassComponent<MegaMenuProps, MegaMenuSlots, MegaMenuEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        MegaMenu: GlobalComponentConstructor<MegaMenu>
    }
}

/**
 *
 * MegaMenu is navigation component that displays submenus together.
 *
 * Helper API:
 *
 * - [MenuItem](https://www.primefaces.org/primevue/showcase/#/menumodel)
 *
 * Demos:
 *
 * - [MegaMenu](https://www.primefaces.org/primevue/showcase/#/megamenu)
 *
 */
export default MegaMenu;
