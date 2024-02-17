export default {
    variables: {
        colorScheme: {
            light: {
                root: {
                    background: '{surface.0}',
                    backgroundDisabled: '{surface.200}',
                    backgroundFilled: '{surface.50}',
                    backgroundFilledHover: '{surface.50}',
                    backgroundFilledFocus: '{surface.0}',
                    borderColor: '{surface.300}',
                    borderColorHover: '{surface.400}',
                    borderColorFocus: '{primary.color}',
                    borderColorInvalid: '{red.400}',
                    textColor: '{surface.700}',
                    textColorDisabled: '{surface.500}',
                    placeholderTextColor: '{surface.500}'
                }
            },
            dark: {
                root: {
                    background: '{surface.950}',
                    backgroundDisabled: '{surface.700}',
                    backgroundFilled: '{surface.800}',
                    backgroundFilledHover: '{surface.800}',
                    backgroundFilledFocus: '{surface.950}',
                    borderColor: '{surface.700}',
                    borderColorHover: '{surface.600}',
                    borderColorFocus: '{primary.color}',
                    borderColorInvalid: '{red.300}',
                    textColor: '{surface.0}',
                    textColorDisabled: '{surface.400}',
                    placeholderTextColor: '{surface.400}'
                }
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

.p-inputtextarea.p-variant-filled:enabled:hover {
    background-color: var(--p-textarea-background-filled-hover);
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
