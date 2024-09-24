export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    preview: {
        width: '1.5rem',
        height: '1.5rem',
        borderRadius: '{form.field.border.radius}',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        }
    },
    panel: {
        shadow: '{overlay.popover.shadow}',
        borderRadius: '{overlay.popover.borderRadius}'
    },
    colorScheme: {
        light: {
            panel: {
                background: '{surface.800}',
                borderColor: '{surface.900}'
            },
            handle: {
                color: '{surface.0}'
            }
        },
        dark: {
            panel: {
                background: '{surface.900}',
                borderColor: '{surface.700}'
            },
            handle: {
                color: '{surface.0}'
            }
        }
    }
};
