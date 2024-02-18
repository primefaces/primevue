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
.p-inputtextarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: var(--p-textarea-text-color);
    background: var(--p-textarea-background);
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--p-textarea-border-color);
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), outline-color var(--p-transition-duration);
    appearance: none;
    border-radius: var(--p-rounded-base);
    outline-color: transparent;
    box-shadow: var(--p-textarea-box-shadow);
}

.p-inputtextarea:enabled:hover {
    border-color: var(--p-textarea-border-color-hover);
}

.p-inputtextarea:enabled:focus {
    border-color: var(--p-textarea-border-color-focus);
    outline: 0 none;
}

.p-inputtextarea.p-invalid {
    border-color: var(--p-textarea-border-color-invalid);
}

.p-inputtextarea.p-variant-filled {
    background-color: var(--p-textarea-background-filled);
}

.p-inputtextarea.p-variant-filled:enabled:focus {
    background-color: var(--p-textarea-background-filled-focus);
}

.p-inputtextarea::placeholder {
    color: var(--p-textarea-placeholder-text-color);
}

.p-fluid .p-inputtextarea {
    width: 100%;
}

.p-inputtextarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-inputtextarea:disabled {
    opacity: 1;
    background: var(--p-textarea-background-disabled);
    color: var(--p-textarea-text-color-disabled);
}
`
};
