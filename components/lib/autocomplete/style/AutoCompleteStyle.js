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
            'p-autocomplete-dd': props.dropdown,
            'p-autocomplete-multiple': props.multiple,
            'p-inputwrapper-filled': props.modelValue || ObjectUtils.isNotEmpty(instance.inputValue),
            'p-inputwrapper-focus': instance.focused,
            'p-overlay-open': instance.overlayVisible
        }
    ],
    input: ({ props, instance }) => [
        'p-autocomplete-input p-inputtext p-component',
        {
            'p-autocomplete-dd-input': props.dropdown,
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
        }
    ],
    container: ({ props, instance }) => [
        'p-autocomplete-multiple-container p-component p-inputtext',
        {
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
        }
    ],
    token: ({ instance, i }) => ['p-autocomplete-token', { 'p-focus': instance.focusedMultipleOptionIndex === i }],
    tokenLabel: 'p-autocomplete-token-label',
    removeTokenIcon: 'p-autocomplete-token-icon',
    inputToken: 'p-autocomplete-input-token',
    loadingIcon: 'p-autocomplete-loader',
    dropdownButton: 'p-autocomplete-dropdown',
    panel: ({ props, instance }) => [
        'p-autocomplete-panel p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    list: 'p-autocomplete-items',
    itemGroup: 'p-autocomplete-item-group',
    item: ({ instance, option, i, getItemOptions }) => [
        'p-autocomplete-item',
        {
            'p-highlight': instance.isSelected(option),
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
