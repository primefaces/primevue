export default {
    inputMultiple: {
        background: '{form.field.background}',
        backgroundDisabled: '{form.field.background.disabled}',
        backgroundFilled: '{form.field.background.filled}',
        backgroundFilledFocus: '{form.field.background.filled.focus}',
        borderColor: '{form.field.border.color}',
        borderColorHover: '{form.field.border.color.hover}',
        borderColorFocus: '{form.field.border.color.focus}',
        borderColorInvalid: '{form.field.border.color.invalid}',
        textColor: '{form.field.text.color}',
        textColorDisabled: '{form.field.text.disabled}',
        placeholderTextColor: '{form.field.placeholder.text.color}',
        boxShadow: '{form.field.box.shadow}'
    },
    colorScheme: {
        light: {
            chip: {
                background: '{surface.100}',
                backgroundFocus: '{surface.200}',
                textColor: '{surface.800}',
                textColorFocus: '{surface.900}'
            },
            overlay: {
                background: '{surface.0}',
                borderColor: '{surface.200}',
                textColor: '{surface.700}'
            },
            item: {
                backgroundFocus: '{surface.100}',
                backgroundSelected: '{highlight.background}',
                backgroundSelectedFocus: '{highlight.background.focus}',
                textColor: '{surface.700}',
                textColorFocus: '{surface.800}',
                textColorSelected: '{highlight.text.color}',
                textColorSelectedFocus: '{highlight.text.color.focus}'
            },
            itemGroup: {
                background: '{surface.0}',
                textColor: '{surface.500}'
            }
        },
        dark: {
            chip: {
                background: '{surface.700}',
                backgroundFocus: '{surface.600}',
                textColor: '{surface.0}',
                textColorFocus: '{surface.0}'
            },
            overlay: {
                background: '{surface.900}',
                borderColor: '{surface.700}',
                textColor: '{surface.0}'
            },
            item: {
                backgroundFocus: '{surface.800}',
                backgroundSelected: '{highlight.background}',
                backgroundSelectedFocus: '{highlight.background.focus}',
                textColor: '{surface.0}',
                textColorFocus: '{surface.0}',
                textColorSelected: '{highlight.text.color}',
                textColorSelectedFocus: '{highlight.text.color.focus}'
            },
            itemGroup: {
                background: '{surface.0}',
                textColor: '{surface.400}'
            }
        }
    }
};
