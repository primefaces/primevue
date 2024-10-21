export default {
    root: {
        borderRadius: '{border.radius.md}',
        padding: '0 0.5rem',
        fontSize: '0.75rem',
        fontWeight: '700',
        minWidth: '1.5rem',
        height: '1.5rem'
    },
    dot: {
        size: '0.5rem'
    },
    sm: {
        fontSize: '0.625rem',
        minWidth: '1.25rem',
        height: '1.25rem'
    },
    lg: {
        fontSize: '0.875rem',
        minWidth: '1.75rem',
        height: '1.75rem'
    },
    xl: {
        fontSize: '1rem',
        minWidth: '2rem',
        height: '2rem'
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
                background: '{colorsuccess.500}',
                color: '{surface.0}'
            },
            info: {
                background: '{colorinfo.500}',
                color: '{surface.0}'
            },
            warn: {
                background: '{colorwarning.500}',
                color: '{surface.0}'
            },
            danger: {
                background: '{colordanger.500}',
                color: '{surface.0}'
            },
            contrast: {
                background: '{surface.900}',
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
                background: '{colorsuccess.400}',
                color: '{colorsuccess.800}'
            },
            info: {
                background: '{colorinfo.400}',
                color: '{colorinfo.900}'
            },
            warn: {
                background: '{colorwarning.400}',
                color: '{colorwarning.800}'
            },
            danger: {
                background: '{colordanger.400}',
                color: '{colordanger.800}'
            },
            contrast: {
                background: '{surface.0}',
                color: '{surface.900}'
            }
        }
    }
};
