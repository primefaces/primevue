export default {
    css: `
.p-accordion-header-link {
    cursor: pointer;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    text-decoration: none;
    padding: 1.125rem 1.125rem 1.125rem 1.125rem;
    color: var(--p-dark-surface-400, var(--p-surface-500));
    background: var(--p-dark-surface-900, var(--p-surface-0));
    font-weight: 600;
    border-radius: var(--p-border-radius);
    transition: color 0.2s, outline-color 0.2s;
    outline-color: transparent;
}

.p-accordion-header-text {
    line-height: 1;
}

.p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: -2px;
}
.p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
    color: var(--p-dark-surface-0, var(--p-surface-700));
}
.p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
    color:  var(--p-dark-surface-0, var(--p-surface-700));
}

.p-accordion-toggle-icon {
    transform: rotate(90deg);
}

.p-accordion-header.p-highlight .p-accordion-toggle-icon {
    transform: rotate(-180deg);
}

.p-accordion-content {
    padding: 0 1.125rem 1.125rem 1.125rem;
    background:  var(--p-dark-surface-900, var(--p-surface-0));
    color:  var(--p-dark-surface-0, var(--p-surface-700));
}

.p-accordion-tab {
    border-bottom: 1px solid  var(--p-dark-surface-700, var(--p-surface-200));
}

.p-accordion-tab:last-child {
    border-bottom: 0 none
}
`
};
