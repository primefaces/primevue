export default {
    root: {
        gap: '0',
        transitionDuration: '{transition.duration}'
    },
    panel: {
        background: '{content.background}',
        borderColor: '{content.border.color}',
        borderWidth: '0',
        color: '{content.color}',
        padding: '0',
        borderRadius: '0',
        first: {
            borderWidth: '0',
            topBorderRadius: '{content.border.radius}'
        },
        last: {
            borderWidth: '0',
            bottomBorderRadius: '{content.border.radius}'
        }
    },
    item: {
        focusBackground: '{navigation.item.focus.background}',
        color: '{navigation.item.color}',
        focusColor: '{navigation.item.focus.color}',
        gap: '0.5rem',
        padding: '{navigation.item.padding}',
        borderRadius: '{content.border.radius}',
        icon: {
            color: '{navigation.item.icon.color}',
            focusColor: '{navigation.item.icon.focus.color}'
        }
    },
    submenu: {
        indent: '1rem'
    },
    submenuIcon: {
        color: '{navigation.submenu.icon.color}',
        focusColor: '{navigation.submenu.icon.focus.color}'
    },
    css: ({ dt }) => `
.p-panelmenu-panel {
    box-shadow: 0 0 0 1px ${dt('panelmenu.panel.border.color')};
    transition: margin ${dt('panelmenu.transition.duration')};
}

.p-panelmenu-panel:has(.p-panelmenu-header-active) {
    margin: 1rem 0;
}

.p-panelmenu-panel:first-child {
    border-top-left-radius: ${dt('content.border.radius')};
    border-top-right-radius: ${dt('content.border.radius')};
    margin-top: 0;
}

.p-panelmenu-panel:last-child {
    border-bottom-left-radius: ${dt('content.border.radius')};
    border-bottom-right-radius: ${dt('content.border.radius')};
    margin-bottom: 0;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    background: ${dt('navigation.item.active.background')};
}
`
};
