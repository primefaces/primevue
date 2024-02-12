export default {
    variables: {
        colorScheme: {
            light: {
                root: {
                    background: '{surface.0}',
                    textColor: '{surface.700}'
                },
                subtitle: {
                    textColor: '{surface.500}'
                }
            },
            dark: {
                root: {
                    background: '{surface.900}',
                    textColor: '{surface.0}'
                },
                subtitle: {
                    textColor: '{surface.400}'
                }
            }
        }
    },
    css: `
.p-card {
    background: var(--p-card-background);
    color: var(--p-card-text-color);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.p-card-body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.p-card-title {
    font-size: 1.25rem;
    font-weight: 600;
}

.p-card-subtitle {
    font-weight: 400;
    color: var(--p-card-subtitle-text-color);
}
`
};
