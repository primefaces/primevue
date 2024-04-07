import BaseStyle from 'primevue/base/style';

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
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled',
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
    token: 'p-multiselect-chip',
    tokenLabel: 'p-multiselect-chip-label',
    removeTokenIcon: 'p-multiselect-chip-icon',
    trigger: 'p-multiselect-dropdown',
    loadingIcon: 'p-multiselect-loading-icon',
    dropdownIcon: 'p-multiselect-dropdown-icon',
    panel: ({ instance }) => [
        'p-multiselect-overlay p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    header: 'p-multiselect-header',
    filterContainer: 'p-multiselect-filter-container',
    filterInput: 'p-multiselect-filter',
    filterIcon: 'p-multiselect-filter-icon',
    wrapper: 'p-multiselect-list-container',
    list: 'p-multiselect-list',
    itemGroup: 'p-multiselect-option-group',
    item: ({ instance, option, index, getItemOptions, props }) => [
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
    classes,
    inlineStyles
});
