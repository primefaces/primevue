export default {
    variables: {
        common: {
            root: {
                background: '{form.field.background}',
                backgroundDisabled: '{form.field.background.disabled}',
                backgroundFilled: '{form.field.background.filled}',
                backgroundFilledFocus: '{form.field.background.filled.focus}',
                borderColor: '{form.field.border.color}',
                borderColorHover: '{form.field.border.color.hover}',
                borderColorFocus: '{form.field.border.color.focus}',
                borderColorInvalid: '{form.field.border.color.invalid}',
                textColor: '{form.field.text.color}',
                textColorDisabled: '{form.field.text.disabled}',
                placeholderTextColor: '{form.field.placeholder.text.color}',
                boxShadow: '{form.field.box.shadow}'
            }
        }
    },
    css: `
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: var(--p-inputtext-text-color);
    background: var(--p-inputtext-background);
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--p-inputtext-border-color);
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), outline-color var(--p-transition-duration);
    appearance: none;
    border-radius: var(--p-rounded-base);
    outline-color: transparent;
    box-shadow: var(--p-inputtext-box-shadow);
}

.p-inputtext:enabled:hover {
    border-color: var(--p-inputtext-border-color-hover);
}

.p-inputtext:enabled:focus {
    border-color: var(--p-inputtext-border-color-focus);
    outline: 0 none;
}

.p-inputtext.p-invalid {
    border-color: var(--p-inputtext-border-color-invalid);
}

.p-inputtext.p-variant-filled {
    background-color: var(--p-inputtext-background-filled);
}

.p-inputtext.p-variant-filled:enabled:focus {
    background-color: var(--p-inputtext-background-filled-focus);
}

.p-inputtext:disabled {
    opacity: 1;
    background: var(--p-inputtext-background-disabled);
    color: var(--p-inputtext-text-color-disabled);
}

.p-input-icon-right > svg:last-of-type,
.p-input-icon-right > i:last-of-type {
    right: 0.75rem;
    color: #94a3b8;
}

.p-input-icon-right > .p-inputtext {
    padding-right: 2.5rem;
}

.p-inputtext::placeholder {
    color: var(--p-inputtext-placeholder-text-color);
}

.p-fluid .p-inputtext {
    width: 100%;
}
`
};
