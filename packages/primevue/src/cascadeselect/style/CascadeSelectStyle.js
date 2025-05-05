import { style } from '@primeuix/styles/cascadeselect';
import BaseStyle from '@primevue/core/base/style';

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'p-cascadeselect p-component p-inputwrapper',
        {
            'p-cascadeselect-mobile': instance.queryMatches,
            'p-disabled': props.disabled,
            'p-invalid': instance.$invalid,
            'p-variant-filled': instance.$variant === 'filled',
            'p-focus': instance.focused,
            'p-inputwrapper-filled': instance.$filled,
            'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
            'p-cascadeselect-open': instance.overlayVisible,
            'p-cascadeselect-fluid': instance.$fluid,
            'p-cascadeselect-sm p-inputfield-sm': props.size === 'small',
            'p-cascadeselect-lg p-inputfield-lg': props.size === 'large'
        }
    ],
    label: ({ instance, props }) => [
        'p-cascadeselect-label',
        {
            'p-placeholder': instance.label === props.placeholder,
            'p-cascadeselect-label-empty': !instance.$slots['value'] && (instance.label === 'p-emptylabel' || instance.label?.length === 0)
        }
    ],
    clearIcon: 'p-cascadeselect-clear-icon',
    dropdown: 'p-cascadeselect-dropdown',
    loadingIcon: 'p-cascadeselect-loading-icon',
    dropdownIcon: 'p-cascadeselect-dropdown-icon',
    overlay: ({ instance }) => [
        'p-cascadeselect-overlay p-component',
        {
            'p-cascadeselect-mobile-active': instance.queryMatches
        }
    ],
    listContainer: 'p-cascadeselect-list-container',
    list: 'p-cascadeselect-list',
    option: ({ instance, processedOption }) => [
        'p-cascadeselect-option',
        {
            'p-cascadeselect-option-active': instance.isOptionActive(processedOption),
            'p-cascadeselect-option-selected': instance.isOptionSelected(processedOption),
            'p-focus': instance.isOptionFocused(processedOption),
            'p-disabled': instance.isOptionDisabled(processedOption)
        }
    ],
    optionContent: 'p-cascadeselect-option-content',
    optionText: 'p-cascadeselect-option-text',
    groupIconContainer: 'p-cascadeselect-group-icon-container',
    groupIcon: 'p-cascadeselect-group-icon',
    optionList: 'p-cascadeselect-overlay p-cascadeselect-option-list'
};

export default BaseStyle.extend({
    name: 'cascadeselect',
    style,
    classes,
    inlineStyles
});
