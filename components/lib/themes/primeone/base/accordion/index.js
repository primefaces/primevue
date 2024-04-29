export default {
    css: ({ dt }) => `
.p-accordionpanel {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${dt('accordion.content.border.color')};
}

.p-accordionpanel:last-child {
    border-bottom: 0 none;
}

.p-accordionheader {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.125rem 1.125rem 1.125rem 1.125rem;
    color: ${dt('accordion.header.color')};
    background: ${dt('accordion.header.background')};
    font-weight: 600;
    border-radius: ${dt('rounded.base')};
    transition: color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: -2px;
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled):hover > .p-accordionheader {
    color: ${dt('accordion.header.hover.color')}
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
    color: ${dt('accordion.header.active.color')}
}

.p-accordioncontent-content {
    padding: 0 1.125rem 1.125rem 1.125rem;
    background: color: ${dt('accordion.content.background')}
    color: ${dt('accordion.content.color')}
}
`
};
