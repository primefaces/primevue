export default {
    variables: {
        colorScheme: {
            light: {
                primary: {
                    background: '{primary.100}',
                    textColor: '{primary.700}'
                },
                secondary: {
                    background: '{surface.100}',
                    textColor: '{surface.600}'
                },
                success: {
                    background: '{green.100}',
                    textColor: '{green.700}'
                },
                info: {
                    background: '{sky.100}',
                    textColor: '{sky.700}'
                },
                warn: {
                    background: '{orange.100}',
                    textColor: '{orange.700}'
                },
                danger: {
                    background: '{red.100}',
                    textColor: '{red.700}'
                },
                contrast: {
                    background: '{surface.950}',
                    textColor: '{surface.0}'
                }
            },
            dark: {
                primary: {
                    background: 'color-mix(in srgb, var(--p-primary-500), transparent 84%)',
                    textColor: '{primary.300}'
                },
                secondary: {
                    background: '{surface.800}',
                    textColor: '{surface.300}'
                },
                success: {
                    background: 'color-mix(in srgb, var(--p-green-500), transparent 84%)',
                    textColor: '{green.500}'
                },
                info: {
                    background: 'color-mix(in srgb, var(--p-blue-500), transparent 84%)',
                    textColor: '{blue.500}'
                },
                warn: {
                    background: 'color-mix(in srgb, var(--p-yellow-500), transparent 84%)',
                    textColor: '{yellow.500}'
                },
                danger: {
                    background: 'color-mix(in srgb, var(--p-red-500), transparent 84%)',
                    textColor: '{red.500}'
                },
                contrast: {
                    background: '{surface.0}',
                    textColor: '{surface.950}'
                }
            }
        }
    },
    css: `
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--p-tag-primary-background);
    color: var(--p-tag-primary-text-color);
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.4rem;
    border-radius: 6px;
    gap: 0.25rem;
}

.p-tag-icon {
    font-size: 0.75rem;
    width: 0.75rem;
    height: 0.75rem;
}

.p-tag-rounded {
    border-radius: 10rem;
}

.p-tag-success {
    background-color: var(--p-tag-success-background);
    color: var(--p-tag-success-text-color);
}

.p-tag-info {
    background-color: var(--p-tag-info-background);
    color: var(--p-tag-info-text-color);
}

.p-tag-warning {
    background-color: var(--p-tag-warn-background);
    color: var(--p-tag-warn-text-color);
}

.p-tag-danger {
    background-color: var(--p-tag-danger-background);
    color: var(--p-tag-danger-text-color);
}

.p-tag-secondary {
    background-color: var(--p-tag-secondary-background);
    color: var(--p-tag-secondary-text-color);
}

.p-tag-contrast {
    background-color: var(--p-tag-contrast-background);
    color: var(--p-tag-contrast-text-color);
}    
`
};
