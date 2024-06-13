import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-tree {
    background: ${dt('tree.background')};
    color: ${dt('tree.color')};
    padding: ${dt('tree.padding')};
}

.p-tree-root-children,
.p-tree-node-children {
    display: flex;
    list-style-type: none;
    flex-direction: column;
    margin: 0;
    gap: ${dt('tree.gap')};
}

.p-tree-root-children {
    padding: ${dt('tree.gap')} 0 0 0;
}

.p-tree-node-children {
    padding: ${dt('tree.gap')} 0 0 ${dt('tree.indent')};
}

.p-tree-node {
    padding: 0;
    outline: 0 none;
}

.p-tree-node-content {
    border-radius: ${dt('tree.node.border.radius')};
    padding: ${dt('tree.node.padding')};
    display: flex;
    align-items: center;
    outline-color: transparent;
    color: ${dt('tree.node.color')};
    gap: ${dt('tree.node.gap')};
    transition: background ${dt('tree.transition.duration')}, color ${dt('tree.transition.duration')}, outline-color ${dt('tree.transition.duration')}, box-shadow ${dt('tree.transition.duration')};
}

.p-tree-node:focus-visible > .p-tree-node-content {
    box-shadow: ${dt('tree.node.focus.ring.shadow')};
    outline: ${dt('tree.node.focus.ring.width')} ${dt('tree.node.focus.ring.style')} ${dt('tree.node.focus.ring.color')};
    outline-offset: ${dt('tree.node.focus.ring.offset')};
}

.p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover {
    background: ${dt('tree.node.hover.background')};
    color: ${dt('tree.node.hover.color')};
}

.p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover .p-tree-node-icon {
    color: ${dt('tree.node.icon.hover.color')};
}

.p-tree-node-content.p-tree-node-selected {
    background: ${dt('tree.node.selected.background')};
    color: ${dt('tree.node.selected.color')};
}

.p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button {
    color: inherit;
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
    width: ${dt('tree.node.toggle.button.size')};
    height: ${dt('tree.node.toggle.button.size')};
    color: ${dt('tree.node.toggle.button.color')};
    border: 0 none;
    background: transparent;
    border-radius: ${dt('tree.node.toggle.button.border.radius')};
    transition: background ${dt('tree.transition.duration')}, color ${dt('tree.transition.duration')}, border-color ${dt('tree.transition.duration')}, outline-color ${dt('tree.transition.duration')}, box-shadow ${dt('tree.transition.duration')};
    outline-color: transparent;
    padding: 0;
}

.p-tree-node-toggle-button:enabled:hover {
    background: ${dt('tree.node.toggle.button.hover.background')};
    color: ${dt('tree.node.toggle.button.hover.color')};
}

.p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button:hover {
    background: ${dt('tree.node.toggle.button.selected.hover.background')};
    color: ${dt('tree.node.toggle.button.selected.hover.color')};
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
    color: ${dt('tree.node.icon.color')};
    transition: color ${dt('tree.transition.duration')};
}

.p-tree-node-content.p-tree-node-selected .p-tree-node-icon {
    color: ${dt('tree.node.icon.selected.color')};
}

.p-tree-filter-input {
    width: 100%;
}

.p-tree-loading {
    position: relative;
    height: 100%;
}

.p-tree-loading-icon {
    font-size: ${dt('tree.loading.icon.size')};
    width: ${dt('tree.loading.icon.size')};
    height: ${dt('tree.loading.icon.size')};
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
    mask: 'p-tree-mask p-overlay-mask',
    loadingIcon: 'p-tree-loading-icon',
    pcFilterInput: 'p-tree-filter-input',
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
