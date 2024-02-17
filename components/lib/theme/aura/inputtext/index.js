export default {
    variables: {
        colorScheme: {
            light: {
                root: {
                    background: '{surface.0}',
                    backgroundFilled: '{surface.50}',
                    backgroundFilledHover: '{surface.50}',
                    backgroundFilledFocus: '{surface.0}',
                    borderColor: '{surface.300}',
                    borderColorHover: '{surface.400}',
                    borderColorFocus: '{primary.color}',
                    borderColorInvalid: '{red.400}',
                    textColor: '{surface.700}',
                    placeholderTextColor: '{surface.500}'
                }
            },
            dark: {
                root: {
                    background: '{surface.950}',
                    backgroundFilled: '{surface.800}',
                    backgroundFilledHover: '{surface.800}',
                    backgroundFilledFocus: '{surface.950}',
                    borderColor: '{surface.700}',
                    borderColorHover: '{surface.600}',
                    borderColorFocus: '{primary.color}',
                    borderColorInvalid: '{red.300}',
                    textColor: '{surface.0}',
                    placeholderTextColor: '{surface.400}'
                }
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

.p-inputtext.p-variant-filled:enabled:hover {
    background-color: var(--p-inputtext-background-filled-hover);
}

.p-inputtext.p-variant-filled:enabled:focus {
    background-color: var(--p-inputtext-background-filled-focus);
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
