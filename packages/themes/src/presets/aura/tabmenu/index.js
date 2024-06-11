export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    tablist: {
        borderWidth: '0 0 1px 0',
        background: '{content.background}',
        borderColor: '{content.border.color}'
    },
    item: {
        background: 'transparent',
        hoverBackground: 'transparent',
        activeBackground: 'transparent',
        borderWidth: '0 0 1px 0',
        borderColor: '{content.border.color}',
        hoverBorderColor: '{content.border.color}',
        activeBorderColor: '{primary.color}',
        color: '{text.muted.color}',
        hoverColor: '{text.color}',
        activeColor: '{primary.color}',
        padding: '1rem 1.125rem',
        fontWeight: '600',
        margin: '0 0 -1px 0',
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
        height: '1px',
        bottom: '-1px',
        background: '{primary.color}'
    }
};
