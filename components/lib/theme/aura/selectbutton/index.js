export default {
    variables: {
        colorScheme: {
            light: {
                root: {
                    background: '{surface.100}',
                    backgroundDisabled: '{form.field.background.disabled}',
                    borderColorInvalid: '{form.field.border.color.invalid}'
                },
                item: {
                    backgroundChecked: '{surface.0}',
                    textColor: '{surface.500}',
                    textColorHover: '{surface.700}',
                    textColorChecked: '{surface.900}',
                    textColorDisabled: '{form.field.text.color.disabled}'
                }
            },
            dark: {
                root: {
                    background: '{surface.950}',
                    backgroundDisabled: '{form.field.background.disabled}',
                    borderColorInvalid: '{form.field.border.color.invalid}'
                },
                item: {
                    backgroundChecked: '{surface.800}',
                    textColor: '{surface.400}',
                    textColorHover: '{surface.300}',
                    textColorChecked: '{surface.0}',
                    textColorDisabled: '{form.field.text.color.disabled}'
                }
            }
        }
    },
    css: `
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    border: 1px solid transparent;
    background: var(--p-selectbutton-background);
    border-radius: var(--p-rounded-base);
    outline-color: transparent;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
}

.p-selectbutton .p-button {
    flex: 1 1 auto;
    background: transparent;
    border: 0 none;
    color: var(--p-selectbutton-item-text-color);
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
    padding: 0.5rem 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--p-rounded-base);
    gap: 0.5rem;
    position: relative;
    cursor: pointer;
}

.p-selectbutton .p-button::before {
    content: "";
    background: transparent;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
    position: absolute;
    left: 0.25rem;
    top: 0.25rem;
    width: calc(100% - 0.5rem);
    height: calc(100% - 0.5rem);
    border-radius: var(--p-rounded-sm);
}

.p-selectbutton .p-button .p-button-label {
    position: relative;
    transition: none;
}

.p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover {
    color: var(--p-selectbutton-item-text-color-hover);
}

.p-selectbutton .p-button.p-highlight {
    color: var(--p-selectbutton-item-text-color-checked);
}

.p-selectbutton .p-button.p-highlight::before {
    background: var(--p-selectbutton-item-background-checked);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
}

.p-selectbutton .p-button:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
    --p-focus-ring-offset: 0;
}

.p-selectbutton.p-invalid {
    border-color: var(--p-selectbutton-border-color-invalid);
}

.p-selectbutton.p-disabled {
    opacity: 1;
    background: var(--p-selectbutton-background-disabled);
}

.p-selectbutton.p-disabled .p-button,
.p-selectbutton .p-button.p-disabled {
    background: var(--p-selectbutton-background-disabled);
    color: var(--p-selectbutton-item-text-color-disabled);
}
`
};
