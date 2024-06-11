export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    preview: {
        width: '1.75rem',
        height: '1.75rem',
        borderRadius: '{form.field.border.radius}',
        focusRing: {
            width: '{form.field.focus.ring.width}',
            style: '{form.field.focus.ring.style}',
            color: '{form.field.focus.ring.color}',
            offset: '{form.field.focus.ring.offset}',
            shadow: '{form.field.focus.ring.shadow}'
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
