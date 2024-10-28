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
        transitionDuration: '{form.field.transition.duration}'
    },
    overlay: {
        background: '{overlay.select.background}',
        borderColor: '{overlay.select.border.color}',
        borderRadius: '{overlay.select.border.radius}',
        color: '{overlay.select.color}',
        shadow: '{overlay.select.shadow}'
    },
    list: {
        padding: '{list.padding}',
        gap: '{list.gap}'
    },
    option: {
        focusBackground: '{list.option.focus.background}',
        selectedBackground: '{list.option.selected.background}',
        selectedFocusBackground: '{list.option.selected.focus.background}',
        color: '{list.option.color}',
        focusColor: '{list.option.focus.color}',
        selectedColor: '{list.option.selected.color}',
        selectedFocusColor: '{list.option.selected.focus.color}',
        padding: '{list.option.padding}',
        borderRadius: '{list.option.border.radius}'
    },
    optionGroup: {
        background: '{list.option.group.background}',
        color: '{list.option.group.color}',
        fontWeight: '{list.option.group.font.weight}',
        padding: '{list.option.group.padding}'
    },
    dropdown: {
        width: '3rem',
        sm: {
            width: '2.5rem'
        },
        lg: {
            width: '3.5rem'
        },
        borderColor: '{form.field.border.color}',
        hoverBorderColor: '{form.field.border.color}',
        activeBorderColor: '{form.field.border.color}',
        borderRadius: '{form.field.border.radius}',
        focusRing: {
            width: '0',
            style: 'none',
            color: 'unset',
            offset: '0',
            shadow: 'none'
        }
    },
    chip: {
        borderRadius: '{border.radius.sm}'
    },
    emptyMessage: {
        padding: '{list.option.padding}'
    },
    colorScheme: {
        light: {
            chip: {
                focusBackground: '{surface.300}',
                focusColor: '{surface.950}'
            },
            dropdown: {
                background: '{surface.100}',
                hoverBackground: '{surface.200}',
                activeBackground: '{surface.300}',
                color: '{surface.600}',
                hoverColor: '{surface.700}',
                activeColor: '{surface.800}'
            }
        },
        dark: {
            chip: {
                focusBackground: '{surface.600}',
                focusColor: '{surface.0}'
            },
            dropdown: {
                background: '{surface.800}',
                hoverBackground: '{surface.700}',
                activeBackground: '{surface.600}',
                color: '{surface.300}',
                hoverColor: '{surface.200}',
                activeColor: '{surface.100}'
            }
        }
    },
    css: ({ dt }) => `
.p-autocomplete-dropdown:focus-visible {
    background: ${dt('autocomplete.dropdown.hover.background')};
    border-color: ${dt('autocomplete.dropdown.hover.border.color')};
    color: ${dt('autocomplete.dropdown.hover.color')};
}

.p-variant-filled.p-autocomplete-input-multiple {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${dt('autocomplete.filled.background')} no-repeat;
    background-image: linear-gradient(to bottom, ${dt('autocomplete.focus.border.color')}, ${dt('autocomplete.focus.border.color')}), linear-gradient(to bottom, ${dt('autocomplete.border.color')}, ${dt('autocomplete.border.color')});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: ${dt('autocomplete.filled.hover.background')} no-repeat;
    background-image: linear-gradient(to bottom, ${dt('autocomplete.focus.border.color')}, ${dt('autocomplete.focus.border.color')}), linear-gradient(to bottom, ${dt('autocomplete.hover.border.color')}, ${dt('autocomplete.hover.border.color')});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple {
    outline: 0 none;
    background: ${dt('autocomplete.filled.focus.background')} no-repeat;
    background-image: linear-gradient(to bottom, ${dt('autocomplete.focus.border.color')}, ${dt('autocomplete.focus.border.color')}), linear-gradient(to bottom, ${dt('autocomplete.border.color')}, ${dt('autocomplete.border.color')});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-autocomplete:not(.p-disabled).p-focus:hover .p-variant-filled.p-autocomplete-input-multiple {
    background-image: linear-gradient(to bottom, ${dt('autocomplete.focus.border.color')}, ${dt('autocomplete.focus.border.color')}), linear-gradient(to bottom, ${dt('autocomplete.hover.border.color')}, ${dt('autocomplete.hover.border.color')});
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    background-image: linear-gradient(to bottom, ${dt('autocomplete.invalid.border.color')}, ${dt('autocomplete.invalid.border.color')}), linear-gradient(to bottom, ${dt('autocomplete.invalid.border.color')}, ${dt(
        'autocomplete.invalid.border.color'
    )});
}

.p-autocomplete.p-invalid.p-focus .p-autocomplete-input-multiple  {
    background-image: linear-gradient(to bottom, ${dt('autocomplete.invalid.border.color')}, ${dt('autocomplete.invalid.border.color')}), linear-gradient(to bottom, ${dt('autocomplete.invalid.border.color')}, ${dt(
        'autocomplete.invalid.border.color'
    )});
}

.p-autocomplete-option {
    transition: none;
}
`
};
