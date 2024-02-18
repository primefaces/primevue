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
                },
                itemIcon: {
                    color: '{surface.500}',
                    colorHover: '{surface.700}',
                    colorChecked: '{surface.900}',
                    colorDisabled: '{form.field.text.color.disabled}'
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
                },
                itemIcon: {
                    color: '{surface.400}',
                    colorHover: '{surface.300}',
                    colorChecked: '{surface.0}',
                    colorDisabled: '{form.field.text.color.disabled}'
                }
            }
        }
    },
    css: `
.p-togglebutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    border: 1px solid transparent;
    background: var(--p-togglebutton-background);
    border-radius: var(--p-rounded-base);
    outline-color: transparent;
    position: relative;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
}

.p-togglebutton-input {
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
    border-radius: var(--p-rounded-base);;
}

.p-togglebutton .p-button {
    flex: 1 1 auto;
    background: transparent;
    border: 0 none;
    color: var(--p-togglebutton-item-text-color);
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
    padding: 0.5rem 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--p-rounded-base);
    gap: 0.5rem;
    position: relative;
}

.p-togglebutton .p-button::before {
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

.p-togglebutton .p-button .p-button-label,
.p-togglebutton .p-button .p-button-icon {
    position: relative;
    transition: none;
}

.p-togglebutton .p-button .p-button-icon-left,
.p-togglebutton .p-button .p-button-icon-right {
    color: var(--p-togglebutton-item-icon-color);
}

.p-togglebutton:not(.p-disabled):has(.p-togglebutton-input:hover):not(.p-highlight) .p-button {
    color: var(--p-togglebutton-item-text-color-hover);
}

.p-togglebutton:not(.p-disabled):has(.p-togglebutton-input:hover):not(.p-highlight) .p-button .p-button-icon-left,
.p-togglebutton:not(.p-disabled):has(.p-togglebutton-input:hover):not(.p-highlight) .p-button .p-button-icon-right {
    color: var(--p-togglebutton-item-icon-color-hover);
}

.p-togglebutton.p-highlight .p-button {
    color: var(--p-togglebutton-item-text-color-checked);
}

.p-togglebutton.p-highlight .p-button::before {
    background: var(--p-togglebutton-item-background-checked);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
}

.p-togglebutton.p-highlight .p-button .p-button-icon-left,
.p-togglebutton.p-highlight .p-button .p-button-icon-right {
    color: var(--p-togglebutton-item-icon-color-checked);
}

.p-togglebutton:not(.p-disabled):has(.p-togglebutton-input:focus-visible) {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-togglebutton.p-invalid {
    border-color: var(--p-togglebutton-border-color-invalid);
}

.p-togglebutton.p-disabled {
    opacity: 1;
    background: var(--p-togglebutton-background-disabled);
}

.p-togglebutton.p-disabled .p-button {
    color: var(--p-togglebutton-item-text-color-disabled);
}

.p-togglebutton.p-disabled .p-button .p-button-icon {
    color: var(--p-togglebutton-item-icon-color-disabled);
}
`
};
