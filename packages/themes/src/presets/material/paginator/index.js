export default {
    root: {
        padding: '0.5rem 1rem',
        gap: '0.25rem',
        borderRadius: '{content.border.radius}',
        background: '{content.background}',
        color: '{content.color}',
        transitionDuration: '{transition.duration}'
    },
    navButton: {
        background: 'transparent',
        hoverBackground: '{content.hover.background}',
        selectedBackground: '{highlight.background}',
        color: '{text.muted.color}',
        hoverColor: '{text.hover.muted.color}',
        selectedColor: '{highlight.color}',
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '50%',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        }
    },
    currentPageReport: {
        color: '{text.muted.color}'
    },
    jumpToPageInput: {
        maxWidth: '2.5rem'
    }
};
