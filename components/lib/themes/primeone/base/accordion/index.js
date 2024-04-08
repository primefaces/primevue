export default {
    css: ({ dt }) => `
.p-accordion-panel-header-content {
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

.p-accordion-panel-header-text {
    line-height: 1;
}

.p-accordion-panel-header:not(.p-disabled) .p-accordion-panel-header-content:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: -2px;
}

.p-accordion-panel-header:not(.p-accordion-panel-header-active):not(.p-disabled):hover .p-accordion-panel-header-content {
    color: ${dt('accordion.header.hover.color')}
}

.p-accordion-panel-header:not(.p-disabled).p-accordion-panel-header-active .p-accordion-panel-header-content {
    color: ${dt('accordion.header.active.color')}
}

.p-accordion-panel-toggle-icon {
    transform: rotate(90deg);
}

.p-accordion-panel-header-active .p-accordion-panel-toggle-icon {
    transform: rotate(-180deg);
}

.p-accordion-panel-content {
    padding: 0 1.125rem 1.125rem 1.125rem;
    background: color: ${dt('accordion.content.background')}
    color: ${dt('accordion.content.color')}
}

.p-accordion-panel {
    border-bottom: 1px solid ${dt('accordion.content.border.color')};
}

.p-accordion-panel:last-child {
    border-bottom: 0 none
}
`
};
