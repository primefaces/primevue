export default {
    css: `
.p-picklist {
    display: flex;
    gap: 1.125rem;
}

.p-picklist-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
}

.p-picklist-list-wrapper {
    flex: 1 1 50%;
    background: var(--p-picklist-list-background);
    border: 1px solid var(--p-picklist-list-border-color);
    border-radius: var(--p-picklist-base);
}

.p-picklist .p-picklist-header {
    color: var(--p-picklist-header-text-color);
    border: 0 none;
    padding: 0.75rem 1rem 0.5rem 1rem;
    font-weight: 600;
}

.p-picklist-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    min-height: 12rem;
    max-height: 24rem;
    padding: 0.25rem 0.25rem;
    outline: 0 none;
}

.p-picklist-item {
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: 0.5rem 0.75rem;
    margin: 2px 0;
    border-radius: var(--p-rounded-base);
    border: 0 none;
    color: var(--p-picklist-item-text-color);
    background: var(--p-picklist-item-background);
    outline-color: transparent;
    transition: transform var(--p-transition-duration), background-color var(--p-transition-duration), color var(--p-transition-duration), outline-color var(--p-transition-duration);
}

.p-picklist-item:first-child {
    margin-top: 0;
}

.p-picklist-item:last-child {
    margin-bottom: 0;
}

.p-picklist-item:not(.p-highlight):hover {
    color: var(--p-picklist-item-text-color-focus);
    background: var(--p-picklist-item-background-focus);
}

.p-picklist-item.p-focus {
    color: var(--p-picklist-item-text-color-focus);
    background: var(--p-picklist-item-background-focus);
}

.p-picklist-item.p-highlight {
    background: var(--p-highlight-background);
    color: var(--p-highlight-text-color);
}

.p-picklist-item.p-highlight.p-focus {
    background: var(--p-highlight-background-focus);
    color: var(--p-highlight-text-color-focus);
}

.p-picklist-buttons .p-button {
    background: var(--p-picklist-control-background);
    border: 1px solid var(--p-picklist-control-border-color);
    color: var(--p-order-listcontrol-text-color);
    outline-color: transparent;
    transition: opacity var(--p-transition-duration), outline-color var(--p-transition-duration), background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration);
}

.p-picklist-buttons .p-button:not(:disabled):hover {
    background: var(--p-picklist-control-background-hover);
    border: 1px solid var(--p-picklist-control-border-color-hover);
    color: var(--p-order-listcontrol-text-color-hover);
}

.p-picklist-buttons .p-button:not(:disabled):active {
    background: var(--p-picklist-control-background-active);
    border: 1px solid var(--p-picklist-control-border-color-active);
    color: var(--p-order-listcontrol-text-color-active);
}

.p-picklist-buttons .p-button:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-button-primary-background);
    outline-offset: var(--p-focus-ring-offset);
}
`
};
