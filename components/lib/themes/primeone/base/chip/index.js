export default {
    css: ({ dt }) => `
.p-chip {
    display: inline-flex;
    align-items: center;
    background-color: var(--p-chip-background);
    color: var(--p-chip-text-color);
    border-radius: 16px;
    padding: 0.25rem 0.75rem;
}

.p-chip:has(.p-chip-remove-icon) {
    padding-right: 0.5rem;
  }

.p-chip-text {
    line-height: 1.5;
}

.p-chip-icon {
    line-height: 1.5;
    margin-right: 0.5rem;
}

.p-chip-remove-icon {
    line-height: 1.5;
    cursor: pointer;
    margin-left: 0.375rem;
    border-radius: 6px;
    transition: outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-chip img {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    margin-left: -0.5rem;
    margin-right: 0.5rem;
}

.p-chip-remove-icon:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}
    `
};
