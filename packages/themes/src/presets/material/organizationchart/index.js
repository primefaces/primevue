export default {
    root: {
        gutter: '0.75rem',
        transitionDuration: '{transition.duration}'
    },
    node: {
        background: '{content.background}',
        hoverBackground: '{content.hover.background}',
        selectedBackground: '{highlight.background}',
        borderColor: '{content.border.color}',
        color: '{content.color}',
        selectedColor: '{highlight.color}',
        hoverColor: '{content.hover.color}',
        padding: '1rem 1.25rem',
        toggleablePadding: '1rem 1.25rem 1.5rem 1.25rem',
        borderRadius: '{content.border.radius}'
    },
    nodeToggleButton: {
        background: '{content.background}',
        hoverBackground: '{content.hover.background}',
        borderColor: '{content.border.color}',
        color: '{text.muted.color}',
        hoverColor: '{text.color}',
        size: '1.75rem',
        borderRadius: '50%',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        }
    },
    connector: {
        color: '{content.border.color}',
        borderRadius: '{content.border.radius}',
        height: '24px'
    }
};
