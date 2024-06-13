import BaseStyle from '@primevue/core/base/style';
import { ObjectUtils } from '@primevue/core/utils';

const theme = ({ dt }) => `
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: ${dt('autocomplete.padding.x')};
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
    right: calc(${dt('autocomplete.dropdown.width')} + ${dt('autocomplete.padding.x')});
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
    border-top-right-radius: ${dt('autocomplete.dropdown.border.radius')};
    border-bottom-right-radius: ${dt('autocomplete.dropdown.border.radius')};
    background: ${dt('autocomplete.dropdown.background')};
    border: 1px solid ${dt('autocomplete.dropdown.border.color')};
    border-left: 0 none;
    color: ${dt('autocomplete.dropdown.color')};
    transition: background ${dt('autocomplete.transition.duration')}, color ${dt('autocomplete.transition.duration')}, border-color ${dt('autocomplete.transition.duration')}, outline-color ${dt('autocomplete.transition.duration')}, box-shadow ${dt(
        'autocomplete.transition.duration'
    )};
    outline-color: transparent;
}

.p-autocomplete-dropdown:not(:disabled):hover {
    background: ${dt('autocomplete.dropdown.hover.background')};
    border-color: ${dt('autocomplete.dropdown.hover.border.color')};
    color: ${dt('autocomplete.dropdown.hover.color')};
}

.p-autocomplete-dropdown:not(:disabled):active {
    background: ${dt('autocomplete.dropdown.active.background')};
    border-color: ${dt('autocomplete.dropdown.active.border.color')};
    color: ${dt('autocomplete.dropdown.active.color')};
}

.p-autocomplete-dropdown:focus-visible {
    box-shadow: ${dt('autocomplete.dropdown.focus.ring.shadow')};
    outline: ${dt('autocomplete.dropdown.focus.ring.width')} ${dt('autocomplete.dropdown.focus.ring.style')} ${dt('autocomplete.dropdown.focus.ring.color')};
    outline-offset: ${dt('autocomplete.dropdown.focus.ring.offset')};
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
    border-radius: ${dt('autocomplete.overlay.border.radius')};
    box-shadow: ${dt('autocomplete.overlay.shadow')};
}

.p-autocomplete-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: ${dt('autocomplete.list.gap')};
    padding: ${dt('autocomplete.list.padding')};
}

.p-autocomplete-option {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${dt('autocomplete.option.padding')};
    border: 0 none;
    color: ${dt('autocomplete.option.color')};
    background: transparent;
    transition: background ${dt('autocomplete.transition.duration')}, color ${dt('autocomplete.transition.duration')}, border-color ${dt('autocomplete.transition.duration')};
    border-radius: ${dt('autocomplete.option.border.radius')};
}

.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
    background: ${dt('autocomplete.option.focus.background')};
    color: ${dt('autocomplete.option.focus.color')};
}

.p-autocomplete-option-selected {
    background: ${dt('autocomplete.option.selected.background')};
    color: ${dt('autocomplete.option.selected.color')};
}

.p-autocomplete-option-selected.p-focus {
    background: ${dt('autocomplete.option.selected.focus.background')};
    color: ${dt('autocomplete.option.selected.focus.color')};
}

.p-autocomplete-option-group {
    margin: 0;
    padding: ${dt('autocomplete.option.group.padding')};
    color: ${dt('autocomplete.option.group.color')};
    background: ${dt('autocomplete.option.group.background')};
    font-weight: ${dt('autocomplete.option.group.font.weight')};
}

.p-autocomplete-input-multiple {
    margin: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(${dt('autocomplete.padding.y')} / 2) ${dt('autocomplete.padding.x')};
    gap: calc(${dt('autocomplete.padding.y')} / 2);
    color: ${dt('autocomplete.color')};
    background: ${dt('autocomplete.background')};
    border: 1px solid ${dt('autocomplete.border.color')};
    border-radius: ${dt('autocomplete.border.radius')};
    width: 100%;
    transition: background ${dt('autocomplete.transition.duration')}, color ${dt('autocomplete.transition.duration')}, border-color ${dt('autocomplete.transition.duration')}, outline-color ${dt('autocomplete.transition.duration')}, box-shadow ${dt(
        'autocomplete.transition.duration'
    )};
    outline-color: transparent;
    box-shadow: ${dt('autocomplete.shadow')};
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
    border-color: ${dt('autocomplete.hover.border.color')};
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: ${dt('autocomplete.focus.border.color')};
    box-shadow: ${dt('autocomplete.focus.ring.shadow')};
    outline: ${dt('autocomplete.focus.ring.width')} ${dt('autocomplete.focus.ring.style')} ${dt('autocomplete.focus.ring.color')};
    outline-offset: ${dt('autocomplete.focus.ring.offset')};
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    border-color: ${dt('autocomplete.invalid.border.color')};
}

.p-variant-filled.p-autocomplete-input-multiple {
    background: ${dt('autocomplete.filled.background')};
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {
    background: ${dt('autocomplete.filled.focus.background')};
}

.p-autocomplete.p-disabled .p-autocomplete-input-multiple {
    opacity: 1;
    background: ${dt('autocomplete.disabled.background')};
    color: ${dt('autocomplete.disabled.color')};
}

.p-autocomplete-chip.p-chip {
    padding-top: calc(${dt('autocomplete.padding.y')} / 2);
    padding-bottom: calc(${dt('autocomplete.padding.y')} / 2);
    border-radius: ${dt('autocomplete.chip.border.radius')};
}

.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
    padding-left: calc(${dt('autocomplete.padding.y')} / 2);
    padding-right: calc(${dt('autocomplete.padding.y')} / 2);
}

.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
    background: ${dt('inputchips.chip.focus.background')};
    color: ${dt('inputchips.chip.focus.color')};
}

.p-autocomplete-input-chip {
    flex: 1 1 auto;
    display: inline-flex;
    padding-top: calc(${dt('autocomplete.padding.y')} / 2);
    padding-bottom: calc(${dt('autocomplete.padding.y')} / 2);
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
    color: ${dt('autocomplete.placeholder.color')};
}

.p-autocomplete-empty-message {
    padding: ${dt('autocomplete.empty.message.padding')};
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
    pcInput: 'p-autocomplete-input',
    inputMultiple: ({ props, instance }) => [
        'p-autocomplete-input-multiple',
        {
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled' || instance.$primevue.config.inputVariant === 'filled'
        }
    ],
    chipItem: ({ instance, i }) => [
        'p-autocomplete-chip-item',
        {
            'p-focus': instance.focusedMultipleOptionIndex === i
        }
    ],
    pcChip: 'p-autocomplete-chip',
    chipIcon: 'p-autocomplete-chip-icon',
    inputChip: 'p-autocomplete-input-chip',
    loader: 'p-autocomplete-loader',
    dropdown: 'p-autocomplete-dropdown',
    overlay: 'p-autocomplete-overlay p-component',
    list: 'p-autocomplete-list',
    optionGroup: 'p-autocomplete-option-group',
    option: ({ instance, option, i, getItemOptions }) => [
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
