import { style } from '@primeuix/styles/select';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance, props, state }) => [
        'p-select p-component p-inputwrapper',
        {
            'p-disabled': props.disabled,
            'p-invalid': instance.$invalid,
            'p-variant-filled': instance.$variant === 'filled',
            'p-focus': state.focused,
            'p-inputwrapper-filled': instance.$filled,
            'p-inputwrapper-focus': state.focused || state.overlayVisible,
            'p-select-open': state.overlayVisible,
            'p-select-fluid': instance.$fluid,
            'p-select-sm p-inputfield-sm': props.size === 'small',
            'p-select-lg p-inputfield-lg': props.size === 'large'
        }
    ],
    label: ({ instance, props }) => [
        'p-select-label',
        {
            'p-placeholder': !props.editable && instance.label === props.placeholder,
            'p-select-label-empty': !props.editable && !instance.$slots['value'] && (instance.label === 'p-emptylabel' || instance.label?.length === 0)
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
    style,
    classes
});
