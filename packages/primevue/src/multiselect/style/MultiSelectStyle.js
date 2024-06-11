import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-multiselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${dt('multiselect.background')};
    border: 1px solid ${dt('multiselect.border.color')};
    transition: background ${dt('multiselect.transition.duration')}, color ${dt('multiselect.transition.duration')}, border-color ${dt('multiselect.transition.duration')}, outline-color ${dt('multiselect.transition.duration')}, box-shadow ${dt(
        'multiselect.transition.duration'
    )};
    border-radius: ${dt('multiselect.border.radius')};
    outline-color: transparent;
    box-shadow: ${dt('multiselect.shadow')};
}

.p-multiselect:not(.p-disabled):hover {
    border-color: ${dt('multiselect.hover.border.color')};
}

.p-multiselect:not(.p-disabled).p-focus {
    border-color: ${dt('multiselect.focus.border.color')};
    box-shadow: ${dt('multiselect.focus.ring.shadow')};
    outline: ${dt('multiselect.focus.ring.width')} ${dt('multiselect.focus.ring.style')} ${dt('multiselect.focus.ring.color')};
    outline-offset: ${dt('multiselect.focus.ring.offset')};
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
    color: ${dt('multiselect.dropdown.color')};
    width: ${dt('multiselect.dropdown.width')};
    border-top-right-radius: ${dt('multiselect.border.radius')};
    border-bottom-right-radius: ${dt('multiselect.border.radius')};
}

.p-multiselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-multiselect-label {
    display: flex;
    align-items-center;
    gap: calc(${dt('multiselect.padding.y')} / 2);
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: ${dt('multiselect.padding.y')} ${dt('multiselect.padding.x')};
    color: ${dt('multiselect.color')};
}

.p-multiselect-label.p-placeholder {
    color: ${dt('multiselect.placeholder.color')};
}

.p-multiselect.p-disabled .p-multiselect-label {
    color: ${dt('multiselect.disabled.color')};
}

.p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
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
    border-radius: ${dt('multiselect.overlay.border.radius')};
    box-shadow: ${dt('multiselect.overlay.shadow')};
}

.p-multiselect-header {
    display: flex;
    align-items: center;
    padding: ${dt('multiselect.list.header.padding')};
}

.p-multiselect-header .p-checkbox {
    margin-right: ${dt('multiselect.option.gap')};
}

.p-multiselect-filter-container {
    flex: 1 1 auto;
}

.p-multiselect-filter {
    width: 100%;
}

.p-multiselect-list-container {
    overflow: auto;
}

.p-multiselect-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${dt('multiselect.list.padding')};
    display: flex;
    flex-direction: column;
    gap: ${dt('multiselect.list.gap')}
}

.p-multiselect-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: ${dt('multiselect.option.gap')};
    padding: ${dt('multiselect.option.padding')};
    border: 0 none;
    color: ${dt('multiselect.option.color')};
    background: transparent;
    transition: background ${dt('multiselect.transition.duration')}, color ${dt('multiselect.transition.duration')}, border-color ${dt('multiselect.transition.duration')}, box-shadow ${dt('multiselect.transition.duration')}, outline-color ${dt(
        'multiselect.transition.duration'
    )};
    border-radius: ${dt('multiselect.option.border.radius')}
}

.p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {
    background: ${dt('multiselect.option.focus.background')};
    color: ${dt('multiselect.option.focus.color')};
}

.p-multiselect-option.p-multiselect-option-selected {
    background: ${dt('multiselect.option.selected.background')};
    color: ${dt('multiselect.option.selected.color')};
}

.p-multiselect-option.p-multiselect-option-selected.p-focus {
    background: ${dt('multiselect.option.selected.focus.background')};
    color: ${dt('multiselect.option.selected.focus.color')};
}

.p-multiselect-option-group {
    cursor: auto;
    margin: 0;
    padding: ${dt('multiselect.option.group.padding')};
    background: ${dt('multiselect.option.group.background')};
    color: ${dt('multiselect.option.group.color')};
    font-weight: ${dt('multiselect.option.group.font.weight')};
}

.p-multiselect-empty-message {
    padding: ${dt('multiselect.empty.message.padding')};
}

.p-multiselect-label .p-chip {
    padding-top: calc(${dt('multiselect.padding.y')} / 2);
    padding-bottom: calc(${dt('multiselect.padding.y')} / 2);
    border-radius: ${dt('multiselect.chip.border.radius')};
}

.p-multiselect-label:has(.p-chip) {
    padding: calc(${dt('multiselect.padding.y')} / 2) calc(${dt('multiselect.padding.x')} / 2);
}

.p-fluid .p-multiselect {
    display: flex;
}
`;

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'p-multiselect p-component p-inputwrapper',
        {
            'p-multiselect-display-chip': props.display === 'chip',
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled' || instance.$primevue.config.inputVariant === 'filled',
            'p-focus': instance.focused,
            'p-inputwrapper-filled': props.modelValue && props.modelValue.length,
            'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
            'p-multiselect-open': instance.overlayVisible
        }
    ],
    labelContainer: 'p-multiselect-label-container',
    label: ({ instance, props }) => [
        'p-multiselect-label',
        {
            'p-placeholder': instance.label === props.placeholder,
            'p-multiselect-label-empty': !props.placeholder && (!props.modelValue || props.modelValue.length === 0)
        }
    ],
    chipItem: 'p-multiselect-chip-item',
    pcChip: 'p-multiselect-chip',
    chipIcon: 'p-multiselect-chip-icon',
    dropdown: 'p-multiselect-dropdown',
    loadingIcon: 'p-multiselect-loading-icon',
    dropdownIcon: 'p-multiselect-dropdown-icon',
    overlay: 'p-multiselect-overlay p-component',
    header: 'p-multiselect-header',
    pcFilterContainer: 'p-multiselect-filter-container',
    pcFilter: 'p-multiselect-filter',
    listContainer: 'p-multiselect-list-container',
    list: 'p-multiselect-list',
    optionGroup: 'p-multiselect-option-group',
    option: ({ instance, option, index, getItemOptions, props }) => [
        'p-multiselect-option',
        {
            'p-multiselect-option-selected': instance.isSelected(option) && props.highlightOnSelect,
            'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
            'p-disabled': instance.isOptionDisabled(option)
        }
    ],
    emptyMessage: 'p-multiselect-empty-message'
};

export default BaseStyle.extend({
    name: 'multiselect',
    theme,
    classes,
    inlineStyles
});
