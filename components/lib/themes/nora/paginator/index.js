export default {
    root: {
        padding: '0.5rem 1rem',
        gap: '0.25rem',
        borderRadius: '{content.border.radius}',
        background: '{content.background}',
        color: '{content.color}'
    },
    navButton: {
        hoverBackground: '{content.hover.background}',
        color: '{text.color}',
        hoverColor: '{text.color}',
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '{content.border.radius}',
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
