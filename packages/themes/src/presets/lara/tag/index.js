export default {
    root: {
        fontSize: '0.875rem',
        fontWeight: '700',
        padding: '0.25rem 0.5rem',
        gap: '0.25rem',
        borderRadius: '{content.border.radius}',
        roundedBorderRadius: '{border.radius.xl}'
    },
    icon: {
        size: '0.75rem'
    },
    colorScheme: {
        light: {
            primary: {
                background: '{primary.color}',
                color: '{primary.contrast.color}'
            },
            secondary: {
                background: '{surface.100}',
                color: '{surface.600}'
            },
            success: {
                background: '{green.500}',
                color: '{surface.0}'
            },
            info: {
                background: '{sky.500}',
                color: '{surface.0}'
            },
            warn: {
                background: '{orange.500}',
                color: '{surface.0}'
            },
            danger: {
                background: '{red.500}',
                color: '{surface.0}'
            },
            contrast: {
                background: '{surface.950}',
                color: '{surface.0}'
            }
        },
        dark: {
            primary: {
                background: '{primary.color}',
                color: '{primary.contrast.color}'
            },
            secondary: {
                background: '{surface.800}',
                color: '{surface.300}'
            },
            success: {
                background: '{green.400}',
                color: '{green.950}'
            },
            info: {
                background: '{sky.400}',
                color: '{sky.950}'
            },
            warn: {
                background: '{orange.400}',
                color: '{orange.950}'
            },
            danger: {
                background: '{red.400}',
                color: '{red.950}'
            },
            contrast: {
                background: '{surface.0}',
                color: '{surface.950}'
            }
        }
    }
};
