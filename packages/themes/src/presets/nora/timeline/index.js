export default {
    event: {
        minHeight: '5rem'
    },
    horizontal: {
        eventContent: {
            padding: '1rem 0'
        }
    },
    vertical: {
        eventContent: {
            padding: '0 1rem'
        }
    },
    eventMarker: {
        size: '1.125rem',
        borderRadius: '50%',
        borderWidth: '2px',
        background: '{primary.color}',
        borderColor: '{primary.color}',
        content: {
            borderRadius: '50%',
            size: '0.375rem',
            background: 'transparent',
            insetShadow: 'none'
        }
    },
    eventConnector: {
        color: '{content.border.color}',
        size: '2px'
    }
};
