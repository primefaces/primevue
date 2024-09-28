export default {
    root: {
        width: '20px',
        height: '20px',
        background: '{form.field.background}',
        checkedBackground: '{primary.contrast.color}',
        checkedHoverBackground: '{primary.contrast.color}',
        disabledBackground: '{form.field.disabled.background}',
        filledBackground: '{form.field.filled.background}',
        checkedBorderColor: '{primary.color}',
        checkedHoverBorderColor: '{primary.color}',
        checkedFocusBorderColor: '{primary.color}',
        checkedDisabledBorderColor: '{form.field.border.color}',
        invalidBorderColor: '{form.field.invalid.border.color}',
        shadow: '{form.field.shadow}',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        },
        transitionDuration: '{form.field.transition.duration}'
    },
    icon: {
        size: '10px',
        checkedColor: '{primary.color}',
        checkedHoverColor: '{primary.color}',
        disabledColor: '{form.field.disabled.color}'
    },
    colorScheme: {
        light: {
            borderColor: '{surface.600}',
            hoverBorderColor: '{surface.900}',
            focusBorderColor: '{surface.900}'
        },
        dark: {}
    },
    style: ({ dt }) => `
.p-radiobutton {
    border-radius: 50%;
    transition: box-shadow ${dt('radiobutton.transition.duration')};
}

.p-radiobutton-box {
    border-width: 2px;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt('text.color')}, transparent 96%);
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt('radiobutton.checked.border.color')}, transparent 92%);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt('text.color')}, transparent 88%);
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt('radiobutton.checked.border.color')}, transparent 84%);
}
`
};
