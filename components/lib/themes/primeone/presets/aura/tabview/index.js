export default {
    variables: {
        colorScheme: {
            light: {
                nav: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}'
                },
                header: {
                    borderColor: '{surface.200}',
                    textColor: '{surface.500}',
                    textColorHover: '{surface.700}'
                },
                navigatorIcon: {
                    background: '{surface.0}',
                    color: '{surface.500}',
                    colorHover: '{surface.700}',
                    boxShadow: '0px 0px 10px 50px rgba(255, 255, 255, 0.6)'
                },
                content: {
                    background: '{surface.0}',
                    textColor: '{surface.700}'
                }
            },
            dark: {
                nav: {
                    background: '{surface.900}',
                    borderColor: '{surface.700}'
                },
                header: {
                    borderColor: '{surface.700}',
                    textColor: '{surface.400}',
                    textColorHover: '{surface.0}'
                },
                navigatorIcon: {
                    background: '{surface.900}',
                    color: '{surface.400}',
                    colorHover: '{surface.0}',
                    boxShadow: '0px 0px 10px 50px color-mix(in srgb, var(--p-surface-900), transparent 50%)'
                },
                content: {
                    background: '{surface.900}',
                    textColor: '{surface.0}'
                }
            }
        }
    }
};
