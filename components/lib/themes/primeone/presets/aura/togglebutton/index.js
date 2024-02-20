export default {
    colorScheme: {
        light: {
            root: {
                background: '{surface.100}',
                backgroundDisabled: '{form.field.background.disabled}',
                borderColorInvalid: '{form.field.border.color.invalid}'
            },
            item: {
                backgroundChecked: '{surface.0}',
                textColor: '{surface.500}',
                textColorHover: '{surface.700}',
                textColorChecked: '{surface.900}',
                textColorDisabled: '{form.field.text.color.disabled}'
            },
            itemIcon: {
                color: '{surface.500}',
                colorHover: '{surface.700}',
                colorChecked: '{surface.900}',
                colorDisabled: '{form.field.text.color.disabled}'
            }
        },
        dark: {
            root: {
                background: '{surface.950}',
                backgroundDisabled: '{form.field.background.disabled}',
                borderColorInvalid: '{form.field.border.color.invalid}'
            },
            item: {
                backgroundChecked: '{surface.800}',
                textColor: '{surface.400}',
                textColorHover: '{surface.300}',
                textColorChecked: '{surface.0}',
                textColorDisabled: '{form.field.text.color.disabled}'
            },
            itemIcon: {
                color: '{surface.400}',
                colorHover: '{surface.300}',
                colorChecked: '{surface.0}',
                colorDisabled: '{form.field.text.color.disabled}'
            }
        }
    }
};
