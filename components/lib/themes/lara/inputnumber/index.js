export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    button: {
        width: '2.5rem',
        borderRadius: '{form.field.border.radius}',
        verticalPadding: '{form.field.padding.y}'
    },
    colorScheme: {
        light: {
            button: {
                background: '{surface.100}',
                hoverBackground: '{surface.200}',
                activeBackground: '{surface.300}',
                borderColor: '{form.field.border.color}',
                hoverBorderColor: '{form.field.border.color}',
                activeBorderColor: '{form.field.border.color}',
                color: '{surface.600}',
                hoverColor: '{surface.700}',
                activeColor: '{surface.800}'
            }
        },
        dark: {
            button: {
                background: '{surface.800}',
                hoverBackground: '{surface.700}',
                activeBackground: '{surface.500}',
                borderColor: '{form.field.border.color}',
                hoverBorderColor: '{form.field.border.color}',
                activeBorderColor: '{form.field.border.color}',
                color: '{surface.300}',
                hoverColor: '{surface.200}',
                activeColor: '{surface.100}'
            }
        }
    }
};
