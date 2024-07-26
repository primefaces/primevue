export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    content: {
        gap: '0.25rem'
    },
    indicatorList: {
        padding: '1rem',
        gap: '0.5rem'
    },
    indicator: {
        width: '1rem',
        height: '1rem',
        borderRadius: '50',
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
            indicator: {
                background: '{surface.200}',
                hoverBackground: '{surface.300}',
                activeBackground: '{primary.color}'
            }
        },
        dark: {
            indicator: {
                background: '{surface.700}',
                hoverBackground: '{surface.600}',
                activeBackground: '{primary.color}'
            }
        }
    }
};
