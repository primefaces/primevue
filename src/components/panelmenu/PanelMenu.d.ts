import { VNode } from 'vue';
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface PanelMenuExpandedKeys {
    [key: string]: any;
}

export interface PanelMenuPanelOpenEvent {
    /**
     * Browser mouse event.
     * @type {MouseEvent}
     */
    originalEvent: MouseEvent;
    /**
     * Current item.
     */
    item: any;
}

/**
 * @extends {PanelMenuPanelOpenEvent}
 */
export interface PanelMenuPanelCloseEvent extends PanelMenuPanelOpenEvent {}

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
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | string | undefined;
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
    /**
     * Callback to invoke when a panel gets expanded.
     * @param {PanelMenuPanelOpenEvent} event - Custom panel open event.
     */
    'panel-open': (event: PanelMenuPanelOpenEvent) => void;
    /**
     * Callback to invoke when an active panel is collapsed by clicking on the header.
     * @param {PanelMenuPanelCloseEvent} event - Custom panel close event.
     */
    'panel-close': (event: PanelMenuPanelCloseEvent) => void;
};

declare class PanelMenu extends ClassComponent<PanelMenuProps, PanelMenuSlots, PanelMenuEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        PanelMenu: GlobalComponentConstructor<PanelMenu>;
    }
}

/**
 *
 * PanelMenu is a hybrid of Accordion and Tree components.
 *
 * Helper API:
 *
 * - [MenuItem](https://www.primefaces.org/primevue/menumodel)
 *
 * Demos:
 *
 * - [PanelMenu](https://www.primefaces.org/primevue/panelmenu)
 *
 */
export default PanelMenu;
