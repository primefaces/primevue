export default {
    css: ({ dt }) => `
.p-treeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: var(--p-treeselect-background);
    border: 1px solid var(--p-treeselect-border-color);
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
    box-shadow: var(--p-treeselect-box-shadow);
}

.p-treeselect:not(.p-disabled):hover {
    border-color: var(--p-treeselect-border-color-hover);
}

.p-treeselect:not(.p-disabled).p-focus {
    border-color: var(--p-treeselect-border-color-focus);
    outline: 0 none;
}

.p-treeselect.p-variant-filled {
    background: var(--p-treeselect-background-filled);
}

.p-treeselect.p-variant-filled.p-focus {
    background: var(--p-treeselect-background-filled-focus);
}

.p-treeselect.p-invalid {
    border-color: var(--p-treeselect-border-color-invalid);
}

.p-treeselect.p-disabled {
    opacity: 1;
    background: var(--p-treeselect-background-disabled);
}

.p-treeselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: var(--p-treeselect-toggle-color);
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
    color: var(--p-treeselect-text-color);
}

.p-treeselect-label.p-placeholder {
    color: var(--p-treeselect-placeholder-text-color);
}

.p-treeselect.p-disabled .p-treeselect-label {
    color: var(--p-treeselect-text-color-disabled);
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
    background: var(--p-treeselect-chip-background);
    color: var(--p-treeselect-chip-text-color);
    border-radius: var(--p-rounded-sm);
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
    background: var(--p-treeselect-overlay-background);
    color: var(--p-treeselect-overlay-text-color);
    border: 1px solid var(--p-treeselect-overlay-border-color);
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
