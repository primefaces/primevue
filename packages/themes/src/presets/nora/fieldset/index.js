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
        background: '{content.background}',
        hoverBackground: '{content.hover.background}',
        color: '{content.color}',
        hoverColor: '{content.hover.color}',
        borderRadius: '{content.border.radius}',
        borderWidth: '1px',
        borderColor: '{content.border.color}',
        padding: '0.5rem 0.75rem',
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
    }
};
