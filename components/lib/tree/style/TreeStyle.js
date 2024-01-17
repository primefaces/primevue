import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-tree-container {
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow: auto;
    }

    .p-treenode-children {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-tree-wrapper {
        overflow: auto;
    }

    .p-treenode-selectable {
        cursor: pointer;
        user-select: none;
    }

    .p-tree-toggler {
        cursor: pointer;
        user-select: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        flex-shrink: 0;
    }

    .p-treenode-leaf > .p-treenode-content .p-tree-toggler {
        visibility: hidden;
    }

    .p-treenode-content {
        display: flex;
        align-items: center;
    }

    .p-tree-filter {
        width: 100%;
    }

    .p-tree-filter-container {
        position: relative;
        display: block;
        width: 100%;
    }

    .p-tree-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }

    .p-tree-loading {
        position: relative;
        min-height: 4rem;
    }

    .p-tree .p-tree-loading-overlay {
        position: absolute;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-tree-flex-scrollable {
        display: flex;
        flex: 1;
        height: 100%;
        flex-direction: column;
    }

    .p-tree-flex-scrollable .p-tree-wrapper {
        flex: 1;
    }
}
`;

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
            'p-highlight': instance.checkboxMode ? instance.checked : instance.selected
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
    css,
    classes
});
