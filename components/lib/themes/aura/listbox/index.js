export default {
    root: {
        background: '{form.field.background}',
        disabledBackground: '{form.field.disabled.background}',
        borderColor: '{form.field.border.color}',
        hoverBorderColor: '{form.field.hover.border.color}',
        focusBorderColor: '{form.field.focus.border.color}',
        invalidBorderColor: '{form.field.invalid.border.color}',
        color: '{form.field.color}',
        disabledColor: '{form.field.disabled.color}',
        boxShadow: '{form.field.box.shadow}'
    },
    colorScheme: {
        light: {
            filterIcon: {
                color: '{surface.400}'
            },
            itemGroup: {
                background: '{surface.0}',
                color: '{surface.500}'
            },
            item: {
                focusBackground: '{surface.100}',
                selectedBackground: '{highlight.background}',
                selectedFocusBackground: '{highlight.focus.background}',
                color: '{surface.700}',
                focusColor: '{surface.800}',
                selectedColor: '{highlight.color}',
                selectedFocusColor: '{highlight.focus.color}'
            }
        },
        dark: {
            filterIcon: {
                color: '{surface.400}'
            },
            itemGroup: {
                background: '{surface.900}',
                color: '{surface.400}'
            },
            item: {
                focusBackground: '{surface.800}',
                selectedBackground: '{highlight.background}',
                selectedFocusBackground: '{highlight.focus.background}',
                color: '{surface.0}',
                focusColor: '{surface.0}',
                selectedColor: '{highlight.color}',
                selectedFocusColor: '{highlight.focus.color}'
            }
        }
    }
};
