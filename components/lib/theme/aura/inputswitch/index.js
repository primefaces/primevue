export default {
    variables: {
        colorScheme: {
            light: {
                root: {
                    background: '{surface.300}',
                    backgroundInvalid: '{red.400}',
                    backgroundHover: '{surface.400}',
                    backgroundChecked: '{primary.500}',
                    backgroundCheckedHover: '{primary.600}',
                    borderRadius: '30px'
                },
                handle: {
                    background: '{surface.0}',
                    backgroundHover: '{surface.0}',
                    backgroundChecked: '{surface.0}',
                    backgroundCheckedHover: '{surface.0}',
                    backgroundInvalid: '{surface.0}'
                }
            },
            dark: {
                root: {
                    background: '{surface.700}',
                    backgroundInvalid: '{red.300}',
                    backgroundHover: '{surface.600}',
                    backgroundChecked: '{primary.400}',
                    backgroundCheckedHover: '{primary.300}',
                    borderRadius: '30px'
                },
                handle: {
                    background: '{surface.400}',
                    backgroundHover: '{surface.300}',
                    backgroundChecked: '{surface.900}',
                    backgroundCheckedHover: '{surface.900}',
                    backgroundInvalid: '{surface.900}'
                }
            }
        }
    },
    css: `
.p-inputswitch {
    display: inline-block;
    width: 2.5rem;
    height: 1.5rem;
}

.p-inputswitch-input {
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
    border-radius: var(--p-inputswitch-border-radius);
}

.p-inputswitch-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0 none;
    background: var(--p-inputswitch-background);
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
    border-radius: var(--p-inputswitch-border-radius);
    outline-color: transparent;
}

.p-inputswitch-slider:before {
    position: absolute;
    content: "";
    top: 50%;
    background: var(--p-inputswitch-handle-background);
    width: 1rem;
    height: 1rem;
    left: 0.25rem;
    margin-top: -0.5rem;
    border-radius: 50%;
    transition: all var(--p-transition-duration);
}

.p-inputswitch.p-highlight .p-inputswitch-slider {
    background: var(--p-inputswitch-background-checked);
}

.p-inputswitch.p-highlight .p-inputswitch-slider:before {
    background: var(--p-inputswitch-handle-background-checked);
    left: 1.25rem;
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover) .p-inputswitch-slider {
    background: var(--p-inputswitch-background-hover);
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover) .p-inputswitch-slider:before {
    background: var(--p-inputswitch-handle-background-hover);
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover).p-highlight .p-inputswitch-slider {
    background: var(--p-inputswitch-background-checked-hover);
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover).p-highlight .p-inputswitch-slider:before {
    background: var(--p-inputswitch-handle-background-checked-hover);
}

.p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:focus-visible) .p-inputswitch-slider {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-inputswitch.p-invalid > .p-inputswitch-slider {
    background: var(--p-inputswitch-background-invalid);
}

.p-inputswitch.p-invalid > .p-inputswitch-slider:before {
    background: var(--p-inputswitch-handle-background-invalid);
}
`
};
