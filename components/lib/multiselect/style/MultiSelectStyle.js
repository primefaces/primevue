import BaseStyle from 'primevue/base/style';

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'p-multiselect p-component p-inputwrapper',
        {
            'p-multiselect-chip': props.display === 'chip',
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled',
            'p-focus': instance.focused,
            'p-inputwrapper-filled': props.modelValue && props.modelValue.length,
            'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
            'p-overlay-open': instance.overlayVisible
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
    token: 'p-multiselect-token',
    tokenLabel: 'p-multiselect-token-label',
    removeTokenIcon: 'p-multiselect-token-icon',
    trigger: 'p-multiselect-trigger',
    loadingIcon: 'p-multiselect-trigger-icon',
    dropdownIcon: 'p-multiselect-trigger-icon',
    panel: ({ props, instance }) => [
        'p-multiselect-panel p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    header: 'p-multiselect-header',
    filterContainer: 'p-multiselect-filter-container',
    filterInput: ({ props, instance }) => [
        'p-multiselect-filter p-inputtext p-component',
        {
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
        }
    ],
    filterIcon: 'p-multiselect-filter-icon',
    closeButton: 'p-multiselect-close p-link',
    closeIcon: 'p-multiselect-close-icon',
    wrapper: 'p-multiselect-items-wrapper',
    list: 'p-multiselect-items p-component',
    itemGroup: 'p-multiselect-item-group',
    item: ({ instance, option, index, getItemOptions, props }) => [
        'p-multiselect-item',
        {
            'p-highlight': instance.isSelected(option) && props.highlightOnSelect,
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
