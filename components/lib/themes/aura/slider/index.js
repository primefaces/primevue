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
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: '{content.border.color}',
        hoverBackground: '{content.border.color}',
        content: {
            borderRadius: '50%',
            hoverBackground: '{content.background}',
            width: '16px',
            height: '16px',
            shadow: '0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)'
        },
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
