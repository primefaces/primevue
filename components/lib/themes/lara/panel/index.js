export default {
    root: {
        background: '{content.background}',
        borderColor: '{content.border.color}',
        color: '{content.color}',
        borderRadius: '{content.border.radius}',
        gap: '1.25rem'
    },
    header: {
        borderWidth: '0 0 1px 0',
        borderColor: '{content.border.color}',
        padding: '1.25rem'
    },
    toggleableHeader: {
        padding: '0.375rem 1.25rem'
    },
    title: {
        fontWeight: '700'
    },
    content: {
        padding: '1.25rem',
        withHeaderPadding: '1.25rem'
    },
    footer: {
        padding: '0 1.25rem 1.25rem 1.25rem'
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
