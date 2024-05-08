/**
 *
 * TabList is a helper component for Tabs component.
 *
 * [Live Demo](https://www.primevue.org/tabs/)
 *
 * @module tabliststyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum TabListClasses {
    root = 'p-tablist',
    content = 'p-tablist-content',
    tabs = 'p-tablist-tab-list',
    inkbar = 'p-tablist-active-bar',
    previousButton = 'p-tablist-prev-button',
    nextButton = 'p-tablist-next-button'
}

export interface TabListStyle extends BaseStyle {}
