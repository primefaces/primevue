/**
 *
 * Panel is a container with the optional content toggle feature.
 *
 * [Live Demo](https://www.primevue.org/panel/)
 *
 * @module panelstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum PanelClasses {
    /**
     * Class name of the root element
     */
    root = 'p-panel',
    /**
     * Class name of the header element
     */
    header = 'p-panel-header',
    /**
     * Class name of the title element
     */
    title = 'p-panel-title',
    /**
     * Class name of the header actions element
     */
    headerActions = 'p-panel-header-actions',
    /**
     * Class name of the toggle button element
     */
    pcToggleButton = 'p-panel-toggle-button',
    /**
     * Class name of the content container element
     */
    contentContainer = 'p-panel-content-container',
    /**
     * Class name of the content element
     */
    content = 'p-panel-content',
    /**
     * Class name of the footer element
     */
    footer = 'p-panel-footer'
}

export interface PanelStyle extends BaseStyle {}
