export default {
    css: ({ dt }) => `
.p-chips {
    display: inline-flex;
}

.p-chips-list {
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
    color: ${dt('chips.color')};
    background: ${dt('chips.background')};
    border: 1px solid ${dt('chips.border.color')};
    border-radius: ${dt('rounded.base')};
    width: 100%;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
    box-shadow: ${dt('chips.box.shadow')};
}

.p-chips:not(.p-disabled):hover .p-chips-list {
    border-color: ${dt('chips.hover.border.color')};
}

.p-chips:not(.p-disabled).p-focus .p-chips-list {
    border-color: ${dt('chips.focus.border.color')};
    outline: 0 none;
}

.p-chips.p-invalid .p-chips-list {
    border-color: ${dt('chips.invalid.border.color')};
}

.p-variant-filled.p-chips-list {
    background: ${dt('chips.filled.background')};
}

.p-chips:not(.p-disabled).p-focus .p-variant-filled.p-chips-list  {
    background: ${dt('chips.filled.focus.background')};
}

.p-chips.p-disabled .p-chips-list {
    opacity: 1;
    background: ${dt('chips.disabled.background')};
    color: ${dt('chips.disabled.color')};
}

.p-chips-item {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    padding: 0.25rem 0.75rem;
    background: ${dt('chips.chip.background')};
    color: ${dt('chips.chip.color')};
    border-radius: ${dt('rounded.sm')};
}

.p-chips-item.p-focus {
    background: ${dt('chips.chip.focus.background')};
    color: ${dt('chips.chip.focus.color')};
}

.p-chips-item-icon {
    cursor: pointer;
    margin-left: 0.375rem;
}

.p-chips-input-item {
    padding: 0.25rem 0;
    margin-left: 0.5rem;
    flex: 1 1 auto;
    display: inline-flex;
}

.p-chips-input-item input {
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

.p-chips-input-item input::placeholder {
    color: ${dt('chips.placeholder.color')};
}

.p-fluid .p-chips {
    display: flex;
}
`
};
