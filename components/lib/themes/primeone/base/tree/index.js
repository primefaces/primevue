export default {
    css: ({ dt }) => `
.p-tree {
    background: ${dt('tree.background')};
    color: ${dt('tree.color')};
    border-radius: ${dt('rounded.base')};
    border: 0 none;
    padding: 1rem;
}

.p-tree-container {
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow: auto;
}

.p-treenode {
    padding: 0 0;
    outline: 0 none;
    margin: 2px 0;
}

.p-tree-container > .p-treenode:first-child {
    margin-top: 0;
}

.p-tree-container > .p-treenode:last-child {
    margin-bottom: 0;
}

.p-treenode-content {
    border-radius: ${dt('rounded.base')};
    padding: 0.25rem 0.5rem;
    display: flex;
    align-items: center;
    outline-color: transparent;
    color: ${dt('tree.node.color')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-treenode:focus-visible > .p-treenode-content {
    outline: 1px solid ${dt('focus.ring.color')};
    outline-offset: -2px;
}

.p-treenode-content.p-highlight {
    background: ${dt('highlight.background')};
    color: ${dt('highlight.color')};
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
    margin-right: 0.5rem;
    width: 1.75rem;
    height: 1.75rem;
    color: ${dt('tree.toggle.color')};
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-tree-toggler:enabled:hover {
    background: ${dt('tree.toggle.hover.background')};
    color: ${dt('tree.toggle.hover.color')};
}

.p-treenode-content.p-highlight .p-tree-toggler,
.p-treenode-content.p-highlight .p-treenode-icon {
    color: inherit;
}

.p-treenode-content.p-highlight .p-tree-toggler:hover {
    background: ${dt('tree.toggle.highlight.hover.background')};
}

.p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {
    background: ${dt('tree.node.hover.background')};
    color: ${dt('tree.node.hover.color')};
}

.p-treenode-content.p-treenode-selectable:not(.p-highlight):hover .p-tree-toggler {
    color: ${dt('tree.toggle.hover.color')};
}

.p-treenode-content.p-treenode-selectable:not(.p-highlight):hover .p-treenode-icon {
    color: ${dt('tree.icon.hover.color')};
}

.p-treenode-children {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 0 0 0 1rem;
}

.p-tree-wrapper {
    overflow: auto;
}

.p-treenode-selectable {
    cursor: pointer;
    user-select: none;
}

.p-treenode-leaf > .p-treenode-content .p-tree-toggler {
    visibility: hidden;
}

.p-treenode-icon {
    margin-right: 0.5rem;
    color: ${dt('tree.icon.color')};
    transition: color ${dt('transition.duration')};
}

.p-treenode-content .p-checkbox {
    margin-right: 0.5rem;
}

.p-treenode-content .p-checkbox.p-indeterminate .p-checkbox-icon {
    color: ${dt('tree.indeterminate.color')};
}

.p-tree-filter {
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
    color: #94a3b8;
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

.p-tree-loading-overlay {
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
`
};
