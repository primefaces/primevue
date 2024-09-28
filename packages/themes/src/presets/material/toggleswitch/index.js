export default {
    root: {
        width: '2.75rem',
        height: '1rem',
        borderRadius: '30px',
        gap: '0',
        shadow: 'none',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        },
        borderWidth: '1px',
        borderColor: 'transparent',
        hoverBorderColor: 'transparent',
        checkedBorderColor: 'transparent',
        checkedHoverBorderColor: 'transparent',
        invalidBorderColor: '{form.field.invalid.border.color}',
        transitionDuration: '{form.field.transition.duration}',
        slideDuration: '0.2s',
        disabledBackground: '{form.field.disabled.background}'
    },
    handle: {
        borderRadius: '50%',
        size: '1.5rem',
        disabledBackground: '{form.field.disabled.color}'
    },
    colorScheme: {
        light: {
            root: {
                background: '{surface.300}',
                hoverBackground: '{surface.300}',
                checkedBackground: '{primary.200}',
                checkedHoverBackground: '{primary.200}'
            },
            handle: {
                background: '{surface.0}',
                hoverBackground: '{surface.0}',
                checkedBackground: '{primary.color}',
                checkedHoverBackground: '{primary.color}'
            }
        },
        dark: {
            root: {
                background: '{surface.700}',
                hoverBackground: '{surface.600}',
                checkedBackground: '{primary.color}',
                checkedHoverBackground: '{primary.hover.color}'
            },
            handle: {
                background: '{surface.400}',
                hoverBackground: '{surface.300}',
                checkedBackground: '{surface.900}',
                checkedHoverBackground: '{surface.900}'
            }
        }
    },
    style: ({ dt }) => `
.p-toggleswitch-slider:before {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider:before {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt('text.color')}, transparent 96%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider:before {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt('text.color')}, transparent 88%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider:before {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt('toggleswitch.handle.checked.background')}, transparent 92%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible).p-toggleswitch-checked .p-toggleswitch-slider:before {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt('toggleswitch.handle.checked.background')}, transparent 84%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
`
};
