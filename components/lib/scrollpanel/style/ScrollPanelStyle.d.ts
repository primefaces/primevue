/**
 *
 * ScrollPanel is a cross browser, lightweight and themable alternative to native browser scrollbar.
 *
 * [Live Demo](https://www.primevue.org/scrollpanel/)
 *
 * @module scrollpanelstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum ScrollPanelClasses {
    root = 'p-scrollpanel',
    contentContainer = 'p-scrollpanel-content-container',
    content = 'p-scrollpanel-content',
    barX = 'p-scrollpanel-bar-x',
    barY = 'p-scrollpanel-bar-y'
}

export interface ScrollPanelStyle extends BaseStyle {}
