export default {
    root: {
        borderRadius: '{border.radius.lg}',
        padding: '0 0.5rem',
        fontSize: '0.75rem',
        fontWeight: '700',
        minWidth: '1.5rem',
        height: '1.5rem'
    },
    dot: {
        size: '0.5rem'
    },
    lg: {
        fontSize: '1.125rem',
        minWidth: '2.25rem',
        height: '2.25rem'
    },
    xl: {
        fontSize: '1.5rem',
        minWidth: '3rem',
        height: '3rem'
    },
    colorScheme: {
        light: {
            primary: {
                background: '{primary.color}',
                color: '{primary.inverse.color}'
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
                background: 'color-mix(in srgb, {primary.500}, transparent 84%)',
                color: '{primary.300}'
            },
            secondary: {
                background: '{surface.800}',
                color: '{surface.300}'
            },
            success: {
                background: 'color-mix(in srgb, {green.500}, transparent 84%)',
                color: '{green.300}'
            },
            info: {
                background: 'color-mix(in srgb, {sky.500}, transparent 84%)',
                color: '{sky.300}'
            },
            warn: {
                background: 'color-mix(in srgb, {orange.500}, transparent 84%)',
                color: '{orange.300}'
            },
            danger: {
                background: 'color-mix(in srgb, {red.500}, transparent 84%)',
                color: '{red.300}'
            },
            contrast: {
                background: '{surface.0}',
                color: '{surface.950}'
            }
        }
    }
};
