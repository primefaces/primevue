export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    separator: {
        background: '{content.border.color}'
    },
    itemLink: {
        borderRadius: '{content.border.radius}',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        },
        gap: '0.5rem'
    },
    itemLabel: {
        color: '{text.muted.color}',
        activeColor: '{primary.color}',
        fontWeight: '500'
    },
    itemNumber: {
        background: '{content.background}',
        activeBackground: '{content.background}',
        borderColor: '{content.border.color}',
        activeBorderColor: '{content.border.color}',
        color: '{text.muted.color}',
        activeColor: '{primary.color}',
        size: '2rem',
        fontSize: '1.143rem',
        fontWeight: '500',
        borderRadius: '50%',
        shadow: '0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)'
    }
};
