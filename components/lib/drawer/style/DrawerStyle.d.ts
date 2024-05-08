/**
 *
 * Drawer is a panel component displayed as an overlay at the edges of the screen.
 *
 * [Live Demo](https://primevue.org/drawer)
 *
 * @module drawerstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum DrawerClasses {
    mask = 'p-drawer-mask',
    root = 'p-drawer',
    header = 'p-drawer-header',
    title = 'p-drawer-title',
    pcCloseButton = 'p-drawer-close-button',
    content = 'p-drawer-content'
}

export interface DrawerStyle extends BaseStyle {}
