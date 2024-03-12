export default {
    colorScheme: {
        light: {
            nav: {
                background: '{surface.0}',
                borderColor: '{surface.200}'
            },
            header: {
                borderColor: '{surface.200}',
                activeBorderColor: '{primary.color}',
                color: '{surface.500}',
                hoverColor: '{surface.700}',
                activeColor: '{primary.color}'
            },
            navigatorIcon: {
                background: '{surface.0}',
                color: '{surface.500}',
                hoverColor: '{surface.700}',
                boxShadow: '0px 0px 10px 50px rgba(255, 255, 255, 0.6)'
            },
            content: {
                background: '{surface.0}',
                color: '{surface.700}'
            },
            
        },
        dark: {
            nav: {
                background: '{surface.900}',
                borderColor: '{surface.700}'
            },
            header: {
                borderColor: '{surface.700}',
                activeBorderColor: '{primary.color}',
                color: '{surface.400}',
                hoverColor: '{surface.0}',
                activeColor: '{primary.color}'
            },
            navigatorIcon: {
                background: '{surface.900}',
                color: '{surface.400}',
                hoverColor: '{surface.0}',
                boxShadow: '0px 0px 10px 50px color-mix(in srgb, var(--p-surface-900), transparent 50%)'
            },
            content: {
                background: '{surface.900}',
                color: '{surface.0}'
            }
        }
    }
};
