import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { MenuItem } from '../menuitem';

type DockPositionType = 'bottom' | 'top' | 'left' | 'right' | undefined;

type DockTooltipEventType = 'hover' | 'focus' | undefined;

export interface DockTooltipOptions {
    /**
     * Event to show the tooltip, valid values are hover and focus.
     * @see DockTooltipEventType
     */
    event: string;
    /**
     * Position of element.
     * @see DockPositionType
     * Default value is 'bottom'.
     */
    position: string;
    /**
     * Optional options.
     */
    [key: string]: string;
}

export interface DockProps {
    /**
     * MenuModel instance to define the action items.
     */
    model?: MenuItem[] | undefined;
    /**
     * Position of element.
     * @see DockPositionType
     * Default value is 'bottom'.
     */
    position?: DockPositionType;
    /**
     * Style class of the element.
     */
    class?: any;
    /**
     * Inline style of the element.
     */
    style?: any;
    /**
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * Default value is true.
     */
    exact?: boolean | undefined;
    /**
     * Whether to display the tooltip on items. The modifiers of Tooltip can be used like an object in it. Valid keys are 'event' and 'position'.
     * @see DockTooltipOptions
     */
    tooltipOptions?: DockTooltipOptions;
}

export interface DockSlots {
    /**
     * Custom item content.
     * @param {Object} scope - item slot's params.
     */
    item: (scope: {
        /**
         * Custom content for item.
         */
        item: MenuItem;
    }) => VNode[];
    /**
     * Custom icon content.
     * @param {Object} scope - icon slot's params.
     */
    icon: (scope: {
        /**
         * Custom content for icon.
         */
        item: MenuItem;
    }) => VNode[];
}

export declare type DockEmits = {
}

declare class Dock extends ClassComponent<DockProps, DockSlots, DockEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Dock: GlobalComponentConstructor<Dock>
    }
}

/**
 *
 * Dock is a navigation component consisting of menuitems.
 *
 * Helper API:
 *
 * - [MenuItem](https://www.primefaces.org/primevue/showcase/#/menumodel)
 *
 * Demos:
 *
 * - [Dock](https://www.primefaces.org/primevue/showcase/#/dock)
 *
 */
export default Dock;
