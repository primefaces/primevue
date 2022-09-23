import { ButtonHTMLAttributes, VNode } from 'vue';
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
    /**
     * Uses to pass all properties of the HTMLButtonElement to the menu button.
     */
    buttonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Defines a string value that labels an interactive element.
     */
    'aria-label'?: string | undefined;
    /**
     * Identifier of the underlying input element.
     */
    'aria-labelledby'?: string | undefined;
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

export declare type MenubarEmits = {};

declare class Menubar extends ClassComponent<MenubarProps, MenubarSlots, MenubarEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Menubar: GlobalComponentConstructor<Menubar>;
    }
}

/**
 *
 * Menubar is a horizontal menu component.
 *
 * Helper API:
 *
 * - [MenuItem](https://www.primefaces.org/primevue/menumodel)
 *
 * Demos:
 *
 * - [Menubar](https://www.primefaces.org/primevue/menubar)
 *
 */
export default Menubar;
