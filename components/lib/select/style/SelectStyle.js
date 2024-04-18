import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props, state }) => [
        'p-select p-component p-inputwrapper',
        {
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled',
            'p-focus': state.focused,
            'p-inputwrapper-filled': instance.hasSelectedOption,
            'p-inputwrapper-focus': state.focused || state.overlayVisible,
            'p-select-open': state.overlayVisible
        }
    ],
    input: ({ instance, props }) => [
        'p-select-label',
        {
            'p-placeholder': !props.editable && instance.label === props.placeholder,
            'p-select-label-empty': !props.editable && !instance.$slots['value'] && (instance.label === 'p-emptylabel' || instance.label.length === 0)
        }
    ],
    clearIcon: 'p-select-clear-icon',
    trigger: 'p-select-dropdown',
    loadingicon: 'p-select-loading-icon',
    dropdownIcon: 'p-select-dropdown-icon',
    panel: ({ instance }) => [
        'p-select-overlay p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    header: 'p-select-header',
    filterContainer: 'p-select-filter-container',
    filterInput: 'p-select-filter',
    filterIcon: 'p-select-filter-icon',
    wrapper: 'p-select-list-container',
    list: 'p-select-list',
    itemGroup: 'p-select-option-group',
    itemGroupLabel: 'p-select-option-group-label',
    item: ({ instance, props, state, option, focusedOption }) => [
        'p-select-option',
        {
            'p-select-option-selected': instance.isSelected(option) && props.highlightOnSelect,
            'p-focus': state.focusedOptionIndex === focusedOption,
            'p-disabled': instance.isOptionDisabled(option)
        }
    ],
    itemLabel: 'p-select-option-label',
    checkIcon: 'p-select-option-check-icon',
    blankIcon: 'p-select-option-blank-icon',
    emptyMessage: 'p-select-empty-message'
};

export default BaseStyle.extend({
    name: 'select',
    classes
});
