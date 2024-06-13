export default {
    root: {
        background: '{content.background}',
        borderColor: '{content.border.color}',
        color: '{content.color}',
        borderRadius: '{content.border.radius}',
        transitionDuration: '{transition.duration}'
    },
    header: {
        borderWidth: '0 0 1px 0',
        borderColor: '{content.border.color}',
        padding: '1.125rem',
        borderRadius: '5px 5px 0 0',
        gap: '0.5rem'
    },
    content: {
        highlightBorderColor: '{primary.color}',
        padding: '1.125rem'
    },
    file: {
        padding: '1rem',
        gap: '1rem',
        borderColor: '{content.border.color}',
        info: {
            gap: '0.5rem'
        }
    },
    progressbar: {
        height: '0.25rem'
    },
    basic: {
        gap: '0.5rem'
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
