/**
 *
 * Tree is used to display hierarchical data.
 *
 * [Live Demo](https://www.primevue.org/tree/)
 *
 * @module treestyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum TreeClasses {
    root = 'p-tree',
    mask = 'p-tree-mask',
    loadingIcon = 'p-tree-loading-icon',
    pcFilterInput = 'p-tree-filter-input',
    wrapper = 'p-tree-root',
    rootChildren = 'p-tree-root-children',
    node = 'p-tree-node',
    nodeContent = 'p-tree-node-content',
    nodeToggleButton = 'p-tree-node-toggle-button',
    nodeToggleIcon = 'p-tree-node-toggle-icon',
    nodeTogglerIcon = 'p-tree-node-toggler-icon',
    nodeCheckbox = 'p-tree-node-checkbox',
    nodeIcon = 'p-tree-node-icon',
    nodeLabel = 'p-tree-node-label',
    nodeChildren = 'p-tree-node-children'
}

export interface TreeStyle extends BaseStyle {}
