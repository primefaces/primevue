export default {
    variables: {
        colorScheme: {
            light: {
                root: {
                    primary: {
                        background: '{primary.color}',
                        backgroundHover: '{primary.hoverColor}',
                        backgroundActive: '{primary.activeColor}',
                        borderColor: '{primary.color}',
                        borderColorHover: '{primary.hoverColor}',
                        borderColorActive: '{primary.activeColor}',
                        textColor: '{primary.inverseColor}',
                        textColorHover: '{primary.inverseColor}',
                        textColorActive: '{primary.inverseColor}'
                    },
                    secondary: {
                        background: '{surface.100}',
                        backgroundHover: '{surface.200}',
                        backgroundActive: '{surface.300}',
                        borderColor: '{surface.100}',
                        borderColorHover: '{surface.200}',
                        borderColorActive: '{surface.300}',
                        textColor: '{surface.600}',
                        textColorHover: '{surface.700}',
                        textColorActive: '{surface.800}'
                    },
                    info: {
                        background: '{sky.500}',
                        backgroundHover: '{sky.600}',
                        backgroundActive: '{sky.700}',
                        borderColor: '{sky.500}',
                        borderColorHover: '{sky.600}',
                        borderColorActive: '{sky.700}',
                        textColor: '#ffffff',
                        textColorHover: '#ffffff',
                        textColorActive: '#ffffff'
                    },
                    success: {
                        background: '{green.500}',
                        backgroundHover: '{green.600}',
                        backgroundActive: '{green.700}',
                        borderColor: '{green.500}',
                        borderColorHover: '{green.600}',
                        borderColorActive: '{green.700}',
                        textColor: '#ffffff',
                        textColorHover: '#ffffff',
                        textColorActive: '#ffffff'
                    },
                    warn: {
                        background: '{orange.500}',
                        backgroundHover: '{orange.600}',
                        backgroundActive: '{orange.700}',
                        borderColor: '{orange.500}',
                        borderColorHover: '{orange.600}',
                        borderColorActive: '{orange.700}',
                        textColor: '#ffffff',
                        textColorHover: '#ffffff',
                        textColorActive: '#ffffff'
                    },
                    help: {
                        background: '{purple.500}',
                        backgroundHover: '{purple.600}',
                        backgroundActive: '{purple.700}',
                        borderColor: '{purple.500}',
                        borderColorHover: '{purple.600}',
                        borderColorActive: '{purple.700}',
                        textColor: '#ffffff',
                        textColorHover: '#ffffff',
                        textColorActive: '#ffffff'
                    },
                    danger: {
                        background: '{red.500}',
                        backgroundHover: '{red.600}',
                        backgroundActive: '{red.700}',
                        borderColor: '{red.500}',
                        borderColorHover: '{red.600}',
                        borderColorActive: '{red.700}',
                        textColor: '#ffffff',
                        textColorHover: '#ffffff',
                        textColorActive: '#ffffff'
                    },
                    contrast: {
                        background: '{surface.950}',
                        backgroundHover: '{surface.900}',
                        backgroundActive: '{surface.800}',
                        borderColor: '{surface.950}',
                        borderColorHover: '{surface.900}',
                        borderColorActive: '{surface.800}',
                        textColor: '{surface.0}',
                        textColorHover: '{surface.0}',
                        textColorActive: '{surface.0}'
                    }
                },
                outlined: {
                    primary: {
                        backgroundHover: '{primary.50}',
                        backgroundActive: '{primary.100}',
                        borderColor: '{primary.200}',
                        textColor: '{primary.color}'
                    },
                    secondary: {
                        backgroundHover: '{surface.50}',
                        backgroundActive: '{surface.100}',
                        borderColor: '{surface.200}',
                        textColor: '{surface.500}'
                    },
                    success: {
                        backgroundHover: '{green.50}',
                        backgroundActive: '{green.100}',
                        borderColor: '{green.200}',
                        textColor: '{green.500}'
                    },
                    info: {
                        backgroundHover: '{sky.50}',
                        backgroundActive: '{sky.100}',
                        borderColor: '{sky.200}',
                        textColor: '{sky.500}'
                    },
                    warn: {
                        backgroundHover: '{orange.50}',
                        backgroundActive: '{orange.100}',
                        borderColor: '{orange.200}',
                        textColor: '{orange.500}'
                    },
                    help: {
                        backgroundHover: '{purple.50}',
                        backgroundActive: '{purple.100}',
                        borderColor: '{purple.200}',
                        textColor: '{purple.500}'
                    },
                    danger: {
                        backgroundHover: '{red.50}',
                        backgroundActive: '{red.100}',
                        borderColor: '{red.200}',
                        textColor: '{red.500}'
                    },
                    contrast: {
                        backgroundHover: '{surface.50}',
                        backgroundActive: '{surface.100}',
                        borderColor: '{surface.700}',
                        textColor: '{surface.950}'
                    },
                    plain: {
                        backgroundHover: '{surface.50}',
                        backgroundActive: '{surface.100}',
                        borderColor: '{surface.200}',
                        textColor: '{surface.700}'
                    }
                },
                text: {
                    primary: {
                        backgroundHover: '{primary.50}',
                        backgroundActive: '{primary.100}',
                        textColor: '{primary.color}'
                    },
                    secondary: {
                        backgroundHover: '{surface.50}',
                        backgroundActive: '{surface.100}',
                        textColor: '{surface.500}'
                    },
                    success: {
                        backgroundHover: '{green.50}',
                        backgroundActive: '{green.100}',
                        textColor: '{green.500}'
                    },
                    info: {
                        backgroundHover: '{sky.50}',
                        backgroundActive: '{sky.100}',
                        textColor: '{sky.500}'
                    },
                    warn: {
                        backgroundHover: '{orange.50}',
                        backgroundActive: '{orange.100}',
                        textColor: '{orange.500}'
                    },
                    help: {
                        backgroundHover: '{purple.50}',
                        backgroundActive: '{purple.100}',
                        textColor: '{purple.600}'
                    },
                    danger: {
                        backgroundHover: '{red.50}',
                        backgroundActive: '{red.100}',
                        textColor: '{red.500}'
                    },
                    plain: {
                        backgroundHover: '{surface.50}',
                        backgroundActive: '{surface.100}',
                        textColor: '{surface.700}'
                    }
                },
                link: {
                    textColor: '{primary.color}',
                    textColorHover: '{primary.color}',
                    textColorActive: '{primary.color}'
                }
            },
            dark: {
                root: {
                    primary: {
                        background: '{primary.color}',
                        backgroundHover: '{primary.hoverColor}',
                        backgroundActive: '{primary.activeColor}',
                        borderColor: '{primary.color}',
                        borderColorHover: '{primary.hoverColor}',
                        borderColorActive: '{primary.activeColor}',
                        textColor: '{primary.inverseColor}',
                        textColorHover: '{primary.inverseColor}',
                        textColorActive: '{primary.inverseColor}'
                    },
                    secondary: {
                        background: '{surface.800}',
                        backgroundHover: '{surface.700}',
                        backgroundActive: '{surface.600}',
                        borderColor: '{surface.800}',
                        borderColorHover: '{surface.700}',
                        borderColorActive: '{surface.600}',
                        textColor: '{surface.300}',
                        textColorHover: '{surface.200}',
                        textColorActive: '{surface.100}'
                    },
                    info: {
                        background: '{sky.400}',
                        backgroundHover: '{sky.300}',
                        backgroundActive: '{sky.200}',
                        borderColor: '{sky.400}',
                        borderColorHover: '{sky.300}',
                        borderColorActive: '{sky.200}',
                        textColor: '{sky.950}',
                        textColorHover: '{sky.950}',
                        textColorActive: '{sky.950}'
                    },
                    success: {
                        background: '{green.400}',
                        backgroundHover: '{green.300}',
                        backgroundActive: '{green.200}',
                        borderColor: '{green.400}',
                        borderColorHover: '{green.300}',
                        borderColorActive: '{green.200}',
                        textColor: '{green.950}',
                        textColorHover: '{green.950}',
                        textColorActive: '{green.950}'
                    },
                    warn: {
                        background: '{orange.400}',
                        backgroundHover: '{orange.300}',
                        backgroundActive: '{orange.200}',
                        borderColor: '{orange.400}',
                        borderColorHover: '{orange.300}',
                        borderColorActive: '{orange.200}',
                        textColor: '{orange.950}',
                        textColorHover: '{orange.950}',
                        textColorActive: '{orange.950}'
                    },
                    help: {
                        background: '{purple.400}',
                        backgroundHover: '{purple.300}',
                        backgroundActive: '{purple.200}',
                        borderColor: '{purple.400}',
                        borderColorHover: '{purple.300}',
                        borderColorActive: '{purple.200}',
                        textColor: '{purple.950}',
                        textColorHover: '{purple.950}',
                        textColorActive: '{purple.950}'
                    },
                    danger: {
                        background: '{red.400}',
                        backgroundHover: '{red.300}',
                        backgroundActive: '{red.200}',
                        borderColor: '{red.400}',
                        borderColorHover: '{red.300}',
                        borderColorActive: '{red.200}',
                        textColor: '{red.950}',
                        textColorHover: '{red.950}',
                        textColorActive: '{red.950}'
                    },
                    contrast: {
                        background: '{surface.0}',
                        backgroundHover: '{surface.100}',
                        backgroundActive: '{surface.200}',
                        borderColor: '{surface.0}',
                        borderColorHover: '{surface.100}',
                        borderColorActive: '{surface.200}',
                        textColor: '{surface.950}',
                        textColorHover: '{surface.950}',
                        textColorActive: '{surface.950}'
                    }
                },
                outlined: {
                    primary: {
                        backgroundHover: 'color-mix(in srgb, {primary.color}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {primary.color}, transparent 84%)',
                        borderColor: '{primary.900}',
                        textColor: '{primary.color}'
                    },
                    secondary: {
                        backgroundHover: 'rgba(255,255,255,0.04)',
                        backgroundActive: 'rgba(255,255,255,0.16)',
                        borderColor: '{surface.700}',
                        textColor: '{surface.400}'
                    },
                    success: {
                        backgroundHover: 'color-mix(in srgb, {green.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {green.400}, transparent 84%)',
                        borderColor: '{green.900}',
                        textColor: '{green.400}'
                    },
                    info: {
                        backgroundHover: 'color-mix(in srgb, {sky.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {sky.400}, transparent 84%)',
                        borderColor: '{sky.900}',
                        textColor: '{sky.400}'
                    },
                    warn: {
                        backgroundHover: 'color-mix(in srgb, {orange.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {orange.400}, transparent 84%)',
                        borderColor: '{orange.900}',
                        textColor: '{orange.400}'
                    },
                    help: {
                        backgroundHover: 'color-mix(in srgb, {help.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {help.400}, transparent 84%)',
                        borderColor: '{purple.900}',
                        textColor: '{purple.400}'
                    },
                    danger: {
                        backgroundHover: 'color-mix(in srgb, {danger.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {danger.400}, transparent 84%)',
                        borderColor: '{red.900}',
                        textColor: '{red.400}'
                    },
                    contrast: {
                        backgroundHover: '{surface.800}',
                        backgroundActive: '{surface.700}',
                        borderColor: '{surface.500}',
                        textColor: '{surface.0}'
                    },
                    plain: {
                        backgroundHover: '{surface.800}',
                        backgroundActive: '{surface.700}',
                        borderColor: '{surface.600}',
                        textColor: '{surface.0}'
                    }
                },
                text: {
                    primary: {
                        backgroundHover: 'color-mix(in srgb, {primary.color}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {primary.color}, transparent 84%)',
                        textColor: '{primary.color}'
                    },
                    secondary: {
                        backgroundHover: '{surface.800}',
                        backgroundActive: '{surface.700}',
                        textColor: '{surface.400}'
                    },
                    success: {
                        backgroundHover: 'color-mix(in srgb, {green.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {green.400}, transparent 84%)',
                        textColor: '{green.400}'
                    },
                    info: {
                        backgroundHover: 'color-mix(in srgb, {sky.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {sky.400}, transparent 84%)',
                        textColor: '{sky.400}'
                    },
                    warn: {
                        backgroundHover: 'color-mix(in srgb, {orange.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {orange.400}, transparent 84%)',
                        textColor: '{orange.400}'
                    },
                    help: {
                        backgroundHover: 'color-mix(in srgb, {purple.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {purple.400}, transparent 84%)',
                        textColor: '{purple.400}'
                    },
                    danger: {
                        backgroundHover: 'color-mix(in srgb, {red.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {red.400}, transparent 84%)',
                        textColor: '{red.400}'
                    },
                    plain: {
                        backgroundHover: '{surface.800}',
                        backgroundActive: '{surface.700}',
                        textColor: '{surface.0}'
                    }
                },
                link: {
                    textColor: '{primary.color}',
                    textColorHover: '{primary.color}',
                    textColorActive: '{primary.color}'
                }
            }
        }
    },
    css: `
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: var(--p-button-primary-text-color);
    background: var(--p-button-primary-background);
    border: 1px solid var(--p-button-primary-border-color);
    padding: 0.5rem 1rem;
    font-size: 1rem;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), outline-color var(--p-transition-duration);
    border-radius: var(--p-rounded-base);
    outline-color: transparent;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-left {
    margin-right: 0.5rem;
}

.p-button-icon-right {
    order: 1;
    margin-left: 0.5rem;
}

.p-button-icon-top {
    margin-bottom: 0.5rem;
}

.p-button-icon-bottom {
    order: 2;
    margin-top: 0.5rem;
}

.p-button-icon-only {
    justify-content: center;
    width: 2.5rem;
    padding: 0.5rem 0;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button.p-button-icon-only .p-button-icon-left,
.p-button.p-button-icon-only .p-button-icon-right {
    margin: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: 2.5rem;
}

.p-button-sm {
    font-size: 0.875rem;
    padding: 0.375rem 0.875rem;
}

.p-button-sm .p-button-icon {
    font-size: 0.875rem;
}

.p-button-lg {
    font-size: 1.25rem;
    padding: 0.625rem 1.25rem;
}

.p-button-sm .p-button-icon {
    font-size: 1.25rem;
}

.p-button-loading-label-only .p-button-label {
    margin-left: 0.5rem;
}

.p-button-loading-label-only .p-button-loading-icon {
    margin-right: 0;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: 500;
}

.p-fluid .p-button {
    width: 100%;
}

.p-fluid .p-button-icon-only {
    width: 2.5rem;
}

.p-button:not(:disabled):hover {
    background: var(--p-button-primary-background-hover);
    border: 1px solid var(--p-button-primary-border-color-hover);
    color: var(--p-button-primary-text-color-hover);
}

.p-button:not(:disabled):active {
    background: var(--p-button-primary-background-active);
    border: 1px solid var(--p-button-primary-border-color-active);
    color: var(--p-button-primary-text-color-active);
}

.p-button:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-button-primary-background);
    outline-offset: var(--p-focus-ring-offset);
}

.p-button .p-badge {
    margin-left: 0.5rem;
    min-width: 1rem;
    height: 1rem;
    line-height: 1rem;
    background: var(--p-button-primary-text-color);
    color: var(--p-button-primary-background);
}

.p-button-raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.p-button-rounded {
    border-radius: 2rem;
}

/* Default Severities */
.p-button-secondary {
    background: var(--p-button-secondary-background);
    border: 1px solid var(--p-button-secondary-border-color);
    color: var(--p-button-secondary-text-color);
}

.p-button-secondary:not(:disabled):hover {
    background: var(--p-button-secondary-background-hover);
    border: 1px solid var(--p-button-secondary-border-color-hover);
    color: var(--p-button-secondary-text-color-hover);
}

.p-button-secondary:not(:disabled):active {
    background: var(--p-button-secondary-background-active);
    border: 1px solid var(--p-button-secondary-border-color-active);
    color: var(--p-button-secondary-text-color-active);
}

.p-button-success {
    background: var(--p-button-success-background);
    border: 1px solid var(--p-button-success-border-color);
    color: var(--p-button-success-text-color);
}

.p-button-success:not(:disabled):hover {
    background: var(--p-button-success-background-hover);
    border: 1px solid var(--p-button-success-border-color-hover);
    color: var(--p-button-success-text-color-hover);
}

.p-button-success:not(:disabled):active {
    background: var(--p-button-success-background-active);
    border: 1px solid var(--p-button-success-border-color-active);
    color: var(--p-button-success-text-color-active);
}

.p-button-success:focus-visible {
    outline-color: var(--p-button-success-background);
}

.p-button-info {
    background: var(--p-button-info-background);
    border: 1px solid var(--p-button-info-border-color);
    color: var(--p-button-info-text-color);
}

.p-button-info:not(:disabled):hover {
    background: var(--p-button-info-background-hover);
    border: 1px solid var(--p-button-info-border-color-hover);
    color: var(--p-button-info-text-color-hover);
}

.p-button-info:not(:disabled):active {
    background: var(--p-button-info-background-active);
    border: 1px solid var(--p-button-info-border-color-active);
    color: var(--p-button-info-text-color-active);
}

.p-button-info:focus-visible {
    outline-color: var(--p-button-info-background);
}

.p-button-warning {
    background: var(--p-button-warn-background);
    border: 1px solid var(--p-button-warn-border-color);
    color: var(--p-button-warn-text-color);
}

.p-button-warning:not(:disabled):hover {
    background: var(--p-button-warn-background-hover);
    border: 1px solid var(--p-button-warn-border-color-hover);
    color: var(--p-button-warn-text-color-hover);
}

.p-button-warning:not(:disabled):active {
    background: var(--p-button-warn-background-active);
    border: 1px solid var(--p-button-warn-border-color-active);
    color: var(--p-button-warn-text-color-active);
}

.p-button-warning:focus-visible {
    outline-color: var(--p-button-warn-background);
}

.p-button-help {
    background: var(--p-button-help-background);
    border: 1px solid var(--p-button-help-border-color);
    color: var(--p-button-help-text-color);
}

.p-button-help:not(:disabled):hover {
    background: var(--p-button-help-background-hover);
    border: 1px solid var(--p-button-help-border-color-hover);
    color: var(--p-button-help-text-color-hover);
}

.p-button-help:not(:disabled):active {
    background: var(--p-button-help-background-active);
    border: 1px solid var(--p-button-help-border-color-active);
    color: var(--p-button-help-text-color-active);
}

.p-button-help:focus-visible {
    outline-color: var(--p-button-help-background);
}

.p-button-danger {
    background: var(--p-button-danger-background);
    border: 1px solid var(--p-button-danger-border-color);
    color: var(--p-button-danger-text-color);
}

.p-button-danger:not(:disabled):hover {
    background: var(--p-button-danger-background-hover);
    border: 1px solid var(--p-button-danger-border-color-hover);
    color: var(--p-button-danger-text-color-hover);
}

.p-button-danger:not(:disabled):active {
    background: var(--p-button-danger-background-active);
    border: 1px solid var(--p-button-danger-border-color-active);
    color: var(--p-button-danger-text-color-active);
}

.p-button-danger:focus-visible {
    outline-color: var(--p-button-danger-background);
}

.p-button-contrast {
    background: var(--p-button-contrast-background);
    border: 1px solid var(--p-button-contrast-border-color);
    color: var(--p-button-contrast-text-color);
}

.p-button-contrast:not(:disabled):hover {
    background: var(--p-button-contrast-background-hover);
    border: 1px solid var(--p-button-contrast-border-color-hover);
    color: var(--p-button-contrast-text-color-hover);
}

.p-button-contrast:not(:disabled):active {
    background: var(--p-button-contrast-background-active);
    border: 1px solid var(--p-button-contrast-border-color-active);
    color: var(--p-button-contrast-text-color-active);
}

.p-button-contrast:focus-visible {
    outline-color: var(--p-button-contrast-background);
}


/* Outlined Buttons */
.p-button-outlined {
    background: transparent;
    border-color: var(--p-button-outlined-primary-border-color);
    color: var(--p-button-outlined-primary-text-color);
}

.p-button-outlined:not(:disabled):hover {
    background: var(--p-button-outlined-primary-background-hover);
    border-color: var(--p-button-outlined-primary-border-color);
    color: var(--p-button-outlined-primary-text-color);
}

.p-button-outlined:not(:disabled):active {
    background: var(--p-button-outlined-primary-background-active);
    border-color: var(--p-button-outlined-primary-border-color);
    color: var(--p-button-outlined-primary-text-color);
}

.p-button-outlined.p-button-secondary {
    border-color: var(--p-button-outlined-secondary-border-color);
    color: var(--p-button-outlined-secondary-text-color);
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: var(--p-button-outlined-secondary-background-hover);
    border-color: var(--p-button-outlined-secondary-border-color);
    color: var(--p-button-outlined-secondary-text-color);
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: var(--p-button-outlined-secondary-background-active);
    border-color: var(--p-button-outlined-secondary-border-color);
    color: var(--p-button-outlined-secondary-text-color);
}

.p-button-outlined.p-button-success {
    border-color: var(--p-button-outlined-success-border-color);
    color: var(--p-button-outlined-success-text-color);
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: var(--p-button-outlined-success-background-hover);
    border-color: var(--p-button-outlined-success-border-color);
    color: var(--p-button-outlined-success-text-color);
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: var(--p-button-outlined-success-background-active);
    border-color: var(--p-button-outlined-success-border-color);
    color: var(--p-button-outlined-success-text-color);
}

.p-button-outlined.p-button-info {
    border-color: var(--p-button-outlined-info-border-color);
    color: var(--p-button-outlined-info-text-color);
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: var(--p-button-outlined-info-background-hover);
    border-color: var(--p-button-outlined-info-border-color);
    color: var(--p-button-outlined-info-text-color);
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: var(--p-button-outlined-info-background-active);
    border-color: var(--p-button-outlined-info-border-color);
    color: var(--p-button-outlined-info-text-color);
}

.p-button-outlined.p-button-warning {
    border-color: var(--p-button-outlined-warn-border-color);
    color: var(--p-button-outlined-warn-text-color);
}

.p-button-outlined.p-button-warning:not(:disabled):hover {
    background: var(--p-button-outlined-warn-background-hover);
    border-color: var(--p-button-outlined-warn-border-color);
    color: var(--p-button-outlined-warn-text-color);
}

.p-button-outlined.p-button-warning:not(:disabled):active {
    background: var(--p-button-outlined-warn-background-active);
    border-color: var(--p-button-outlined-warn-border-color);
    color: var(--p-button-outlined-warn-text-color);
}

.p-button-outlined.p-button-help {
    border-color: var(--p-button-outlined-help-border-color);
    color: var(--p-button-outlined-help-text-color);
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: var(--p-button-outlined-help-background-hover);
    border-color: var(--p-button-outlined-help-border-color);
    color: var(--p-button-outlined-help-text-color);
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: var(--p-button-outlined-help-background-active);
    border-color: var(--p-button-outlined-help-border-color);
    color: var(--p-button-outlined-help-text-color);
}

.p-button-outlined.p-button-danger {
    border-color: var(--p-button-outlined-danger-border-color);
    color: var(--p-button-outlined-danger-text-color);
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: var(--p-button-outlined-danger-background-hover);
    border-color: var(--p-button-outlined-danger-border-color);
    color: var(--p-button-outlined-danger-text-color);
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: var(--p-button-outlined-danger-background-active);
    border-color: var(--p-button-outlined-danger-border-color);
    color: var(--p-button-outlined-danger-text-color);
}

.p-button-outlined.p-button-contrast {
    border-color: var(--p-button-outlined-contrast-border-color);
    color: var(--p-button-outlined-contrast-text-color);
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: var(--p-button-outlined-contrast-background-hover);
    border-color: var(--p-button-outlined-contrast-border-color);
    color: var(--p-button-outlined-contrast-text-color);
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: var(--p-button-outlined-contrast-background-active);
    border-color: var(--p-button-outlined-contrast-border-color);
    color: var(--p-button-outlined-contrast-text-color);
}

.p-button-outlined.p-button-plain {
    border-color: var(--p-button-outlined-plain-border-color);
    color: var(--p-button-outlined-plain-text-color);
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: var(--p-button-outlined-plain-background-hover);
    border-color: var(--p-button-outlined-plain-border-color);
    color: var(--p-button-outlined-plain-text-color);
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: var(--p-button-outlined-plain-background-active);
    border-color: var(--p-button-outlined-plain-border-color);
    color: var(--p-button-outlined-plain-text-color);
}

/* Text Button */
.p-button-text {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-text-primary-text-color);
}

.p-button-text:not(:disabled):hover {
    background: var(--p-button-text-primary-background-hover);
    border-color: transparent;
    color: var(--p-button-text-primary-text-color);
}

.p-button-text:not(:disabled):active {
    background: var(--p-button-text-primary-background-active);
    border-color: transparent;
    color: var(--p-button-text-primary-text-color);
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-text-secondary-text-color);
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: var(--p-button-text-secondary-background-hover);
    border-color: transparent;
    color: var(--p-button-text-secondary-text-color);
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: var(--p-button-text-secondary-background-active);
    border-color: transparent;
    color: var(--p-button-text-secondary-text-color);
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-text-success-text-color);
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: var(--p-button-text-success-background-hover);
    border-color: transparent;
    color: var(--p-button-text-success-text-color);
}

.p-button-text.p-button-success:not(:disabled):active {
    background: var(--p-button-text-success-background-active);
    border-color: transparent;
    color: var(--p-button-text-success-text-color);
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-text-info-text-color);
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: var(--p-button-text-info-background-hover);
    border-color: transparent;
    color: var(--p-button-text-info-text-color);
}

.p-button-text.p-button-info:not(:disabled):active {
    background: var(--p-button-text-info-background-active);
    border-color: transparent;
    color: var(--p-button-text-info-text-color);
}

.p-button-text.p-button-warning {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-text-warn-text-color);
}

.p-button-text.p-button-warning:not(:disabled):hover {
    background: var(--p-button-text-warn-background-hover);
    border-color: transparent;
    color: var(--p-button-text-warn-text-color);
}

.p-button-text.p-button-warning:not(:disabled):active {
    background: var(--p-button-text-warn-background-active);
    border-color: transparent;
    color: var(--p-button-text-warn-text-color);
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-text-help-text-color);
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: var(--p-button-text-help-background-hover);
    border-color: transparent;
    color: var(--p-button-text-help-text-color);
}

.p-button-text.p-button-help:not(:disabled):active {
    background: var(--p-button-text-help-background-active);
    border-color: transparent;
    color: var(--p-button-text-help-text-color);
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-text-danger-text-color);
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: var(--p-button-text-danger-background-hover);
    border-color: transparent;
    color: var(--p-button-text-danger-text-color);
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: var(--p-button-text-danger-background-active);
    border-color: transparent;
    color: var(--p-button-text-danger-text-color);
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-text-plain-text-color);
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: var(--p-button-text-plain-background-hover);
    border-color: transparent;
    color: var(--p-button-text-plain-text-color);
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: var(--p-button-text-plain-background-active);
    border-color: transparent;
    color: var(--p-button-text-plain-text-color);
}

/* Link Button */
.p-button-link {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-link-text-color);
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-link-text-color-hover);
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: var(--p-button-link-text-color-active);
}

.p-buttonset .p-button {
    margin: 0;
}
.p-buttonset .p-button:not(:last-child),
.p-buttonset .p-button:not(:last-child):hover {
    border-right: 0 none;
}

.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttonset .p-button:first-of-type:not(:only-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-buttonset .p-button:last-of-type:not(:only-of-type) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-buttonset .p-button:focus-visible {
    position: relative;
    z-index: 1;
}

.p-fluid .p-buttonset {
    display: flex;
}

.p-fluid .p-buttonset .p-button {
    flex: 1;
}
`
};
