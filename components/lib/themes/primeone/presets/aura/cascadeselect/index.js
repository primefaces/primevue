export default {
    root: {
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
            toggle: {
                color: '{surface.400}'
            },
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
                selectedFocusColor: '{highlight.focus.color}',
                icon: {
                    color: '{surface.400}',
                    focusColor: '{surface.500}'
                }
            }
        },
        dark: {
            toggle: {
                color: '{surface.400}'
            },
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
                selectedFocusColor: '{highlight.focus.color}',
                icon: {
                    color: '{surface.500}',
                    focusColor: '{surface.400}'
                }
            }
        }
    }
};
