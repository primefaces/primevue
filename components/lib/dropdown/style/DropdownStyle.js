import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props, state }) => [
        'p-dropdown p-component p-inputwrapper',
        {
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled',
            'p-dropdown-clearable': props.showClear,
            'p-focus': state.focused,
            'p-inputwrapper-filled': instance.hasSelectedOption,
            'p-inputwrapper-focus': state.focused || state.overlayVisible,
            'p-overlay-open': state.overlayVisible
        }
    ],
    input: ({ instance, props }) => [
        'p-dropdown-label p-inputtext',
        {
            'p-placeholder': !props.editable && instance.label === props.placeholder,
            'p-dropdown-label-empty': !props.editable && !instance.$slots['value'] && (instance.label === 'p-emptylabel' || instance.label.length === 0)
        }
    ],
    clearIcon: 'p-dropdown-clear-icon',
    trigger: 'p-dropdown-trigger',
    loadingicon: 'p-dropdown-trigger-icon',
    dropdownIcon: 'p-dropdown-trigger-icon',
    panel: ({ props, instance }) => [
        'p-dropdown-panel p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    header: 'p-dropdown-header',
    filterContainer: 'p-dropdown-filter-container',
    filterInput: ({ props, instance }) => [
        'p-dropdown-filter p-inputtext p-component',
        {
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
        }
    ],
    filterIcon: 'p-dropdown-filter-icon',
    wrapper: 'p-dropdown-items-wrapper',
    list: 'p-dropdown-items',
    itemGroup: 'p-dropdown-item-group',
    itemGroupLabel: 'p-dropdown-item-group-label',
    item: ({ instance, props, state, option, focusedOption }) => [
        'p-dropdown-item',
        {
            'p-highlight': instance.isSelected(option) && props.highlightOnSelect,
            'p-focus': state.focusedOptionIndex === focusedOption,
            'p-disabled': instance.isOptionDisabled(option)
        }
    ],
    itemLabel: 'p-dropdown-item-label',
    checkIcon: 'p-dropdown-check-icon',
    blankIcon: 'p-dropdown-blank-icon',
    emptyMessage: 'p-dropdown-empty-message'
};

export default BaseStyle.extend({
    name: 'dropdown',
    classes
});
