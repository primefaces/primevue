export default {
    root: {
        borderColor: '{content.border.color}',
        borderWidth: '1px',
        borderRadius: '4px',
        padding: '0'
    },
    header: {
        borderColor: '{content.border.color}',
        borderWidth: '0 0 1px 0',
        padding: '0.875rem 1.125rem',
        borderRadius: '5px 5px 0 0'
    },
    content: {
        background: '{content.background}',
        color: '{content.color}',
        borderColor: 'transparent',
        borderWidth: '0',
        padding: '0',
        borderRadius: '5px'
    },
    footer: {
        background: '{content.background}',
        color: '{content.color}',
        borderColor: '{content.border.color}',
        borderWidth: '1px 0 0 0',
        padding: '0.875rem 1.125rem',
        borderRadius: '0 0 5px 5px'
    },
    paginatorTop: {
        borderColor: '{content.border.color}',
        borderWidth: '0 0 1px 0'
    },
    paginatorBottom: {
        borderColor: '{content.border.color}',
        borderWidth: '1px 0 0 0'
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
