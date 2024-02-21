export default {
    root: {
        background: '{form.field.background}',
        backgroundDisabled: '{form.field.background.disabled}',
        borderColor: '{form.field.border.color}',
        borderColorHover: '{form.field.border.color.hover}',
        borderColorFocus: '{form.field.border.color.focus}',
        borderColorInvalid: '{form.field.border.color.invalid}',
        textColor: '{form.field.text.color}',
        textColorDisabled: '{form.field.text.disabled}',
        boxShadow: '{form.field.box.shadow}'
    },
    colorScheme: {
        light: {
            filterIcon: {
                color: '{surface.400}'
            },
            itemGroup: {
                background: '{surface.0}',
                textColor: '{surface.500}'
            },
            item: {
                backgroundFocus: '{surface.100}',
                backgroundSelected: '{highlight.background}',
                backgroundSelectedFocus: '{highlight.background.focus}',
                textColor: '{surface.700}',
                textColorFocus: '{surface.800}',
                textColorSelected: '{highlight.text.color}',
                textColorSelectedFocus: '{highlight.text.color.focus}'
            }
        },
        dark: {
            filterIcon: {
                color: '{surface.400}'
            },
            itemGroup: {
                background: '{surface.900}',
                textColor: '{surface.400}'
            },
            item: {
                backgroundFocus: '{surface.800}',
                backgroundSelected: '{highlight.background}',
                backgroundSelectedFocus: '{highlight.background.focus}',
                textColor: '{surface.0}',
                textColorFocus: '{surface.0}',
                textColorSelected: '{highlight.text.color}',
                textColorSelectedFocus: '{highlight.text.color.focus}'
            }
        }
    }
};
