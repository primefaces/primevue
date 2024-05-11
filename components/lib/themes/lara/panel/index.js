export default {
    root: {
        background: '{content.background}',
        borderColor: '{content.border.color}',
        color: '{content.color}',
        borderRadius: '{content.border.radius}',
        gap: '1.125rem'
    },
    header: {
        borderWidth: '0 0 1px 0',
        borderColor: '{content.border.color}',
        padding: '1.125rem'
    },
    toggleableHeader: {
        padding: '0.25rem 1.125rem'
    },
    title: {
        fontWeight: '700'
    },
    content: {
        padding: '1.125rem',
        withHeaderPadding: '1.125rem'
    },
    footer: {
        padding: '0 1.125rem 1.125rem 1.125rem'
    },
    colorScheme: {
        light: {
            header: {
                background: '{surface.100}',
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
