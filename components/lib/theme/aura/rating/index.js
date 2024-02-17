export default {
    variables: {
        colorScheme: {
            light: {
                icon: {
                    color: '{surface.500}',
                    colorHover: '{primary.color}',
                    colorActive: '{primary.color}'
                }
            },
            dark: {
                icon: {
                    color: '{surface.400}',
                    colorHover: '{primary.color}',
                    colorActive: '{primary.color}'
                }
            }
        }
    },
    css: `
.p-rating {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.p-rating-item {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    outline-color: transparent;
    border-radius: 50%;
    cursor: pointer;
}

.p-rating-item.p-focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-rating-icon {
    color: var(--p-rating-icon-color);
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), outline-color var(--p-transition-duration);
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon {
    color: var(--p-rating-icon-color-hover);
}

.p-rating-item-active .p-rating-icon {
    color: var(--p-rating-icon-color-active);
}
`
};
