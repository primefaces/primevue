export default {
    css: ({ dt }) => `
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${dt('inputtext.color')};
    background: ${dt('inputtext.background')};
    padding: 0.5rem 0.75rem;
    border: 1px solid ${dt('inputtext.border.color')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    appearance: none;
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
    box-shadow: ${dt('inputtext.box.shadow')};
}

.p-inputtext:enabled:hover {
    border-color: ${dt('inputtext.hover.border.color')};
}

.p-inputtext:enabled:focus {
    border-color: ${dt('inputtext.focus.border.color')};
    outline: 0 none;
}

.p-inputtext.p-invalid {
    border-color: ${dt('inputtext.invalid.border.color')};
}

.p-inputtext.p-variant-filled {
    background: ${dt('inputtext.filled.background')};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background-color: ${dt('inputtext.filled.focus.background')};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${dt('inputtext.disabled.background')};
    color: ${dt('inputtext.disabled.color')};
}

.p-inputtext::placeholder {
    color: ${dt('inputtext.placeholder.color')};
}

.p-fluid .p-inputtext {
    width: 100%;
}
`
};
