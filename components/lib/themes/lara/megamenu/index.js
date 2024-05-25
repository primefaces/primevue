export default {
    root: {
        borderColor: 'transparent',
        borderRadius: '{content.border.radius}',
        color: '{content.color}',
        gap: '0.5rem',
        verticalOrientation: {
            padding: '{navigation.list.padding}',
            gap: '0'
        },
        horizontalOrientation: {
            padding: '0.75rem 1rem'
        },
        transitionDuration: '{transition.duration}'
    },
    baseItem: {
        borderRadius: '{content.border.radius}',
        padding: '0.75rem 1rem'
    },
    item: {
        focusBackground: '{navigation.item.focus.background}',
        activeBackground: '{navigation.item.active.background}',
        color: '{navigation.item.color}',
        focusColor: '{navigation.item.focus.color}',
        activeColor: '{navigation.item.active.color}',
        padding: '{navigation.item.padding}',
        borderRadius: '{navigation.item.border.radius}',
        gap: '{navigation.item.gap}',
        icon: {
            color: '{navigation.item.icon.color}',
            focusColor: '{navigation.item.icon.focus.color}',
            activeColor: '{navigation.item.icon.active.color}'
        }
    },
    overlay: {
        padding: '0',
        background: '{content.background}',
        borderColor: '{content.border.color}',
        borderRadius: '{content.border.radius}',
        color: '{content.color}',
        shadow: '{overlay.navigation.shadow}',
        gap: '0.5rem'
    },
    submenu: {
        padding: '{navigation.list.padding}',
        gap: '{navigation.list.gap}'
    },
    submenuLabel: {
        padding: '{navigation.submenu.label.padding}',
        fontWeight: '{navigation.submenu.label.font.weight}',
        background: '{navigation.submenu.label.background.}',
        color: '{navigation.submenu.label.color}'
    },
    submenuIcon: {
        size: '{navigation.submenu.icon.size}',
        color: '{navigation.submenu.icon.color}',
        focusColor: '{navigation.submenu.icon.focus.color}',
        activeColor: '{navigation.submenu.icon.active.color}'
    },
    separator: {
        borderColor: '{content.border.color}'
    },
    mobileButton: {
        borderRadius: '50%',
        size: '2rem',
        color: '{text.muted.color}',
        hoverColor: '{text.muted.hover.color}',
        hoverBackground: '{content.hover.background}',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        }
    },
    colorScheme: {
        light: {
            root: {
                background: '{surface.50}'
            }
        },
        dark: {
            root: {
                background: '{surface.800}'
            }
        }
    }
};
