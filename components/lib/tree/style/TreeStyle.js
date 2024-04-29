import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-tree p-component',
        {
            'p-tree-selectable': props.selectionMode != null,
            'p-tree-loading': props.loading,
            'p-tree-flex-scrollable': props.scrollHeight === 'flex'
        }
    ],
    loadingOverlay: 'p-tree-mask p-component-overlay',
    loadingIcon: 'p-tree-loading-icon',
    filterContainer: 'p-tree-filter-container',
    input: 'p-tree-filter-input',
    searchIcon: 'p-tree-filter-icon',
    wrapper: 'p-tree-root',
    container: 'p-tree-root-children',
    node: ({ instance }) => ['p-tree-node', { 'p-tree-node-leaf': instance.leaf }],
    content: ({ instance }) => [
        'p-tree-node-content',
        instance.node.styleClass,
        {
            'p-tree-node-selectable': instance.selectable,
            'p-tree-node-selected': instance.checkboxMode && instance.$parentInstance.highlightOnSelect ? instance.checked : instance.selected
        }
    ],
    toggler: 'p-tree-node-toggle-button',
    togglerIcon: 'p-tree-node-toggle-icon',
    nodeTogglerIcon: 'p-tree-node-toggler-icon', //todo: discuss
    nodeCheckbox: 'p-tree-node-checkbox',
    nodeIcon: 'p-tree-node-icon',
    label: 'p-tree-node-label',
    subgroup: 'p-tree-node-children'
};

export default BaseStyle.extend({
    name: 'tree',
    classes
});
