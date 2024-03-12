export default {
    css: ({ dt }) => `
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: 0.75rem;
}

.p-autocomplete-dd .p-autocomplete-loader {
    right: 3.25rem;
}

.p-autocomplete-dd .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete-dd .p-autocomplete-input,
.p-autocomplete-dd .p-autocomplete-multiple-container {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-autocomplete-dd .p-autocomplete-dropdown {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-autocomplete .p-autocomplete-panel {
    min-width: 100%;
}

.p-autocomplete-panel {
    position: absolute;
    overflow: auto;
    top: 0;
    left: 0;
    background: var(--p-autocomplete-overlay-background);
    color: var(--p-autocomplete-overlay-text-color);
    border: 1px solid var(--p-autocomplete-overlay-border-color);
    border-radius: ${dt('rounded.base')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-autocomplete-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 0.25rem 0.25rem;
}

.p-autocomplete-item {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    margin: 2px 0;
    padding: 0.5rem 0.75rem;
    border: 0 none;
    color: var(--p-autocomplete-item-text-color);
    background: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')};
    border-radius: var(--p-rounded-sm);
}

.p-autocomplete-item:first-child {
    margin-top: 0;
}

.p-autocomplete-item:last-child {
    margin-bottom: 0;
}

.p-autocomplete-item:not(.p-highlight):not(.p-disabled).p-focus {
    background: var(--p-autocomplete-item-background-focus);
    color: var(--p-autocomplete-item-text-color-focus);
}

.p-autocomplete-item.p-highlight {
    color: var(--p-autocomplete-item-background-selected);
    background: var(--p-autocomplete-item-text-color-selected);
}

.p-autocomplete-item.p-highlight.p-focus {
    color: var(--p-autocomplete-item-background-selected-focus);
    background: var(--p-autocomplete-item-text-color-selected-focus);
}

.p-autocomplete-item-group {
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: var(--p-autocomplete-item-group-text-color);
    background: var(--p-autocomplete-item-group-background);
    font-weight: 600;
}

.p-autocomplete-multiple-container {
    margin: 0;
    padding: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0.25rem 0.25rem;
    gap: 0.25rem;
    color: var(--p-autocomplete-input-multiple-text-color);
    background: var(--p-autocomplete-input-multiple-background);
    border: 1px solid var(--p-autocomplete-input-multiple-border-color);
    border-radius: ${dt('rounded.base')};
    width: 100%;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
    box-shadow: var(--p-autocomplete-input-multiple-box-shadow);
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-multiple-container {
    border-color:  var(--p-autocomplete-input-multiple-border-color-hover);
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-multiple-container {
    border-color: var(--p-autocomplete-input-multiple-border-color-focus);
    outline: 0 none;
}

.p-autocomplete.p-invalid .p-autocomplete-multiple-container {
    border-color: var(--p-autocomplete-input-multiple-border-color-invalid);
}

.p-variant-filled.p-autocomplete-multiple-container {
    background: var(--p-autocomplete-input-multiple-background-filled);
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-multiple-container  {
    background: var(--p-autocomplete-input-multiple-background-filled-focus);
}

.p-autocomplete.p-disabled .p-autocomplete-multiple-container {
    opacity: 1;
    background: var(--p-autocomplete-input-multiple-background-disabled);
    color: var(--p-autocomplete-input-multiple-text-color-disabled);
}

.p-autocomplete-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    padding: 0.25rem 0.75rem;
    background: var(--p-autocomplete-chip-background);
    color: var(--p-autocomplete-chip-text-color);
    border-radius: var(--p-rounded-sm);
}

.p-autocomplete-token.p-focus {
    background: var(--p-autocomplete-chip-background-focus);
    color: var(--p-autocomplete-chip-text-color-focus);
}

.p-autocomplete-input-token {
    flex: 1 1 auto;
    display: inline-flex;
}

.p-autocomplete-token-icon {
    cursor: pointer;
    margin-left: 0.375rem;
}

.p-autocomplete-input-token {
    padding: 0.25rem 0;
    margin-left: 0.5rem;
}

.p-autocomplete-input-token input {
    border: 0 none;
    outline: 0 none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
    padding: 0;
    margin: 0;
}

.p-autocomplete-input-token input::placeholder {
    color: var(--p-chips-placeholder-text-color);
}

.p-fluid .p-autocomplete {
    display: flex;
}

.p-fluid .p-autocomplete-dd .p-autocomplete-input {
    width: 1%;
}
`
};
