export default {
    css: `
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: var(--p-radiobutton-width);
    height: var(--p-radiobutton-height);
}

.p-radiobutton-input {
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
    border-radius: 50%;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid var(--p-radiobutton-border-color);
    background:  var(--p-radiobutton-background);
    width: var(--p-radiobutton-width);
    height: var(--p-radiobutton-height);
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
    box-shadow: var(--p-radiobutton-box-shadow);
}

.p-radiobutton-icon {
    transition-duration: var(--p-transition-duration);
    background: transparent;
    font-size: var(--p-radiobutton-icon-size);
    width: var(--p-radiobutton-icon-size);
    height: var(--p-radiobutton-icon-size);
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: var(--p-radiobutton-border-color-hover);
}

.p-radiobutton.p-highlight .p-radiobutton-box {
    border-color: var(--p-radiobutton-border-color-checked);
    background: var(--p-radiobutton-background-checked);
}

.p-radiobutton.p-highlight .p-radiobutton-box .p-radiobutton-icon {
    background: var(--p-radiobutton-icon-color-checked);
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-highlight .p-radiobutton-box {
    border-color: var(--p-radiobutton-border-color-checked-hover);
    background: var(--p-radiobutton-background-checked-hover)
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-highlight .p-radiobutton-box .p-radiobutton-icon {
    background: var(--p-radiobutton-icon-color-checked-hover);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-radiobutton.p-invalid > .p-radiobutton-box {
    border-color: var(--p-radiobutton-border-color-invalid);
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: var(--p-radiobutton-background-filled);
}

.p-radiobutton.p-variant-filled.p-highlight .p-radiobutton-box {
    background: var(--p-radiobutton-background-checked);
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-highlight .p-radiobutton-box {
    background: var(--p-radiobutton-background-checked-hover);
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: var(--p-radiobutton-background-disabled);
}

.p-radiobutton.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    color: var(--p-radiobutton-icon-color-disabled);
}
`
};
