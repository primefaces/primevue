/**
 *
 * TreeSelect is a form component to choose from hierarchical data.
 *
 * [Live Demo](https://www.primevue.org/treeselect/)
 *
 * @module treeselectstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum TreeSelectClasses {
    /**
     * Class name of the root element
     */
    root = 'p-treeselect',
    /**
     * Class name of the label container element
     */
    labelContainer = 'p-treeselect-label-container',
    /**
     * Class name of the label element
     */
    label = 'p-treeselect-label',
    /**
     * Class name of the clear icon element
     */
    clearIcon = 'p-select-clear-icon',
    /**
     * Class name of the chip item element
     */
    chipItem = 'p-treeselect-chip-item',
    /**
     * Class name of the chip element
     */
    pcChip = 'p-treeselect-chip',
    /**
     * Class name of the dropdown element
     */
    dropdown = 'p-treeselect-dropdown',
    /**
     * Class name of the dropdown icon element
     */
    dropdownIcon = 'p-treeselect-dropdown-icon',
    /**
     * Class name of the panel element
     */
    panel = 'p-treeselect-overlay',
    /**
     * Class name of the tree container element
     */
    treeContainer = 'p-treeselect-tree-container',
    /**
     * Class name of the empty message element
     */
    emptyMessage = 'p-treeselect-empty-message'
}

export interface TreeSelectStyle extends BaseStyle {}
