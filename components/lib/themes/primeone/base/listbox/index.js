export default {
    css: `
.p-listbox {
    background: var(--p-listbox-background);
    color: var(--p-listbox-text-color);
    border: 1px solid var(--p-listbox-border-color);
    border-radius: var(--p-rounded-base);
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05);
}

.p-listbox.p-focus {
    outline: 0 none;
    border-color: var(--p-listbox-border-color-focus);
}

.p-listbox.p-disabled {
    opacity: 1;
    background: var(--p-listbox-background-disabled);
    color: var(--p-listbox-text-color-disabled);
}

.p-listbox.p-invalid {
    border-color: var(--p-listbox-border-color-invalid);
}

.p-listbox .p-listbox-header {
    padding: 0.5rem 0.5rem 0 0.5rem;
    border-bottom: 0 none;
    margin: 0 0 0 0;
}

.p-listbox-filter-container {
    position: relative;
}

.p-listbox-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: 0.75rem;
    color: var(--p-listbox-filter-icon);
}

.p-listbox-filter {
    width: 100%;
    padding-right: 1.75rem;
}

.p-listbox-list-wrapper {
    overflow: auto;
}

.p-listbox-list {
    list-style-type: none;
    margin: 0;
    padding: 0.25rem 0.25rem;
    outline: 0 none;
}

.p-listbox-item {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin: 2px 0;
    padding: 0.5rem 0.75rem;
    border: 0 none;
    border-radius: var(--p-rounded-sm);
    color: var(--p-listbox-item-text-color);
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
}

.p-listbox-item:first-child {
    margin-top: 0;
}

.p-listbox-item:last-child {
    margin-bottom: 0;
}

.p-listbox .p-listbox-list .p-listbox-item.p-highlight {
    background: var(--p-listbox-item-background-selected);
    color: var(--p-listbox-item-text-color-selected);
}

.p-listbox:not(.p-disabled) .p-listbox-item.p-highlight.p-focus {
    background: var(--p-listbox-item-background-selected-focus);
    color: var(--p-listbox-item-text-color-selected-focus);
}

.p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled).p-focus {
    background: var(--p-listbox-item-background-focus);
    color: var(--p-listbox-item-text-color-focus);
}

.p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {
    background: var(--p-listbox-item-background-focus);
    color: var(--p-listbox-item-text-color-focus);
}

.p-listbox-item-group {
    cursor: auto;
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: var(--p-listbox-item-group-text-color);
    background: var(--p-listbox-item-group-background);
    font-weight: 600;
}

.p-listbox-empty-message {
    padding: 0.5rem 0.75rem;
    background: transparent;
}
`
};
