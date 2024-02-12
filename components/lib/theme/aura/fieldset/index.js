export default {
    variables: {
        colorScheme: {
            light: {
                root: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.700}'
                },
                legend: {
                    backgroundHover: '{surface.100}',
                    textColor: '{surface.700}',
                    textColorHover: '{surface.800}'
                },
                toggleIcon: {
                    color: '{surface.500}',
                    colorHover: '{surface.600}'
                }
            },
            dark: {
                root: {
                    background: '{surface.900}',
                    borderColor: '{surface.700}',
                    textColor: '{surface.0}'
                },
                legend: {
                    backgroundHover: '{surface.800}',
                    textColor: '{surface.0}',
                    textColorHover: '{surface.0}'
                },
                toggleIcon: {
                    color: '{surface.400}',
                    colorHover: '{surface.300}'
                }
            }
        }
    },
    css: `
.p-fieldset {
    border: 1px solid var(--p-fieldset-border-color);
    background: var(--p-fieldset-background);
    color: var(--p-fieldset-text-color);
    border-radius: var(--p-rounded-base);
    padding: 0 1.125rem 1.125rem 1.125rem;
    margin: 0;
}

.p-fieldset-legend {
    font-weight: 600;
    border-radius: 6px;
    border: 0 none;
    padding: 0.5rem 0.75rem;
    margin-bottom: 0.375rem;
}

.p-fieldset-toggleable > .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggleable > .p-fieldset-legend > a {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.75rem;
    color: var(--p-legend-text-color);
    border-radius: var(--p-rounded-base);
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
}

.p-fieldset-toggleable > .p-fieldset-legend > a:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-fieldset-toggleable > .p-fieldset-legend > a:hover {
    color: var(--p-fieldset-legend-text-color-hover);
    background: var(--p-fieldset-legend-background-hover);
}

.p-fieldset-toggler {
    color: var(--p-fieldset-toggle-icon-color);
    transition: color var(--p-transition-duration);
}

.p-fieldset-toggleable > .p-fieldset-legend > a:hover > .p-fieldset-toggler {
    color: var(--p-fieldset-toggle-icon-color-hover);
}

.p-fieldset .p-fieldset-content {
    padding: 0;
}    
    `
};
