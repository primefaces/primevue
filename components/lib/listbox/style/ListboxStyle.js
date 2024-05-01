import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-listbox {
    background: ${dt('listbox.background')};
    color: ${dt('listbox.color')};
    border: 1px solid ${dt('listbox.border.color')};
    border-radius: ${dt('rounded.base')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05);
}

.p-listbox.p-focus {
    outline: 0 none;
    border-color: ${dt('listbox.focus.border.color')};
}

.p-listbox.p-disabled {
    opacity: 1;
    background: ${dt('listbox.disabled.background')};
    color: ${dt('listbox.disabled.color')};
}

.p-listbox.p-invalid {
    border-color: ${dt('listbox.invalid.border.color')};
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
    color: ${dt('listbox.filter.icon.color')};
}

.p-listbox-filter {
    width: 100%;
    padding-right: 1.75rem;
}

.p-listbox-list-container {
    overflow: auto;
}

.p-listbox-list {
    list-style-type: none;
    margin: 0;
    padding: 0.25rem 0.25rem;
    outline: 0 none;
}

.p-listbox-option {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin: 2px 0;
    padding: 0.5rem 0.75rem;
    border: 0 none;
    border-radius: ${dt('rounded.sm')};
    color: ${dt('listbox.item.color')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-listbox-option:first-child {
    margin-top: 0;
}

.p-listbox-option:last-child {
    margin-bottom: 0;
}

.p-listbox .p-listbox-list .p-listbox-option.p-listbox-option-selected {
    background: ${dt('listbox.item.selected.background')};
    color: ${dt('listbox.item.selected.color')};
}

.p-listbox:not(.p-disabled) .p-listbox-option.p-listbox-option-selected.p-focus {
    background: ${dt('listbox.item.selected.focus.background')};
    color: ${dt('listbox.item.selected.focus.color')};
}

.p-listbox:not(.p-disabled) .p-listbox-option:not(.p-listbox-option-selected):not(.p-disabled).p-focus {
    background: ${dt('listbox.item.focus.background')};
    color: ${dt('listbox.item.focus.color')};
}

.p-listbox:not(.p-disabled) .p-listbox-option:not(.p-listbox-option-selected):not(.p-disabled):hover {
    background: ${dt('listbox.item.focus.background')};
    color: ${dt('listbox.item.focus.color')};
}

.p-listbox-option-group {
    cursor: auto;
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: ${dt('listbox.item.group.color')};
    background: ${dt('listbox.item.group.background')};
    font-weight: 600;
}

.p-listbox-empty-message {
    padding: 0.5rem 0.75rem;
    background: transparent;
}
`;

const classes = {
    root: ({ props }) => [
        'p-listbox p-component',
        {
            'p-listbox-striped': props.stripedRows,
            'p-disabled': props.disabled,
            'p-invalid': props.invalid
        }
    ],
    header: 'p-listbox-header',
    filterContainer: 'p-listbox-filter-container',
    filterInput: 'p-listbox-filter',
    filterIcon: 'p-listbox-filter-icon',
    wrapper: 'p-listbox-list-container',
    list: 'p-listbox-list',
    itemGroup: 'p-listbox-option-group',
    item: ({ instance, option, index, getItemOptions }) => [
        'p-listbox-option',
        {
            'p-listbox-option-selected': instance.isSelected(option),
            'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
            'p-disabled': instance.isOptionDisabled(option)
        }
    ],
    emptyMessage: 'p-listbox-empty-message'
};

export default BaseStyle.extend({
    name: 'listbox',
    theme,
    classes
});
