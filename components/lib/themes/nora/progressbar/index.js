export default {
    root: {
        borderRadius: '{content.border.radius}',
        height: '1.25rem'
    },
    value: {
        background: '{primary.color}'
    },
    label: {
        color: '{primary.contrast.color}',
        fontSize: '0.75rem',
        fontWeight: '700'
    },
    colorScheme: {
        light: {
            root: {
                background: '{surface.300}'
            }
        },
        dark: {
            root: {
                background: '{surface.600}'
            }
        }
    }
};
