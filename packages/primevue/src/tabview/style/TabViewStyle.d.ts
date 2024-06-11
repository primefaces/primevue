/**
 * @deprecated since v4. Use Tabs component instead.
 *
 * TabView is a container component to group content with tabs.
 *
 * [Live Demo](https://www.primevue.org/tabview/)
 *
 * @module tabview
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum TabViewClasses {
    /**
     * Class name of the root element
     */
    root = 'p-tabview',
    /**
     * Class name of the nav container element
     */
    navContainer = 'p-tabview-tablist-container',
    /**
     * Class name of the previous button element
     */
    prevButton = 'p-tabview-prev-button',
    /**
     * Class name of the nav content element
     */
    navContent = 'p-tabview-tablist-scroll-container',
    /**
     * Class name of the nav element
     */
    nav = 'p-tabview-tablist',
    /**
     * Class name of the tab header element
     */
    tabHeader = 'p-tabview-tablist-item',
    /**
     * Class name of the tab header action element
     */
    tabHeaderAction = 'p-tabview-tab-header',
    /**
     * Class name of the tab header title element
     */
    tabHeaderTitle = 'p-tabview-tab-title',
    /**
     * Class name of the tab content element
     */
    tabContent = 'p-tabview-panel',
    /**
     * Class name of the inkbar element
     */
    inkbar = 'p-tabview-ink-bar',
    /**
     * Class name of the next button element
     */
    nextButton = 'p-tabview-next-button',
    /**
     * Class name of the panel container element
     */
    panelContainer = 'p-tabview-panels'
}

export interface TabViewStyle extends BaseStyle {}
