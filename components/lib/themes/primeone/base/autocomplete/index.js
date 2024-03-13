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
    background: ${dt('autocomplete.overlay.background')};
    color: ${dt('autocomplete.overlay.color')};
    border: 1px solid ${dt('autocomplete.overlay.border.color')};
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
    color: ${dt('autocomplete.item.color')};
    background: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.sm')};
}

.p-autocomplete-item:first-child {
    margin-top: 0;
}

.p-autocomplete-item:last-child {
    margin-bottom: 0;
}

.p-autocomplete-item:not(.p-highlight):not(.p-disabled).p-focus {
    background: ${dt('autocomplete.item.focus.background')};
    color: ${dt('autocomplete.item.focus.background')};
}

.p-autocomplete-item.p-highlight {
    color: ${dt('autocomplete.item.selected.background')};
    background: ${dt('autocomplete.item.selected.background')};
}

.p-autocomplete-item.p-highlight.p-focus {
    color: ${dt('autocomplete.item.selected.focus.background')};
    background: ${dt('autocomplete.item.selected.focus.background')};
}

.p-autocomplete-item-group {
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: ${dt('autocomplete.item.group.color')};
    background: ${dt('autocomplete.item.group.background')};
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
    color: ${dt('autocomplete.input.multiple.color')};
    background: ${dt('autocomplete.input.multiple.background')};
    border: 1px solid ${dt('autocomplete.input.multiple.border.color')});
    border-radius: ${dt('rounded.base')};
    width: 100%;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
    box-shadow: ${dt('autocomplete.input.multiple.box.shadow')};
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-multiple-container {
    border-color: ${dt('autocomplete.input.multiple.hover.border.color')};
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-multiple-container {
    border-color: ${dt('autocomplete.input.multiple.focus.border.color')};
    outline: 0 none;
}

.p-autocomplete.p-invalid .p-autocomplete-multiple-container {
    border-color: ${dt('autocomplete.input.multiple.invalid.border.color')};
}

.p-variant-filled.p-autocomplete-multiple-container {
    background: ${dt('autocomplete.input.multiple.filled.background')};
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-multiple-container  {
    background: ${dt('autocomplete.input.multiple.filled.focus.background')};
}

.p-autocomplete.p-disabled .p-autocomplete-multiple-container {
    opacity: 1;
    background: ${dt('autocomplete.input.multiple.disabled.background')};
    color: ${dt('autocomplete.input.multiple.disabled.color')};
}

.p-autocomplete-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    padding: 0.25rem 0.75rem;
    background: ${dt('autocomplete.chip.background')};
    color: ${dt('autocomplete.chip.color')};
    border-radius: ${dt('rounded.sm')};
}

.p-autocomplete-token.p-focus {
    background: ${dt('autocomplete.chip.focus.background')};
    color: ${dt('autocomplete.chip.focus.color')};
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
    color: ${dt('autocomplete.input.multiple.placeholder.color')};
}

.p-fluid .p-autocomplete {
    display: flex;
}

.p-fluid .p-autocomplete-dd .p-autocomplete-input {
    width: 1%;
}
`
};
