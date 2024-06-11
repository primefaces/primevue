import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${dt('checkbox.width')};
    height: ${dt('checkbox.height')};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${dt('checkbox.border.radius')};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${dt('checkbox.border.radius')};
    border: 1px solid ${dt('checkbox.border.color')};
    background: ${dt('checkbox.background')};
    width: ${dt('checkbox.width')};
    height: ${dt('checkbox.width')};
    transition: background ${dt('checkbox.transition.duration')}, color ${dt('checkbox.transition.duration')}, border-color ${dt('checkbox.transition.duration')}, box-shadow ${dt('checkbox.transition.duration')}, outline-color ${dt(
        'checkbox.transition.duration'
    )};
    outline-color: transparent;
    box-shadow: ${dt('checkbox.shadow')};
}

.p-checkbox-icon {
    transition-duration: ${dt('checkbox.transition.duration')};
    color: ${dt('checkbox.icon.color')};
    font-size: ${dt('checkbox.icon.size')};
    width: ${dt('checkbox.icon.size')};
    height: ${dt('checkbox.icon.size')};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${dt('checkbox.hover.border.color')};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${dt('checkbox.checked.border.color')};
    background: ${dt('checkbox.checked.background')};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${dt('checkbox.icon.checked.color')};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${dt('checkbox.checked.hover.background')};
    border-color: ${dt('checkbox.checked.hover.border.color')};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${dt('checkbox.icon.checked.hover.color')};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${dt('checkbox.focus.border.color')};
    box-shadow: ${dt('checkbox.focus.ring.shadow')};
    outline: ${dt('checkbox.focus.ring.width')} ${dt('checkbox.focus.ring.style')} ${dt('checkbox.focus.ring.color')};
    outline-offset: ${dt('checkbox.focus.ring.offset')};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${dt('checkbox.checked.focus.border.color')};
}

.p-checkbox.p-invalid > .p-checkbox-box {
    border-color: ${dt('checkbox.invalid.border.color')};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${dt('checkbox.filled.background')};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${dt('checkbox.checked.background')};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${dt('checkbox.checked.hover.background')};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${dt('checkbox.disabled.background')};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${dt('checkbox.icon.disabled.color')};
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-checkbox p-component',
        {
            'p-checkbox-checked': instance.checked,
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled' || instance.$primevue.config.inputVariant === 'filled'
        }
    ],
    box: 'p-checkbox-box',
    input: 'p-checkbox-input',
    icon: 'p-checkbox-icon'
};

export default BaseStyle.extend({
    name: 'checkbox',
    theme,
    classes
});
