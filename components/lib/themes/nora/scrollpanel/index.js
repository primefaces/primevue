export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    bar: {
        size: '9px',
        borderRadius: '{border.radius.xs}',
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
            bar: {
                background: '{surface.200}'
            }
        },
        dark: {
            bar: {
                background: '{surface.700}'
            }
        }
    }
};
