export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    track: {
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
            background: '{primary.color}',
            hoverBackground: '{primary.color}',
            width: '12px',
            height: '12px',
            shadow: 'none'
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
            track: {
                background: '{surface.300}'
            }
        },
        dark: {
            track: {
                background: '{surface.600}'
            }
        }
    }
};
