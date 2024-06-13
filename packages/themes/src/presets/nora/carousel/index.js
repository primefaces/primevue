export default {
    root: {
        indicatorList: {
            padding: '1rem',
            gap: '0.5rem'
        },
        indicator: {
            width: '2rem',
            height: '0.5rem',
            borderRadius: '{content.border.radius}',
            focusRing: {
                width: '{focus.ring.width}',
                style: '{focus.ring.style}',
                color: '{focus.ring.color}',
                offset: '{focus.ring.offset}',
                shadow: '{focus.ring.shadow}'
            }
        },
        transitionDuration: '{transition.duration}'
    },
    colorScheme: {
        light: {
            indicator: {
                background: '{surface.300}',
                hoverBackground: '{surface.400}',
                activeBackground: '{primary.color}'
            }
        },
        dark: {
            indicator: {
                background: '{surface.600}',
                hoverBackground: '{surface.500}',
                activeBackground: '{primary.color}'
            }
        }
    }
};
