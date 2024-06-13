/**
 *
 * Tree is used to display hierarchical data.
 *
 * [Live Demo](https://www.primevue.org/tree/)
 *
 * @module treestyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum TreeClasses {
    /**
     * Class name of the root element
     */
    root = 'p-tree',
    /**
     * Class name of the mask element
     */
    mask = 'p-tree-mask',
    /**
     * Class name of the loading icon element
     */
    loadingIcon = 'p-tree-loading-icon',
    /**
     * Class name of the filter input element
     */
    pcFilterInput = 'p-tree-filter-input',
    /**
     * Class name of the wrapper element
     */
    wrapper = 'p-tree-root',
    /**
     * Class name of the root children element
     */
    rootChildren = 'p-tree-root-children',
    /**
     * Class name of the node element
     */
    node = 'p-tree-node',
    /**
     * Class name of the node content element
     */
    nodeContent = 'p-tree-node-content',
    /**
     * Class name of the node toggle button element
     */
    nodeToggleButton = 'p-tree-node-toggle-button',
    /**
     * Class name of the node toggle icon element
     */
    nodeToggleIcon = 'p-tree-node-toggle-icon',
    /**
     * Class name of the node checkbox element
     */
    nodeCheckbox = 'p-tree-node-checkbox',
    /**
     * Class name of the node icon element
     */
    nodeIcon = 'p-tree-node-icon',
    /**
     * Class name of the node label element
     */
    nodeLabel = 'p-tree-node-label',
    /**
     * Class name of the node children element
     */
    nodeChildren = 'p-tree-node-children'
}

export interface TreeStyle extends BaseStyle {}
