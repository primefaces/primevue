import { style } from '@primeuix/styles/treeselect';
import BaseStyle from '@primevue/core/base/style';

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'p-treeselect p-component p-inputwrapper',
        {
            'p-treeselect-display-chip': props.display === 'chip',
            'p-disabled': props.disabled,
            'p-invalid': instance.$invalid,
            'p-focus': instance.focused,
            'p-variant-filled': instance.$variant === 'filled',
            'p-inputwrapper-filled': instance.$filled,
            'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
            'p-treeselect-open': instance.overlayVisible,
            'p-treeselect-fluid': instance.$fluid,
            'p-treeselect-sm p-inputfield-sm': props.size === 'small',
            'p-treeselect-lg p-inputfield-lg': props.size === 'large'
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
    clearIcon: 'p-treeselect-clear-icon',
    chip: 'p-treeselect-chip-item',
    pcChip: 'p-treeselect-chip',
    dropdown: 'p-treeselect-dropdown',
    dropdownIcon: 'p-treeselect-dropdown-icon',
    panel: 'p-treeselect-overlay p-component',
    treeContainer: 'p-treeselect-tree-container',
    emptyMessage: 'p-treeselect-empty-message'
};

export default BaseStyle.extend({
    name: 'treeselect',
    style,
    classes,
    inlineStyles
});
