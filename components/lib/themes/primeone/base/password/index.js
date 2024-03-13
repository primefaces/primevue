export default {
    css: ({ dt }) => `
.p-password {
    display: inline-flex;
    position: relative;
}

.p-password .p-password-panel {
    min-width: 100%;
}

.p-password-meter {
    height: 10px;
    margin-bottom: 0.75rem;
    background: ${dt('password.meter.border.color')};
    border-radius: ${dt('rounded.base')};
}

.p-password-strength {
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
    border-radius: ${dt('rounded.base')};
}

.p-password-strength.weak {
    background: ${dt('password.weak.background')};
}

.p-password-strength.medium {
    background: ${dt('password.medium.background')};
}

.p-password-strength.strong {
    background: ${dt('password.strong.background')};
}

.p-fluid .p-password {
    display: flex;
}

.p-password-input::-ms-reveal,
.p-password-input::-ms-clear {
    display: none;
}

.p-password-panel {
    padding: 0.75rem;
    background: ${dt('password.overlay.background')};
    color: ${dt('password.overlay.color')};
    border: 1px solid ${dt('password.overlay.border.color')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    border-radius: ${dt('rounded.base')};
}

.p-password > svg:last-of-type,
.p-password > i:last-of-type {
    right: 0.75rem;
    color: ${dt('password.icon.color')};
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    width: 1rem;
    height: 1rem;
}

.p-password:has(svg,i) .p-password-input {
    padding-right: 2.5rem;
}
`
};
