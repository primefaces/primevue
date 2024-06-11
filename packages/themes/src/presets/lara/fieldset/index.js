export default {
    root: {
        background: '{content.background}',
        borderColor: '{content.border.color}',
        borderRadius: '{content.border.radius}',
        color: '{content.color}',
        padding: '0.75rem 1.125rem 1.125rem 1.125rem',
        transitionDuration: '{transition.duration}'
    },
    legend: {
        borderRadius: '{content.border.radius}',
        borderWidth: '1px',
        borderColor: '{content.border.color}',
        padding: '0.625rem 0.875rem',
        gap: '0.5rem',
        fontWeight: '700',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        }
    },
    toggleIcon: {
        color: '{text.muted.color}',
        hoverColor: '{text.hover.muted.color}'
    },
    content: {
        padding: '0'
    },
    colorScheme: {
        light: {
            legend: {
                background: '{surface.50}',
                hoverBackground: '{surface.100}',
                color: '{text.color}',
                hoverColor: '{text.hover.color}'
            }
        },
        dark: {
            legend: {
                background: '{surface.800}',
                hoverBackground: '{surface.700}',
                color: '{text.color}',
                hoverColor: '{text.hover.color}'
            }
        }
    }
};
