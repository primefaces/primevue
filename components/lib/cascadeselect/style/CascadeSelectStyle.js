import BaseStyle from 'primevue/base/style';

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'p-cascadeselect p-component p-inputwrapper',
        {
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled',
            'p-focus': instance.focused,
            'p-inputwrapper-filled': props.modelValue,
            'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
            'p-cascadeselect-open': instance.overlayVisible
        }
    ],
    label: ({ instance, props }) => [
        'p-cascadeselect-label',
        {
            'p-placeholder': instance.label === props.placeholder,
            'p-cascadeselect-label-empty': !instance.$slots['value'] && (instance.label === 'p-emptylabel' || instance.label.length === 0)
        }
    ],
    dropdownButton: 'p-cascadeselect-dropdown',
    loadingIcon: 'p-cascadeselect-loading-icon',
    dropdownIcon: 'p-cascadeselect-dropdown-icon',
    panel: ({ instance }) => [
        'p-cascadeselect-overlay p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    wrapper: 'p-cascadeselect-list-container',
    rootList: 'p-cascadeselect-list',
    item: ({ instance, processedOption }) => [
        'p-cascadeselect-item',
        {
            'p-cascadeselect-item-active': instance.isOptionActive(processedOption),
            'p-cascadeselect-item-selected': instance.isOptionSelected(processedOption),
            'p-focus': instance.isOptionFocused(processedOption),
            'p-disabled': instance.isOptionDisabled(processedOption)
        }
    ],
    content: 'p-cascadeselect-item-content',
    text: 'p-cascadeselect-item-text',
    groupIcon: 'p-cascadeselect-group-icon',
    sublist: 'p-cascadeselect-overlay p-cascadeselect-item-list'
};

export default BaseStyle.extend({
    name: 'cascadeselect',
    classes,
    inlineStyles
});
