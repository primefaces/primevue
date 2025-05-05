import { style } from '@primeuix/styles/multiselect';
import BaseStyle from '@primevue/core/base/style';

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'p-multiselect p-component p-inputwrapper',
        {
            'p-multiselect-display-chip': props.display === 'chip',
            'p-disabled': props.disabled,
            'p-invalid': instance.$invalid,
            'p-variant-filled': instance.$variant === 'filled',
            'p-focus': instance.focused,
            'p-inputwrapper-filled': instance.$filled,
            'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
            'p-multiselect-open': instance.overlayVisible,
            'p-multiselect-fluid': instance.$fluid,
            'p-multiselect-sm p-inputfield-sm': props.size === 'small',
            'p-multiselect-lg p-inputfield-lg': props.size === 'large'
        }
    ],
    labelContainer: 'p-multiselect-label-container',
    label: ({ instance, props }) => [
        'p-multiselect-label',
        {
            'p-placeholder': instance.label === props.placeholder,
            'p-multiselect-label-empty': !props.placeholder && !instance.$filled
        }
    ],
    clearIcon: 'p-multiselect-clear-icon',
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
    style,
    classes,
    inlineStyles
});
