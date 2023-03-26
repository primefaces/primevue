/**
 *
 * PanelMenu is a hybrid of Accordion and Tree components.
 *
 * [Live Demo](https://www.primevue.org/panelmenu/)
 *
 * @module panelmenu
 *
 */
import { VNode } from 'vue';
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Custom expanded keys metadata.
 * @see {@link PanelMenuProps.expandedKeys}
 */
export interface PanelMenuExpandedKeys {
    [key: string]: any;
}

/**
 * Custom panel open event.
 * @see {@link PanelMenuEmits['panel-open']}
 */
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
 * Custom panel close event.
 * @see {@link PanelMenuEmits['panel-close']}
 * @extends {PanelMenuPanelOpenEvent}
 */
export interface PanelMenuPanelCloseEvent extends PanelMenuPanelOpenEvent {}

/**
 * Defines valid properties in PanelMenu component.
 */
export interface PanelMenuProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * A map of keys to represent the expansion state in controlled mode.
     * @type {PanelMenuExpandedKeys}
     */
    expandedKeys?: PanelMenuExpandedKeys;
    /**
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * @defaultValue true
     */
    exact?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | string | undefined;
}

/**
 * Defines valid slots in PanelMenu component.
 */
export interface PanelMenuSlots {
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
 * Defines valid emits in PanelMenu component.
 */
export interface PanelMenuEmits {
    /**
     * Emitted when the expandedKeys changes.
     * @param {*} value - New value.
     */
    'update:expandedKeys'(value: any): void;
    /**
     * Callback to invoke when a panel gets expanded.
     * @param {PanelMenuPanelOpenEvent} event - Custom panel open event.
     */
    'panel-open'(event: PanelMenuPanelOpenEvent): void;
    /**
     * Callback to invoke when an active panel is collapsed by clicking on the header.
     * @param {PanelMenuPanelCloseEvent} event - Custom panel close event.
     */
    'panel-close'(event: PanelMenuPanelCloseEvent): void;
}

/**
 * **PrimeVue - PanelMenu**
 *
 * _PanelMenu is a hybrid of Accordion and Tree components._
 *
 * [Live Demo](https://www.primevue.org/panelmenu/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class PanelMenu extends ClassComponent<PanelMenuProps, PanelMenuSlots, PanelMenuEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        PanelMenu: GlobalComponentConstructor<PanelMenu>;
    }
}

export default PanelMenu;
