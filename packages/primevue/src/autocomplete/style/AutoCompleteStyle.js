import { style } from '@primeuix/styles/autocomplete';
import { isNotEmpty } from '@primeuix/utils/object';
import BaseStyle from '@primevue/core/base/style';

const inlineStyles = {
    root: { position: 'relative' }
};

const classes = {
    root: ({ instance }) => [
        'p-autocomplete p-component p-inputwrapper',
        {
            'p-invalid': instance.$invalid,
            'p-focus': instance.focused,
            'p-inputwrapper-filled': instance.$filled || isNotEmpty(instance.inputValue),
            'p-inputwrapper-focus': instance.focused,
            'p-autocomplete-open': instance.overlayVisible,
            'p-autocomplete-fluid': instance.$fluid,
            'p-autocomplete-clearable': instance.isClearIconVisible
        }
    ],
    pcInputText: 'p-autocomplete-input',
    inputMultiple: ({ instance, props }) => [
        'p-autocomplete-input-multiple',
        {
            'p-variant-filled': instance.$variant === 'filled',
            'p-disabled': props.disabled
        }
    ],
    clearIcon: 'p-autocomplete-clear-icon',
    chipItem: ({ instance, i }) => [
        'p-autocomplete-chip-item',
        {
            'p-focus': instance.focusedMultipleOptionIndex === i
        }
    ],
    pcChip: 'p-autocomplete-chip',
    chipIcon: 'p-autocomplete-chip-icon',
    inputChip: 'p-autocomplete-input-chip',
    loader: 'p-autocomplete-loader',
    dropdown: 'p-autocomplete-dropdown',
    overlay: 'p-autocomplete-overlay p-component',
    listContainer: 'p-autocomplete-list-container',
    list: 'p-autocomplete-list',
    optionGroup: 'p-autocomplete-option-group',
    option: ({ instance, option, i, getItemOptions }) => [
        'p-autocomplete-option',
        {
            'p-autocomplete-option-selected': instance.isSelected(option),
            'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(i, getItemOptions),
            'p-disabled': instance.isOptionDisabled(option)
        }
    ],
    emptyMessage: 'p-autocomplete-empty-message'
};

export default BaseStyle.extend({
    name: 'autocomplete',
    style,
    classes,
    inlineStyles
});
