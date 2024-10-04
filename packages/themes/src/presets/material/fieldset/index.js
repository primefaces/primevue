export default {
    root: {
        background: '{content.background}',
        borderColor: '{content.border.color}',
        borderRadius: '{content.border.radius}',
        color: '{content.color}',
        padding: '0 1.25rem 1.25rem 1.25rem',
        transitionDuration: '{transition.duration}'
    },
    legend: {
        background: '{content.background}',
        hoverBackground: '{content.hover.background}',
        color: '{content.color}',
        hoverColor: '{content.hover.color}',
        borderRadius: '{content.border.radius}',
        borderWidth: '1px',
        borderColor: 'transparent',
        padding: '0.75rem 1rem',
        gap: '0.5rem',
        fontWeight: '600',
        focusRing: {
            width: '0',
            style: 'none',
            color: 'unset',
            offset: '0',
            shadow: 'none'
        }
    },
    toggleIcon: {
        color: '{text.muted.color}',
        hoverColor: '{text.hover.muted.color}'
    },
    content: {
        padding: '0'
    },
    css: ({ dt }) => `
.p-fieldset-toggle-button:focus-visible {
    background: ${dt('navigation.item.active.background')};

}
`
};
