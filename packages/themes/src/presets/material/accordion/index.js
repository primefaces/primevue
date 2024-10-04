export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    panel: {
        borderWidth: '0',
        borderColor: '{content.border.color}'
    },
    header: {
        color: '{text.color}',
        hoverColor: '{text.color}',
        activeColor: '{text.color}',
        padding: '1.25rem',
        fontWeight: '600',
        borderRadius: '0',
        borderWidth: '0',
        borderColor: '{content.border.color}',
        background: '{content.background}',
        hoverBackground: '{content.hover.background}',
        activeBackground: '{content.background}',
        activeHoverBackground: '{content.background}',
        focusRing: {
            width: '0',
            style: 'none',
            color: 'unset',
            offset: '0',
            shadow: 'none'
        },
        toggleIcon: {
            color: '{text.muted.color}',
            hoverColor: '{text.muted.color}',
            activeColor: '{text.muted.color}',
            activeHoverColor: '{text.muted.color}'
        },
        first: {
            topBorderRadius: '{content.border.radius}',
            borderWidth: '0'
        },
        last: {
            bottomBorderRadius: '{content.border.radius}',
            activeBottomBorderRadius: '0'
        }
    },
    content: {
        borderWidth: '0',
        borderColor: '{content.border.color}',
        background: '{content.background}',
        color: '{text.color}',
        padding: '0 1.25rem 1.25rem 1.25rem'
    },
    css: ({ dt }) => `
.p-accordionpanel {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    transition: margin ${dt('accordion.transition.duration')};
}

.p-accordionpanel-active {
    margin: 1rem 0;
}

.p-accordionpanel:first-child {
    border-top-left-radius: ${dt('content.border.radius')};
    border-top-right-radius: ${dt('content.border.radius')};
    margin-top: 0;
}

.p-accordionpanel:last-child {
    border-bottom-left-radius: ${dt('content.border.radius')};
    border-bottom-right-radius: ${dt('content.border.radius')};
    margin-bottom: 0;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    background: ${dt('navigation.item.active.background')};
}
`
};
