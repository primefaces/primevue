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
        size: '1.5rem',
        borderRadius: '50%',
        borderWidth: '2px',
        background: '{primary.color}',
        content: {
            borderRadius: '50%',
            size: '0',
            background: '{primary.color}',
            insetShadow: 'none'
        }
    },
    eventConnector: {
        color: '{content.border.color}',
        size: '2px'
    },
    colorScheme: {
        light: {
            eventMarker: {
                borderColor: '{surface.0}'
            }
        },
        dark: {
            eventMarker: {
                borderColor: '{surface.900}'
            }
        }
    }
};
