export default {
    root: {
        background: '{form.field.background}',
        disabledBackground: '{form.field.disabled.background}',
        filledBackground: '{form.field.filled.background}',
        filledHoverBackground: '{form.field.filled.hover.background}',
        filledFocusBackground: '{form.field.filled.focus.background}',
        borderColor: '{form.field.border.color}',
        hoverBorderColor: '{form.field.hover.border.color}',
        focusBorderColor: '{form.field.focus.border.color}',
        invalidBorderColor: '{form.field.invalid.border.color}',
        color: '{form.field.color}',
        disabledColor: '{form.field.disabled.color}',
        placeholderColor: '{form.field.placeholder.color}',
        invalidPlaceholderColor: '{form.field.invalid.placeholder.color}',
        shadow: '{form.field.shadow}',
        paddingX: '{form.field.padding.x}',
        paddingY: '{form.field.padding.y}',
        borderRadius: '{form.field.border.radius}',
        focusRing: {
            width: '{form.field.focus.ring.width}',
            style: '{form.field.focus.ring.style}',
            color: '{form.field.focus.ring.color}',
            offset: '{form.field.focus.ring.offset}',
            shadow: '{form.field.focus.ring.shadow}'
        },
        transitionDuration: '{form.field.transition.duration}',
        sm: {
            fontSize: '{form.field.sm.font.size}',
            paddingX: '{form.field.sm.padding.x}',
            paddingY: '{form.field.sm.padding.y}'
        },
        lg: {
            fontSize: '{form.field.lg.font.size}',
            paddingX: '{form.field.lg.padding.x}',
            paddingY: '{form.field.lg.padding.y}'
        }
    },
    css: ({ dt }) => `
.p-textarea.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${dt('textarea.filled.background')} no-repeat;
    background-image: linear-gradient(to bottom, ${dt('textarea.focus.border.color')}, ${dt('textarea.focus.border.color')}), linear-gradient(to bottom, ${dt('textarea.border.color')}, ${dt('textarea.border.color')});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-textarea.p-variant-filled:enabled:hover {
    background: ${dt('textarea.filled.hover.background')} no-repeat;
    background-image: linear-gradient(to bottom, ${dt('textarea.focus.border.color')}, ${dt('textarea.focus.border.color')}), linear-gradient(to bottom, ${dt('textarea.hover.border.color')}, ${dt('textarea.hover.border.color')});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-textarea.p-variant-filled:enabled:focus {
    outline: 0 none;
    background: ${dt('textarea.filled.focus.background')} no-repeat;
    background-image: linear-gradient(to bottom, ${dt('textarea.focus.border.color')}, ${dt('textarea.focus.border.color')}), linear-gradient(to bottom, ${dt('textarea.border.color')}, ${dt('textarea.border.color')});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-textarea.p-variant-filled:enabled:hover:focus {
    background-image: linear-gradient(to bottom, ${dt('textarea.focus.border.color')}, ${dt('textarea.focus.border.color')}), linear-gradient(to bottom, ${dt('textarea.hover.border.color')}, ${dt('textarea.hover.border.color')});
}

.p-textarea.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${dt('textarea.invalid.border.color')}, ${dt('textarea.invalid.border.color')}), linear-gradient(to bottom, ${dt('textarea.invalid.border.color')}, ${dt('textarea.invalid.border.color')});
}

.p-textarea.p-variant-filled.p-invalid:enabled:focus {
    background-image: linear-gradient(to bottom, ${dt('textarea.invalid.border.color')}, ${dt('textarea.invalid.border.color')}), linear-gradient(to bottom, ${dt('textarea.invalid.border.color')}, ${dt('textarea.invalid.border.color')});
}
`
};
