export default {
    colorScheme: {
        light: {
            root: {
                background: '{surface.100}',
                disabledBackground: '{form.field.background.disabled}',
                invalidBorderColor: '{form.field.border.color.invalid}'
            },
            item: {
                checkedBackground: '{surface.0}',
                color: '{surface.500}',
                hoverColor: '{surface.700}',
                checkedColor: '{surface.900}',
                disabledColor: '{form.field.text.color.disabled}'
            }
        },
        dark: {
            root: {
                background: '{surface.950}',
                disabledBackground: '{form.field.background.disabled}',
                invalidBorderColor: '{form.field.border.color.invalid}'
            },
            item: {
                checkedBackground: '{surface.800}',
                color: '{surface.400}',
                hoverColor: '{surface.300}',
                checkedColor: '{surface.0}',
                disabledColor: '{form.field.text.color.disabled}'
            }
        }
    }
};
