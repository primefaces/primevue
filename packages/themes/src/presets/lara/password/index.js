export default {
    meter: {
        background: '{content.border.color}',
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
        gap: '0.75rem'
    },
    colorScheme: {
        light: {
            strength: {
                weakBackground: '{colordanger.500}',
                mediumBackground: '{colorwarning.500}',
                strongBackground: '{colorsuccess.500}'
            }
        },
        dark: {
            strength: {
                weakBackground: '{colordanger.400}',
                mediumBackground: '{colorwarning.400}',
                strongBackground: '{colorsuccess.400}'
            }
        }
    }
};
