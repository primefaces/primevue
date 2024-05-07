import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-inputtextarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${dt('textarea.color')};
    background: ${dt('textarea.background')};
    padding: ${dt('textarea.padding.y')} ${dt('textarea.padding.x')};
    border: 1px solid ${dt('textarea.border.color')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')};
    appearance: none;
    border-radius: ${dt('textarea.border.radius')};
    outline-color: transparent;
    box-shadow: ${dt('textarea.shadow')};
}

.p-inputtextarea:enabled:hover {
    border-color: ${dt('textarea.hover.border.color')};
}

.p-inputtextarea:enabled:focus {
    border-color: ${dt('textarea.focus.border.color')};
    box-shadow: ${dt('textarea.focus.ring.shadow')};
    outline: ${dt('textarea.focus.ring.width')} ${dt('textarea.focus.ring.style')} ${dt('textarea.focus.ring.color')};
    outline-offset: ${dt('textarea.focus.ring.offset')};
}

.p-inputtextarea.p-invalid {
    border-color: ${dt('textarea.invalid.border.color')};
}

.p-inputtextarea.p-variant-filled {
    background-color: ${dt('textarea.filled.background')};
}

.p-inputtextarea.p-variant-filled:enabled:focus {
    background-color: ${dt('textarea.filled.focus.background')};
}

.p-inputtextarea:disabled {
    opacity: 1;
    background: ${dt('textarea.disabled.background')};
    color: ${dt('textarea.disabled.color')};
}

.p-inputtextarea::placeholder {
    color: ${dt('textarea.placeholder.color')};
}

.p-fluid .p-inputtextarea {
    width: 100%;
}

.p-inputtextarea-resizable {
    overflow: hidden;
    resize: none;
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-inputtextarea p-component',
        {
            'p-filled': instance.filled,
            'p-inputtextarea-resizable ': props.autoResize,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
        }
    ]
};

export default BaseStyle.extend({
    name: 'textarea',
    theme,
    classes
});
