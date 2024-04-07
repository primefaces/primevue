export default {
    css: ({ dt }) => `
.p-select {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${dt('dropdown.background')};
    border: 1px solid ${dt('dropdown.border.color')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
    box-shadow: ${dt('dropdown.box.shadow')};
}

.p-select:not(.p-disabled):hover {
    border-color: ${dt('dropdown.hover.border.color')};
}

.p-select:not(.p-disabled).p-focus {
    border-color:${dt('dropdown.focus.border.color')};
    outline: 0 none;
}

.p-select.p-variant-filled {
    background: ${dt('dropdown.filled.background')};
}

.p-select.p-variant-filled.p-focus {
    background: ${dt('dropdown.filled.focus.background')};
}

.p-select.p-invalid {
    border-color: ${dt('dropdown.invalid.border.color')};
}

.p-select.p-disabled {
    opacity: 1;
    background: ${dt('dropdown.disabled.background')};
}

.p-select-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: #94a3b8;
    right: 2.5rem;
}

.p-select-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${dt('dropdown.toggle.color')};
    width: 2.5rem;
    border-top-right-radius: ${dt('rounded.base')};
    border-bottom-right-radius: ${dt('rounded.base')};
}

.p-select-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: 0.5rem 0.75rem;
    text-overflow: ellipsis;
    cursor: pointer;
    color: ${dt('dropdown.color')};
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-select-label.p-placeholder {
    color: ${dt('dropdown.placeholder.color')};
}

.p-select:has(.p-select-clear-icon) .p-select-label {
    padding-right: 1.75rem;
}

.p-select.p-disabled .p-select-label {
    color: ${dt('dropdown.disabled.color')};
}

.p-select-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-select-label {
    cursor: default;
}

.p-select .p-select-overlay {
    min-width: 100%;
}

.p-select-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: ${dt('dropdown.overlay.background')};
    color: ${dt('dropdown.overlay.color')};
    border: 1px solid ${dt('dropdown.overlay.border.color')};
    border-radius: ${dt('rounded.base')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-select-header {
    padding: 0.5rem 0.5rem 0 0.5rem;
}

.p-select-filter {
    width: 100%;
    padding-right: 1.75rem;
    margin-right: -1.75rem;
}

.p-select-filter-container {
    position: relative;
}

.p-select-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: 0.75rem;
    color: ${dt('dropdown.filter.icon.color')};
}

.p-select-list-container {
    overflow: auto;
}

.p-select-option-group {
    cursor: auto;
    margin: 0;
    padding: 0.5rem 0.75rem;
    background: ${dt('dropdown.item.group.background')};
    color: ${dt('dropdown.item.group.color')};
    font-weight: 600;
}

.p-select-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 0.25rem 0.25rem;
}

.p-select-option {
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
    color: ${dt('dropdown.item.color')};
    background: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.sm')};
}

.p-select-option:first-child {
    margin-top: 0;
}

.p-select-option:last-child {
    margin-bottom: 0;
}

.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
    background: ${dt('dropdown.item.focus.background')};
    color: ${dt('dropdown.item.focus.color')};
}

.p-select-option.p-select-option-selected {
    background: ${dt('dropdown.item.selected.background')};
    color: ${dt('dropdown.item.selected.color')};
}

.p-select-option.p-select-option-selected.p-focus {
    background: ${dt('dropdown.item.selected.focus.background')};
    color: ${dt('dropdown.item.selected.focus.color')};
}

.p-select-option-check-icon {
    position: relative;
    margin-left: -0.375rem;
    margin-right: 0.375rem;
    color: ${dt('dropdown.checkmark.color')};
}

.p-select-empty-message {
    padding: 0.5rem 0.75rem;
    background: transparent;
}

.p-fluid .p-select {
    display: flex;
}

.p-fluid .p-select .p-select-label {
    width: 1%;
}
`
};
