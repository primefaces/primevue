export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    separator: {
        background: '{content.border.color}',
        activeBackground: '{primary.color}',
        orientation: {
            vertical: {
                margin: '0 0 0 1.625rem'
            }
        },
        size: '2px'
    },
    item: {
        padding: '0.5rem',
        gap: '1rem'
    },
    itemHeader: {
        padding: '0',
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
    itemTitle: {
        color: '{text.muted.color}',
        activeColor: '{primary.color}',
        fontWeight: '500'
    },
    itemNumber: {
        background: '{content.background}',
        activeBackground: '{primary.color}',
        borderColor: '{content.border.color}',
        activeBorderColor: '{primary.color}',
        color: '{text.muted.color}',
        activeColor: '{primary.contrast.color}',
        size: '2.25rem',
        fontSize: '1.125rem',
        fontWeight: '500',
        borderRadius: '50%',
        shadow: 'none'
    },
    verticalPanelContainer: {
        paddingLeft: '1rem'
    },
    panelContent: {
        background: '{content.background}',
        color: '{content.color}',
        orientation: {
            horizontal: {
                padding: '0.875rem 0.5rem 1.125rem 0.5rem'
            },
            vertical: {
                padding: '0 0 0 1rem',
                last: {
                    padding: '0 0 0 3rem'
                }
            }
        }
    }
};
