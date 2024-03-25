export default {
    button: {
        width: '2.5rem'
    },
    colorScheme: {
        light: {
            button: {
                background: 'transparent',
                hoverBackground: '{surface.100}',
                activeBackground: '{surface.200}',
                borderColor: '{form.field.border.color}',
                hoverBorderColor: '{form.field.border.color}',
                activeBorderColor: '{form.field.border.color}',
                color: '{surface.400}',
                hoverColor: '{surface.500}',
                activeColor: '{surface.600}'
            }
        },
        dark: {
            button: {
                background: 'transparent',
                hoverBackground: '{surface.800}',
                activeBackground: '{surface.700}',
                borderColor: '{form.field.border.color}',
                hoverBorderColor: '{form.field.border.color}',
                activeBorderColor: '{form.field.border.color}',
                color: '{surface.400}',
                hoverColor: '{surface.300}',
                activeColor: '{surface.200}'
            }
        }
    }
};
