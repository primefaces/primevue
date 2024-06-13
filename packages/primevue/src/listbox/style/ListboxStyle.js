import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-listbox {
    background: ${dt('listbox.background')};
    color: ${dt('listbox.color')};
    border: 1px solid ${dt('listbox.border.color')};
    border-radius: ${dt('listbox.border.radius')};
    transition: background ${dt('listbox.transition.duration')}, color ${dt('listbox.transition.duration')}, border-color ${dt('listbox.transition.duration')},
            box-shadow ${dt('listbox.transition.duration')}, outline-color ${dt('listbox.transition.duration')};
    outline-color: transparent;
    box-shadow: ${dt('listbox.shadow')};
}

.p-listbox.p-focus {
    border-color: ${dt('listbox.focus.border.color')};
    box-shadow: ${dt('listbox.focus.ring.shadow')};
    outline: ${dt('listbox.focus.ring.width')} ${dt('listbox.focus.ring.style')} ${dt('listbox.focus.ring.color')};
    outline-offset: ${dt('listbox.focus.ring.offset')};
}

.p-listbox.p-disabled {
    opacity: 1;
    background: ${dt('listbox.disabled.background')};
    color: ${dt('listbox.disabled.color')};
}

.p-listbox.p-disabled .p-listbox-option {
    color: ${dt('listbox.disabled.color')};
}

.p-listbox.p-invalid {
    border-color: ${dt('listbox.invalid.border.color')};
}

.p-listbox-header {
    padding: ${dt('listbox.list.header.padding')};
}

.p-listbox-filter {
    width: 100%;
}

.p-listbox-list-container {
    overflow: auto;
}

.p-listbox-list {
    list-style-type: none;
    margin: 0;
    padding: ${dt('listbox.list.padding')};
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: ${dt('listbox.list.gap')};
}

.p-listbox-option {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    padding: ${dt('listbox.option.padding')};
    border: 0 none;
    border-radius: ${dt('listbox.option.border.radius')};
    color: ${dt('listbox.option.color')};
    transition: background ${dt('listbox.transition.duration')}, color ${dt('listbox.transition.duration')}, border-color ${dt('listbox.transition.duration')},
            box-shadow ${dt('listbox.transition.duration')}, outline-color ${dt('listbox.transition.duration')};
}

.p-listbox-striped li:nth-child(even of .p-listbox-option) {
    background: ${dt('listbox.option.striped.background')};
}

.p-listbox .p-listbox-list .p-listbox-option.p-listbox-option-selected {
    background: ${dt('listbox.option.selected.background')};
    color: ${dt('listbox.option.selected.color')};
}

.p-listbox:not(.p-disabled) .p-listbox-option.p-listbox-option-selected.p-focus {
    background: ${dt('listbox.option.selected.focus.background')};
    color: ${dt('listbox.option.selected.focus.color')};
}

.p-listbox:not(.p-disabled) .p-listbox-option:not(.p-listbox-option-selected):not(.p-disabled).p-focus {
    background: ${dt('listbox.option.focus.background')};
    color: ${dt('listbox.option.focus.color')};
}

.p-listbox:not(.p-disabled) .p-listbox-option:not(.p-listbox-option-selected):not(.p-disabled):hover {
    background: ${dt('listbox.option.focus.background')};
    color: ${dt('listbox.option.focus.color')};
}

.p-listbox-option-check-icon {
    position: relative;
    margin-inline-start: ${dt('listbox.checkmark.gutter.start')};
    margin-inline-end: ${dt('listbox.checkmark.gutter.end')};
    color: ${dt('listbox.checkmark.color')};
}

.p-listbox-option-group {
    margin: 0;
    padding: ${dt('listbox.option.group.padding')};
    color: ${dt('listbox.option.group.color')};
    background: ${dt('listbox.option.group.background')};
    font-weight: ${dt('listbox.option.group.font.weight')};
}

.p-listbox-empty-message {
    padding: ${dt('listbox.empty.message.padding')};
}
`;

const classes = {
    root: ({ props }) => [
        'p-listbox p-component',
        {
            'p-listbox-striped': props.striped,
            'p-disabled': props.disabled,
            'p-invalid': props.invalid
        }
    ],
    header: 'p-listbox-header',
    pcFilter: 'p-listbox-filter',
    listContainer: 'p-listbox-list-container',
    list: 'p-listbox-list',
    optionGroup: 'p-listbox-option-group',
    option: ({ instance, props, option, index, getItemOptions }) => [
        'p-listbox-option',
        {
            'p-listbox-option-selected': instance.isSelected(option) && props.highlightOnSelect,
            'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
            'p-disabled': instance.isOptionDisabled(option)
        }
    ],
    optionCheckIcon: 'p-listbox-option-check-icon',
    optionBlankIcon: 'p-listbox-option-blank-icon',
    emptyMessage: 'p-listbox-empty-message'
};

export default BaseStyle.extend({
    name: 'listbox',
    theme,
    classes
});
