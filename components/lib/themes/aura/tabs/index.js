export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    tablist: {
        borderWidth: '0 0 1px 0',
        background: '{content.background}',
        borderColor: '{content.border.color}'
    },
    tab: {
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
    tabpanel: {
        background: '{content.background}',
        color: '{content.color}',
        padding: '0.875rem 1.125rem 1.125rem 1.125rem',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: 'inset {focus.ring.shadow}'
        }
    },
    navButton: {
        background: '{content.background}',
        color: '{text.muted.color}',
        hoverColor: '{text.color}',
        width: '2.5rem',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '-1px',
            shadow: '{focus.ring.shadow}'
        }
    },
    activeBar: {
        height: '1px',
        bottom: '-1px',
        background: '{primary.color}'
    },
    colorScheme: {
        light: {
            navButton: {
                boxShadow: '0px 0px 10px 50px rgba(255, 255, 255, 0.6)'
            }
        },
        dark: {
            navButton: {
                boxShadow: '0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)'
            }
        }
    }
};
