import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { MenuItem } from '../menuitem';

export interface PanelMenuExpandedKeys {
    [key: string]: any;
}

export interface PanelMenuProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * A map of keys to represent the expansion state in controlled mode.
     * @see PanelMenuExpandedKeys
     */
    expandedKeys?: PanelMenuExpandedKeys;
    /**
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     */
    exact?: boolean | undefined;
}

export interface PanelMenuSlots {
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

export declare type PanelMenuEmits = {
    /**
     * Emitted when the expandedKeys changes.
     * @param {*} value - New value.
     */
    'update:expandedKeys': (value: any) => void;
}

declare class PanelMenu extends ClassComponent<PanelMenuProps, PanelMenuSlots, PanelMenuEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        PanelMenu: GlobalComponentConstructor<PanelMenu>
    }
}

/**
 *
 * PanelMenu is a hybrid of Accordion and Tree components.
 *
 * Helper API:
 *
 * - [MenuItem](https://www.primefaces.org/primevue/showcase/#/menumodel)
 *
 * Demos:
 *
 * - [PanelMenu](https://www.primefaces.org/primevue/showcase/#/panelmenu)
 *
 */
export default PanelMenu;
