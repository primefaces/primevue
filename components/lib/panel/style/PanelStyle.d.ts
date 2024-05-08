/**
 *
 * Panel is a container with the optional content toggle feature.
 *
 * [Live Demo](https://www.primevue.org/panel/)
 *
 * @module panelstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum PanelClasses {
    root = 'p-panel',
    header = 'p-panel-header',
    title = 'p-panel-title',
    headerActions = 'p-panel-header-actions',
    pcToggleButton = 'p-panel-toggle-button',
    contentContainer = 'p-panel-content-container',
    content = 'p-panel-content',
    footer = 'p-panel-footer'
}

export interface PanelStyle extends BaseStyle {}
