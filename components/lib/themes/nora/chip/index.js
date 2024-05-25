export default {
    root: {
        borderRadius: '16px',
        paddingX: '0.75rem',
        paddingY: '0.5rem',
        gap: '0.5rem',
        transitionDuration: '{transition.duration}'
    },
    image: {
        width: '2rem',
        height: '2rem'
    },
    icon: {
        size: '1rem'
    },
    removeIcon: {
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{form.field.focus.ring.shadow}'
        }
    },
    colorScheme: {
        light: {
            root: {
                background: '{surface.200}',
                color: '{surface.900}'
            },
            icon: {
                color: '{surface.900}'
            },
            removeIcon: {
                color: '{surface.900}'
            }
        },
        dark: {
            root: {
                background: '{surface.700}',
                color: '{surface.0}'
            },
            icon: {
                color: '{surface.0}'
            },
            removeIcon: {
                color: '{surfaec.0}'
            }
        }
    }
};
