/**
 *
 * Drawer is a panel component displayed as an overlay at the edges of the screen.
 *
 * [Live Demo](https://primevue.org/drawer)
 *
 * @module drawerstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum DrawerClasses {
    /**
     * Class name of the mask element
     */
    mask = 'p-drawer-mask',
    /**
     * Class name of the root element
     */
    root = 'p-drawer',
    /**
     * Class name of the header element
     */
    header = 'p-drawer-header',
    /**
     * Class name of the title element
     */
    title = 'p-drawer-title',
    /**
     * Class name of the close button element
     */
    pcCloseButton = 'p-drawer-close-button',
    /**
     * Class name of the content element
     */
    content = 'p-drawer-content'
}

export interface DrawerStyle extends BaseStyle {}
