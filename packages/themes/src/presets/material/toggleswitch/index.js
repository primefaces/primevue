export default {
    root: {
        width: '2.75rem',
        height: '1rem',
        borderRadius: '30px',
        gap: '0',
        shadow: 'none',
        focusRing: {
            width: '0',
            style: 'none',
            color: 'unset',
            offset: '0',
            shadow: 'none'
        },
        borderWidth: '1px',
        borderColor: 'transparent',
        hoverBorderColor: 'transparent',
        checkedBorderColor: 'transparent',
        checkedHoverBorderColor: 'transparent',
        invalidBorderColor: '{form.field.invalid.border.color}',
        transitionDuration: '{form.field.transition.duration}',
        slideDuration: '0.2s'
    },
    handle: {
        borderRadius: '50%',
        size: '1.5rem'
    },
    colorScheme: {
        light: {
            root: {
                background: '{surface.300}',
                disabledBackground: '{surface.400}',
                hoverBackground: '{surface.300}',
                checkedBackground: '{primary.200}',
                checkedHoverBackground: '{primary.200}'
            },
            handle: {
                background: '{surface.0}',
                disabledBackground: '{surface.200}',
                hoverBackground: '{surface.0}',
                checkedBackground: '{primary.color}',
                checkedHoverBackground: '{primary.color}',
                color: '{text.muted.color}',
                hoverColor: '{text.color}',
                checkedColor: '{primary.contrast.color}',
                checkedHoverColor: '{primary.contrast.color}'
            }
        },
        dark: {
            root: {
                background: '{surface.700}',
                disabledBackground: '{surface.600}',
                hoverBackground: '{surface.700}',
                checkedBackground: '{primary.color}',
                checkedHoverBackground: '{primary.color}'
            },
            handle: {
                background: '{surface.400}',
                disabledBackground: '{surface.500}',
                hoverBackground: '{surface.300}',
                checkedBackground: '{primary.200}',
                checkedHoverBackground: '{primary.200}',
                color: '{surface.800}',
                hoverColor: '{surface.900}',
                checkedColor: '{primary.contrast.color}',
                checkedHoverColor: '{primary.contrast.color}'
            }
        }
    },
    css: ({ dt }) => `
.p-toggleswitch-handle {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt('text.color')}, transparent 96%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt('text.color')}, transparent 88%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt('toggleswitch.handle.checked.background')}, transparent 92%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt('toggleswitch.handle.checked.background')}, transparent 84%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
`
};
