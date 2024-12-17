export default {
    root: {
        background: '{content.background}',
        borderColor: '{content.border.color}',
        color: '{content.color}',
        borderRadius: '{content.border.radius}',
        transitionDuration: '{transition.duration}'
    },
    header: {
        background: 'transparent',
        color: '{text.color}',
        padding: '1.25rem',
        borderColor: 'unset',
        borderWidth: '0',
        borderRadius: '0',
        gap: '0.5rem'
    },
    content: {
        highlightBorderColor: '{primary.color}',
        padding: '0 1.25rem 1.25rem 1.25rem',
        gap: '1rem'
    },
    file: {
        padding: '1rem',
        gap: '1rem',
        borderColor: '{content.border.color}',
        info: {
            gap: '0.5rem'
        }
    },
    fileList: {
        gap: '0.5rem'
    },
    progressbar: {
        height: '0.25rem'
    },
    basic: {
        gap: '0.5rem'
    }
};
