export default {
    variables: {
        colorScheme: {
            light: {
                root: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.700}'
                },
                headerIcon: {
                    color: '{surface.500}',
                    colorHover: '{surface.600}',
                    backgroundHover: '{surface.100}'
                }
            },
            dark: {
                root: {
                    background: '{surface.900}',
                    borderColor: '{surface.700}',
                    textColor: '{surface.0}'
                },
                headerIcon: {
                    color: '{surface.400}',
                    colorHover: '{surface.300}',
                    backgroundHover: '{surface.800}'
                }
            }
        }
    },
    css: `
.p-panel {
    border: 1px solid var(--p-panel-border-color);
    border-radius: var(--p-rounded-base);
    background: var(--p-panel-background);
    color: var(--p-panel-text-color);
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.125rem;
}

.p-panel-toggleable .p-panel-header {
    padding: 0.75rem 1.125rem;
}

.p-panel-title {
    line-height: 1;
    font-weight: 600;
}

.p-panel-header-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 1.75rem;
    height: 1.75rem;
    position: relative;
    color: var(--p-panel-header-icon-color);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
}

.p-panel-header-icon:enabled:hover {
    color: var(--p-panel-header-icon-color-hover);
    background: var(--p-panel-header-icon-background-hover);
}

.p-panel-header-icon:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-panel-content {
    padding: 0 1.125rem 1.125rem 1.125rem;
}

.p-panel-footer {
    padding: 0 1.125rem 1.125rem 1.125rem;
}
    `
};
