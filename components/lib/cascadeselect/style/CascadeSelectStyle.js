import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-cascadeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${dt('cascadeselect.background')};
    border: 1px solid ${dt('cascadeselect.border.color')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('border.radius.md')};
    outline-color: transparent;
    box-shadow: ${dt('cascadeselect.shadow')};
}

.p-cascadeselect:not(.p-disabled):hover {
    border-color: ${dt('cascadeselect.hover.border.color')};
}

.p-cascadeselect:not(.p-disabled).p-focus {
    border-color: ${dt('cascadeselect.focus.border.color')};
    outline: 0 none;
}

.p-cascadeselect.p-variant-filled {
    background: ${dt('cascadeselect.filled.background')};
}

.p-cascadeselect.p-variant-filled.p-focus {
    background: ${dt('cascadeselect.filled.focus.background')};
}

.p-cascadeselect.p-invalid {
    border-color: ${dt('cascadeselect.invalid.border.color')};
}

.p-cascadeselect.p-disabled {
    opacity: 1;
    background: ${dt('cascadeselect.disabled.background')};
}

.p-cascadeselect-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${dt('cascadeselect.dropdown.color')};
    width: 2.5rem;
    border-top-right-radius: ${dt('border.radius.md')};
    border-bottom-right-radius: ${dt('border.radius.md')};
}

.p-cascadeselect-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: 0.5rem 0.75rem;
    text-overflow: ellipsis;
    cursor: pointer;
    color: ${dt('cascadeselect.color')};
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-cascadeselect-label.p-placeholder {
    color: ${dt('cascadeselect.placeholder.color')};
}

.p-cascadeselect-clearable .p-cascadeselect-label {
    padding-right: 1.75rem;
}

.p-cascadeselect.p-disabled .p-cascadeselect-label {
    color: ${dt('cascadeselect.disabled.color')};
}

.p-cascadeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-fluid .p-cascadeselect {
    display: flex;
}

.p-fluid .p-cascadeselect .p-cascadeselect-label {
    width: 1%;
}

.p-cascadeselect-overlay {
    background: ${dt('cascadeselect.overlay.background')};
    border: 1px solid ${dt('cascadeselect.overlay.border.color')};
    border-radius: ${dt('border.radius.md')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    color: ${dt('cascadeselect.overlay.color')};
}

.p-cascadeselect .p-cascadeselect-overlay {
    min-width: 100%;
}

.p-cascadeselect-item-list {
    display: none;
    min-width: 100%;
    position: absolute;
    z-index: 1;
}

.p-cascadeselect-list {
    list-style-type: none;
    margin: 0;
    min-width: 100%;
    padding: 0.25rem 0.25rem;
}

.p-cascadeselect-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    margin: 2px 0;
    border: 0 none;
    color: ${dt('cascadeselect.option.color')};
    background: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('border.radius.sm')};
}

.p-cascadeselect-item:first-child {
    margin-top: 0;
}

.p-cascadeselect-item:last-child {
    margin-bottom: 0;
}

.p-cascadeselect-item:not(.p-cascadeselect-item-selected):not(.p-disabled).p-focus {
    background: ${dt('cascadeselect.option.focus.background')};
    color: ${dt('cascadeselect.option.focus.color')};
}

.p-cascadeselect-item:not(.p-cascadeselect-item-selected):not(.p-disabled).p-focus .p-cascadeselect-group-icon {
    color: ${dt('cascadeselect.option.icon.focus.color')};
}

.p-cascadeselect-item-selected {
    background: ${dt('cascadeselect.option.selected.background')};
    color: ${dt('cascadeselect.option.selected.color')};
}

.p-cascadeselect-item-selected.p-focus {
    background: ${dt('cascadeselect.option.selected.focus.background')};
    color: ${dt('cascadeselect.option.selected.focus.color')};
}

.p-cascadeselect-item-active {
    overflow: visible;
    background: ${dt('cascadeselect.option.focus.background')};
    color: ${dt('cascadeselect.option.focus.color')};
}

.p-cascadeselect-item-active > .p-cascadeselect-item-list {
    display: block;
    left: 100%;
    top: 0;
}

.p-cascadeselect-item-content {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    padding: 0.5rem 0.75rem;
}

.p-cascadeselect-group-icon {
    margin-left: auto;
    font-size: 0.875rem;
    color: ${dt('cascadeselect.option.icon.color')};
}
`;

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
    dropdown: 'p-cascadeselect-dropdown',
    loadingIcon: 'p-cascadeselect-loading-icon',
    dropdownIcon: 'p-cascadeselect-dropdown-icon',
    overlay: ({ instance }) => [
        'p-cascadeselect-overlay p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    listContainer: 'p-cascadeselect-list-container',
    list: 'p-cascadeselect-list',
    item: ({ instance, processedOption }) => [
        'p-cascadeselect-item',
        {
            'p-cascadeselect-item-active': instance.isOptionActive(processedOption),
            'p-cascadeselect-item-selected': instance.isOptionSelected(processedOption),
            'p-focus': instance.isOptionFocused(processedOption),
            'p-disabled': instance.isOptionDisabled(processedOption)
        }
    ],
    itemContent: 'p-cascadeselect-item-content',
    itemText: 'p-cascadeselect-item-text',
    groupIcon: 'p-cascadeselect-group-icon',
    itemList: 'p-cascadeselect-overlay p-cascadeselect-item-list'
};

export default BaseStyle.extend({
    name: 'cascadeselect',
    theme,
    classes,
    inlineStyles
});
