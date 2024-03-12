export default {
    css: ({ dt }) => `
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: var(--p-checkbox-width);
    height: var(--p-checkbox-height);
}

.p-checkbox-input {
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
    border-radius: var(--p-checkbox-border-radius);
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--p-rounded-sm);
    border: 1px solid var(--p-checkbox-border-color);
    background:  var(--p-checkbox-background);
    width: var(--p-checkbox-width);
    height: var(--p-checkbox-height);
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
    box-shadow: var(--p-checkbox-box-shadow);
}

.p-checkbox-icon {
    transition-duration: ${dt('transition.duration')};
    color: var(--p-checkbox-icon-color);
    font-size: var(--p-checkbox-icon-size);
    width: var(--p-checkbox-icon-size);
    height: var(--p-checkbox-icon-size);
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: var(--p-checkbox-border-color-hover);
}

.p-checkbox.p-highlight .p-checkbox-box {
    border-color: var(--p-checkbox-border-color-checked);
    background: var(--p-checkbox-background-checked);
}

.p-checkbox.p-highlight .p-checkbox-box .p-checkbox-icon {
    color: var(--p-checkbox-icon-color-checked);
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover).p-highlight .p-checkbox-box {
    border-color: var(--p-checkbox-border-color-checked-hover);
    background: var(--p-checkbox-background-checked-hover)
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover).p-highlight .p-checkbox-box .p-checkbox-icon {
    color: var(--p-checkbox-icon-color-checked-hover);
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-checkbox.p-invalid > .p-checkbox-box {
    border-color: var(--p-checkbox-border-color-invalid);
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: var(--p-checkbox-background-filled);
}

.p-checkbox.p-variant-filled.p-highlight .p-checkbox-box {
    background: var(--p-checkbox-background-checked);
}

.p-checkbox.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover).p-highlight .p-checkbox-box {
    background: var(--p-checkbox-background-checked-hover);
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: var(--p-checkbox-background-disabled);
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: var(--p-checkbox-icon-color-disabled);
}
`
};
