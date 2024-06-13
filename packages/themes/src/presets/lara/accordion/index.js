export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    panel: {
        borderWidth: '0',
        borderColor: '{content.border.color}'
    },
    header: {
        color: '{text.muted.color}',
        hoverColor: '{text.color}',
        activeColor: '{text.color}',
        padding: '1.125rem',
        fontWeight: '700',
        borderRadius: '0',
        borderWidth: '0 1px 1px 1px',
        borderColor: '{content.border.color}',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        },
        toggleIcon: {
            color: '{text.muted.color}',
            hoverColor: '{text.color}',
            activeColor: '{text.color}',
            activeHoverColor: '{text.color}'
        },
        first: {
            topBorderRadius: '{content.border.radius}',
            borderWidth: '1px'
        },
        last: {
            bottomBorderRadius: '{content.border.radius}',
            activeBottomBorderRadius: '0'
        }
    },
    content: {
        borderWidth: '0 1px 1px 1px',
        borderColor: '{content.border.color}',
        background: '{content.background}',
        color: '{text.color}',
        padding: '1.125rem'
    },
    colorScheme: {
        light: {
            header: {
                background: '{surface.50}',
                hoverBackground: '{surface.100}',
                activeBackground: '{surface.50}',
                activeHoverBackground: '{surface.100}'
            }
        },
        dark: {
            header: {
                background: '{surface.800}',
                hoverBackground: '{surface.700}',
                activeBackground: '{surface.800}',
                activeHoverBackground: '{surface.700}'
            }
        }
    }
};
