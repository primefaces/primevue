export default {
    variables: {
        common: {
            root: {
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
            }
        },
        colorScheme: {
            light: {
                chip: {
                    background: '{surface.100}',
                    backgroundFocus: '{surface.200}',
                    textColor: '{surface.800}',
                    textColorFocus: '{surface.900}'
                }
            },
            dark: {
                chip: {
                    background: '{surface.700}',
                    backgroundFocus: '{surface.600}',
                    textColor: '{surface.0}',
                    textColorFocus: '{surface.0}'
                }
            }
        }
    }
};
