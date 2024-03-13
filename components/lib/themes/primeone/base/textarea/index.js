export default {
    css: ({ dt }) => `
.p-inputtextarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${dt('textara.color')};
    background: ${dt('textara.background')};
    padding: 0.5rem 0.75rem;
    border: 1px solid ${dt('textara.border.color')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    appearance: none;
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
    box-shadow: ${dt('textara.box.shadow')};
}

.p-inputtextarea:enabled:hover {
    border-color: ${dt('textara.hover.border.color')};
}

.p-inputtextarea:enabled:focus {
    border-color: ${dt('textara.focus.border.color')};
    outline: 0 none;
}

.p-inputtextarea.p-invalid {
    border-color: ${dt('textara.invalid.border.color')};
}

.p-inputtextarea.p-variant-filled {
    background-color: ${dt('textara.filled.background')};
}

.p-inputtextarea.p-variant-filled:enabled:focus {
    background-color: ${dt('textara.filled.focus.background')};
}

.p-inputtextarea:disabled {
    opacity: 1;
    background: ${dt('textara.disabled.background')};
    color: ${dt('textara.disabled.color')};
}

.p-inputtextarea::placeholder {
    color: ${dt('textara.placeholder.color')};
}

.p-fluid .p-inputtextarea {
    width: 100%;
}

.p-inputtextarea-resizable {
    overflow: hidden;
    resize: none;
}
`
};
