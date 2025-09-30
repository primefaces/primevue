import { style } from '@primeuix/styles/tree';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props, state }) => [
        'p-tree p-component',
        {
            'p-tree-selectable': props.selectionMode != null,
            'p-tree-loading': props.loading,
            'p-tree-flex-scrollable': props.scrollHeight === 'flex',
            'p-tree-node-dragover': state.dragHover
        }
    ],
    mask: 'p-tree-mask p-overlay-mask',
    loadingIcon: 'p-tree-loading-icon',
    pcFilterContainer: 'p-tree-filter',
    pcFilterInput: 'p-tree-filter-input',
    wrapper: 'p-tree-root', //TODO: discuss
    rootChildren: 'p-tree-root-children',
    node: ({ instance }) => ['p-tree-node', { 'p-tree-node-leaf': instance.leaf }],
    nodeContent: ({ instance }) => [
        'p-tree-node-content',
        instance.node.styleClass,
        {
            'p-tree-node-selectable': instance.selectable,
            'p-tree-node-selected': instance.checkboxMode && instance.$parentInstance.highlightOnSelect ? instance.checked : instance.selected,
            'p-tree-node-dragover': instance.isNodeDropActive
        }
    ],
    nodeToggleButton: 'p-tree-node-toggle-button',
    nodeToggleIcon: 'p-tree-node-toggle-icon',
    nodeCheckbox: 'p-tree-node-checkbox',
    nodeIcon: 'p-tree-node-icon',
    nodeLabel: 'p-tree-node-label',
    nodeChildren: 'p-tree-node-children',
    emptyMessage: 'p-tree-empty-message',
    dropPoint: 'p-tree-node-drop-point'
};

export default BaseStyle.extend({
    name: 'tree',
    style,
    classes
});
