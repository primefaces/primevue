import BaseStyle from 'primevue/base/style';
import { ObjectUtils } from 'primevue/utils';

const theme = ({ dt }) => `
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: 0.75rem;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
    right: 3.25rem;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-autocomplete-dropdown {
    cursor: pointer;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: ${dt('autocomplete.dropdown.width')};
    border-top-right-radius: ${dt('rounded.base')};
    border-bottom-right-radius: ${dt('rounded.base')};
    background: ${dt('autocomplete.dropdown.background')};
    border: 1px solid ${dt('autocomplete.dropdown.border.color')};
    border-left: 0 none;
    background: ${dt('autocomplete.dropdown.background')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-autocomplete-dropdown:not(:disabled):hover {
    background: ${dt('autocomplete.dropdown.hover.background')};
    border-color: ${dt('autocomplete.dropdown.hover.border.color')};
    background: ${dt('autocomplete.dropdown.hover.background')};
}

.p-autocomplete-dropdown:not(:disabled):active {
    background: ${dt('autocomplete.dropdown.active.background')};
    border-color: ${dt('autocomplete.dropdown.active.border.color')};
    background: ${dt('autocomplete.dropdown.active.background')};
}

.p-autocomplete-dropdown:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('button.primary.background')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-autocomplete .p-autocomplete-overlay {
    min-width: 100%;
}

.p-autocomplete-overlay {
    position: absolute;
    overflow: auto;
    top: 0;
    left: 0;
    background: ${dt('autocomplete.overlay.background')};
    color: ${dt('autocomplete.overlay.color')};
    border: 1px solid ${dt('autocomplete.overlay.border.color')};
    border-radius: ${dt('rounded.base')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-autocomplete-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: 0.25rem 0.25rem;
}

.p-autocomplete-option {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    margin: 2px 0;
    padding: 0.5rem 0.75rem;
    border: 0 none;
    color: ${dt('autocomplete.item.color')};
    background: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.sm')};
}

.p-autocomplete-option:first-child {
    margin-top: 0;
}

.p-autocomplete-option:last-child {
    margin-bottom: 0;
}

.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
    background: ${dt('autocomplete.item.focus.background')};
    color: ${dt('autocomplete.item.focus.color')};
}

.p-autocomplete-option-selected {
    background: ${dt('autocomplete.item.selected.background')};
    color: ${dt('autocomplete.item.selected.color')};
}

.p-autocomplete-option-selected.p-focus {
    background: ${dt('autocomplete.item.selected.focus.background')};
    color: ${dt('autocomplete.item.selected.focus.color')};
}

.p-autocomplete-option-group {
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: ${dt('autocomplete.item.group.color')};
    background: ${dt('autocomplete.item.group.background')};
    font-weight: 600;
}

.p-autocomplete-input-multiple {
    margin: 0;
    padding: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0.25rem 0.25rem;
    gap: 0.25rem;
    color: ${dt('autocomplete.input.multiple.color')};
    background: ${dt('autocomplete.input.multiple.background')};
    border: 1px solid ${dt('autocomplete.input.multiple.border.color')};
    border-radius: ${dt('rounded.base')};
    width: 100%;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
    box-shadow: ${dt('autocomplete.input.multiple.box.shadow')};
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
    border-color: ${dt('autocomplete.input.multiple.hover.border.color')};
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: ${dt('autocomplete.input.multiple.focus.border.color')};
    outline: 0 none;
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    border-color: ${dt('autocomplete.input.multiple.invalid.border.color')};
}

.p-variant-filled.p-autocomplete-input-multiple {
    background: ${dt('autocomplete.input.multiple.filled.background')};
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {
    background: ${dt('autocomplete.input.multiple.filled.focus.background')};
}

.p-autocomplete.p-disabled .p-autocomplete-input-multiple {
    opacity: 1;
    background: ${dt('autocomplete.input.multiple.disabled.background')};
    color: ${dt('autocomplete.input.multiple.disabled.color')};
}

.p-autocomplete-input-chip {
    flex: 1 1 auto;
    display: inline-flex;
    padding: 0.25rem 0;
    margin-left: 0.5rem;
}

.p-autocomplete-input-chip input {
    border: 0 none;
    outline: 0 none;
    background: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
}

.p-autocomplete-input-chip input::placeholder {
    color: ${dt('autocomplete.input.multiple.placeholder.color')};
}

.p-fluid .p-autocomplete {
    display: flex;
}

.p-fluid .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    width: 1%;
}
`;

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
        'p-autocomplete-input-multiple',
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
    itemGroup: 'p-autocomplete-option-group',
    item: ({ instance, option, i, getItemOptions }) => [
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
    theme,
    classes,
    inlineStyles
});
