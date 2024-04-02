export default {
    css: ({ dt }) => `
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${dt('togglebutton.color')};
    background: ${dt('togglebutton.background')};
    border: 1px solid ${dt('togglebutton.border.color')};
    padding: 0.5rem 1rem;
    font-size: 1rem;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
    gap: 0.5rem;
    font-weight: 500;
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    position: absolute;
    left: 0.25rem;
    top: 0.25rem;
    width: calc(100% - 0.5rem);
    height: calc(100% - 0.5rem);
    border-radius: ${dt('rounded.sm')};
}

.p-togglebutton.p-highlight::before {
    background: ${dt('togglebutton.checked.background')};
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
}

.p-togglebutton:not(:disabled):not(.p-highlight):hover {
    color: ${dt('togglebutton.hover.color')};
}

.p-togglebutton.p-highlight {
    color: ${dt('togglebutton.checked.color')};
}

.p-togglebutton:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-togglebutton.p-invalid {
    border-color: ${dt('togglebutton.invalid.border.color')};
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: ${dt('togglebutton.disabled.background')};
    border-color: ${dt('togglebutton.disabled.border.color')};
    color: ${dt('togglebutton.disabled.color')};
}

.p-togglebutton-icon {
    color: ${dt('togglebutton.icon.color')};
}

.p-togglebutton:not(:disabled):not(.p-highlight):hover .p-togglebutton-icon {
    color: ${dt('togglebutton.icon.hover.color')};
}

.p-togglebutton.p-highlight .p-togglebutton-icon {
    color: ${dt('togglebutton.icon.checked.color')};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${dt('togglebutton.icon.disabled.color')};
}
`
};
