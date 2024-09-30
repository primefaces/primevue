export default {
    root: {
        borderRadius: '2rem',
        paddingX: '0.75rem',
        paddingY: '0.75rem',
        gap: '0.5rem',
        transitionDuration: '{transition.duration}'
    },
    image: {
        width: '2.25rem',
        height: '2.25rem'
    },
    icon: {
        size: '1rem'
    },
    removeIcon: {
        size: '1rem',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        }
    },
    colorScheme: {
        light: {
            root: {
                background: '{surface.200}',
                color: '{surface.900}'
            },
            icon: {
                color: '{surface.600}'
            },
            removeIcon: {
                color: '{surface.600}'
            }
        },
        dark: {
            root: {
                background: '{surface.800}',
                color: '{surface.0}'
            },
            icon: {
                color: '{surface.0}'
            },
            removeIcon: {
                color: '{surface.0}'
            }
        }
    }
};
