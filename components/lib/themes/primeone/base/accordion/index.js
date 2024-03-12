export default {
    css: ({ dt }) => `
.p-accordion-header-link {
    cursor: pointer;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    text-decoration: none;
    padding: 1.125rem 1.125rem 1.125rem 1.125rem;
    color: ${dt('accordion.header.color')};
    background: ${dt('accordion.header.background')};
    font-weight: 600;
    border-radius: ${dt('rounded.base')};
    transition: color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-accordion-header-text {
    line-height: 1;
}

.p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: -2px;
}

.p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
    color: ${dt('accordion.header.hover.color')}
}

.p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
    color: ${dt('accordion.header.active.color')}
}

.p-accordion-toggle-icon {
    transform: rotate(90deg);
}

.p-accordion-header.p-highlight .p-accordion-toggle-icon {
    transform: rotate(-180deg);
}

.p-accordion-content {
    padding: 0 1.125rem 1.125rem 1.125rem;
    background: color: ${dt('accordion.content.background')}
    color: ${dt('accordion.content.color')}
}

.p-accordion-tab {
    border-bottom: 1px solid ${dt('accordion.content.border.color')};
}

.p-accordion-tab:last-child {
    border-bottom: 0 none
}
`
};
