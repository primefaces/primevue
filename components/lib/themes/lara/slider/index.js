export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    track: {
        background: '{content.border.color}',
        borderRadius: '{content.border.radius}',
        size: '3px'
    },
    range: {
        background: '{primary.color}'
    },
    handle: {
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        background: '{primary.color}',
        hoverBackground: '{primary.color}',
        content: {
            borderRadius: '50%',
            hoverBackground: '{primary.color}',
            width: '12px',
            height: '12px',
            shadow: 'none'
        },
        focusRing: {
            width: '{form.field.focus.ring.width}',
            style: '{form.field.focus.ring.style}',
            color: '{form.field.focus.ring.color}',
            offset: '{form.field.focus.ring.offset}',
            shadow: '{form.field.focus.ring.shadow}'
        }
    },
    colorScheme: {
        light: {
            handle: {
                contentBackground: '{surface.0}'
            }
        },
        dark: {
            handle: {
                contentBackground: '{surface.950}'
            }
        }
    }
};
