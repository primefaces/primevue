export default {
    root: {
        borderColor: '{content.border.color}',
        borderRadius: '{content.border.radius}'
    },
    header: {
        borderWidth: '0 0 1px 0',
        borderColor: '{content.border.color}',
        padding: '1.125rem',
        borderRadius: '5px 5px 0 0'
    },
    toggleableHeader: {
        padding: '0.25rem 1.125rem'
    },
    title: {
        fontWeight: '700'
    },
    content: {
        padding: '1.125rem'
    },
    footer: {
        padding: '1.125rem'
    },
    colorScheme: {
        light: {
            header: {
                background: '{surface.50}',
                color: '{text.color}'
            }
        },
        dark: {
            header: {
                background: '{surface.800}',
                color: '{text.color}'
            }
        }
    }
};
