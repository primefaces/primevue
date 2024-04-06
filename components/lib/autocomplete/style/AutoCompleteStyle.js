import BaseStyle from 'primevue/base/style';
import { ObjectUtils } from 'primevue/utils';

const inlineStyles = {
    root: { position: 'relative' }
};

const classes = {
    root: ({ instance, props }) => [
        'p-autocomplete p-component p-inputwrapper',
        {
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-focus': instance.focused,
            'p-inputwrapper-filled': props.modelValue || ObjectUtils.isNotEmpty(instance.inputValue),
            'p-inputwrapper-focus': instance.focused,
            'p-autocomplete-open': instance.overlayVisible
        }
    ],
    input: 'p-autocomplete-input',
    container: ({ props, instance }) => [
        'p-autocomplete-chip-group',
        {
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
        }
    ],
    token: ({ instance, i }) => [
        'p-autocomplete-chip',
        {
            'p-focus': instance.focusedMultipleOptionIndex === i
        }
    ],
    tokenLabel: 'p-autocomplete-chip-label',
    removeTokenIcon: 'p-autocomplete-chip-icon',
    inputToken: 'p-autocomplete-input-chip',
    loadingIcon: 'p-autocomplete-loader',
    dropdownButton: 'p-autocomplete-dropdown',
    panel: ({ instance }) => [
        'p-autocomplete-overlay p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    list: 'p-autocomplete-list',
    itemGroup: 'p-autocomplete-item-group',
    item: ({ instance, option, i, getItemOptions }) => [
        'p-autocomplete-item',
        {
            'p-autocomplete-item-selected': instance.isSelected(option),
            'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(i, getItemOptions),
            'p-disabled': instance.isOptionDisabled(option)
        }
    ],
    emptyMessage: 'p-autocomplete-empty-message'
};

export default BaseStyle.extend({
    name: 'autocomplete',
    classes,
    inlineStyles
});
