export default {
    css: ({ dt }) => `
.p-treeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${dt('treeselect.background')};
    border: 1px solid ${dt('treeselect.border.color')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
    box-shadow: ${dt('treeselect.box.shadow')};
}

.p-treeselect:not(.p-disabled):hover {
    border-color: ${dt('treeselect.hover.border.color')};
}

.p-treeselect:not(.p-disabled).p-focus {
    border-color: ${dt('treeselect.focus.border.color')};
    outline: 0 none;
}

.p-treeselect.p-variant-filled {
    background: ${dt('treeselect.filled.background')};
}

.p-treeselect.p-variant-filled.p-focus {
    background: ${dt('treeselect.filled.focus.background')};
}

.p-treeselect.p-invalid {
    border-color: ${dt('treeselect.invalid.border.color')};
}

.p-treeselect.p-disabled {
    opacity: 1;
    background: ${dt('treeselect.disabled.background')};
}

.p-treeselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${dt('treeselect.toggle.color')};
    width: 2.5rem;
    border-top-right-radius: ${dt('rounded.base')};
    border-bottom-right-radius: ${dt('rounded.base')};
}

.p-treeselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-treeselect-label {
    display: block;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0.5rem 0.75rem;
    color: ${dt('treeselect.color')};
}

.p-treeselect-label.p-placeholder {
    color: ${dt('treeselect.placeholder.color')};
}

.p-treeselect.p-disabled .p-treeselect-label {
    color: ${dt('treeselect.disabled.color')};
}

.p-inputwrapper-filled.p-treeselect.p-treeselect-chip .p-treeselect-label {
    padding: 0.25rem 0.25rem;
}

.p-treeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-treeselect-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    padding: 0.25rem 0.75rem;
    background: ${dt('treeselect.chip.background')};
    color: ${dt('treeselect.chip.color')};
    border-radius: ${dt('rounded.sm')};
    margin-right: 0.25rem;
}

.p-treeselect-token-icon {
    cursor: pointer;
    margin-left: 0.375rem;
}

.p-treeselect .p-treeselect-panel {
    min-width: 100%;
}

.p-treeselect-panel {
    position: absolute;
    top: 0;
    left: 0;
    background: ${dt('treeselect.overlay.background')};
    color: ${dt('treeselect.overlay.color')};
    border: 1px solid ${dt('treeselect.overlay.border.color')};
    border-radius: ${dt('rounded.base')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-treeselect-empty-message {
    padding: 0.5rem 0.75rem;
    background: transparent;
}

.p-fluid .p-treeselect {
    display: flex;
}

.p-treeselect-panel .p-tree {
    padding: 0.25rem 0.25rem;
}
`
};
