import BaseStyle from 'primevue/base/style';

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'p-treeselect p-component p-inputwrapper',
        {
            'p-treeselect-display-chip': props.display === 'chip',
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-focus': instance.focused,
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled',
            'p-inputwrapper-filled': !instance.emptyValue,
            'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
            'p-treeselect-open': instance.overlayVisible
        }
    ],
    labelContainer: 'p-treeselect-label-container',
    label: ({ instance, props }) => [
        'p-treeselect-label',
        {
            'p-placeholder': instance.label === props.placeholder,
            'p-treeselect-label-empty': !props.placeholder && instance.emptyValue
        }
    ],
    token: 'p-treeselect-chip',
    tokenLabel: 'p-treeselect-chip-label',
    trigger: 'p-treeselect-dropdown',
    triggerIcon: 'p-treeselect-dropdown-icon',
    panel: ({ instance }) => [
        'p-treeselect-overlay p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    wrapper: 'p-treeselect-tree-container',
    emptyMessage: 'p-treeselect-empty-message'
};

export default BaseStyle.extend({
    name: 'treeselect',
    classes,
    inlineStyles
});
