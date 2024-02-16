export default {
    variables: {
        colorScheme: {
            light: {
                header: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.700}'
                },
                content: {
                    background: '{surface.0}',
                    textColor: '{surface.700}'
                },
                footer: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.700}'
                }
            },
            dark: {
                header: {
                    background: '{surface.900}',
                    borderColor: '{surface.700}',
                    textColor: '{surface.0}'
                },
                content: {
                    background: '{surface.900}',
                    textColor: '{surface.0}'
                },
                footer: {
                    background: '{surface.900}',
                    borderColor: '{surface.700}',
                    textColor: '{surface.0}'
                }
            }
        }
    },
    css: `
.p-dataview .p-paginator-top {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-dataview .p-paginator-bottom {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-dataview-header {
    background: var(--p-dataview-header-background);
    color: var(--p-dataview-header-text-color);
    border: 1px solid var(--p-dataview-header-border-color);
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-dataview-content {
    background: var(--p-dataview-content-background);
    color: var(--p-dataview-content-text-color);
    border: 0 none;
    padding: 0;
}

.p-dataview-footer {
    background: var(--p-dataview-footer-background);
    color: var(--p-dataview-footer-text-color);
    border: 1px solid var(--p-dataview-footer-border-color);
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-dataview-layout-options.p-selectbutton .p-button svg {
    position: relative;
}
`
};
