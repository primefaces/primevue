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
    loadingOverlay: 'p-tree-loading-overlay p-component-overlay',
    loadingIcon: 'p-tree-loading-icon',
    filterContainer: 'p-tree-filter-container',
    input: 'p-tree-filter p-inputtext p-component',
    searchIcon: 'p-tree-filter-icon',
    wrapper: 'p-tree-wrapper',
    container: 'p-tree-container',
    node: ({ instance }) => ['p-treenode', { 'p-treenode-leaf': instance.leaf }],
    content: ({ instance }) => [
        'p-treenode-content',
        instance.node.styleClass,
        {
            'p-treenode-selectable': instance.selectable,
            'p-highlight': instance.checkboxMode && instance.$parentInstance.highlightOnSelect ? instance.checked : instance.selected
        }
    ],
    toggler: 'p-tree-toggler p-link',
    togglerIcon: 'p-tree-toggler-icon',
    nodeTogglerIcon: 'p-tree-node-toggler-icon',
    nodeCheckbox: ({ instance }) => [
        {
            'p-indeterminate': instance.partialChecked
        }
    ],
    nodeIcon: 'p-treenode-icon',
    label: 'p-treenode-label',
    subgroup: 'p-treenode-children'
};

export default BaseStyle.extend({
    name: 'tree',
    classes
});
