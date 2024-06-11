export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    panel: {
        borderWidth: '0',
        borderColor: '{content.border.color}'
    },
    header: {
        background: '{content.background}',
        hoverBackground: '{content.hover.background}',
        activeBackground: '{content.background}',
        activeHoverBackground: '{content.hover.background}',
        color: '{text.color}',
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
            color: '{text.color}',
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
    }
};
