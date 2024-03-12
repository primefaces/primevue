export default {
    css: ({ dt }) => `
.p-multiselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: var(--p-multiselect-background);
    border: 1px solid var(--p-multiselect-border-color);
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
    box-shadow: var(--p-multiselect-box-shadow);
}

.p-multiselect:not(.p-disabled):hover {
    border-color: var(--p-multiselect-border-color-hover);
}

.p-multiselect:not(.p-disabled).p-focus {
    border-color: var(--p-multiselect-border-color-focus);
    outline: 0 none;
}

.p-multiselect.p-variant-filled {
    background: var(--p-multiselect-background-filled);
}

.p-multiselect.p-variant-filled.p-focus {
    background: var(--p-multiselect-background-filled-focus);
}

.p-multiselect.p-invalid {
    border-color: var(--p-multiselect-border-color-invalid);
}

.p-multiselect.p-disabled {
    opacity: 1;
    background: var(--p-multiselect-background-disabled);
}

.p-multiselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: var(--p-multiselect-toggle-color);
    width: 2.5rem;
    border-top-right-radius: ${dt('rounded.base')};
    border-bottom-right-radius: ${dt('rounded.base')};
}

.p-multiselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-multiselect-label {
    display: block;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0.5rem 0.75rem;
    color: var(--p-multiselect-text-color);
}

.p-multiselect-label.p-placeholder {
    color: var(--p-multiselect-placeholder-text-color);
}

.p-multiselect.p-disabled .p-multiselect-label {
    color: var(--p-multiselect-text-color-disabled);
}

.p-inputwrapper-filled.p-multiselect.p-multiselect-chip .p-multiselect-label {
    padding: 0.25rem 0.25rem;
}

.p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-multiselect-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    padding: 0.25rem 0.75rem;
    background: var(--p-multiselect-chip-background);
    color: var(--p-multiselect-chip-text-color);
    border-radius: var(--p-rounded-sm);
    margin-right: 0.25rem;
}

.p-multiselect-token-icon {
    cursor: pointer;
    margin-left: 0.375rem;
}

.p-multiselect .p-multiselect-panel {
    min-width: 100%;
}

.p-multiselect-panel {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--p-multiselect-overlay-background);
    color: var(--p-multiselect-overlay-text-color);
    border: 1px solid var(--p-multiselect-overlay-border-color);
    border-radius: ${dt('rounded.base')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-multiselect-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem 0 1rem;
}

.p-multiselect-header .p-checkbox {
    margin-right: 0.5rem;
}

.p-multiselect-filter-container {
    position: relative;
    flex: 1 1 auto;
}

.p-multiselect-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: 0.75rem;
    color: var(--p-multiselect-filter-icon-color);
}

.p-multiselect-filter-container .p-inputtext {
    width: 100%;
    padding-right: 1.75rem;
}

.p-multiselect-items-wrapper {
    overflow: auto;
}

.p-multiselect-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 0.25rem 0.25rem;
}

.p-multiselect-item {
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
    color: var(--p-multiselect-item-text-color);
    background: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: var(--p-rounded-sm);
}

.p-multiselect-item:first-child {
    margin-top: 0;
}

.p-multiselect-item:last-child {
    margin-bottom: 0;
}

.p-multiselect-item:not(.p-highlight):not(.p-disabled).p-focus {
    color: var(--p-multiselect-item-text-color-focus);
    background: var(--p-multiselect-item-background-focus);
}

.p-multiselect-item.p-highlight {
    color: var(--p-multiselect-item-text-color-selected);
    background: var(--p-multiselect-item-background-selected);
}

.p-multiselect-item.p-highlight.p-focus {
    color: var(--p-multiselect-item-text-color-selected-focus);
    background: var(--p-multiselect-item-background-selected-focus);
}

.p-multiselect-item .p-checkbox {
    margin-right: 0.5rem;
}

.p-multiselect-item-group {
    cursor: auto;
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: var(--p-multiselect-item-group-text-color);
    background: var(--p-multiselect-item-group-background);
    font-weight: 600;
}

.p-multiselect-empty-message {
    padding: 0.5rem 0.75rem;
    background: transparent;
}

.p-fluid .p-multiselect {
    display: flex;
}
`
};
