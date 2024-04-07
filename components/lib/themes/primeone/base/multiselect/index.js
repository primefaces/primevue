export default {
    css: ({ dt }) => `
.p-multiselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${dt('multiselect.background')};
    border: 1px solid ${dt('multiselect.border.color')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
    box-shadow: ${dt('multiselect.box.shadow')};
}

.p-multiselect:not(.p-disabled):hover {
    border-color: ${dt('multiselect.hover.border.color')};
}

.p-multiselect:not(.p-disabled).p-focus {
    border-color: ${dt('multiselect.focus.border.color')};
    outline: 0 none;
}

.p-multiselect.p-variant-filled {
    background: ${dt('multiselect.filled.background')};
}

.p-multiselect.p-variant-filled.p-focus {
    background: ${dt('multiselect.filled.focus.background')};
}

.p-multiselect.p-invalid {
    border-color: ${dt('multiselect.invalid.border.color')};
}

.p-multiselect.p-disabled {
    opacity: 1;
    background: ${dt('multiselect.disabled.background')};
}

.p-multiselect-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${dt('multiselect.toggle.color')};
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
    color: ${dt('multiselect.color')};
}

.p-multiselect-label.p-placeholder {
    color: ${dt('multiselect.placeholder.color')};
}

.p-multiselect.p-disabled .p-multiselect-label {
    color: ${dt('multiselect.disabled.color')};
}

.p-inputwrapper-filled.p-multiselect.p-multiselect-display-chip .p-multiselect-label {
    padding: 0.25rem 0.25rem;
}

.p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-multiselect-chip {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    padding: 0.25rem 0.75rem;
    background: ${dt('multiselect.chip.background')};
    color: ${dt('multiselect.chip.color')};
    border-radius: ${dt('rounded.sm')};
    margin-right: 0.25rem;
}

.p-multiselect-chip-icon {
    cursor: pointer;
    margin-left: 0.375rem;
}

.p-multiselect .p-multiselect-overlay {
    min-width: 100%;
}

.p-multiselect-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: ${dt('multiselect.overlay.background')};
    color: ${dt('multiselect.overlay.color')};
    border: 1px solid ${dt('multiselect.overlay.border.color')};
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
    color: ${dt('multiselect.filter.icon.color')};
}

.p-multiselect-filter-container .p-inputtext {
    width: 100%;
    padding-right: 1.75rem;
}

.p-multiselect-list-container {
    overflow: auto;
}

.p-multiselect-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 0.25rem 0.25rem;
}

.p-multiselect-option {
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
    color: ${dt('multiselect.item.color')};
    background: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.sm')};
}

.p-multiselect-option:first-child {
    margin-top: 0;
}

.p-multiselect-option:last-child {
    margin-bottom: 0;
}

.p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {
    background: ${dt('multiselect.item.focus.background')};
    color: ${dt('multiselect.item.focus.color')};
}

.p-multiselect-option.p-multiselect-option-selected {
    background: ${dt('multiselect.item.selected.background')};
    color: ${dt('multiselect.item.selected.color')};
}

.p-multiselect-option.p-multiselect-option-selected.p-focus {
    background: ${dt('multiselect.item.selected.focus.background')};
    color: ${dt('multiselect.item.selected.focus.color')};
}

.p-multiselect-option .p-checkbox {
    margin-right: 0.5rem;
}

.p-multiselect-option-group {
    cursor: auto;
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: ${dt('multiselect.item.group.color')};
    background: ${dt('multiselect.item.group.background')};
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
