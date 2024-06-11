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
    /**
     * Class name of the root element
     */
    root = 'p-tablist',
    /**
     * Class name of the content element
     */
    content = 'p-tablist-content',
    /**
     * Class name of the tabs element
     */
    tabs = 'p-tablist-tab-list',
    /**
     * Class name of the inkbar element
     */
    inkbar = 'p-tablist-active-bar',
    /**
     * Class name of the previous button element
     */
    prevButton = 'p-tablist-prev-button',
    /**
     * Class name of the next button element
     */
    nextButton = 'p-tablist-next-button'
}

export interface TabListStyle extends BaseStyle {}
