export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    separator: {
        background: '{content.border.color}',
        activeBackground: '{primary.color}',
        margin: '0 0 0 1.625rem',
        size: '2px'
    },
    step: {
        padding: '0.5rem',
        gap: '1rem'
    },
    stepHeader: {
        padding: '0.75rem 1rem',
        borderRadius: '{content.border.radius}',
        focusRing: {
            width: '0',
            style: 'none',
            color: 'unset',
            offset: '0',
            shadow: 'none'
        },
        gap: '0.5rem'
    },
    stepTitle: {
        color: '{text.muted.color}',
        activeColor: '{text.color}',
        fontWeight: '500'
    },
    stepNumber: {
        activeBackground: '{primary.color}',
        activeBorderColor: '{primary.color}',
        activeColor: '{primary.contrast.color}',
        size: '2rem',
        fontSize: '1.143rem',
        fontWeight: '500',
        borderRadius: '50%',
        shadow: 'none'
    },
    steppanels: {
        padding: '0.875rem 0.5rem 1.125rem 0.5rem'
    },
    steppanel: {
        background: '{content.background}',
        color: '{content.color}',
        padding: '0',
        indent: '1rem'
    },
    colorScheme: {
        light: {
            stepNumber: {
                background: '{surface.400}',
                borderColor: '{surface.400}',
                color: '{surface.0}'
            }
        },
        dark: {
            stepNumber: {
                background: '{surface.200}',
                borderColor: '{surface.200}',
                color: '{surface.900}'
            }
        }
    },
    css: ({ dt }) => `
.p-step-header:focus-visible {
    background: ${dt('navigation.item.active.background')};
}
`
};
