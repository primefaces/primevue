import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-select {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${dt('select.background')};
    border: 1px solid ${dt('select.border.color')};
    transition: background ${dt('select.transition.duration')}, color ${dt('select.transition.duration')}, border-color ${dt('select.transition.duration')},
        outline-color ${dt('select.transition.duration')}, box-shadow ${dt('select.transition.duration')};
    border-radius: ${dt('select.border.radius')};
    outline-color: transparent;
    box-shadow: ${dt('select.shadow')};
}

.p-select:not(.p-disabled):hover {
    border-color: ${dt('select.hover.border.color')};
}

.p-select:not(.p-disabled).p-focus {
    border-color: ${dt('select.focus.border.color')};
    box-shadow: ${dt('select.focus.ring.shadow')};
    outline: ${dt('select.focus.ring.width')} ${dt('select.focus.ring.style')} ${dt('select.focus.ring.color')};
    outline-offset: ${dt('select.focus.ring.offset')};
}

.p-select.p-variant-filled {
    background: ${dt('select.filled.background')};
}

.p-select.p-variant-filled.p-focus {
    background: ${dt('select.filled.focus.background')};
}

.p-select.p-invalid {
    border-color: ${dt('select.invalid.border.color')};
}

.p-select.p-disabled {
    opacity: 1;
    background: ${dt('select.disabled.background')};
}

.p-select-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: ${dt('select.clear.icon.color')};
    right: ${dt('select.dropdown.width')};
}

.p-select-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${dt('select.dropdown.color')};
    width: ${dt('select.dropdown.width')};
    border-top-right-radius: ${dt('select.border.radius')};
    border-bottom-right-radius: ${dt('select.border.radius')};
}

.p-select-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: ${dt('select.padding.y')} ${dt('select.padding.x')};
    text-overflow: ellipsis;
    cursor: pointer;
    color: ${dt('select.color')};
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-select-label.p-placeholder {
    color: ${dt('select.placeholder.color')};
}

.p-select:has(.p-select-clear-icon) .p-select-label {
    padding-right: calc(1 + ${dt('select.padding.x')});
}

.p-select.p-disabled .p-select-label {
    color: ${dt('select.disabled.color')};
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
    background: ${dt('select.overlay.background')};
    color: ${dt('select.overlay.color')};
    border: 1px solid ${dt('select.overlay.border.color')};
    border-radius: ${dt('select.overlay.border.radius')};
    box-shadow: ${dt('select.overlay.shadow')};
}

.p-select-header {
    padding: ${dt('select.list.header.padding')};
}

.p-select-filter {
    width: 100%;
}

.p-select-list-container {
    overflow: auto;
}

.p-select-option-group {
    cursor: auto;
    margin: 0;
    padding: ${dt('select.option.group.padding')};
    background: ${dt('select.option.group.background')};
    color: ${dt('select.option.group.color')};
    font-weight: ${dt('select.option.group.font.weight')};
}

.p-select-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${dt('select.list.padding')};
    gap: ${dt('select.list.gap')};
    display: flex;
    flex-direction: column;
}

.p-select-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${dt('select.option.padding')};
    border: 0 none;
    color: ${dt('select.option.color')};
    background: transparent;
    transition: background ${dt('select.transition.duration')}, color ${dt('select.transition.duration')}, border-color ${dt('select.transition.duration')},
            box-shadow ${dt('select.transition.duration')}, outline-color ${dt('select.transition.duration')};
    border-radius: ${dt('select.option.border.radius')};
}

.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
    background: ${dt('select.option.focus.background')};
    color: ${dt('select.option.focus.color')};
}

.p-select-option.p-select-option-selected {
    background: ${dt('select.option.selected.background')};
    color: ${dt('select.option.selected.color')};
}

.p-select-option.p-select-option-selected.p-focus {
    background: ${dt('select.option.selected.focus.background')};
    color: ${dt('select.option.selected.focus.color')};
}

.p-select-option-check-icon {
    position: relative;
    margin-inline-start: ${dt('select.checkmark.gutter.start')};
    margin-inline-end: ${dt('select.checkmark.gutter.end')};
    color: ${dt('select.checkmark.color')};
}

.p-select-empty-message {
    padding: ${dt('select.empty.message.padding')};
}

.p-fluid .p-select {
    display: flex;
}

.p-fluid .p-select-label {
    width: 1%;
}
`;

const classes = {
    root: ({ instance, props, state }) => [
        'p-select p-component p-inputwrapper',
        {
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled' || instance.$primevue.config.inputVariant === 'filled',
            'p-focus': state.focused,
            'p-inputwrapper-filled': instance.hasSelectedOption,
            'p-inputwrapper-focus': state.focused || state.overlayVisible,
            'p-select-open': state.overlayVisible
        }
    ],
    label: ({ instance, props }) => [
        'p-select-label',
        {
            'p-placeholder': !props.editable && instance.label === props.placeholder,
            'p-select-label-empty': !props.editable && !instance.$slots['value'] && (instance.label === 'p-emptylabel' || instance.label.length === 0)
        }
    ],
    clearIcon: 'p-select-clear-icon',
    dropdown: 'p-select-dropdown',
    loadingicon: 'p-select-loading-icon',
    dropdownIcon: 'p-select-dropdown-icon',
    overlay: 'p-select-overlay p-component',
    header: 'p-select-header',
    pcFilter: 'p-select-filter',
    listContainer: 'p-select-list-container',
    list: 'p-select-list',
    optionGroup: 'p-select-option-group',
    optionGroupLabel: 'p-select-option-group-label',
    option: ({ instance, props, state, option, focusedOption }) => [
        'p-select-option',
        {
            'p-select-option-selected': instance.isSelected(option) && props.highlightOnSelect,
            'p-focus': state.focusedOptionIndex === focusedOption,
            'p-disabled': instance.isOptionDisabled(option)
        }
    ],
    optionLabel: 'p-select-option-label',
    optionCheckIcon: 'p-select-option-check-icon',
    optionBlankIcon: 'p-select-option-blank-icon',
    emptyMessage: 'p-select-empty-message'
};

export default BaseStyle.extend({
    name: 'select',
    theme,
    classes
});
