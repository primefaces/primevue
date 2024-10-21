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
