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
        background: '{content.background}',
        hoverBackground: '{content.hover.background}',
        activeBackground: '{primary.color}',
        borderWidth: '0',
        borderColor: 'transparent',
        hoverBorderColor: 'transparent',
        activeBorderColor: 'transparent',
        color: '{text.muted.color}',
        hoverColor: '{text.color}',
        activeColor: '{primary.contrast.color}',
        padding: '1rem 1.25rem',
        fontWeight: '700',
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
        color: '{text.color}',
        hoverColor: '{text.color}',
        activeColor: '{primary.contrast.color}'
    },
    activeBar: {
        height: '0',
        bottom: '0',
        background: 'transparent'
    }
};
