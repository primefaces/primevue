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
            'p-overlay-open': instance.overlayVisible
        }
    ],
    label: ({ instance, props }) => [
        'p-cascadeselect-label p-inputtext',
        {
            'p-placeholder': instance.label === props.placeholder,
            'p-cascadeselect-label-empty': !instance.$slots['value'] && (instance.label === 'p-emptylabel' || instance.label.length === 0)
        }
    ],
    dropdownButton: 'p-cascadeselect-trigger',
    loadingIcon: 'p-cascadeselect-trigger-icon',
    dropdownIcon: 'p-cascadeselect-trigger-icon',
    panel: ({ props, instance }) => [
        'p-cascadeselect-panel p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    wrapper: 'p-cascadeselect-items-wrapper',
    list: 'p-cascadeselect-panel p-cascadeselect-items',
    item: ({ instance, processedOption }) => [
        'p-cascadeselect-item',
        {
            'p-cascadeselect-item-group': instance.isOptionGroup(processedOption),
            'p-cascadeselect-item-active p-highlight': instance.isOptionActive(processedOption),
            'p-focus': instance.isOptionFocused(processedOption),
            'p-disabled': instance.isOptionDisabled(processedOption)
        }
    ],
    content: 'p-cascadeselect-item-content',
    text: 'p-cascadeselect-item-text',
    groupIcon: 'p-cascadeselect-group-icon',
    sublist: 'p-cascadeselect-sublist'
};

export default BaseStyle.extend({
    name: 'cascadeselect',
    classes,
    inlineStyles
});
