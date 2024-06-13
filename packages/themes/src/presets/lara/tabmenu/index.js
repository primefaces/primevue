export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    tablist: {
        borderWidth: '0',
        background: '{content.background}',
        borderColor: '{content.border.color}'
    },
    item: {
        borderWidth: '2px 0 0 0',
        borderColor: 'transparent',
        hoverBorderColor: 'transparent',
        activeBorderColor: '{primary.color}',
        color: '{text.muted.color}',
        hoverColor: '{text.color}',
        activeColor: '{primary.color}',
        padding: '1rem 1.25rem',
        fontWeight: '600',
        margin: '0',
        gap: '0.5rem',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        }
    },
    itemIcon: {
        color: '{text.muted.color}',
        hoverColor: '{text.color}',
        activeColor: '{primary.color}'
    },
    activeBar: {
        height: '0',
        bottom: '0',
        background: 'transparent'
    },
    colorScheme: {
        light: {
            item: {
                background: '{surface.50}',
                hoverBackground: '{surface.100}',
                activeBackground: '{surface.0}'
            }
        },
        dark: {
            item: {
                background: '{surface.800}',
                hoverBackground: '{surface.700}',
                activeBackground: '{surface.900}'
            }
        }
    }
};
