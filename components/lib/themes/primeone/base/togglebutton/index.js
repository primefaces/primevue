export default {
    css: ({ dt }) => `
.p-togglebutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    border: 1px solid transparent;
    background: ${dt('togglebutton.background')};
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
    position: relative;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-togglebutton-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${dt('rounded.base')};;
}

.p-togglebutton .p-button {
    flex: 1 1 auto;
    background: transparent;
    border: 0 none;
    color: ${dt('togglebutton.item.color')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
    padding: 0.5rem 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${dt('rounded.base')};
    gap: 0.5rem;
    position: relative;
}

.p-togglebutton .p-button::before {
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

.p-togglebutton .p-button .p-button-label,
.p-togglebutton .p-button .p-button-icon {
    position: relative;
    transition: none;
}

.p-togglebutton .p-button .p-button-icon-left,
.p-togglebutton .p-button .p-button-icon-right {
    color: ${dt('togglebutton.item.icon.color')};
}

.p-togglebutton:not(.p-disabled):has(.p-togglebutton-input:hover):not(.p-highlight) .p-button {
    color: ${dt('togglebutton.item.hover.color')};
}

.p-togglebutton:not(.p-disabled):has(.p-togglebutton-input:hover):not(.p-highlight) .p-button .p-button-icon-left,
.p-togglebutton:not(.p-disabled):has(.p-togglebutton-input:hover):not(.p-highlight) .p-button .p-button-icon-right {
    color: ${dt('togglebutton.item.icon.hover.color')};
}

.p-togglebutton.p-highlight .p-button {
    color: ${dt('togglebutton.item.checked.color')};
}

.p-togglebutton.p-highlight .p-button::before {
    background: ${dt('togglebutton.item.checked.background')};
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
}

.p-togglebutton.p-highlight .p-button .p-button-icon-left,
.p-togglebutton.p-highlight .p-button .p-button-icon-right {
    color: ${dt('togglebutton.item.icon.checked.color')};
}

.p-togglebutton:not(.p-disabled):has(.p-togglebutton-input:focus-visible) {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-togglebutton.p-invalid {
    border-color: ${dt('togglebutton.invalid.border.color')};
}

.p-togglebutton.p-disabled {
    opacity: 1;
    background: ${dt('togglebutton.disabled.background')};
}

.p-togglebutton.p-disabled .p-button {
    color: ${dt('togglebutton.item.disabled.color')};
}

.p-togglebutton.p-disabled .p-button .p-button-icon {
    color: ${dt('togglebutton.item.icon.disabled.color')};
}
`
};
