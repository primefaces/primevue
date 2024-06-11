import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-inputchips {
    display: inline-flex;
}

.p-inputchips-input {
    margin: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(${dt('inputchips.padding.y')} / 2) ${dt('inputchips.padding.x')};
    gap: calc(${dt('inputchips.padding.y')} / 2);
    color: ${dt('inputchips.color')};
    background: ${dt('inputchips.background')};
    border: 1px solid ${dt('inputchips.border.color')};
    border-radius: ${dt('inputchips.border.radius')};
    width: 100%;
    transition: background ${dt('inputchips.transition.duration')}, color ${dt('inputchips.transition.duration')}, border-color ${dt('inputchips.transition.duration')}, outline-color ${dt('inputchips.transition.duration')}, box-shadow ${dt(
        'inputchips.transition.duration'
    )};
    outline-color: transparent;
    box-shadow: ${dt('inputchips.shadow')};
}

.p-inputchips:not(.p-disabled):hover .p-inputchips-input {
    border-color: ${dt('inputchips.hover.border.color')};
}

.p-inputchips:not(.p-disabled).p-focus .p-inputchips-input {
    border-color: ${dt('inputchips.focus.border.color')};
    box-shadow: ${dt('inputchips.focus.ring.shadow')};
    outline: ${dt('inputchips.focus.ring.width')} ${dt('inputchips.focus.ring.style')} ${dt('inputchips.focus.ring.color')};
    outline-offset: ${dt('inputchips.focus.ring.offset')};
}

.p-inputchips.p-invalid .p-inputchips-input {
    border-color: ${dt('inputchips.invalid.border.color')};
}

.p-variant-filled.p-inputchips-input {
    background: ${dt('inputchips.filled.background')};
}

.p-inputchips:not(.p-disabled).p-focus .p-variant-filled.p-inputchips-input  {
    background: ${dt('inputchips.filled.focus.background')};
}

.p-inputchips.p-disabled .p-inputchips-input {
    opacity: 1;
    background: ${dt('inputchips.disabled.background')};
    color: ${dt('inputchips.disabled.color')};
}

.p-inputchips-chip.p-chip {
    padding-top: calc(${dt('inputchips.padding.y')} / 2);
    padding-bottom: calc(${dt('inputchips.padding.y')} / 2);
    border-radius: ${dt('inputchips.chip.border.radius')};
    transition: background ${dt('inputchips.transition.duration')}, color ${dt('inputchips.transition.duration')};
}

.p-inputchips-chip-item.p-focus .p-inputchips-chip {
    background: ${dt('inputchips.chip.focus.background')};
    color: ${dt('inputchips.chip.focus.color')};
}

.p-inputchips-input:has(.p-inputchips-chip) {
    padding-left: calc(${dt('inputchips.padding.y')} / 2);
    padding-right: calc(${dt('inputchips.padding.y')} / 2);
}

.p-inputchips-input-item {
    flex: 1 1 auto;
    display: inline-flex;
    padding-top: calc(${dt('inputchips.padding.y')} / 2);
    padding-bottom: calc(${dt('inputchips.padding.y')} / 2);
}

.p-inputchips-input-item input {
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

.p-inputchips-input-item input::placeholder {
    color: ${dt('inputchips.placeholder.color')};
}

.p-fluid .p-inputchips {
    display: flex;
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-inputchips p-component p-inputwrapper',
        {
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-focus': instance.focused,
            'p-inputwrapper-filled': (props.modelValue && props.modelValue.length) || (instance.inputValue && instance.inputValue.length),
            'p-inputwrapper-focus': instance.focused
        }
    ],
    input: ({ props, instance }) => [
        'p-inputchips-input',
        {
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled' || instance.$primevue.config.inputVariant === 'filled'
        }
    ],
    chipItem: ({ state, index }) => ['p-inputchips-chip-item', { 'p-focus': state.focusedIndex === index }],
    pcChip: 'p-inputchips-chip',
    chipIcon: 'p-inputchips-chip-icon',
    inputItem: 'p-inputchips-input-item'
};

export default BaseStyle.extend({
    name: 'inputchips',
    theme,
    classes
});
