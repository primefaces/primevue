import { VNode } from 'vue';
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
    /**
     * When present, it specifies that the component should be disabled.
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
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     */
    focus: (event: Event) => void;
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     */
    blur: (event: Event) => void;
};

declare class MegaMenu extends ClassComponent<MegaMenuProps, MegaMenuSlots, MegaMenuEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        MegaMenu: GlobalComponentConstructor<MegaMenu>;
    }
}

/**
 *
 * MegaMenu is navigation component that displays submenus together.
 *
 * Helper API:
 *
 * - [MenuItem](https://www.primefaces.org/primevue/menumodel)
 *
 * Demos:
 *
 * - [MegaMenu](https://www.primefaces.org/primevue/megamenu)
 *
 */
export default MegaMenu;
