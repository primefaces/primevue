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
        background: '{content.background}',
        borderColor: '{content.border.color}',
        content: {
            borderRadius: '50%',
            size: '0.375rem',
            background: '{primary.color}',
            insetShadow: '0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)'
        }
    },
    eventConnector: {
        color: '{content.border.color}',
        size: '2px'
    }
};
