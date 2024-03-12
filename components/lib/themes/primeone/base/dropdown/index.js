export default {
    css: ({ dt }) => `
.p-dropdown {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: var(--p-dropdown-background);
    border: 1px solid var(--p-dropdown-border-color);
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
    box-shadow: var(--p-dropdown-box-shadow);
}

.p-dropdown:not(.p-disabled):hover {
    border-color: var(--p-dropdown-border-color-hover);
}

.p-dropdown:not(.p-disabled).p-focus {
    border-color: var(--p-dropdown-border-color-focus);
    outline: 0 none;
}

.p-dropdown.p-variant-filled {
    background: var(--p-dropdown-background-filled);
}

.p-dropdown.p-variant-filled.p-focus {
    background: var(--p-dropdown-background-filled-focus);
}

.p-dropdown.p-invalid {
    border-color: var(--p-dropdown-border-color-invalid);
}

.p-dropdown.p-disabled {
    opacity: 1;
    background: var(--p-dropdown-background-disabled);
}

.p-dropdown-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: #94a3b8;
    right: 2.5rem;
}

.p-dropdown-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: var(--p-dropdown-toggle-color);
    width: 2.5rem;
    border-top-right-radius: ${dt('rounded.base')};
    border-bottom-right-radius: ${dt('rounded.base')};
}

.p-dropdown-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: 0.5rem 0.75rem;
    text-overflow: ellipsis;
    cursor: pointer;
    color: var(--p-dropdown-text-color);
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-dropdown-label.p-placeholder {
    color: var(--p-dropdown-placeholder-text-color);
}

.p-dropdown-clearable .p-dropdown-label {
    padding-right: 1.75rem;
}

.p-dropdown.p-disabled .p-dropdown-label {
    color: var(--p-dropdown-text-color-disabled);
}

.p-dropdown-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-dropdown-label {
    cursor: default;
}

.p-dropdown .p-dropdown-panel {
    min-width: 100%;
}

.p-dropdown-panel {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--p-dropdown-overlay-background);
    color: var(--p-dropdown-overlay-text-color);
    border: 1px solid var(--p-dropdown-overlay-border-color);
    border-radius: ${dt('rounded.base')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}


.p-dropdown-panel .p-dropdown-header {
    padding: 0.5rem 0.5rem 0 0.5rem;
}

.p-dropdown-filter {
    width: 100%;
    padding-right: 1.75rem;
    margin-right: -1.75rem;
}

.p-dropdown-filter-container {
    position: relative;
}

.p-dropdown-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: 0.75rem;
    color: var(--p-dropdown-filter-icon-color);
}

.p-dropdown-items-wrapper {
    overflow: auto;
}

.p-dropdown-item-group {
    cursor: auto;
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: var(--p-dropdown-item-group-text-color);
    background: var(--p-dropdown-item-group-background);
    font-weight: 600;
}

.p-dropdown-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 0.25rem 0.25rem;
}

.p-dropdown-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin: 2px 0;
    padding: 0.5rem 0.75rem;
    border: 0 none;
    color: var(--p-dropdown-item-text-color);
    background: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: var(--p-rounded-sm);
}

.p-dropdown-item:first-child {
    margin-top: 0;
}

.p-dropdown-item:last-child {
    margin-bottom: 0;
}

.p-dropdown-item:not(.p-highlight):not(.p-disabled).p-focus {
    color: var(--p-dropdown-item-text-color-focus);
    background: var(--p-dropdown-item-background-focus);
}

.p-dropdown-item.p-highlight {
    color: var(--p-dropdown-item-text-color-selected);
    background: var(--p-dropdown-item-background-selected);
}

.p-dropdown-item.p-highlight.p-focus {
    color: var(--p-dropdown-item-text-color-selected-focus);
    background: var(--p-dropdown-item-background-selected-focus);
}

.p-dropdown-check-icon {
    position: relative;
    margin-left: -0.375rem;
    margin-right: 0.375rem;
    color: var(--p-dropdown-checkmark-color);
}

.p-dropdown-empty-message {
    padding: 0.5rem 0.75rem;
    background: transparent;
}

.p-fluid .p-dropdown {
    display: flex;
}

.p-fluid .p-dropdown .p-dropdown-label {
    width: 1%;
}
`
};
