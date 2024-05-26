/**
 *
 * TabView Design Tokens
 *
 * [Live Demo](https://www.primevue.org/tabview/)
 *
 * @module themes/tabview
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface TabViewDesignTokens extends ColorSchemeDesignToken<TabViewDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: {
        /**
         * Transition duration of root
         *
         * @designToken tabview.transition.duration
         */
        transitionDuration?: string;
    };
    /**
     * Used to pass tokens of the tab list section
     */
    tabList?: {
        /**
         * Background of tab list
         *
         * @designToken tabview.tab.list.background
         */
        background?: string;
        /**
         * Border color of tab list
         *
         * @designToken tabview.tab.list.border.color
         */
        borderColor?: string;
    };
    /**
     * Used to pass tokens of the tab section
     */
    tab?: {
        /**
         * Border color of tab
         *
         * @designToken tabview.tab.border.color
         */
        borderColor?: string;
        /**
         * Active border color of tab
         *
         * @designToken tabview.tab.active.border.color
         */
        activeBorderColor?: string;
        /**
         * Color of tab
         *
         * @designToken tabview.tab.color
         */
        color?: string;
        /**
         * Hover color of tab
         *
         * @designToken tabview.tab.hover.color
         */
        hoverColor?: string;
        /**
         * Active color of tab
         *
         * @designToken tabview.tab.active.color
         */
        activeColor?: string;
    };
    /**
     * Used to pass tokens of the tab panel section
     */
    tabPanel?: {
        /**
         * Background of tab panel
         *
         * @designToken tabview.tab.panel.background
         */
        background?: string;
        /**
         * Color of tab panel
         *
         * @designToken tabview.tab.panel.color
         */
        color?: string;
    };
    /**
     * Used to pass tokens of the nav button section
     */
    navButton?: {
        /**
         * Background of nav button
         *
         * @designToken tabview.nav.button.background
         */
        background?: string;
        /**
         * Color of nav button
         *
         * @designToken tabview.nav.button.color
         */
        color?: string;
        /**
         * Hover color of nav button
         *
         * @designToken tabview.nav.button.hover.color
         */
        hoverColor?: string;
        /**
         * Box shadow of nav button
         *
         * @designToken tabview.nav.button.box.shadow
         */
        boxShadow?: string;
    };
}
