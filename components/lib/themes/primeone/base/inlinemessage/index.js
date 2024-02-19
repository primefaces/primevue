export default {
    css: `
.p-inline-message {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.75rem;
    margin: 0;
    border-radius: var(--p-rounded-base);
}

.p-inline-message-text {
    font-weight: 500;
}

.p-inline-message-icon {
    flex-shrink: 0;
    margin-right: 0.5rem;
}

.p-inline-message-icon-only .p-inline-message-text {
    visibility: hidden;
    width: 0;
}

.p-fluid .p-inline-message {
    display: flex;
}

.p-inline-message-info {
    background: var(--p-inlinemessage-info-background);
    border: 1px solid var(--p-inlinemessage-info-border-color);
    color: var(--p-inlinemessage-info-text-color);
    box-shadow: var(--p-inlinemessage-info-box-shadow);
}
.p-inline-message-info .p-inline-message-icon {
    color: var(--p-inlinemessage-info-text-color);
}

.p-inline-message-success {
    background: var(--p-inlinemessage-success-background);
    border: 1px solid var(--p-inlinemessage-success-border-color);
    color: var(--p-inlinemessage-success-text-color);
    box-shadow: var(--p-inlinemessage-success-box-shadow);
}
.p-inline-message-success .p-inline-message-icon {
    color: var(--p-inlinemessage-success-text-color);
}

.p-inline-message-warn {
    background: var(--p-inlinemessage-warn-background);
    border: 1px solid var(--p-inlinemessage-warn-border-color);
    color: var(--p-inlinemessage-warn-text-color);
    box-shadow: var(--p-inlinemessage-warn-box-shadow);
}
.p-inline-message-warn .p-inline-message-icon {
    color: var(--p-inlinemessage-warn-text-color);
}

.p-inline-message-error {
    background: var(--p-inlinemessage-error-background);
    border: 1px solid var(--p-inlinemessage-error-border-color);
    color: var(--p-inlinemessage-error-text-color);
    box-shadow: var(--p-inlinemessage-error-box-shadow);
}
.p-inline-message-error .p-inline-message-icon {
    color: var(--p-inlinemessage-error-text-color);
}

.p-inline-message-secondary {
    background: var(--p-inlinemessage-secondary-background);
    border: 1px solid var(--p-inlinemessage-secondary-border-color);
    color: var(--p-inlinemessage-secondary-text-color);
    box-shadow: var(--p-inlinemessage-secondary-box-shadow);
}
.p-inline-message-secondary .p-inline-message-icon {
    color: var(--p-inlinemessage-secondary-text-color);
}

.p-inline-message-contrast {
    background: var(--p-inlinemessage-contrast-background);
    border: 1px solid var(--p-inlinemessage-contrast-border-color);
    color: var(--p-inlinemessage-contrast-text-color);
    box-shadow: var(--p-inlinemessage-contrast-box-shadow);
}
.p-inline-message-contrast .p-inline-message-icon {
    color: var(--p-inlinemessage-contrast-text-color);
}

.p-inline-message-icon-only .p-inline-message-icon {
    margin-right: 0;
}
`
};
