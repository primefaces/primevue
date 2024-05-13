export default {
    root: {
        background: '{content.background}',
        borderColor: '{content.border.color}',
        borderRadius: '{content.border.radius}',
        color: '{content.color}',
        gap: '0.5rem',
        padding: '0.75rem'
    },
    colorScheme: {
        light: {
            root: {
                background: '{surface.50}',
                color: '{content.color}'
            }
        },
        dark: {
            root: {
                background: '{surface.800}',
                color: '{content.color}'
            }
        }
    }
};
