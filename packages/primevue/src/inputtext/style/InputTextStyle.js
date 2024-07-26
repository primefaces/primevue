import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${dt('inputtext.color')};
    background: ${dt('inputtext.background')};
    padding: ${dt('inputtext.padding.y')} ${dt('inputtext.padding.x')};
    border: 1px solid ${dt('inputtext.border.color')};
    transition: background ${dt('inputtext.transition.duration')}, color ${dt('inputtext.transition.duration')}, border-color ${dt('inputtext.transition.duration')}, outline-color ${dt('inputtext.transition.duration')}, box-shadow ${dt(
    'inputtext.transition.duration'
)};
    appearance: none;
    border-radius: ${dt('inputtext.border.radius')};
    outline-color: transparent;
    box-shadow: ${dt('inputtext.shadow')};
}

.p-inputtext:enabled:hover {
    border-color: ${dt('inputtext.hover.border.color')};
}

.p-inputtext:enabled:focus {
    border-color: ${dt('inputtext.focus.border.color')};
    box-shadow: ${dt('inputtext.focus.ring.shadow')};
    outline: ${dt('inputtext.focus.ring.width')} ${dt('inputtext.focus.ring.style')} ${dt('inputtext.focus.ring.color')};
    outline-offset: ${dt('inputtext.focus.ring.offset')};
}

.p-inputtext.p-invalid {
    border-color: ${dt('inputtext.invalid.border.color')};
}

.p-inputtext.p-variant-filled {
    background: ${dt('inputtext.filled.background')};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${dt('inputtext.filled.focus.background')};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${dt('inputtext.disabled.background')};
    color: ${dt('inputtext.disabled.color')};
}

.p-inputtext::placeholder {
    color: ${dt('inputtext.placeholder.color')};
}

.p-inputtext-sm {
    font-size: ${dt('inputtext.sm.font.size')};
    padding: ${dt('inputtext.sm.padding.y')} ${dt('inputtext.sm.padding.x')};
}

.p-inputtext-lg {
    font-size: ${dt('inputtext.lg.font.size')};
    padding: ${dt('inputtext.lg.padding.y')} ${dt('inputtext.lg.padding.x')};
}

.p-inputtext-fluid {
    width: 100%;
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-inputtext p-component',
        {
            'p-filled': instance.filled,
            'p-inputtext-sm': props.size === 'small',
            'p-inputtext-lg': props.size === 'large',
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled' || instance.$primevue.config.inputVariant === 'filled',
            'p-inputtext-fluid': instance.hasFluid
        }
    ]
};

export default BaseStyle.extend({
    name: 'inputtext',
    theme,
    classes
});
