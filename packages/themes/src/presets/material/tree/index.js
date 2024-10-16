export default {
    root: {
        background: '{content.background}',
        color: '{content.color}',
        padding: '1rem',
        gap: '2px',
        indent: '2rem',
        transitionDuration: '{transition.duration}'
    },
    node: {
        padding: '0.5rem 0.75rem',
        borderRadius: '{border.radius.xs}',
        hoverBackground: '{content.hover.background}',
        selectedBackground: '{highlight.background}',
        color: '{text.color}',
        hoverColor: '{text.hover.color}',
        selectedColor: '{highlight.color}',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '-1px',
            shadow: '{focus.ring.shadow}'
        },
        gap: '0.5rem'
    },
    nodeIcon: {
        color: '{text.muted.color}',
        hoverColor: '{text.hover.muted.color}',
        selectedColor: '{highlight.color}'
    },
    nodeToggleButton: {
        borderRadius: '50%',
        size: '2rem',
        hoverBackground: '{content.hover.background}',
        selectedHoverBackground: '{content.background}',
        color: '{text.muted.color}',
        hoverColor: '{text.hover.muted.color}',
        selectedHoverColor: '{primary.color}',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        }
    },
    loadingIcon: {
        size: '2rem'
    },
    filter: {
        margin: '0 0 0.75rem 0'
    },
    css: ({ dt }) => `
.p-tree-node-content {
    transition: none;
}
`
};
