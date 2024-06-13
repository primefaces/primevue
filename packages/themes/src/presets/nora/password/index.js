export default {
    meter: {
        borderRadius: '{content.border.radius}',
        height: '.75rem'
    },
    icon: {
        color: '{form.field.icon.color}'
    },
    overlay: {
        background: '{overlay.popover.background}',
        borderColor: '{overlay.popover.border.color}',
        borderRadius: '{overlay.popover.border.radius}',
        color: '{overlay.popover.color}',
        padding: '{overlay.popover.padding}',
        shadow: '{overlay.popover.shadow}'
    },
    content: {
        gap: '0.5rem'
    },
    colorScheme: {
        light: {
            meter: {
                background: '{surface.300}'
            },
            strength: {
                weakBackground: '{red.600}',
                mediumBackground: '{yellow.600}',
                strongBackground: '{green.600}'
            }
        },
        dark: {
            meter: {
                background: '{surface.600}'
            },
            strength: {
                weakBackground: '{red.500}',
                mediumBackground: '{yellow.500}',
                strongBackground: '{green.500}'
            }
        }
    }
};
