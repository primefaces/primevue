export default {
    root: {
        gap: '0.5rem',
        transitionDuration: '{transition.duration}'
    },
    icon: {
        size: '1.125rem',
        color: '{text.muted.color}',
        hoverColor: '{primary.color}',
        activeColor: '{primary.color}'
    },
    style: ({ dt }) => `
.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover {
    background: color-mix(in srgb, ${dt('rating.icon.color')}, transparent 96%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${dt('rating.icon.color')}, transparent 96%); 
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option-active:hover {
    background: color-mix(in srgb, ${dt('rating.icon.active.color')}, transparent 92%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${dt('rating.icon.active.color')}, transparent 92%); 
}

.p-rating-option.p-focus-visible {
    background: color-mix(in srgb, ${dt('rating.icon.active.color')}, transparent 84%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${dt('rating.icon.active.color')}, transparent 84%); 
}
`
};
