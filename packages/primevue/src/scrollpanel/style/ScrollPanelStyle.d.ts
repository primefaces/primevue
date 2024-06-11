/**
 *
 * ScrollPanel is a cross browser, lightweight and themable alternative to native browser scrollbar.
 *
 * [Live Demo](https://www.primevue.org/scrollpanel/)
 *
 * @module scrollpanelstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum ScrollPanelClasses {
    /**
     * Class name of the root element
     */
    root = 'p-scrollpanel',
    /**
     * Class name of the content container element
     */
    contentContainer = 'p-scrollpanel-content-container',
    /**
     * Class name of the content element
     */
    content = 'p-scrollpanel-content',
    /**
     * Class name of the bar x element
     */
    barX = 'p-scrollpanel-bar-x',
    /**
     * Class name of the bar y element
     */
    barY = 'p-scrollpanel-bar-y'
}

export interface ScrollPanelStyle extends BaseStyle {}
