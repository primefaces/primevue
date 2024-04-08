export default {
    inputMultiple: {
        background: '{form.field.background}',
        disabledBackground: '{form.field.disabled.background}',
        filledBackground: '{form.field.filled.background}',
        filledFocusBackground: '{form.field.filled.focus.background}',
        borderColor: '{form.field.border.color}',
        hoverBorderColor: '{form.field.hover.border.color}',
        focusBorderColor: '{form.field.focus.border.color}',
        invalidBorderColor: '{form.field.invalid.border.color}',
        color: '{form.field.color}',
        disabledColor: '{form.field.disabled.color}',
        placeholderColor: '{form.field.placeholder.color}',
        boxShadow: '{form.field.box.shadow}'
    },
    colorScheme: {
        light: {
            overlay: {
                background: '{surface.0}',
                borderColor: '{surface.200}',
                color: '{surface.700}'
            },
            item: {
                focusBackground: '{surface.100}',
                selectedBackground: '{highlight.background}',
                selectedFocusBackground: '{highlight.focus.background}',
                color: '{surface.700}',
                focusColor: '{surface.800}',
                selectedColor: '{highlight.color}',
                selectedFocusColor: '{highlight.focus.color}'
            },
            itemGroup: {
                background: '{surface.0}',
                color: '{surface.500}'
            },
            dropdown: {
                width: '2.5rem',
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
            overlay: {
                background: '{surface.900}',
                borderColor: '{surface.700}',
                color: '{surface.0}'
            },
            item: {
                focusBackground: '{surface.800}',
                selectedBackground: '{highlight.background}',
                selectedFocusBackground: '{highlight.focus.background}',
                color: '{surface.0}',
                focusColor: '{surface.0}',
                selectedColor: '{highlight.color}',
                selectedFocusColor: '{highlight.focus.color}'
            },
            itemGroup: {
                background: '{surface.900}',
                color: '{surface.400}'
            },
            dropdown: {
                background: '{surface.800}',
                hoverBackground: '{surface.700}',
                activeBackground: '{surface.600}',
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
