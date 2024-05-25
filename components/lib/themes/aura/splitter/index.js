export default {
    root: {
        background: '{content.background}',
        borderColor: '{content.border.color}',
        color: '{content.color}',
        transitionDuration: '{transition.duration}'
    },
    gutter: {
        background: '{content.border.color}'
    },
    handle: {
        size: '24px',
        background: 'transparent',
        borderRadius: '{content.border.radius}',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        }
    }
};
