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
import { BaseStyle } from '../../base/style';

export enum TabViewClasses {
    root = 'p-tabview',
    navContainer = 'p-tabview-tablist-container',
    previousButton = 'p-tabview-prev-button',
    navContent = 'p-tabview-tablist-scroll-container',
    nav = 'p-tabview-tablist',
    tabHeader = 'p-tabview-tablist-item',
    tabHeaderAction = 'p-tabview-tab-header',
    tabHeaderTitle = 'p-tabview-tab-title',
    tabContent = 'p-tabview-panel',
    inkbar = 'p-tabview-ink-bar',
    nextButton = 'p-tabview-next-button',
    panelContainer = 'p-tabview-panels'
}

export interface TabViewStyle extends BaseStyle {}
