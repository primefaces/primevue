import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-tree {
    background: ${dt('tree.background')};
    color: ${dt('tree.color')};
    border-radius: ${dt('rounded.base')};
    border: 0 none;
    padding: 1rem;
}

.p-tree-root-children {
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow: auto;
}

.p-tree-node {
    padding: 0 0;
    outline: 0 none;
    margin: 2px 0;
}

.p-tree-root-children > .p-tree-node:first-child {
    margin-top: 0;
}

.p-tree-root-children > .p-tree-node:last-child {
    margin-bottom: 0;
}

.p-tree-node-content {
    border-radius: ${dt('rounded.base')};
    padding: 0.25rem 0.5rem;
    display: flex;
    align-items: center;
    outline-color: transparent;
    color: ${dt('tree.node.color')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-tree-node:focus-visible > .p-tree-node-content {
    outline: 1px solid ${dt('focus.ring.color')};
    outline-offset: -2px;
}

.p-tree-node-content.p-tree-node-selected {
    background: ${dt('highlight.background')};
    color: ${dt('highlight.color')};
}

.p-tree-node-toggle-button {
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    margin: 0 0.5rem 0 0;
    width: 1.75rem;
    height: 1.75rem;
    color: ${dt('tree.node.toggle.button.color')};
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
    padding: 0;
}

.p-tree-node-toggle-button:enabled:hover {
    background: ${dt('tree.node.toggle.button.hover.background')};
    color: ${dt('tree.node.toggle.button.hover.color')};
}

.p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button,
.p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-icon {
    color: inherit;
}

.p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button:hover {
    background: ${dt('tree.node.toggle.button.highlight.hover.background')};
}

.p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover {
    background: ${dt('tree.node.hover.background')};
    color: ${dt('tree.node.hover.color')};
}

.p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover .p-tree-node-toggle-button {
    color: ${dt('tree.node.toggle.button.hover.color')};
}

.p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover .p-tree-node-icon {
    color: ${dt('tree.node.icon.hover.color')};
}

.p-tree-node-children {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 0 0 0 1rem;
}

.p-tree-root {
    overflow: auto;
}

.p-tree-node-selectable {
    cursor: pointer;
    user-select: none;
}

.p-tree-node-leaf > .p-tree-node-content .p-tree-node-toggle-button {
    visibility: hidden;
}

.p-tree-node-icon {
    margin-right: 0.5rem;
    color: ${dt('tree.node.icon.color')};
    transition: color ${dt('transition.duration')};
}

.p-tree-node-content .p-checkbox {
    margin-right: 0.5rem;
}

.p-tree-filter-input {
    width: 100%;
    padding-right: 1.75rem;
}

.p-tree-filter-container {
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
}

.p-tree-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: 0.75rem;
    color: ${dt('tree.filter.icon.color')};
}

.p-tree-loading {
    position: relative;
    min-height: 4rem;
}

.p-tree-loading-icon {
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
}

.p-tree .p-tree-mask {
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

.p-tree-flex-scrollable .p-tree-root {
    flex: 1;
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
    mask: 'p-tree-mask p-component-overlay',
    loadingIcon: 'p-tree-loading-icon',
    filterContainer: 'p-tree-filter-container',
    filterInput: 'p-tree-filter-input',
    filterIcon: 'p-tree-filter-icon',
    wrapper: 'p-tree-root', //TODO: discuss
    rootChildren: 'p-tree-root-children',
    node: ({ instance }) => ['p-tree-node', { 'p-tree-node-leaf': instance.leaf }],
    nodeContent: ({ instance }) => [
        'p-tree-node-content',
        instance.node.styleClass,
        {
            'p-tree-node-selectable': instance.selectable,
            'p-tree-node-selected': instance.checkboxMode && instance.$parentInstance.highlightOnSelect ? instance.checked : instance.selected
        }
    ],
    nodeToggleButton: 'p-tree-node-toggle-button',
    nodeToggleIcon: 'p-tree-node-toggle-icon',
    nodeTogglerIcon: 'p-tree-node-toggler-icon', //TODO: discuss
    nodeCheckbox: 'p-tree-node-checkbox',
    nodeIcon: 'p-tree-node-icon',
    nodeLabel: 'p-tree-node-label',
    nodeChildren: 'p-tree-node-children'
};

export default BaseStyle.extend({
    name: 'tree',
    theme,
    classes
});
