export default {
    css: ({ dt }) => `
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
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-rating-icon {
    color: var(--p-rating-icon-color);
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
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
